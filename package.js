Package.describe({
  summary: "Add Email medium to Notifications",
  version: "0.1.0",
  git: "https://github.com/Meteor-Reaction/notifications-email.git",
  name: "kestanous:notifications-email"
});

Package.onUse(function(api) {
  api.use('kestanous:notifications'); 

  api.addFiles('lib/notifications-email.js', 'server');
});
