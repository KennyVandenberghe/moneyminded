Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', {
	name: 'accounts'
});

Router.route('/account/:_id', {
	name: 'account',
	data: function() {
		return MM.Accounts.findOne(this.params._id);
	}
});

