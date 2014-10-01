Package.describe({
  summary: "Add Email medium to Notifications",
  version: "0.1.0",
  git: "https://github.com/Meteor-Reaction/Herald-email.git",
  name: "kestanous:herald-email"
});

Package.onUse(function(api) {
  api.use('kestanous:herald@0.4.0'); 
  api.addFiles('lib/notifications-email.js', 'server');
});
