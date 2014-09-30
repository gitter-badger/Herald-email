notifications-email
===================

Add Email medium to Notifications for Meteor JS

## Basic usage (may change)

Sorry for the lazy README, will fix when things are more stable.

```coffee
Notifications.addEventType 'someNotificaiton',
  media: [
    {
      name: 'onsite',
      default: true
    },
    {
      name: 'email',
      default: true
    }
  ]
  emailRunner: (user) -> #this is where you fire off emails
```

#### EmailRunner

From the `this` context you can access the notification data. It passes the full user as an argument. Currently you need to write your own logic to send off emails. Eventually I will make this a lot easier to use but at least this is a start.
