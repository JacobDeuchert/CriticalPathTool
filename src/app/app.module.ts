import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input'
import {MatMenuModule} from '@angular/material/menu'

import { AppComponent } from './app.component';
import { CanvasComponent } from './Components/canvas/canvas.component';
import { CanvasNodeComponent } from './Components/canvas-node/canvas-node.component';
import { HeaderComponent } from './Components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    CanvasNodeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    DragDropModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule
  ],
  providers: [],          
  bootstrap: [AppComponent]
})
export class AppModule { }
