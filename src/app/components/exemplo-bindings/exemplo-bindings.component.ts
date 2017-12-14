import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo-bindings',
  templateUrl: './exemplo-bindings.component.html',
  styleUrls: ['./exemplo-bindings.component.css']
})
export class ExemploBindingsComponent implements OnInit {
  model = {
    nome: "Adilson de Almeida Pedro",
    email: "adilson@almeidapedro.com.br",
    telefone: "+55 11 9 9353-6732",
    site: "http://adilson.almeidapedro.com.br",
    skype:"fazsite"
  }

  constructor() { }

  ngOnInit() {
  }

}
