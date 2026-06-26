class ICICI {
    #balance;

    constructor(name, balance) {
        this.name = name;
        this.#balance = balance
    }

    getBalance() {

        return this.#balance;
    }
    setBalance(balance, isCashier) {
        if (isCashier) {
            this.#balance = balance
        }
        else {
            console.log("Not allowed")
        }
    }
}

let jogi = new ICICI("reddy" , 1000);
jogi.setBalance(1000000, false);
console.log (jogi.getBalance());

let jogi1= new ICICI("reddy" , 1000);
jogi1.setBalance(1000000, true);
console.log (jogi1.getBalance());
