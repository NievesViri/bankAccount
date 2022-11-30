class bankAccount {
  constructor(accountNumber, owner) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.transactions = [];
  }
  balance() {
    let currentBalance = 0;
    for (let i = 0; i < this.transactions.length; i++) {
      currentBalance += this.transactions[i].amount;
    }
    return currentBalance;
  }

  deposit(amt) {
    if (amt > 0) {
      let newDeposit = new Transaction(amt, "Deposit");
      this.transactions.push(newDeposit);
    } else {
      console.log("Invalid Deposit Amount!");
    }
  }

  charge(payee, amt) {
    let newCharge = new Transaction(amt, payee);
    if (amt <= this.balance) {
      this.transactions.push(newCharge);
    } else {
      console.log("No Funds!");
    }
  }
}
class Transaction {
  constructor(amt, payee) {
    this.amount = amt;
    this.payee = payee;
    this.date = new Date();
  }
}

const mainAccount = new bankAccount("xxx4680", "G");
console.log(mainAccount.balance());
mainAccount.deposit(50);
console.log("After Deposit", mainAccount.balance());

mainAccount.deposit(3000);
console.log(mainAccount.balance());
