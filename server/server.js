Meteor.startup(function() {
	// make sure there is a button in the buttons collection
	var button = Buttons.findOne();
	var button_id;

	if(button) {
		button_id = button._id;
		// Initialize the button
		Buttons.update(button_id, { $set: { caption : 'Press Me' }} );
	} else {
		// create a button
		button_id = Buttons.insert({ caption: 'Press Me', clicks : 0 });
	}

	Meteor.setInterval(function() {
		Buttons.update(button_id, { $set: { caption : 'Press Me' }} );
	}, 10000);
});

Meteor.publish("buttons", function () {
  return Buttons.find();
});
