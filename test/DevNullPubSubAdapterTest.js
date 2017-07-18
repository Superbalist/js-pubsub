'use strict';

let chai = require('chai');
let expect = chai.expect;
let sinon = require('sinon');
let DevNullPubSubAdapter = require('../lib/DevNullPubSubAdapter');

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

      let promises = [];

      promises.push(adapter.publish('test_channel', 'This message should go to /dev/null'));
      promises.push(adapter.publish('another_channel', 'This message should also go to /dev/null'));

      return Promise.all(promises).then((results) => {
        sinon.assert.notCalled(handler1);
        sinon.assert.notCalled(handler2);
        sinon.assert.notCalled(handler3);

        expect(results[0]).to.be.null;
        expect(results[1]).to.be.null;
      });
    });
  });
});
