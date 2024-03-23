// Require the request module
const request = require('request');
// Require local file system so can write to
const fs = require('fs');

const arg = process.argv;

const url = arg[2];
const localPath = arg[3];

// Make an http request and wait for the response
request(url, (error, response, body) => {
  // add "all" of the data toegther and store
  const data = error + response + body;
  // Write the data received to a local file
  fs.writeFile(localPath, data, (err) => {
    if (err) {
      console.log(err);
    }
    console.log("success");
  });

});

