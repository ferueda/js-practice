const tempObject = function(tempInF) {
  return {
    fahrenheit: tempInF,
    celsius: (tempInF - 32) * (5 / 9),
    kelvin: (tempInF + 459.67) * (5 / 9)
  };
};

console.log(tempObject(75));

// expense tracker

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

addIncome(myAccount, 1000);
addExpense(myAccount, 300);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(myAccount);
console.log(getAccountSummary(myAccount));
