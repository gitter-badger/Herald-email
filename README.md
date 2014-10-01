notifications-email
===================

Add Email medium to [Notifications](https://github.com/Meteor-Reaction/notifications) for Meteor JS

## Basic usage (may change)

```js
Notifications.addCourier('someNotificaiton', {
  media: {
    email: {
      emailRunner: function (user) { 
        //this is where you fire off emails 
        //its not much yet but its a good start.
      }
    }
  }
});
```

#### EmailRunner

From the `this` context you can access the notification data. It passes the full user as an argument. Currently you need to write your own logic to send off emails. Eventually I will make this a lot easier to use.
