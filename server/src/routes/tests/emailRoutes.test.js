const request = require('supertest');
const { app, mongoose } = require('../../server');

describe('Email routes', () => {
    beforeAll(() => {
        mongoose.connection.dropDatabase();
    });

    it('should respond with a 200 with valid parameters', async done => {
        await request(app)
            .post('/api/send-email')
            .send({
                email: 'joaoferr93@gmail.com',
                message: 'teste',
                name: 'teste'
            })
            .set('Accept', 'application/json')
            .expect(200);

        done();
    });

    it('should respond with a 400 with invalid parameters', async done => {
        await request(app)
            .post('/api/send-email')
            .send({})
            .set('Accept', 'application/json')
            .expect(400);

        done();
    });
});
