Package.describe({
  summary: "Add Email medium to Notifications",
  version: "0.1.0",
  git: " \* Fill me in! *\ "
});

Package.onUse(function(api) {
  api.use('kestanous:notifications'); 

  api.addFiles('lib/notifications-email.js');
  api.addFiles('lib/server.js', 'server');
});
