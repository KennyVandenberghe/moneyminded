Accounts = new Mongo.Collection("accounts", {
	transform: function(doc) {return new Account(doc)}
});

Accounts.default = {
	currency: 0
};

Account = function (doc) {
	_.extend(this, doc);
};

_.extend(Account.prototype, {
	getAccountsNumber: function() {
		return Accounts.find().count();
	},
	getCurrency: function(){
		return Accounts.findOne(this._id).currency;
	}
});

MM.Accounts = Accounts;