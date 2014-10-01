Package.describe({
  summary: "Add Email medium to Notifications",
  version: "0.1.0",
  git: "https://github.com/Meteor-Reaction/harold-email.git",
  name: "kestanous:harold-email"
});

Package.onUse(function(api) {
  api.use('kestanous:harold'); 

  api.addFiles('lib/notifications-email.js', 'server');
});
