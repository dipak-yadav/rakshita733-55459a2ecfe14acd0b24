// services/api.js

import axios from 'axios';

export async function fetchCountryData(countryName) {
  // axios.get(`https://restcountries.eu/rest/v2/name/` + countryName)
  // .then(res => {
  //  return res
  // })
    return axios.get('https://restcountries.eu/rest/v2/name/' + countryName);
  };

  

