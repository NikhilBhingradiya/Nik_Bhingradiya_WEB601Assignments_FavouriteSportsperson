import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.css'],
})
export class ModifyContentComponentComponent {
  @Output() updatedContentAdded = new EventEmitter<Content>();

  @Input() currentContent: Content | undefined;

 
  @Input() sportperson: Content[] = [];
  updatedContent: Content = {
    id: 0,
    title: '',
    name: '',
    imgURL: '',
    description: '',
    role: '',
    gender : '',
  };

  setCurrentSportPerson(id: number) {
    console.log('click');
    const sportperson = this.sportperson.find((sportperson) => sportperson.id === id);
    if (sportperson) {
      this.currentContent = sportperson;
    }
  }

  addContent() {
    const clonedContent = Object.assign({}, this.updatedContent);
    clonedContent.id = Math.floor(Math.random() * 1000);
    this.updatedContentAdded.emit(clonedContent);
    this.updatedContent = {
      id: 0,
      title: '',
      name: '',
      imgURL: '',
      description: '',
      role: '',
      gender : '',
    };
  
  }
}