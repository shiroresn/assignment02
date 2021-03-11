import { Component, OnInit } from '@angular/core';

interface Person{
  initPosition : number,
  inTheGame : boolean,
  looserInRound : number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  rhyme:string="You’re out!"
  noOfPeople:number=5;

  peopleArray:Person[]=[];

  rounds:any[]=[];
  lengthOfWords;
  canDeclareWinnerFlag=false;

  ngOnInit(): void {
  }

  findPosition(){
    this.peopleArray=[];
    this.noOfPeople=+this.noOfPeople;
    this.lengthOfWords = this.rhyme.split(" ").length; 
    
    for(let i = 0;i<this.noOfPeople; i++)
    {
      this.peopleArray[i]={initPosition : i, inTheGame : true, looserInRound: undefined};
    }

    this.rounds=[];

    let roundIndex = 0;

    let pivot = -1;

    do{

      for(let i = 0 ;i<this.lengthOfWords;i++)
      {
        pivot++;
        if(pivot==this.peopleArray.length)
        {
          pivot=0;
        }
      }
      
      
      this.addDataForRound(roundIndex++,pivot);
      this.peopleArray.splice(pivot--,1);
      
    }while(this.peopleArray.length!=1);

    

  }

  addDataForRound(roundIndex,looserIndex){
    this.rounds[roundIndex]=[];
    this.peopleArray[looserIndex].looserInRound=roundIndex;
    this.peopleArray.forEach(person => {
      this.rounds[roundIndex].push(person)
    });
  }

}
