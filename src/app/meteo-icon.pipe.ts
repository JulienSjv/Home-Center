import { Pipe, PipeTransform } from "@angular/core";

/**
 *
 */
@Pipe({ name: 'meteoicon' })
export class MeteoIcon implements PipeTransform {
    
    listIcons = {
        '01d': 'assets/meteo/icons/clear.svg',
        '01n': 'assets/meteo/icons/clear.svg',
        '02d': 'assets/meteo/icons/few_clouds.svg',
        '02n': 'assets/meteo/icons/few_clouds.svg',
        '03d': 'assets/meteo/icons/clouds.svg',
        '03n': 'assets/meteo/icons/clouds.svg',
        '04d': 'assets/meteo/icons/broken_clouds.svg',
        '04n': 'assets/meteo/icons/broken_clouds.svg',
        '09d': 'assets/meteo/icons/shower_rain.svg',
        '09n': 'assets/meteo/icons/shower_rain.svg',
        '10d': 'assets/meteo/icons/rain.svg',
        '10n': 'assets/meteo/icons/rain.svg',
        '11d': 'assets/meteo/icons/thunderstorm.svg',
        '11n': 'assets/meteo/icons/thunderstorm.svg',
        '13d': 'assets/meteo/icons/snow.svg',
        '13n': 'assets/meteo/icons/snow.svg',
        '50d': 'assets/meteo/icons/mist.svg',
        '50n': 'assets/meteo/icons/mist.svg'
    };

    /**
     *
     * @param value
     * @returns {String}
     */
    transform(value: string): string {

        return this.listIcons[value];
    }
}