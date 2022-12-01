class bankAccount {
  constructor(accountNumber, owner) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.transactions = [];
  }
  balance() {
    let total = 0;
    for (let i = this.transactions.length - 1; i >= 0; i--) {
      total = total + this.transactions[i].amount;
    }
    return "Your Current Balance is: " + total;
  }

  deposit(amt) {
    this.transactions.push(
      new Transaction(this.accountNumber, this.owner, this.owner, amt)
    );
  }
  charge(payee, amt) {
    this.transactions.push(
      new Transaction(
        new Transaction(this.accountNumber, this.owner, payee, amt)
      )
    );
  }
}
class Transaction extends bankAccount {
  constructor(accountNumber, owner, payee, amount) {
    super(accountNumber, owner);
    this.amount = amount;
    this.payee = payee;
    this.date = new Date();
  }
}

let mainAccount = new bankAccount("12345678", "Gabi Jones");
console.log(mainAccount);
mainAccount.deposit(3000);
mainAccount.deposit(50);
console.log(mainAccount.balance());
console.log(mainAccount.charge("amazon", -250));
console.log(mainAccount.transactions);
