'use strict';

let expect = require('chai').expect;
let Utils = require('../src/Utils');

describe('Utils', () => {
  describe('unserializeMessagePayload', () => {
    it('should parse json to an object', () => {
      expect(Utils.unserializeMessagePayload('{"hello":"world"}')).to.deep.equal({hello: 'world'});
    });

    it('should return the raw payload if json parsing fails', () => {
      expect(Utils.unserializeMessagePayload('this is a string')).to.equal('this is a string');
    });
  });
});
