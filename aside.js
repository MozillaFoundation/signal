var irc = require('irc');
var client = new irc.Client('irc.mozilla.org', 'mofosignalbot', {
    port: 6697,
    channels: ['#mofo-signal'],
});
client.addListener('raw', function(message) { console.log('raw: ', message) });
client.addListener('error', function(message) { console.log(color('error: ', 'red'), message) });

client.addListener('message#blah', function(from, message) {
console.log('<%s> %s', from, message);
});

client.connect(1, function() {
  client.say("#mofo-signal", "hi");
})
