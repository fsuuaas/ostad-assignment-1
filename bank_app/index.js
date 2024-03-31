class BankAccount {
    static UniqueAccountNumber = 1001;
    
    constructor(ownerName, balance) {
        this.accountNumber = BankAccount.UniqueAccountNumber++;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds");
        } else {
            this.balance -= amount;
            console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
        }
    }

    getBalance() {
        return this.balance;
    }

    displayAccountInfo() {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Owner Name: ${this.ownerName}`);
        console.log(`Balance: $${this.balance}`);
    }
}

// Creating instances of BankAccount class
const account1 = new BankAccount('Sharif Ahamed', 500);
const account2 = new BankAccount('Ahamed Sharif', 1000);

// Demonstrating functionality
account1.deposit(200);
account1.withdraw(100);
account1.displayAccountInfo();
console.log();

account2.deposit(500);
account2.withdraw(1500);
account2.displayAccountInfo();
