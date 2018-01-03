import { Pipe, PipeTransform } from "@angular/core";
import { Constants } from '../util/constants';

/**
 *
 */
@Pipe({ name: 'meteoicon' })
export class MeteoIcon implements PipeTransform {
    
    /**
     *
     * @param value
     * @returns {String}
     */
    transform(value: string): string {
        return Constants.LIST_ICON_METEO[value];
    }
}