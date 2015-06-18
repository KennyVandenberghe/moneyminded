Template.layout.onCreated(function() {
	Session.set("pageOne", true);
});

Template.layout.helpers({
  transition : function(){
    return function(){
      return 'right-to-left';
    };
  },
	pageOne: function() {
		return Session.equals('pageOne', true);
	},
	pageTwo: function() {
		return Session.equals('pageTwo', true);
	},
	pageThree: function() {
		return Session.equals('pageThree', true);
	},
	pageFour: function() {
		return Session.equals('pageFour', true);
	},
	accounts: function(){
		return MM.Accounts.find();
	}
});

Template.layout.events({
	'click .pageOne': function(){
		Session.set('pageOne', true);
		Session.set('pageTwo', false);
		Session.set('pageThree', false);
		Session.set('pageFour', false);
	},
	'click .pageTwo': function(){
		Session.set('pageTwo', true);
		Session.set('pageOne', false);
		Session.set('pageThree', false);
		Session.set('pageFour', false);
	},
	'click .pageThree': function(){
		Session.set('pageThree', true);
		Session.set('pageOne', false);
		Session.set('pageTwo', false);
		Session.set('pageFour', false);
	},
	'click .pageFour': function(){
		Session.set('pageFour', true);
		Session.set('pageOne', false);
		Session.set('pageTwo', false);
		Session.set('pageThree', false);
	},
});