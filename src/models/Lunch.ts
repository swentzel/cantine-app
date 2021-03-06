/**
 * Lunch
 */
import moment = require('moment');

export class Lunch {
    private _name: string;
    private _day: moment;

    constructor(name: string, day?: moment) {
        this.name = name;
        this.day = day;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
    get day(): moment {
        return this._day;
    }

    set day(value?: moment) {
        if (value instanceof Date) {
            this._day = moment(value);
        } else if (value instanceof moment) {
            this._day = value;
        } else {
            this._day = moment();
        }
    }

    toJson() {
         const lunchJson = {
            name: this._name
         };
         return lunchJson;
    }
}