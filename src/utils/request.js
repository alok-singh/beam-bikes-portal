/**
 * All API calls are through this util
 */

import { config } from '../config/vars';

const { defaultApiValues, BASE_URL } = config;
const { 
  MIN_LATITUDE,
  MAX_LATITUDE,
  MIN_LONGITUDE,
  MAX_LONGITUDE,
  GENERATE_BIKES_LIMIT,
  SEARCH_LATITUDE,
  SEARCH_LONGITUDE,
  SEARCH_DISTANCE,
  SEARCH_BIKES_LIMIT,
} = defaultApiValues;

/**
 * 
 * @param {Object} params 
 * @returns {String}
 */
const generateQueryString = (params) => {
  return Object.keys(params).reduce((acc, item, index) => {
    if(params[item]) {
      acc = `${acc}${index === 0 ? `` : `&`}${item}=${params[item]}`;
    }
    return acc;
  }, '');
}

/**
 * Function to generate the API 
 * route to generate bikes
 * @param {Number} minLatitude 
 * @param {Number} maxLatitude 
 * @param {Number} minLongitude 
 * @param {Number} maxLongitude 
 * @param {Number} limit 
 * @returns {String}
 */
export const generateBikes = (
  minLatitude = MIN_LATITUDE, 
  maxLatitude = MAX_LATITUDE, 
  minLongitude = MIN_LONGITUDE, 
  maxLongitude = MAX_LONGITUDE, 
  limit = GENERATE_BIKES_LIMIT
) => {
  const query = {minLatitude, maxLatitude, minLongitude, maxLongitude, limit};
  const queryString = generateQueryString(query);
  const requestUrl = `${BASE_URL}/v1/generate-bikes?${queryString}`;
  return request(requestUrl);
}

/**
 * Function to generate the API
 * route to get bikes with params
 * @param {Number} latitude
 * @param {Number} longitude
 * @param {Number} distance
 * @param {Number} limit
 * @returns {String}
 */
export const fetchBikes = (
  lat = SEARCH_LATITUDE, 
  lng = SEARCH_LONGITUDE, 
  distance = SEARCH_DISTANCE, 
  limit = SEARCH_BIKES_LIMIT
) => {
  const query = { lat, lng, distance, limit };
  const queryString = generateQueryString(query);
  const requestUrl = `${BASE_URL}/v1/bikes?${queryString}`;
  return request(requestUrl);
};

/**
 * Function to make API call 
 * with provided URL
 * @param {String} url 
 * @returns {Object}
 */
export const request = async (url) => {
  return (await fetch(url)).json();
};