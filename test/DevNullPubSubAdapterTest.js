'use strict';

let sinon = require('sinon');
let DevNullPubSubAdapter = require('../src/DevNullPubSubAdapter');

describe('DevNullPubSubAdapter', () => {
  describe('subscribe & publish', () => {
    it('should not do anything', () => {
      let adapter = new DevNullPubSubAdapter();

      let handler1 = sinon.spy();
      adapter.subscribe('test_channel', handler1);

      let handler2 = sinon.spy();
      adapter.subscribe('test_channel', handler2);

      let handler3 = sinon.spy();
      adapter.subscribe('another_channel', handler3);

      adapter.publish('test_channel', 'This message should go to /dev/null');
      adapter.publish('another_channel', 'This message should also go to /dev/null');

      sinon.assert.notCalled(handler1);
      sinon.assert.notCalled(handler2);
      sinon.assert.notCalled(handler3);
    });
  });
});
