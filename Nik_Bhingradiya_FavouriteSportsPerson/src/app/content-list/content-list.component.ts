import {Component, Input, OnInit} from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit{

  Contents=[
    {
      id:1,
      title:'Sportperson-1',
      description:'World best Betsmen',
      name:'Yuvraj',
      role:'All-rounder',
      gender:'male',
      imgURL:'https://angular.io/assets/images/logos/angular/angular.png'

    },
    {
      id:2,
      title:'Sportperson-2',
      description:'World best Footballer',
      name:'Ronaldo',
      role:'Captain of portugal',
      gender:'male',
      imgURL:'https://angular.io/assets/images/logos/angular/angular.png'

    },
    {
      id:3,
      title:'Sportperson-3',
      description:'\'World best Footballer',
      name:'Messi',
      role:'Captain of Argentina',
      gender:'male',
      imgURL:'https://angular.io/assets/images/logos/angular/angular.png'

    },
    {
      id:4,
      title:'Sportperson-4',
      description:'World best Betsmen',
      name:'Virat Kohli',
      role:'batsmen',
      gender:'male',
      imgURL:'https://angular.io/assets/images/logos/angular/angular.png'

    },
    {
      id:5,
      title:'Sportperson-5',
      description:'World best Bowler',
      name:'Bret lee',
      role:'Bowler',
      gender:'male',
      imgURL:'https://angular.io/assets/images/logos/angular/angular.png'

    },
    {
      id:6,
      title:'Sportperson-6',
      description:'World best Betsmen',
      name:'Sachine tendulkar',
      role:'All-rounder',
      gender:'male',
      imgURL:'https://angular.io/assets/images/logos/angular/angular.png'

    }
  ]
  constructor() {
  }
  ngOnInit(){

  }

}
