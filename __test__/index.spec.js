'use strict';

const {handler} = require('../src/index');
const {eventStub} = require('./stubs/eventHttpApiGateway.json');

describe('Sample Code Test', () => {

  beforeAll(() => {
    // we can do some setup here
    process.env.environment = 'local';
  });

  afterEach(() => {
    // cleanup
  });

  test('Returns JSON with expected values', () => {
    const event = eventStub;
    const context = {};

    // run the test
    const result = handler(event, context);

    result.then(
      (data) => {

        console.log(JSON.parse(data.body));

        expect(JSON.parse(data.body)).toEqual({
            "message": "Hello world!",
            "details": "The sample code executed correctly",
            "environment": "local",
        });
        expect(data).toHaveProperty('statusCode', 200);
        expect(data).toHaveProperty('body');

      }
    );
  });

});
