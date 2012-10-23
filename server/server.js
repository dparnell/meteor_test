Meteor.startup(function() {
	// make sure there is a button in the buttons collection
	var button = Buttons.findOne();
	
	if(button) {
		// Initialize the button
		Buttons.update(button._id, { $set: { caption : 'Press Me' }} );
	} else {
		// create a button
		Buttons.insert({ caption: 'Press Me', clicks : 0 });
	}

	Meteor.setInterval(function() {
		Buttons.update(button._id, { $set: { caption : 'Press Me' }} );
	}, 10000);
});

Meteor.publish("buttons", function () {
  return Buttons.find();
});
