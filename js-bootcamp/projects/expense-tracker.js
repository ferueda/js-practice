const account = {
  name: 'Felipe Rueda',
  expenses: [],
  addExpense: function(description, amount) {
    this.expenses.push({
      description: description,
      amount: amount
    });
  },
  getAccountSummary: function() {
    const sum = this.expenses.reduce((acc, expense) => acc + expense.amount, 0);
    return `${this.name} has $${sum} in expenses.`;
  }
};

account.addExpense('Rent', 1500);
account.addExpense('Coffe', 2.5);
console.log(account.getAccountSummary());
