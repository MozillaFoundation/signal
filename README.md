# signal

This is hubot configured to listen to github webhooks and report in via irc to the #mofo-signal channel.

To add a repo to the list of repos that report in, go to the settings/hooks page, and setup a webhook that:

 * points to `https://mofo-signal.herokuapp.com/hubot/gh-repo-events?room=%23mofo-signal`
 * sends `issues` events
 
It runs on heroku at `mofo-signal.herokuapp.com`.

Config vars are:

```
HEROKU_URL:                        http://mofo-signal.herokuapp.com
HUBOT_GITHUB_EVENT_NOTIFIER_ROOM:  #mofo-signal
HUBOT_GITHUB_EVENT_NOTIFIER_TYPES: issues,ping
HUBOT_IRC_NICK:                    signal
HUBOT_IRC_ROOMS:                   #mofo-signal
HUBOT_IRC_SERVER:                  irc.mozilla.org
HUBOT_IRC_UNFLOOD:                 true
```

(with a `redistogo` service configured)
