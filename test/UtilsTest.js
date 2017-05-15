'use strict';

let expect = require('chai').expect;
let Utils = require('../lib/Utils');

describe('Utils', () => {
  describe('unserializeMessagePayload', () => {
    it('should parse json to an object', () => {
      expect(Utils.unserializeMessagePayload('{"hello":"world"}')).to.deep.equal({hello: 'world'});
    });

    it('should return the raw payload if json parsing fails', () => {
      expect(Utils.unserializeMessagePayload('this is a string')).to.equal('this is a string');
    });
  });

  describe('serializeMessagePayload', () => {
    it('should serialize an object to json', () => {
      expect(Utils.serializeMessagePayload('test')).to.equal('"test"');
      expect(Utils.serializeMessagePayload(true)).to.equal('true');
      expect(Utils.serializeMessagePayload(1.6)).to.equal('1.6');
      expect(Utils.serializeMessagePayload({hello: 'world'})).to.equal('{"hello":"world"}');
    });
  });
});
