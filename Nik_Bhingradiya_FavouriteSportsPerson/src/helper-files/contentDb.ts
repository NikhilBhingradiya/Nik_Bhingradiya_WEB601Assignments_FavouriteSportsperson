import { Content } from "./content-interface";

let contentListArr:Content[] = [];

const generateContent = (id:number,contentArr:(string)[])=>{
    return {
      id,
      title:contentArr[0],
      description:contentArr[1],
      creator:contentArr[2]
    }
}
export const contentList = {
    generateContent: ():Content[]=>{
        contentListArr.push({
           ...generateContent(
            1,['Yuvraj','World best Betsme','All-rounder']
            ),
            ...{imgURL:'https://i0.wp.com/godofindia.com/wp-content/uploads/2017/05/yuvraj-singh-25.jpg'},
            ...{type:'Sportperson-1'},
            ...{tags:['Batsmen','Most Popular Batsman','All-rounder']}
        });
        contentListArr.push({
            ...generateContent(
              2,['Ronaldo','World best Footballer', 'Footballer']
            ),
            ...{type:'Sportperson-2'},
            ...{imgURL:'https://tse3.mm.bing.net/th?id=OIP.8jCIt5zrxTm_0rzLg6Y7fQHaFf&pid=Api&P=0'}
        });
        contentListArr.push({
            ...generateContent(
              3,['Messi','Players in deep financial hardship, risk their lives to play a series of deadly Game','Hwang Dong-hyuk']
            ),
            ...{type:'Sportperson-2'}
        });
          contentListArr.push({
            ...generateContent(
              4,['virat Kohli','World best batsmen', 'cricketer']
            ),
            ...{type:'sport'},
            ...{imgURL:'data:image/jpeg;base64,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'},
            ...{tags:['sports','Most Popular batsmen','King','World best Male Crickter']}
          });
          contentListArr.push({
            ...generateContent(
              5,['Sportperson-5','World best Bowler','wk batsmen']
            )
          });
          contentListArr.push({
            ...generateContent(
              6,['Sportperson-6','World best Betsmen','Sachine tendulkar']
            )
          });
          contentListArr.push({
            ...generateContent(
              7,['Neymar','Great Footballer','Jr Neymar']
            )
          });
          contentListArr.push({
            ...generateContent(
              8,['Smriti Madhana','The Great femalre Batmnen in world','']
            )
          });
      return contentListArr;
    },
    contentListArr
}