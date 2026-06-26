class Bankaccount {
    #balance = 0;

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }
        getBalance()
        {
            return this.#balance;
        }
    }

const account = new Bankaccount();
ccount.deposit(120);
console.log(account.getBalance());