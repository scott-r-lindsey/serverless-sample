'use strict';

const {handler} = require('../src/index');
const {eventStub} = require('./stubs/eventHttpApiGateway.json');

describe('Sample Code Test', () => {

  beforeAll(() => {
    // we can do some setup here
  });

  afterEach(() => {
    // cleanup
  });


  test('True is True', () => {
    expect(true).toBeTruthy();
  });

  test('Returns JSON with expected values', () => {
    const event = eventStub;
    const context = {};

    const result = handler(event, context);
    result.then(data => expect(data).toMatchSnapshot());
  });


});



