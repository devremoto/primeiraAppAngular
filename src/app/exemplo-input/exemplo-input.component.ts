import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-exemplo-input',
  templateUrl: './exemplo-input.component.html',
  styleUrls: ['./exemplo-input.component.css']
})
export class ExemploInputComponent implements OnInit {

  constructor() { }

  @Input()
  public nome:string;

  @Input('idade')
  public valorIdade:string;

  ngOnInit() {
  }

}
