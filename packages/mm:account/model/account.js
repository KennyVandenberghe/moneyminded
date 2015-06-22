Accounts = new Mongo.Collection("accounts", {
  // transform: function(doc) {return new Account(doc)}
});

Accounts.timestampable();

Accounts.allow(MM.Model.defaultAllow);

MM.registerNamespace('account', Accounts);

CollectionBehaviours.extendCollectionInstance(Accounts);

MM.Model.Account = {
  // Model helpers
  test: function() {
    console.log('this works');
  }
};

Accounts.helpers(MM.Model.Account);

_.extend(Accounts, {
  testing: function() {
    console.log('blahbla');
  },
  getAccountsNumber: function() {
    return Accounts.find().count();
  },
  getCurrency: function() {
    return Accounts.findOne(this._id).currency;
  }
});

Accounts.default = {
  currency: 0
};

// Account = function(doc) {
//   _.extend(this, doc);
// };

// _.extend(Account.prototype, {
//   getAccountsNumber: function() {
//     return Accounts.find().count();
//   },
//   getCurrency: function() {
//     return Accounts.findOne(this._id).currency;
//   }
// });

MM.Accounts = Accounts;
