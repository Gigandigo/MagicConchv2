import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qaconch',
  templateUrl: './qaconch.component.html',
  styleUrls: ['./qaconch.component.css']
})
export class QAconchComponent implements OnInit {
  answer = ["Maybe some day",
  "Nothing.",
  "Neither.",
  "I don't think so.",
  "Yes.",
  "Try asking again.",
  "No."];
  rand = this.answer[Math.floor(Math.random() * this.answer.length)];
  constructor() { }

  ngOnInit() {
console.log(this.answer);
  }

}
