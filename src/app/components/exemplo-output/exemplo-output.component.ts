import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-exemplo-output',
  templateUrl: './exemplo-output.component.html',
  styleUrls: ['./exemplo-output.component.css']
})
export class ExemploOutputComponent implements OnInit {

  @Output()
  contadorAlterado:EventEmitter<number> = new EventEmitter<number>();

  contador: number = 1;
  
  constructor() { }

  incrementa(){
    this.contador++;
    this.emiteEvento(this.contador);
  }

  decrementa(){   
    this.contador--;
    this.emiteEvento(this.contador);
  }

  emiteEvento(evento){
    this.contadorAlterado.emit(evento);
  }

  ngOnInit() {
  }

}
