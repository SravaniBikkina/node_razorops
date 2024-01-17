// tests/test.js
const request = require('supertest');
const app = require('../app');

test('GET /', async () => {
  const response = await request(app).get('/');
  expect(response.statusCode).toBe(200);
  expect(response.text).toBe('Hello, Razorops CI/CD!');
});

