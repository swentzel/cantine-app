import { Handler } from 'aws-lambda';
import { invokeHandler, generateMockCallback } from 'lambda-utilities';
import { generateDummyAPIGatewayEvent } from 'lamprox';

import { list } from '../src/cantines';

describe('src/cantines', () => {

  describe('API service cantines.list', () => {

    test('should return response status 200', done => {
      const event = generateDummyAPIGatewayEvent();
      const callback = generateMockCallback((error, result: any) => {
        callback.once();
        expect(result.statusCode).toBe(200);
        done();
      })
      invokeHandler(list as Handler, { event, callback })
    });

      test('should return stage information (test = dev)', done => {
          const event = generateDummyAPIGatewayEvent();
          const callback = generateMockCallback((error, result: any) => {
              callback.once();
              const body = JSON.parse(result.body);
              expect(body.stage).toBe('dev');
              done();
          });
          invokeHandler(list as Handler, { event, callback })
      });
      test('should return an array of cantines', done => {
          const event = generateDummyAPIGatewayEvent();
          const callback = generateMockCallback((error, result: any) => {
              callback.once();
              const body = JSON.parse(result.body);
              expect(Array.isArray(body.cantines)).toBeTruthy();
              done();
          });
          invokeHandler(list as Handler, { event, callback })
      });
      test('first cantine should have a name and url', done => {
          const event = generateDummyAPIGatewayEvent();
          const callback = generateMockCallback((error, result: any) => {
              callback.once();
              const body = JSON.parse(result.body);
              expect(body.cantines[0].name).toBe('Testkantine auf Dev');
              expect(body.cantines[0].url).toBe('http://some-canti.ne');
              done();
          });
          invokeHandler(list as Handler, { event, callback })
      });
  });
});
