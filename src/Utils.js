"use strict";

class Utils {
  static unserializeMessagePayload(payload) {
    // try decode to json, otherwise return raw payload
    try {
      return JSON.parse(payload);
    } catch (e) {
      if (e instanceof SyntaxError) {
        return payload;
      } else {
        throw e;
      }
    }
  }
}

module.exports = Utils;
