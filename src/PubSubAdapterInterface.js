'use strict';

/**
 * @callback subscriberCallback
 * @param {*} message - The message payload received
 */

/**
 * PubSubAdapterInterface Interface
 *
 * @abstract
 * @interface
 */
class PubSubAdapterInterface {
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

  }
}

module.exports = PubSubAdapterInterface;
