import { Component } from '@angular/core';
import { DialogService } from 'src/app/services/dialog.service';
import { Player } from 'src/app/model/player';
import { PlayerService } from 'src/app/services/player.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  examplePlayer: Player = {}

  constructor(private dialogService: DialogService,
    private playerService: PlayerService) {}

  /**
   * Retrieves the example player from the API
   * (to explain the rules of the game).
   */
  ngOnInit(): void {
    this.playerService.getPlayerFromId("6876815f").subscribe(p => {
      this.examplePlayer = p;
    })
  }

  /**
   * Opens the rules dialog to explain how to play.
   */
  openRules(): void{
    this.dialogService.openRulesDialog("How to play ?",
      "You have 8 chances to guess the football player from the Barclays WSL, \
      Arkema Première Ligue, Google Pixel Frauen Bundesliga, Liga F or Serie A Femminile.",
      "After each guess, feedback is revealed showing how close your guess is \
      to the mystery player in a number of categories.",
      "Here is an example guess :",
      "That means the mystery player is not Dutch, plays in the Arkema Première Ligue, at Lyon. \
      However, the player does not play both in the midfield and as a forward and was born before 1991.",
       this.examplePlayer)
  }
}
