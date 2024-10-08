import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RulesDialogData } from 'src/app/model/dialogData';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent {

  constructor(public dialogRef: MatDialogRef<RulesComponent>, @Inject(MAT_DIALOG_DATA) public data: RulesDialogData) {}

  onClose(): void {
    this.dialogRef.close();
  }

}
