
export class Config {
    name: string;
    stage: string;
    cantines: Array;
    constructor() {
        this.name = 'Config';
        this.stage = this.getStage();
        this.loadConfig();
    }

    getStage() {
        let stage = Config.getProcessVar('STAGE');
        if (typeof stage === 'undefined') {
            stage = 'dev';
        }
        return stage;
    }

    loadConfig() {
        const configObject = require(`./config/config.${this.stage}.json`);
        // const configObject = JSON.parse(configJson);
        this.cantines = configObject.cantines;
    }

    /**
     * getProcessVar
     */
    static getProcessVar(name) {
        let procVar;
        if (typeof process.env[name] === undefined) {
            console.log(`WARN: Config.getProcessVar ${name} is undefined`);
        } else {
            procVar = process.env[name];
        }
        return procVar;
    }
}