import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import './main.html';

FlowRouter.route('/', {
  name: 'Main',
  action() {
    BlazeLayout.render('layout', { top: "header", main: "main" });
  }
});

Template.main.events({
  'click #killMe': function(event) {
    Meteor.users.remove({ _id: Meteor.userId() }, () => {
      Accounts.logout();
    });

    return false;
  },
  'click #logoutMe': function(event) {
    Accounts.logout();

    return false;
  }
});
