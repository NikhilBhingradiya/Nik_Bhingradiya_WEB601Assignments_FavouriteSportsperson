import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';


@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})


  export class ContentCardComponent {

  @Input() content: Content | undefined;

  constructor() {
    console.log(this.content);
  }

  logIdTitle(contentInfoToLog:Content):void{
    console.log(`ID: ${contentInfoToLog.id}`)
    console.log(`TITLE: ${contentInfoToLog.title}`)
  }
  onPress() {
    console.log('button pressed');
    console.log(this.content?.id, this.content?.title);
  }
  
}
