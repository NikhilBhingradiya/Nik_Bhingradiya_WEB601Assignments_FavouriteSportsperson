import { Component } from '@angular/core';
import  {Content} from "../helper-files/content-interface";

@Component({
  selector: 'app-contentlist',
  templateUrl: './contentlist.component.html',
  styleUrls: ['./contentlist.component.scss']
})
export class ContentlistComponent {

  public isAvailable = false;
  public searchTerm = '';

  contentlist: Content[] = [

  ];

  constructor() {
    this.isAvailable = false;
    this.searchTerm = '';
  }

  personInput(event: any) {
    this.searchTerm = event.target.value;
  }

  searchContent() {
    console.log(this.searchTerm);
    this.contentlist.forEach((content) => {
      if (content.title.includes(this.searchTerm)) {
        this.isAvailable = true;
      } else if (this.searchTerm === '') {
        this.isAvailable = false;
      } else {
        this.isAvailable = false;
      }
    });
  }
}
