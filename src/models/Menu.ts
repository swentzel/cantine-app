/**
 * Lunch
 */
import { Lunch } from './Lunch';
import moment = require('moment');

export class Menu {
    get day(): any {
        return this._day;
    }

    set day(value: any) {
        if (value instanceof Date) {
            this._day = moment(value);
        } else if (value instanceof moment) {
            this._day = value;
        } else {
            this._day = moment();
        }
    }

    name: string;
    lunches: Array<Lunch>;
    private _day: any;

    constructor(name: string, day?: any) {
        this.name = name;
        this.lunches = [];
        this.day = day;
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