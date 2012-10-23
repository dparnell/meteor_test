Meteor.subscribe("buttons");
  
Template.hello.greeting = function () {
  return "Open this in lots of windows/tabs and press the button :)";
};

Template.hello.buttons = function() {
  return Buttons.find();
}
  
var messages = ['Oh Yes!', 'Harder!', 'Again', 'More!', 'Give it to me'];
  
Template.hello.events({
  'click input' : function () {
    Buttons.update(this._id, { $set: { caption: messages[Math.floor(Math.random()*(messages.length))] }, $inc : { clicks: 1} });
  }
});
