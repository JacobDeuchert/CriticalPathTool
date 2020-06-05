import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-plan-dialog',
  templateUrl: './plan-dialog.component.html',
  styleUrls: ['./plan-dialog.component.scss']
})
export class PlanDialogComponent {


  public name: string;

  constructor(private matDialogRef: MatDialogRef<PlanDialogComponent>) {
    this.name = '';
   }


   public close(): void {
     this.matDialogRef.close();
   }

   public save(): void {
    this.matDialogRef.close(this.name);
   }

}
