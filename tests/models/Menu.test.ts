import { Menu } from '../../src/models/Menu';
import moment = require('moment');
import { Lunch } from '../../src/models/Lunch';


describe('src/models/Menu', () => {
    const name = 'Test-Menu';
    const day = moment();
    const testMenu = new Menu(name, day);

    test('create new Menu', () => {
        expect(testMenu instanceof Menu).toBeTruthy();
    });
    test('check name', () => {
        expect(testMenu.name).toBe(name);
    });
    test('check day of menu', () => {
        expect(testMenu.day).toEqual(day);
    });
    test('add first lunch', () => {
        const lunch = new Lunch('Jägerschnitzel');
        testMenu.addLunch(lunch);
        expect(testMenu.lunches.length).toEqual(1);
    });

});
