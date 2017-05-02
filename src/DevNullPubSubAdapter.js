"use strict";

class DevNullPubSubAdapter {
  subscribe(channel, handler) {
    // you ain't subscribing to anything
  }

  publish(channel, message) {
    // your message is going to /dev/null
  }
}

module.exports = DevNullPubSubAdapter;
