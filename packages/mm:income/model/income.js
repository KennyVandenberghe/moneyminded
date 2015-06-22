Incomes = new Mongo.Collection("incomes", {
	// transform: function(doc) {
	// 	return new Income(doc);
	// }
});

Incomes.timestampable();

Incomes.allow(MM.Model.defaultAllow);

MM.registerNamespace('income', Incomes);

CollectionBehaviours.extendCollectionInstance(Incomes);

MM.Model.Income = {
  // Model helpers
  test: function() {
    console.log('this works');
  }
};

Incomes.helpers(MM.Model.Income);

_.extend(Incomes, {
  testing: function() {
    console.log('blahbla');
  }
});

MM.Incomes = Incomes;
// Income = function(doc) {
//   // _.extend(this, doc);
// };

// _.extend(Income.prototype, {
// 	test: function(){
// 		console.log('this works');
// 	}
// });
