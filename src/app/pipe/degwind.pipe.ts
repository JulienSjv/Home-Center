import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'degwind'
})
export class DegwindPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    var val = Math.floor((value / 22.5) + 0.5);
      var arr = ["Nord", "Nord Nord-Est", "Nord-Est", "Est Nord-Est", "Est", "Est Sud-Est", "Sud-Est", "Sud Sud-Est", "Sud", "Sud Sud-Ouest", "Sud-Ouest", "Ouest Sud-Ouest", "Ouest", "Ouest Nord-Ouest", "Nord-Ouest", "Nord Nord-Ouest"];
    return arr[(val % 16)];
  }

}
