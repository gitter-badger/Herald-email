Notifications._mediaRunners.email = function (notification, user) {
  Notifications._eventTypes[notification.event].emailRunner.call(notification, user)
}
