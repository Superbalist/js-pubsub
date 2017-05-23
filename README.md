# @superbalist/js-pubsub

A JS abstraction for the pub-sub pattern

[![Author](http://img.shields.io/badge/author-@superbalist-blue.svg?style=flat-square)](https://twitter.com/superbalist)
[![Build Status](https://img.shields.io/travis/Superbalist/js-pubsub/master.svg?style=flat-square)](https://travis-ci.org/Superbalist/js-pubsub)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE)
[![NPM Version](https://img.shields.io/npm/v/@superbalist/js-pubsub.svg)](https://www.npmjs.com/package/@superbalist/js-pubsub)
[![NPM Downloads](https://img.shields.io/npm/dt/@superbalist/js-pubsub.svg)](https://www.npmjs.com/package/@superbalist/js-pubsub)

## Installation

```bash
npm install @superbalist/js-pubsub
```

## Adapters

* Local (bundled)
* /dev/null (bundled)
* Redis - https://github.com/Superbalist/js-pubsub-redis
* Google Cloud - https://github.com/Superbalist/js-pubsub-google-cloud
* HTTP - https://github.com/Superbalist/js-pubsub-http

## Integrations

Want to get started quickly? Check out some of these integrations:

* [js-pubsub-manager](https://github.com/Superbalist/js-pubsub-manager) - A factory and manager with multi adapter support.

## Usage

```node
"use strict";

let LocalPubSubAdapter = require('@superbalist/js-pubsub').LocalPubSubAdapter;

let adapter = new LocalPubSubAdapter();

// consume messages
adapter.subscribe('my_channel', (message) => {
  console.log('channel: my_channel');
  console.log(message);
});

// publish messages
adapter.publish('my_channel', 'Hello World!');

// publish multiple messages
let messages = [
  'message 1',
  'message 2',
];
adapter.publishBatch('my_channel', messages);
```

## Writing an Adapter

You can easily write your own custom adapter by implementing the [PubSubAdapterInterface](src/PubSubAdapterInterface.js) interface.

```node
class CustomAdapter {
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

  /**
   * Publish multiple messages to a channel.
   *
   * @param {string} channel
   * @param {*[]} messages
   * @example
   * let messages = [
   *   'message 1',
   *   'message 2',
   * ];
   * adapter.publishBatch('my_channel', messages);
   */
  publishBatch(channel, messages) {

  }
}
```

## Examples

The library comes with [examples](examples) for all adapters and a [Dockerfile](Dockerfile) for
running the example scripts.

Run `make up`.

You will start at a `bash` prompt in the `/usr/src/app` directory.

If you need another shell to publish a message to a blocking consumer, you can run `docker-compose run js-pubsub /bin/bash`

To run the examples:
```bash
$ node examples/LocalExample.js
```
