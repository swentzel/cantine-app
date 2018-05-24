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
  });
});
