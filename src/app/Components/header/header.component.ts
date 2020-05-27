import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {


  @Output() SaveContent: EventEmitter<void>;

  @ViewChild('FileInput') inputRef: ElementRef<HTMLInputElement>;

  constructor() {
    this.SaveContent = new EventEmitter();
   }

   public save(): void {
     this.SaveContent.emit();
   }

   public askForUpload(): void {
    this.inputRef.nativeElement.click();
   }


   public uploadCSV(inputEvent: InputEvent): void {


     var csv = Papa.unparse(data);
    console.log(inputEvent);


   }

}
