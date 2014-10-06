Package.describe({
  summary: "Add Email medium to Herald",
  version: "0.3.0",
  git: "https://github.com/Meteor-Reaction/Herald-email.git",
  name: "kestanous:herald-email"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.2');
  api.use(['kestanous:herald@0.6.0', 'underscore']); 
  api.addFiles('lib/notifications-email.js', 'server');
});
