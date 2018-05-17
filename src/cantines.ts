'use strict';
import { APIResponse } from './libs/api/APIResponse';


module.exports.list = (event, context, callback) => {
    

    // create a response
    const api = new APIResponse();
    
    const data = {
      message: 'cantines.list'
    };
    
    api.success(callback, data);
    
};