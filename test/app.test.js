const request = require('supertest');
const express = require('express');
const {server} = require('../src/server');

afterAll((done) => {
    server.close(done);
});

describe('GET /api/hello', () => {
    it('should return a greeting message', async () => {
        const res = await request(server)
                            .get('/api/hello');
        expect(res.statusCode).toEqual(200);
        expect(res.body.message).toBe('Response from Hello')
    });
})

describe('POST /api/greet', () => {
    it('should return a personalized greeting', async () => {
        const res = await request(server)
                            .post('/api/greet')
                            .send({name:'Vineeth'})

        expect(res.statusCode).toEqual(200);
        expect(res.body.message).toBe(`Hello, Vineeth`);
    })
})