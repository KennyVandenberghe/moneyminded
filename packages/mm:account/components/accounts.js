Template.accounts.onCreated(function(){
	console.log(MM.Accounts.find().fetch());
});
Template.accounts.helpers({
	account: function(){
		return MM.Accounts.find().fetch();
	}
});