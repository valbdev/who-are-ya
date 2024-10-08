import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { Player } from 'src/app/model/player'
import { DialogService } from 'src/app/services/dialog.service'
import { PlayerService } from 'src/app/services/player.service'

@Component({
  selector: 'app-who-are-ya',
  templateUrl: './who-are-ya.component.html',
  styleUrls: ['./who-are-ya.component.css']
})
export class WhoAreYaComponent implements OnInit{

  isStarted: boolean = false
  playerToGuess: Player = {}
  players: Player[] = []
  selectedPlayer: Player = {}
  pastPlayers: Array<Player> = new Array<Player>()

  playerControl = new FormControl('')

  remainingTries: number = 8

  constructor(private playerService: PlayerService,
    private dialogService: DialogService){}

  ngOnInit(): void {}

  /**
   * Gets a random player from the database.
   * Initializes the player to guess.
   */
  startGame(): void {
    this.playerControl.reset()
    this.remainingTries = 8
    this.isStarted = true
    this.playerService.getRandomPlayer().subscribe(value => {
      this.playerToGuess = value
      console.log(value)
    })
    this.playerControl.valueChanges.subscribe(value => {
      this.retrievePlayersFromInput(value);
    })
  }

  /**
   * Gets the list of players whose name match the search.
   * @param name The name to search up.
   */
  retrievePlayersFromInput(name: string|null): void {
    if(name) {
      this.playerService.getPlayersFromName(name).subscribe(
        (data) => {
          this.players = data;
      });
    }
  }

  /**
   * Is triggered every time a player is selected. Separates three cases:
   * the player is the one to guess;
   * the player is not the one to guess and there are remaining tries;
   * the player is not the one to guess and threre are no remaining tries.
   * @param player The player selected.
   */
  onSelectPlayer(player: Player): void {
    this.playerControl.reset()
    this.pastPlayers.push(player)
    this.selectedPlayer = player
    if(this.remainingTries > 0) {
      this.remainingTries=this.remainingTries-1
      console.log(this.remainingTries)
    }
    if(player.pid === this.playerToGuess.pid) {
      this.stopGame()
      this.youWon(this.playerToGuess)
    }
    if(this.remainingTries === 0){
      this.stopGame()
      this.youLost(this.playerToGuess)
    }
  }

  /**
   * Is triggered every time a game ends.
   * Restarts booleans and memory.
   */
  stopGame(): void {
    this.playerControl.reset()
    this.isStarted = false
    this.pastPlayers = []
  }

  youLost(playerToGuess: Player): void {
    this.dialogService.openDialog("You lost !", `The player to guess was :`, playerToGuess, false)
  }

  youWon(playerToGuess: Player): void {
    this.dialogService.openDialog("You won !", `Congratulations !!`, playerToGuess, true)
  }

}
