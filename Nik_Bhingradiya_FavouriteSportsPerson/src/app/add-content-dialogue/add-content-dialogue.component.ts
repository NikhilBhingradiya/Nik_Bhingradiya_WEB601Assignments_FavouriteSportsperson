import { Component } from '@angular/core';

@Component({
  selector: 'app-add-content-dialogue',
  templateUrl: './add-content-dialogue.component.html',
  styleUrls: ['./add-content-dialogue.component.scss']
})
export class AddContentDialogueComponent {
  @ViewChild('titleInput', { static: true }) titleInput!: MatInput;
  @ViewChild('descriptionInput', { static: true }) descriptionInput!: MatInput;
  @ViewChild('imgURLInput', { static: true }) imgURLInput!: MatInput;
  @ViewChild('nameInput', { static: true }) nameInput!: MatInput;
  @ViewChild('roleInput', { static: true }) roleInput!: MatInput;
  contentType: any;
  constructor(public dialogRef: MatDialogRef<AddContentDialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  @Output() contentAdded = new EventEmitter<Content>();

  newContent: Content = {
    id: 0,
    title: '',
    name: '',
    imgURL: '',
    description: '',
    role: '',
    gender : '',
  };

  addContent() {
    const clonedContent = Object.assign({}, this.newContent);
    clonedContent.id = Math.floor(Math.random() * 1000);
    // clonedContent.tags = this.newContent.tags.split(',');
    this.contentAdded.emit(clonedContent);
    this.newContent = {
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
