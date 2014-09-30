Notifications.addRunner('email', function (notification, user) {
  this.emailRunner.call(notification, user)
});

// == TODO: emailSummery ==
// Notifications.addRunner('emailSummery', function (notification, user) { /* noop */ });
//
// Fire email summery based on some timer/date-time. 
// Will get all applicable notifications from user and summarize them.
