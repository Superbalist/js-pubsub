# @superbalist/js-pubsub

A JS abstraction for the pub-sub pattern

[![Author](http://img.shields.io/badge/author-@superbalist-blue.svg?style=flat-square)](https://twitter.com/superbalist)
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

## Integrations

Want to get started quickly? Check out some of these integrations:

* [js-pubsub-manager](https://github.com/Superbalist/js-pubsub-manager) - A factory and manager with multi adapter support.

## Usage

```node
"use strict";

var LocalPubSubAdapter = require('@superbalist/js-pubsub').LocalPubSubAdapter;

let adapter = new LocalPubSubAdapter();

// consume messages
adapter.subscribe('my_channel', (message) => {
  console.log('channel: my_channel');
  console.log(message);
});

// publish messages
adapter.publish('my_channel', 'Hello World!');
```

## Writing an Adapter

You can easily write your own custom adapter by implementing the following methods on your class.

```node
class CustomAdapter {
  subscribe(channel, handler) {

  }

  publish(channel, message) {

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
