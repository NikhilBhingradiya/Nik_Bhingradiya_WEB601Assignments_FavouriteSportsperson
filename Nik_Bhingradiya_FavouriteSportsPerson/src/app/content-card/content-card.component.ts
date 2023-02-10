import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {

  SportPersonListArry = new ContentList();

  ngOnInit() {

    const SportOne: Content = {
      id: 0,
      title: 'cricketer',
      name: 'Virat Kohli',
      description: 'Called king of Criket',
      role: 'Batsman',
      gender: 'male',



      imgURL: 'https://angular.io/assets/images/logos/angular/angular.png'

    }
    this.SportPersonListArry.AddSportPersonFunction(SportOne);

  }
}
