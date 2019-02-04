ServiceConfiguration.configurations.upsert({
    service: "facebook"
  }, {
    $set: {
      appId: Meteor.settings.facebook.appId,
      loginStyle: "popup",
      secret: Meteor.settings.facebook.secret
    }
  });
  
  ServiceConfiguration.configurations.upsert({
    service: "github"
  }, {
    $set: {
      appId: Meteor.settings.github.appId,
      loginStyle: "popup",
      secret: Meteor.settings.github.secret
    }
  });
  
  ServiceConfiguration.configurations.upsert({
    service: "twitter"
  }, {
    $set: {
      appId: Meteor.settings.twitter.appId,
      loginStyle: "popup",
      secret: Meteor.settings.twitter.secret
    }
  });
  
  ServiceConfiguration.configurations.upsert({
    service: "google"
  }, {
    $set: {
      appId: Meteor.settings.google.appId,
      loginStyle: "popup",
      secret: Meteor.settings.google.secret
    }
  });