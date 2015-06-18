Expenses = new Mongo.Collection("expenses", {
	transform: function(doc) {
		return new Expense(doc);
	}
});

Expense = function (doc) {
	_.extend(this, doc);
};

_.extend(Expense.prototype, {
	test: function(){
		console.log('this works');
	}
});

MM.Expenses = Expenses;