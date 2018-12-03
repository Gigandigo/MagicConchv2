import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qaconch',
  templateUrl: './qaconch.component.html',
  styleUrls: ['./qaconch.component.css']
})
export class QAconchComponent implements OnInit {
  textinput = "";
  answers = ["Maybe some day",
  "Nothing.",
  "Neither.",
  "I don't think so.",
  "Yes.",
  "Try asking again.",
  "No."];
answer = "";
  constructor() { }
  
  ngOnInit() {
    console.log(!(this.answer.length > 0))
  }
  conchalert(){
    if(this.textinput.length > 0){
      this.answer = this.answers[Math.floor(Math.random() * this.answers.length)]
    }
    // this.answer = this.answers[Math.floor(Math.random() * this.answers.length)];
    console.log(this.textinput)
  }
  conchreset(){
   this.answer = "";
   this.textinput = ""; 
  
  }
}
