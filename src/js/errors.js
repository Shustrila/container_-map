/***
 * Class Errors container Map
 * @constructor
 */
function Errors() {
  this.ErrorRepository = new Map();
}

/***
 * Method add. adds to container
 * @param {String|Number} key - key error
 * @param {String} val - description error
 */
Errors.prototype.add = function (key, val) {
  if (typeof key !== 'string') throw new TypeError('the key is not equal to the string');
  this.ErrorRepository.set(key, val);
};

/***
 * Method getError. get an message error
 * @param {String|Number} key - key error
 * @returns {string}
 */
Errors.prototype.getError = function (key) {
  const ErrorRepository = this.ErrorRepository.get(key);
  if (ErrorRepository !== undefined) {
    return ErrorRepository;
  }
  return 'Unknown error';
};

export default Errors;
