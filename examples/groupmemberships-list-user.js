var exampleConfig = require('./exampleConfig');
var zd = require('../lib/client');

var client = zd.createClient({
  username:  process.env.ZENDESK_TEST_USERNAME || exampleConfig.auth.username,
  token:     process.env.ZENDESK_TEST_TOKEN || exampleConfig.auth.token,
  remoteUri: process.env.ZENDESK_TEST_REMOTEURI || exampleConfig.auth.remoteUri
});

client.users.list().then(function(users) {
  user = users[0];
  client.groupmemberships.listByUser(user.id).then( function(memberships) {
    console.log(JSON.stringify(memberships));
  })
});
