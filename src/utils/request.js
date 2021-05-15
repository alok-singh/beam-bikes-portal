import { config } from '../config/vars';

export const generateBikes = (minLatitude = 1.30, maxLatitude = 1.36, minLongitude = 103.65, maxLongitude = 103.99, limit = 1000) => {
  const query = {minLatitude, maxLatitude, minLongitude, maxLongitude, limit};
  const queryString = Object.keys(query).reduce((acc, item, index) => {
    if(query[item]) {
      acc = `${acc}${index === 0 ? `` : `&`}${item}=${query[item]}`;
    }
    return acc;
  }, '');
  const requestUrl = `${config.BASE_URL}/v1/generate-bikes?${queryString}`;
  return request(requestUrl);
}

export const fetchBikes = (latitude = 1.3690926, longitude = 103.8164342, distance = 50, limit = 10) => {
  const requestUrl = `${config.BASE_URL}/v1/bikes?lat=${latitude}&lng=${longitude}&distance=${distance}&limit=${limit}`;
  // const requestUrl = `${config.BASE_URL}/v1/bikes?limit=10000`;
  return request(requestUrl);
  
};


export const request = async (url) => {
  return (await fetch(url)).json();
};