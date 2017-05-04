'use strict';

/**
 * LocalPubSubAdapter Class
 *
 * @implements {PubSubAdapterInterface}
 * @example
 * let LocalPubSubAdapter = require('@superbalist/js-pubsub').LocalPubSubAdapter;
 *
 * // create adapter
 * let adapter = new LocalPubSubAdapter();
 */
class LocalPubSubAdapter {
  /**
   * Construct a LocalPubSubAdapter
   */
  constructor() {
    /**
     * @type {Object}
     */
    this.subscribers = {};
  }

  /**
   *
   * Return an array of subscriber callbacks listening on the given channel.
   *
   * @param {string} channel
   * @return {subscriberCallback[]}
   */
  getSubscribersForChannel(channel) {
    if (this.subscribers.hasOwnProperty(channel)) {
      return this.subscribers[channel];
    } else {
      return [];
    }
  }

  /**
   * Subscribe a handler to a channel.
   *
   * @param {string} channel
   * @param {subscriberCallback} handler - The callback to run when a message is received
   * @example
   * adapter.subscribe('my_channel', (message) => {
   *   console.log(message);
   * });
   */
  subscribe(channel, handler) {
    if (!this.subscribers.hasOwnProperty(channel)) {
      this.subscribers[channel] = [];
    }

    this.subscribers[channel].push(handler);
  }

  /**
   * Publish a message to a channel.
   *
   * @param {string} channel
   * @param {*} message - The message payload
   * @example
   * // publish a string
   * adapter.publish('my_channel', 'Hello World');
   *
   * // publish an object
   * adapter.publish('my_channel', {
   *   'id': 1234,
   *   'first_name': 'Matthew',
   * });
   */
  publish(channel, message) {
    for (let handler of this.getSubscribersForChannel(channel)) {
      handler(message);
    }
  }
}

module.exports = LocalPubSubAdapter;
