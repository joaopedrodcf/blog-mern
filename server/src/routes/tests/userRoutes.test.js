const request = require('supertest');
const { app, mongoose } = require('../../server');

describe('User routes', () => {
    beforeAll(() => {
        mongoose.connection.dropDatabase();
    });

    describe('register routes', () => {
        it('should respond with a 200 with valid parameters', async done => {
            await request(app)
                .post('/api/register')
                .send({
                    email: 'email1@gmail.com',
                    password: 'password'
                })
                .set('Accept', 'application/json')
                .expect(200);

            done();
        });

        it('should respond with a 400 with invalid parameters', async done => {
            await request(app)
                .post('/api/register')
                .send({})
                .set('Accept', 'application/json')
                .expect(400);

            done();
        });
    });

    describe('login routes', () => {
        it('should respond with a 200 with valid parameters', async done => {
            await Promise.resolve(
                request(app)
                    .post('/api/register')
                    .send({
                        email: 'email@gmail.com',
                        password: 'password'
                    })
                    .set('Accept', 'application/json')
            );

            await request(app)
                .post('/api/login')
                .send({
                    email: 'email@gmail.com',
                    password: 'password'
                })
                .set('Accept', 'application/json')
                .expect(200);

            done();
        });

        it('should respond with a 400 with invalid parameters', async done => {
            await request(app)
                .post('/api/login')
                .send({
                    email: '',
                    password: ''
                })
                .set('Accept', 'application/json')
                .expect(400);

            done();
        });
    });
});
