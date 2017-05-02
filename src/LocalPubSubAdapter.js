"use strict";

class LocalPubSubAdapter {
  constructor() {
    this.subscribers = {};
  }

  getSubscribersForChannel(channel) {
    if (this.subscribers.hasOwnProperty(channel)) {
      return this.subscribers[channel];
    } else {
      return [];
    }
  }

  subscribe(channel, handler) {
    if (!this.subscribers.hasOwnProperty(channel)) {
      this.subscribers[channel] = [];
    }

    this.subscribers[channel].push(handler);
  }

  publish(channel, message) {
    for (let handler of this.getSubscribersForChannel(channel)) {
      handler(message);
    }
  }
}

module.exports = LocalPubSubAdapter;
