class Calculator {
    a1;
    a2;
    constructor(A1, A2) {
        this.a1 = A1;
        this.a2 = A2;
    }
    subtraction() {
        return this.a1 - this.a2;
    }
    modulus() {
        return this.a1 % this.a2;

    }
    division() {
        return this.a1 / this.a2;

    }
    multiplication() {
        return this.a1 * this.a2

    }
}

const allActions = new Calculator(5, 3);

console.log(allActions.modulus());
console.log(allActions.division());
console.log(allActions.multiplication());
console.log(allActions.subtraction());