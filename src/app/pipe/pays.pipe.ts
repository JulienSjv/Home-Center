import { Pipe, PipeTransform } from '@angular/core';
import {Pays} from '../util/pays';
@Pipe({
  name: 'pays'
})
export class PaysPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return Pays.LIST_PAYS[value];

  }

}
