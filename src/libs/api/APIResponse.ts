/**
 * APIResponse
 * @constructor
 * @param {object} params
 */
export class APIResponse {

    name: string;
    stage: string;

    constructor() {
        this.name = 'APIResponse';
        // let stage = Config.getProcessVar('STAGE');
        this.stage = 'dev';

    }

    success(callback, data) {

        const response = {
            statusCode: 200,
            headers: {
                'Cache-Control': 'no-store',
                'Access-Control-Allow-Origin' : '*',
                'X-Stage': this.stage
            },
            data: data
        };

        callback(undefined, response);
    }
}