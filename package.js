Package.describe({
  summary: "Add Email medium to Herald",
  version: "0.2.1",
  git: "https://github.com/Meteor-Reaction/Herald-email.git",
  name: "kestanous:herald-email"
});

Package.onUse(function(api) {
  api.use('kestanous:herald@0.6.0'); 
  api.addFiles('lib/notifications-email.js', 'server');
});
