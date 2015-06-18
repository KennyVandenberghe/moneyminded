var accounts = [
	{name: 'savings'},
	{name: 'budget'},
	{name: 'current'}
];

var expenses = [
	{euro: 80},
	{euro: 70}
];

var incomes = [
	{euro: 1500},
	{euro: 200}
];

Meteor.startup(function(){
  if (Accounts.find().count() < accounts.length){
    _.each(accounts, function(account){
      var a = _.extend({}, Accounts.default, account);
      if(Accounts.find({name: a.name}).count() < 1){
        Accounts.insert(a);
      }
    });
  }

  if (Expenses.find().count() < expenses.length){
    _.each(expenses, function(expense){
      var e = _.extend({}, Expenses.default, expense);
      Expenses.insert(e);
    });
  }

  if (Incomes.find().count() < incomes.length){
    _.each(incomes, function(income){
      var i = _.extend({}, Incomes.default, income);
      Incomes.insert(i);
    });
  }
});