import { MarcaTextoDirective } from './marca-texto.directive';
import { ElementRef } from '@angular/core';

describe('MarcaTextoDirective', () => {
  it('should create an instance', () => {
    const directive = new MarcaTextoDirective(new ElementRef({}));
    expect(directive).toBeTruthy();
  });
});