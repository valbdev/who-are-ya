import { Component, Input, OnInit } from '@angular/core'
import { Player } from 'src/app/model/player'

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit{

  @Input() selectedPlayer!: Player
  @Input() playerToGuess!: Player

  ngOnInit(): void {
    if(this.selectedPlayer.nation === "") {
      this.selectedPlayer.nation = "?"
    }
  }

  /**
   * The following methods are used to display at each guess
   * whether a guess is valid or not (by changing colors).
   */

  /**
   * @returns the name of the class depending on the squad id.
   */
  squadButtonColor(): string {
    if(this.playerToGuess.sid === this.selectedPlayer.sid) {
      return 'good-guess'
    } else {
      return 'neutral'
    }
  }

  /**
   * @returns the name of the class depending on the nation.
   */
  nationButtonColor(): string {
    if(this.playerToGuess.nation === this.selectedPlayer.nation) {
      return 'good-guess'
    } else {
      return 'neutral'
    }
  }

  /**
   * @returns the name of the class depending on the position of the player.
   */
  posButtonColor(): string {
    if(this.playerToGuess.pos === this.selectedPlayer.pos) {
      return 'good-guess'
    } else {
      return 'neutral'
    }
  }

  /**
   * @returns the name of the class depending on the year the player was born.
   */
  bornButtonColor(): string {
    if(this.playerToGuess.born === this.selectedPlayer.born) {
      return 'good-guess'
    } else {
      return 'neutral'
    }
  }

  /**
   * @returns the name of the class depending on the league the player is in.
   */
  leagueButtonColor(): string {
    if(this.playerToGuess.lid === this.selectedPlayer.lid) {
      return 'good-guess'
    } else {
      return 'neutral'
    }
  }

  /**
   * @returns an arrow symbol ;
   * directed upwards if the selected player's date of birth
   * is < to the player to guess' one, directered downwards if not.
   */
  arrowUpOrDown(): string {
    const bornGuess = this.playerToGuess.born ? this.playerToGuess.born : 0
    const bornSelected = this.selectedPlayer.born ? this.selectedPlayer.born : 0
    if(bornGuess === bornSelected) {
      return ""
    } else if(bornGuess < bornSelected) {
      return "↓"
    } else {
      return "↑"
    }
  }
}
