import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../components/dialog/dialog.component';
import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { Player } from '../model/player';
import { RulesComponent } from '../components/rules/rules.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) {}

  /**
   * Opens the dialog at the end of a game.
   * @param title Title of the dialog.
   * @param content Content of the dialog.
   */
  openDialog(title: string, content: string, player: Player, win: boolean): void {
    const config: MatDialogConfig = {
      data: {
        title: title,
        content: content,
        player: player,
        win: win
      }
    }
    this.dialog.open(DialogComponent, config)
  }

  /**
   * Opens the rules dialog.
   * @param title Title of the dialog.
   * @param content_1 First paragraph.
   * @param content_2 Second paragraph.
   * @param content_3 Third paragraph.
   * @param content_4 Fourth paragraph.
   * @param player Example player to explain the rules.
   */
  openRulesDialog(title: string, content_1: string, content_2: string, content_3: string, content_4: string, player: Player): void {
    const config: MatDialogConfig = {
      data: {
        title: title,
        content_1: content_1,
        content_2: content_2,
        content_3: content_3,
        content_4: content_4,
        player: player
      }
    }
    this.dialog.open(RulesComponent, config)
  }
}
