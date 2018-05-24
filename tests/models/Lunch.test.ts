import { Menu } from '../../src/models/Menu';
import moment = require('moment');
import { Lunch } from '../../src/models/Lunch';


describe('src/models/Lunch', () => {
    const name = 'Test-Lunch';
    const day = moment();
    const testLunch = new Lunch(name, day);

    test('create new Lunch', () => {
        expect(testLunch instanceof Lunch).toBeTruthy();
    });
    test('check name', () => {
        expect(testLunch.name).toBe(name);
    });
    test('check day of lunch', () => {
        expect(testLunch.day).toEqual(day);
    });

});
