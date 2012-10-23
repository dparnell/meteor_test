Buttons = new Meteor.Collection("buttons");

Buttons.allow({
	insert: function() { return false },
	update: function() { return true },
	remove: function() { return false },
});