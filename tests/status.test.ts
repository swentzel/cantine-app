import { Handler } from 'aws-lambda';
import { invokeHandler, generateMockCallback } from 'lambda-utilities';
import { generateDummyAPIGatewayEvent } from 'lamprox';

import { http200 } from '../src/status';

describe('src/status', () => {

  describe('http200', () => {

    it('Should return response.', done => {
      const event = generateDummyAPIGatewayEvent()
      const callback = generateMockCallback((error, result: any) => {
        callback.once()
        // const body = JSON.parse(result.body)
        expect(result.body).toBe('Serverless setup successfull, including typescript with plugin!')
        expect(callback.verify()).toBe(true)

        done()
      })

      invokeHandler(http200 as Handler, { event, callback })
    });
  });
});
