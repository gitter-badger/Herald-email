var runner = {
  name: 'email',
  where: ['server']
}

runner.run = function (notification, user) {
  this.emailRunner.call(notification, user);
};

runner.check = function () {
  if (!_.isFunction(this.emailRunner)) throw new Error('Herald-Email: emailRunner must be a function')
};


Herald.addRunner(runner);

// == TODO: emailSummery ==
// Herald.addRunner('emailSummery', function (notification, user) { /* noop */ });
//
// Fire email summery based on some timer/date-time. 
// Will get all applicable notifications from user and summarize them.
