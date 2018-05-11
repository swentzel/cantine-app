'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
module.exports.http200 = (event, context, callback) => {
    const timestamp = new Date().getTime();
    // create a response
    const response = {
        statusCode: 200,
        body: 'Serverless setup successful!'
    };
    callback(null, response);
};
