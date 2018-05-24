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

        data['stage'] = this.stage;

        const response = {
            statusCode: 200,
            stage: this.stage,
            body: JSON.stringify(data)
        };
        callback(null, response);
    }
}