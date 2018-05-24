import { Cantine } from '../../src/models/Cantine';
import { Config } from '../../src/Config';
const config = new Config();


describe('src/models/Cantine', () => {
    const name = 'Test-Kantine';
    const testCantine = new Cantine(name);

    test('create new Cantine', () => {
        expect(testCantine instanceof Cantine).toBeTruthy();
    });
    test('check name', () => {
        expect(testCantine.name).toBe(name);
    });
    test('check config', () => {
        expect(Array.isArray(config.cantines)).toBeTruthy();
    });
});
