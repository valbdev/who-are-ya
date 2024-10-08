import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from 'src/app/model/dialogData';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

export class DialogComponent {

  constructor(public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  /**
   * Triggered whenever the dialog is closed.
   */
  onClose(): void {
    this.dialogRef.close()

  }

  /**
   * @param win Boolean, true if the characteristic
   * corresponds to the mystery player.
   * @returns The CSS class corresponding to the button color.
   */
  winButtonColor(win: boolean): string {
    if(win) {
      return 'good-guess'
    } else {
      return 'neutral'
    }
  }

}
