const account = {
  name: 'Felipe Rueda',
  income: [],
  expenses: [],
  addIncome: function(description, amount) {
    this.income.push({
      description: description,
      amount: amount
    });
  },
  addExpense: function(description, amount) {
    this.expenses.push({
      description: description,
      amount: amount
    });
  },
  getAccountSummary: function() {
    const income = this.income.reduce((acc, inc) => acc + inc.amount, 0);
    const expenses = this.expenses.reduce((acc, expense) => acc + expense.amount, 0);
    return `${this.name}'s balance is $${income - expenses}. Has $${income} in income and $${expenses} in expenses.`;
  }
};

account.addIncome('Salary', 5000);
account.addExpense('Rent', 1500);
account.addExpense('Coffe', 2.5);
console.log(account.getAccountSummary());

//add income array
//addIncome method => description, amount
// tweak getAccountSummary => add income, expenses and return balance.
