'use strict';
import { APIResponse } from './libs/api/APIResponse';
import { Config } from './Config';

module.exports.list = (event, context, callback) => {
    const config = new Config();

    // create an API response
    const api = new APIResponse();

    const cantines = [];
    config.cantines.forEach(function (cantine) {
       cantines.push(cantine);
    });
    const data = {
        description: 'List of cantines',
        cantines: cantines,
        something: { else: 'is here', else2: 'and here' }
    };
    
    api.success(callback, data);
    
};