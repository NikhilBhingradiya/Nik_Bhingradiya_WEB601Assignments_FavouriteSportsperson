import {Component, Input, OnInit} from '@angular/core';
import {Content} from '../helper-files/content-interface';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit{

  contentList: Content[]=[
    {
      id:1,
      title:'Sportperson-1',
      description:'World best Betsmen',
      name:'Yuvraj',
      role:'All-rounder',
      gender:'male',
      imgURL:'https://i0.wp.com/godofindia.com/wp-content/uploads/2017/05/yuvraj-singh-25.jpg'
    },
    {
      id:2,
      title:'Sportperson-2',
      description:'World best Footballer',
      name:'Ronaldo',
      role:'Captain of portugal',
      gender:'male',
      imgURL:'https://tse3.mm.bing.net/th?id=OIP.8jCIt5zrxTm_0rzLg6Y7fQHaFf&pid=Api&P=0'

    },
    {
      id:3,
      title:'Sportperson-3',
      description:'\'World best Footballer',
      name:'Messi',
      role:'Captain of Argentina',
      gender:'male',
      imgURL:'https://tse2.mm.bing.net/th?id=OIP.chvg2SRxpkv_W_1CB85MRQHaEK&pid=Api&P=0'

    },
    {
      id:4,
      title:'Sportperson-4',
      description:'World best Betsmen',
      name:'Virat Kohli',
      role:'batsmen',
      gender:'male',
      imgURL:'https://tse2.mm.bing.net/th?id=OIP.Y764f40pToKMkRbPJ_nGLwHaF7&pid=Api&P=0'

    },
    {
      id:5,
      title:'Sportperson-5',
      description:'World best Bowler',
      name:'Ms Dhoni',
      role:'Wk-keeper',
      gender:'male',
      imgURL:'https://tse4.mm.bing.net/th?id=OIP.JAklCnAR2zxDK-LzEr3TOwHaKI&pid=Api&P=0'

    },
    {
      id:6,
      title:'Sportperson-6',
      description:'World best Betsmen',
      name:'Sachine tendulkar',
      role:'All-rounder',
      gender:'male',
      imgURL:'https://tse4.mm.bing.net/th?id=OIP.XA8mPULRKYGUjLkKOWoPcwHaFj&pid=Api&P=0'

    },
  ];
  constructor() {
  }
  ngOnInit(){

  }

}
