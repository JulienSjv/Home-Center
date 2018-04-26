import { Pipe, PipeTransform } from '@angular/core';
import { Constants } from '../util/constants';

@Pipe({
  name: 'frenchDays'
})
export class FrenchDaysPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return Constants.FRENCH_DAYS[value];
  }

}
