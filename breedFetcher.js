const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  request(url, (error, response, body) => {
    if (error) {
      callback('error found: ', null);
      return;
    }
    const breed = JSON.parse(body);
    if (!breed[0]) {
      callback(`The breed ${breedName} was not found`, null);
      return;
    }
    if (response.statusCode === 200) {
      callback(null, breed[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };