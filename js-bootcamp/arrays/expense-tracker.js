const myAccount = {
  name: 'Felipe Rueda',
  expenses: 0,
  income: 0
};

const addIncome = function(account, amount) {
  account.income += amount;
};

const addExpense = function(account, amount) {
  account.expenses += amount;
};

const resetAccount = function(account) {
  account.expenses = 0;
  account.income = 0;
};

const getAccountSummary = function(account) {
  return `${account.name}'s account has $${account.income - account.expenses}. $${account.income} in income and $${
    account.expenses
  } in expenses.`;
};
