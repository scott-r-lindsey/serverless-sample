'use strict';

exports.handler = async event => {

  if (true == false) {
    console.log('cats and dogs, living together');
  }

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello world!',
        details: 'The sample code executed correctly',
      },
      null,
      2
    ),
  };
};
