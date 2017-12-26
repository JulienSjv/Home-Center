export class Meteo {
    main: {
        humidity:number,
        pressure: number,
        temp: number,
        temp_max: number,
        temp_min: number
    };
    name: String;
    weather: {
        description: String,
        icon: String,
    };
    wind: {
        deg: number,
        speed: number
    };
}