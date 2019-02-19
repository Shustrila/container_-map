/***
 * Class Errors container Map
 * @constructor
 */
class Errors {
  constructor(){
    this.errorRepository = new Map();
  }

  /***
   * Method add. adds to container
   * @param {String|Number} key - key error
   * @param {String} val - description error
   */
  add(key, val) {
    if (typeof key !== 'string') throw new TypeError('the key is not equal to the string');
    this.errorRepository.set(key, val);
  }

  /***
   * Method getError. get an message error
   * @param {String|Number} key - key error
   * @returns {string}
   */
  getError(key) {
    const errorRepository = this.errorRepository.get(key);
    if (errorRepository !== undefined) {
      return errorRepository;
    }
    return 'Unknown error';
  }
}


export default Errors;
