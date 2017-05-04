'use strict';

/**
 * Utils Class
 *
 * @abstract
 */
class Utils {
  /**
   * Unserialize an arbitrary message payload.
   *
   * The method will first try parse the payload as JSON.
   * If this succeeds, an object will be returned, otherwise the payload
   * is returned as is.
   *
   * @param {*} payload
   * @return {*}
   */
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
