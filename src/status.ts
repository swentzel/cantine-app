'use strict';
import * as uuid from 'uuid';


module.exports.http200 = (event, context, callback) => {
    const timestamp = new Date().getTime();
  
    // create a response
    const response = {
      statusCode: 200,
      body: 'Serverless setup successfull, including typescript with plugin!'
    }
    callback(null, response);
}