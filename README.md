# signal

This is hubot configured to listen to github webhooks and report in via irc to the #mofo-signal channel.

To add a repo to the list of repos that report in, go to the settings/hooks page, and setup a webhook that:

 * points to `https://mofo-signal.herokuapp.com/hubot/gh-repo-events?room=%23mofo-signal`
 * sends `issues` events
 
