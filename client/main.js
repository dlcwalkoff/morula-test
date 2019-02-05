import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

FlowRouter.route('/', {
  name: 'Main',
  action() {
    BlazeLayout.render('layout', { top: "header", main: "main" });
  }
});

