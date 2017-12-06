import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nl2br'
})
export class Nl2brPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value)
      return value.replace(/\n/gi, '<br />\n');
    return null;
  }

}
