import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import * as Papa from 'papaparse';
import { CanvasNode } from '../../Models/CanvasNode';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {


  @Output() SaveContent: EventEmitter<void>;
  @Output() DataUploaded: EventEmitter<CanvasNode[]>

  @ViewChild('FileInput') inputRef: ElementRef<HTMLInputElement>;

  constructor() {
    this.SaveContent = new EventEmitter();
    this.DataUploaded = new EventEmitter<CanvasNode[]>();
   }

   public save(): void {
     this.SaveContent.emit();
   }

   public askForUpload(): void {
    this.inputRef.nativeElement.click();
   }


   public uploadCSV(inputEvent: InputEvent): void {
     const file = inputEvent.target['files'][0];
     Papa.parse(file, {
       complete: (x) => {
         this.DataUploaded.emit(this._mapDataToObject(x.data));
       }
     });

     inputEvent.target['value'] = null;
    console.log(inputEvent);
   }

   private _mapDataToObject(data: any[][]): CanvasNode[] {

    const nodeData: CanvasNode[]  = []

    const keys = data[0] as string[];

    // remove the header row
    data.splice(0 , 1);

    data.forEach((objArr: any[])  => {

      const obj: CanvasNode = new CanvasNode();

      keys.forEach((key, index: number) => {

        // typings
        if (key === 'Duration') {
          obj[key] = Number(objArr[index]);
        } else if (key === 'Successors' ||key === 'Predecessors') {
          if (objArr[index] === '-') {
            obj[key] = [];
          } else {
            obj[key] = objArr[index]?.split(';') ?? [];
          }
        } else {
          obj[key] = objArr[index];
        }
      });





      nodeData.push(obj);
    })

     console.log(nodeData);

    return nodeData;
   }

}
