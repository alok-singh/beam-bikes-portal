export const latitudeMatch = (string) => {
  if(decimalMatch(string)) {
    const number = parseFloat(string);
    if(number <= 90 && number >= -90) {
      return true;
    }
  }
  return false;
}

export const longitudeMatch = (string) => {
  if(decimalMatch(string)) {
    const number = parseFloat(string);
    if(number <= 180 && number >= -180) {
      return true;
    }
  }
  return false;
}

export const decimalMatch = (string) => {
  return !isNaN((parseFloat(string)));
}