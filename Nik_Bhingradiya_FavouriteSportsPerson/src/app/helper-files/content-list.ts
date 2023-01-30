import { Content } from "./content-interface";
export class ContentList {
  SportPersonListArry: Array<Content>;

  constructor ()
  {
    this.SportPersonListArry=[];
  }

  SportPersonConst(){
    return this.SportPersonListArry;
  }

  AddSportPersonFunction(newname:Content){
    this.SportPersonListArry.push(newname);
  }

  SportPersonListCount(){
    return this.SportPersonListArry.length;
  }

  SportPersonInputFunction(id:number){
    const name= this.SportPersonListArry[id];
    return "<h1> SportPersonListDisplay </h1>" + name.title;
  }
}
