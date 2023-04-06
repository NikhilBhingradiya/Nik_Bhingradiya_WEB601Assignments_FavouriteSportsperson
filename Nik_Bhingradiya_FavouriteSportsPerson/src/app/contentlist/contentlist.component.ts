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
  onContentAdded(newContent: Content) {
    this.SportpersonService.addSportPerson(newContent).subscribe((sportperson) => {
      this.sportperson.push(sportperson);
    });
  }

  udateContent(updatedContent: Content) {
    this.SportpersonService.updateSportPerson(updatedContent).subscribe((updatedSportPerson) => {
      const index = this.contentlist.findIndex(
        (sportperson) => sportperson.id === updatedSportPerson.id
      );
      this.sportperson[index] = updatedSportPerson;
    });

    searchContent() {
      console.log(this.searchTerm);
      this.sportperson.forEach((sportperson) => {
        if (sportperson.title.includes(this.searchTerm)) {
          this.isAvailable = true;
        } else if (this.searchTerm === '') {
          this.isAvailable = false;
        } else {
          this.isAvailable = false;
        }
      
      });
  }
}
}
