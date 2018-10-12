const request = require('supertest');
const { app, mongoose } = require('../../server');

describe('Post routes', () => {
    let responseRegister;

    beforeAll(async () => {
        mongoose.connection.dropDatabase();

        responseRegister = await Promise.resolve(
            request(app)
                .post('/api/register')
                .send({
                    email: 'email@gmail.com',
                    password: 'password'
                })
                .set('Accept', 'application/json')
        );
    });

    describe('create post routes', () => {
        it('should respond with a 201 with valid parameters', async done => {
            await request(app)
                .post('/api/post')
                .field('title', 'Lost airplane')
                .field('description', 'This is a story about an missing F1')
                .field('text', 'This F1 was found in Alasca ...')
                .attach('image', 'src/assets/cars.jpg')
                .set('Accept', 'application/x-www-form-urlencoded')
                .set('x-access-token', responseRegister.body.token)
                .expect(201);

            done();
        });

        it('should respond with a 400 with invalid parameters', async done => {
            await request(app)
                .post('/api/post')
                .send({})
                .set('Accept', 'application/x-www-form-urlencoded')
                .set('x-access-token', responseRegister.body.token)
                .expect(400);

            done();
        });
    });

    describe('get all posts routes', () => {
        it('should respond with a 200 with valid parameters', async done => {
            await request(app)
                .get('/api/posts/1')
                .expect(200);

            done();
        });
    });
    /*
    describe('get specific post routes', () => {
        it('should respond with a 200 with valid parameters', async done => {
            await request(app)
                .get(`/api/post/${resposeGetPosts.body.posts[0]._id}`)
                .expect(200);

            done();
        });
    });
*/
});
