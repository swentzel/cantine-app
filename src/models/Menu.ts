/**
 * Lunch
 */
import { Lunch } from './Lunch';
import * as moment from 'moment';

export class Menu {

    name: string;
    lunches: Array<Lunch>;
    day: moment;

    constructor(name: string, day?: moment) {
        this.name = name;
        this.lunches = [];

    }

    addLunch(lunch: Lunch) {
        // add lunch to lunches
        this.lunches.push(lunch);
    }

    toJson() {
        let lunchesJson = [];
        this.lunches.forEach(function(lunch) {
            lunchesJson.push(lunch.toJson());
        });
        const menuJson = {
            name: this.name,
            lunches: lunchesJson
         };
         return menuJson;
    }
}