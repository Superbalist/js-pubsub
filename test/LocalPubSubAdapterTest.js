'use strict';

let expect = require('chai').expect;
let sinon = require('sinon');
let LocalPubSubAdapter = require('../lib/LocalPubSubAdapter');

describe('LocalPubSubAdapter', () => {
  describe('getSubscribersForChannel', () => {
    it('should return an empty array for a channel which does not exist', () => {
      let adapter = new LocalPubSubAdapter();
      let subscribers = adapter.getSubscribersForChannel('users');
      expect(subscribers).to.be.an('array');
      expect(subscribers).to.be.empty;
    });
  });


  describe('subscribe', () => {
    it('should append a handler to the appropriate channel key', () => {
      let adapter = new LocalPubSubAdapter();

      let handler1 = () => {};
      adapter.subscribe('test_channel', handler1);

      let handler2 = () => {};
      adapter.subscribe('test_channel', handler2);

      let handler3 = () => {};
      adapter.subscribe('another_channel', handler3);

      let subscribers = adapter.getSubscribersForChannel('test_channel');
      expect(subscribers).to.have.lengthOf(2);
      expect(subscribers[0]).to.equal(handler1);
      expect(subscribers[1]).to.equal(handler2);

      subscribers = adapter.getSubscribersForChannel('another_channel');
      expect(subscribers).to.have.lengthOf(1);
      expect(subscribers[0]).to.equal(handler3);
    });
  });

  describe('publish', () => {
    it('should invoke the handlers listening for messages', () => {
      let adapter = new LocalPubSubAdapter();

      let handler1 = sinon.spy();
      adapter.subscribe('test_channel', handler1);

      let handler2 = sinon.spy();
      adapter.subscribe('test_channel', handler2);

      let handler3 = sinon.spy();
      adapter.subscribe('another_channel', handler3);

      let promises = [];

      promises.push(adapter.publish('test_channel', 'This is a message sent to handler1 & handler2'));
      promises.push(adapter.publish('another_channel', 'This is a message which only handler3 will receive'));

      return Promise.all(promises).then((results) => {
        sinon.assert.calledOnce(handler1);
        sinon.assert.calledWith(handler1, 'This is a message sent to handler1 & handler2');

        sinon.assert.calledOnce(handler2);
        sinon.assert.calledWith(handler2, 'This is a message sent to handler1 & handler2');

        sinon.assert.calledOnce(handler3);
        sinon.assert.calledWith(handler3, 'This is a message which only handler3 will receive');

        expect(results[0]).to.be.null;
        expect(results[1]).to.be.null;
      });
    });
  });

  describe('publishBatch', () => {
    it('should invoke the handlers listening for messages', () => {
      let adapter = new LocalPubSubAdapter();

      let handler1 = sinon.spy();
      adapter.subscribe('test_channel', handler1);

      let handler2 = sinon.spy();
      adapter.subscribe('test_channel', handler2);

      let messages = [
        'This is a message sent to handler1 & handler2',
        'This is another message!',
      ];
      adapter.publishBatch('test_channel', messages);

      sinon.assert.calledTwice(handler1);
      sinon.assert.calledWith(handler1, 'This is a message sent to handler1 & handler2');
      sinon.assert.calledWith(handler1, 'This is another message!');

      sinon.assert.calledTwice(handler2);
      sinon.assert.calledWith(handler2, 'This is a message sent to handler1 & handler2');
      sinon.assert.calledWith(handler2, 'This is another message!');
    });
  });

  describe('subscribe handlers', () => {
    it('should receive messages as primitive types', () => {
      let adapter = new LocalPubSubAdapter();

      let handler = sinon.spy();
      adapter.subscribe('test_channel', handler);

      adapter.publish('test_channel', 'hello!');
      adapter.publish('test_channel', true);
      adapter.publish('test_channel', 3);
      adapter.publish('test_channel', {user: {first_name: 'Matthew'}});

      sinon.assert.calledWith(handler, 'hello!');
      sinon.assert.calledWith(handler, true);
      sinon.assert.calledWith(handler, 3);
      sinon.assert.calledWith(handler, {user: {first_name: 'Matthew'}});
    });
  });
});
