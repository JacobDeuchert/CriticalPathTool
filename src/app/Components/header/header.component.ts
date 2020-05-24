import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {


  @Output() SaveContent: EventEmitter<void>;

  constructor() {
    this.SaveContent = new EventEmitter();
   }

   public save(): void {
     this.SaveContent.emit();
   }
 

}
