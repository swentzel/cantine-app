'use strict';
import { APIResponse } from './libs/api/APIResponse';


module.exports.list = (event, context, callback) => {
    const timestamp = new Date().getTime();

    const api = new APIResponse();
    // create a response
    const data = {
      message: 'cantines.list'
    };
    // callback(null, response);
    api.success(callback, data);
};