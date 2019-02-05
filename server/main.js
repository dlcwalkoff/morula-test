import { Meteor } from 'meteor/meteor';
import './service-configuration';

Meteor.startup(() => {
  // code to run on server at startup
});

Accounts.onCreateUser(function(options, user) {
  // Use provided profile in options, or create an empty object
  user.profile = options.profile || {};
  user.services = user.services || {};

  if (!user.profile.email) {
      let email;
    
    if (user.services.facebook) email = user.services.facebook.email;
    if (user.services.github) email = user.services.github.email;
    if (user.services.google) email = user.services.google.email;

    user.profile.email = email;
  }

  const existingUser = Meteor.users.findOne({ 'profile.email': user.profile.email });

  if (existingUser) {
    if (user.services.facebook) existingUser.services.facebook = user.services.facebook;
    if (user.services.github) existingUser.services.github = user.services.github;
    if (user.services.google) existingUser.services.google = user.services.google;

    // precaution, these will exist from accounts-password if used
    if (!existingUser.services) existingUser.services = { resume: { loginTokens: [] }};
    if (!existingUser.services.resume) existingUser.services.resume = { loginTokens: [] };

    Meteor.users.remove({_id: existingUser._id});

    return existingUser;
  } else {
    return user;
  }
});