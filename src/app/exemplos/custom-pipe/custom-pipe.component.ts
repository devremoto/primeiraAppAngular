import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {

  texto:string = `Este é um texto com quebra de linhas
  linha 1
  linha 2
  linha 3`;
  
  constructor() { }

  ngOnInit() {
  }

}
