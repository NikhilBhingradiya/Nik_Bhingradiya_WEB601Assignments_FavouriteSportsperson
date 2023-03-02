import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent {

  @Output() newContentAdd = new EventEmitter<Content>();
  newCreateContent: Content = {
    id: 0,
    title:"",
    name: "",
    imgURL :"",
    description:"" ,
    role:"",
    gender: ""
  
  };

  addCreateContent() {
    const clonedContent = Object.assign({}, this.newCreateContent);
    clonedContent.id = Math.floor(Math.random() * 1000);
    // clonedContent.tags = this.newContent.tags.split(',');
    this.newContentAdd.emit(clonedContent);
    this.newCreateContent = {
      id: 0,
      title:"",
      name: "",
      imgURL :"",
      description:"" ,
      role:"",
      gender: ""
    };
  }
}
