import { Config } from '../../src/Config';


describe('src/Config', () => {
    const config = new Config();

    test('create new Config instance', () => {
        expect(config instanceof Config).toBeTruthy();
    });
    test('check stage', () => {
        expect(config.stage).toBe('dev');
    });
    test('check cantines', () => {
        expect(Array.isArray(config.cantines)).toBeTruthy();
    });
});
