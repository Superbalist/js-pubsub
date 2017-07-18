'use strict';

/**
 * DevNullPubSubAdapter Class
 *
 * @implements {PubSubAdapterInterface}
 * @example
 * let DevNullPubSubAdapter = require('@superbalist/js-pubsub').DevNullPubSubAdapter;
 *
 * // create adapter
 * let adapter = new DevNullPubSubAdapter();
 */
class DevNullPubSubAdapter {
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
    // you ain't subscribing to anything
  }

  /**
   * Publish a message to a channel.
   *
   * @param {string} channel
   * @param {*} message - The message payload
   * @return {Promise<*>}
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
    // your message is going to /dev/null
    return Promise.resolve(null);
  }

  /**
   * Publish multiple messages to a channel.
   *
   * @param {string} channel
   * @param {*[]} messages
   * @return {Promise<*>}
   * @example
   * let messages = [
   *   'message 1',
   *   'message 2',
   * ];
   * adapter.publishBatch('my_channel', messages);
   */
  publishBatch(channel, messages) {
    // your messages are going to /dev/null
    return Promise.resolve(null);
  }
}

module.exports = DevNullPubSubAdapter;
