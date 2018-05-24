/**
 * Cantine
 */
export class Cantine {

    name: string;

    constructor(name: string) {
        this.name = name;
    }
    toJson() {
         let cantineJson = {
            name: this.name
         }
         return cantineJson;
    }
}