const request = require("request");
const fetchBreedDescription = function(breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    function(error, response, body) {
      // Print the error if one occurred
      if (error) {
       return callback(error, null);
      }
      // Print the response status code if a response was received
      if (!error) {
        console.log("statusCode:", response && response.statusCode);
      }
      const data = JSON.parse(body);
      //print out the description for the user.
      if (breedName) {
        callback(null, data[0]["description"]);
      } else {
        callback("Breed Not Found!", null);
      }
    }
  );
};
module.exports = { fetchBreedDescription };
