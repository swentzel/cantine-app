/**
 * Cantine
 */
export class Cantine {

    name: string;

    constructor(name: string) {
        this.name = name;
    }
    
    toJson() {
         cantineJson = {
            name: this.name
         }
         return cantineJson;
    }
}