import request from 'supertest';
import {app} from './server';
import {expect} from "@jest/globals";

describe('Test server', () => {
    it('Request /Christian should "Hello, Christian"', async () => {
        await request(app)
            .get('/Christian')
            .send()
            .then((response) => {
                expect(response.statusCode).toBe(200)
                expect(response.get("content-type")).toBe("application/json; charset=utf-8")
                expect(response.body).toEqual(
                    {
                        "message": "Hello, Christian"
                    }
                )
            });
    });
});
