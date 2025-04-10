const request = require('supertest');
const app = require('../src/index');

describe('GET /health', () => {
  it('should return OK', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(JSON.parse(res.text)).toStrictEqual({"status":"ok", "env":"test"});
  });
});