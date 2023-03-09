import { Component } from '@angular/core';
import  {Content} from "../helper-files/content-interface";
import {SportpersonService} from "../sportperson.service";

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


  personInput(event: any) {
    this.searchTerm = event.target.value;
  }
  constructor(private SportpersonService: SportpersonService) {
    this.isAvailable = false;
    this.searchTerm = '';
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
