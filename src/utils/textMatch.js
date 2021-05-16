/**
 * Function to check if a given string
 * is a valid latitude 
 * @param {String} string 
 * @returns {Boolean}
 */
export const latitudeMatch = (string) => {
  if(decimalMatch(string)) {
    const number = parseFloat(string);
    if(number <= 90 && number >= -90) {
      return true;
    }
  }
  return false;
}

/**
 * Function to check if a given string
 * is a valid longitude 
 * @param {String} string 
 * @returns {Boolean}
 */
export const longitudeMatch = (string) => {
  if(decimalMatch(string)) {
    const number = parseFloat(string);
    if(number <= 180 && number >= -180) {
      return true;
    }
  }
  return false;
}

/**
 * Function to check if a given string
 * is a valid decimal number
 * @param {String} string
 * @returns {Boolean}
 */
export const decimalMatch = (string) => {
  return !isNaN((Number(string)));
}