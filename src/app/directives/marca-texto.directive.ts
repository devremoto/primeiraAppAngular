import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMarcaTexto]'
})
export class MarcaTextoDirective implements OnInit {

  @Input() corDeFundo: string = 'yellow';
  @Input() corDoTexto: string = 'white';
  constructor(private _elemento: ElementRef) {

  }

  public ngOnInit() {
    this.mudarFundo();
  }

  private mudarFundo(cor: string = 'yellow') {
    this._elemento.nativeElement.style.backgroundColor = this.corDeFundo || cor;
    this._elemento.nativeElement.style.color = this.corDoTexto;
    this._elemento.nativeElement.style.fontWeight = 'bolder';
  }

}
