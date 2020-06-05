import { DataService } from './../../Services/data.service';
import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

import { CanvasNode } from '../../Models/CanvasNode';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {


  @Output() SaveContent: EventEmitter<void>;

  @Output() MenuOpened: EventEmitter<void>;


  // Gets the file input element
  @ViewChild('FileInput') inputRef: ElementRef<HTMLInputElement>;

  constructor(private dataService: DataService) {
    this.SaveContent = new EventEmitter();
    this.MenuOpened = new EventEmitter();
   }

   public save(): void {
     this.SaveContent.emit();
   }

   public askForUpload(): void {
    this.inputRef.nativeElement.click();
   }

   public openMenu(): void {
     this.MenuOpened.emit();
   }


   // extract file from input and pass it to the service
   public uploadCSV(inputEvent: InputEvent): void {
     const file = inputEvent.target['files'][0];

     
     this.dataService.createNodesFromFile(file);

     // set the value of the input null enable uploading the same file again
     inputEvent.target['value'] = null;
   }

   public exportToCsv(): void {
     this.dataService.exportNodes();
   }
}
