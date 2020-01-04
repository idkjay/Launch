// class BankAccount {
//   constructor(initialBalance) {
//     this.initialBalance = initialBalance;
//     this.transactions = [];
//   }
//   addATransaction(amount) {
//     this.transactions.concat(amount)
//
//   }
// }
//
// let account = new BankAccount(1000)
// let bills = [-45, -99.95, -34.43]
//
//
// account.addATransaction(bills)
// console.log(account)

class BankAccount {
  constructor(initialBalance) {
    this.initialBalance = initialBalance
    this.transactions = []
  }
  addATransaction(amounts) {
    amounts.forEach(transaction => {this.transactions.push(transaction)})
    // amounts.forEach(debit => {this.balance += debit})
    console.log(`Initial Balance: $${this.initialBalance}`)
    console.log(`Transactions:`)
    amounts.forEach(transaction => {console.log(transaction)})
  }
  final() {
    let newBalance = this.transactions.reduce((total, current) => {
    return total += current;
  }, this.initialBalance);
    console.log(`Current Balance: $${newBalance}`);
  }
}
let account = new BankAccount(1000)
let bills = [-45, -99.95, -34.43]
account.addATransaction(bills)
account.final()
