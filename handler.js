'use strict';

module.exports.hello = async (event) => {
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
  //random number from 1 - 5000 ms
  const millisecondsDelay = Math.floor(Math.random() * 5000) + 1
  await delay(millisecondsDelay)

  const httpCodes = [200, 202, 400, 404, 500]
  const randomCode = Math.floor(Math.random() * 5) + 0
  const statusCode = httpCodes[randomCode]
  const message = statusCode == 500 ? 'There was some random error' : 'Your function executed successfully!'
  return {
    statusCode,
    body: JSON.stringify(
      {
        message,
        millisecondsDelay,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
