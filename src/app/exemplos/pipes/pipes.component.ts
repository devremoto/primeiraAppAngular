import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  
  data:Date = new Date();
  moeda:number = 123456.78;

  constructor() { }

  ngOnInit() {
  }

}

