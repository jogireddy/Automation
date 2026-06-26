class car {
    #Engine;
    constructor(name, engineName) {
        this.name = name;
        this.#Engine = engineName;
    }

    getEngine() {
        return this.#Engine;
    }

    setEngine(engineChanged) {
        this.#Engine = engineChanged;
    }

}
let c = new car("scorpio", "J1");
console. log(c.getEngine());
c.setEngine("J2");
console. log(c.getEngine());
