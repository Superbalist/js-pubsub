"use strict";

var LocalPubSubAdapter = require('../src/LocalPubSubAdapter');

let adapter = new LocalPubSubAdapter();

adapter.subscribe('my_channel', (message) => {
  console.log('channel: my_channel');
  console.log(message);
});

adapter.subscribe('my_channel', (message) => {
  console.log('channel: my_channel (another subscriber)');
  console.log(message);
});

adapter.subscribe('my_other_channel', (message) => {
  console.log('channel: my_other_channel');
  console.log(message);
});

adapter.publish('my_channel', 'Hello World!');
adapter.publish('my_other_channel', 'This is another message...');
