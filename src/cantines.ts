'use strict';
import { APIResponse } from './libs/api/APIResponse';


module.exports.list = (event, context, callback) => {
    

    // create a response
    const api = new APIResponse();
    
    const data = JSON.stringify({
      message: 'cantines.list',
      something: 'else'
    });
    
    api.success(callback, data);
    
};