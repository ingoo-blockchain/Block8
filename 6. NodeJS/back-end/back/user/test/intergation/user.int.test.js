const request = require('supertest')
const app = require('../../../app')
const { sequelize } = require('../../../models')

const data = {
    userid: 'web7722',
    userpw: '1234',
    username: 'ingoo111',
}

beforeAll(async () => {
    await sequelize.sync({ force: true })
})

it('POST /user', async () => {
    const response = await request(app).post('/user').set('Content-type', 'application/json').send(data)
    expect(response.statusCode).toBe(201)
})
