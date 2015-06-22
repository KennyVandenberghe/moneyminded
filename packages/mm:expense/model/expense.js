Expenses = new Mongo.Collection('expenses', {
  // transform: function(doc) {
  //   return new Expense(doc);
  // }
});

Expenses.timestampable();

Expenses.allow(MM.Model.defaultAllow);

MM.registerNamespace('expense', Expenses);

CollectionBehaviours.extendCollectionInstance(Expenses);

MM.Model.Expense = {
  // Model helpers
  test: function() {
    console.log('this works');
  }
};

Expenses.helpers(MM.Model.Expense);

_.extend(Expenses, {
  testing: function() {
    console.log('blahbla');
  }
});

MM.Expenses = Expenses;
// Expense = function(doc) {
//   _.extend(this, doc);
// };

// _.extend(Expense.prototype, {
//   test: function() {
//     console.log('this works');
//   }
// });
