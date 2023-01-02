const { controller, service, repository, models } = require('../../user.module')
const http = require('node-mocks-http')

const signinData = {
    userid: 'web7722',
    userpw: '1234',
    username: 'ingoo',
}

let req,
    res,
    next = null

beforeEach(() => {
    req = http.createRequest()
    res = http.createResponse()
    next = jest.fn()
    models.User.create = jest.fn()
    repository.User.findOne = jest.fn()
    models.User.findOne = jest.fn()
})

describe('Repository', () => {
    it('injected Dependencies', () => {
        expect(typeof repository).toBe('object')
    })

    it('[try] addUser', async () => {
        const resolve = Promise.resolve({ dataValues: { ...signinData } })
        models.User.create.mockReturnValue(resolve)
        const result = await repository.addUser(signinData)

        expect(typeof repository.addUser).toBe('function')
        expect(models.User.create).toBeCalledWith(signinData)
        expect(result).toStrictEqual(signinData)
    })

    it('[catch] addUser', async () => {
        const reject = Promise.reject({})
        models.User.create.mockReturnValue(reject)
        await expect(async () => await repository.addUser(signinData)).rejects.toThrowError()
    })
    it('[catch] getUser', async () => {
        const reject = Promise.reject({})
        repository.User.findOne.mockReturnValue(reject)

        await expect(async () => {
            await repository.getUser({ userid: 'web7722' })
        }).rejects.toThrowError()
    })

    it('[try] getUser', async () => {
        expect(typeof repository.getUser).toBe('function')
        const resolve = Promise.resolve({ dataValues: { ...signinData } })
        repository.User.findOne.mockReturnValue(resolve)

        const result = await repository.getUser({
            userid: 'web7722',
            userpw: '1234',
        })
        expect(repository.User.findOne).toBeCalledWith({ where: { userid: 'web7722', userpw: '1234' } })
        expect(result).toStrictEqual(signinData)
    })
})

describe('Service', () => {
    it('injected Dependencies', async () => {
        expect(service.userRepository).toStrictEqual(repository)
        expect(typeof service).toBe('object')
    })

    it('[try] signup', async () => {
        expect(typeof service.signup).toBe('function')

        const resolve = Promise.resolve({ dataValues: {} })
        models.User.create.mockReturnValue(resolve)
        const data = { ...signinData, userpw: service.SHA256(signinData.userpw).toString() }
        const result = await service.signup(signinData)
        expect(models.User.create).toBeCalledWith(data)
        expect(result).toStrictEqual({})
    })

    it('[try] login', async () => {
        expect(typeof service.login).toBe('function')

        const password = service.SHA256('1234').toString()
        const resolve = Promise.resolve({ dataValues: { userid: 'web7722', userpw: password, username: 'ingoo' } })
        repository.User.findOne.mockReturnValue(resolve)

        const result = await service.login({ userid: 'web7722', userpw: '1234' })
        expect(repository.User.findOne).toBeCalled()
        expect(repository.User.findOne).toBeCalledWith({ where: { userid: 'web7722', userpw: password } })
        expect(result).toStrictEqual({ userid: 'web7722', userpw: password, username: 'ingoo' })
    })

    it('[catch] signup', async () => {
        const reject = Promise.reject({})
        models.User.create.mockReturnValue(reject)
        await expect(async () => await service.signup(signinData)).rejects.toThrowError()
    })

    it('[catch] login', async () => {
        const reject = Promise.reject({})
        service.userRepository.User.findOne.mockReturnValue(reject)
        await expect(async () => await service.login({ ...signinData })).rejects.toThrowError()
    })
})

describe('Controller', () => {
    it('injected Dependencies', async () => {
        expect(typeof controller).toBe('object')
        expect(controller.userService).toStrictEqual(service)
    })

    it('[try] signup', async () => {
        expect(typeof controller.signup).toBe('function')
        req.body = signinData
        await controller.signup(req, res, next)

        const data = { ...req.body, userpw: service.SHA256(req.body.userpw).toString() }
        expect(models.User.create).toBeCalledWith(data)
        expect(res.statusCode).toBe(200)

        const resolve = Promise.resolve({ dataValues: {} })
        models.User.create.mockReturnValue(resolve)
        await controller.signup(req, res, next)

        expect(res._getJSONData()).toStrictEqual({})
    })

    it('[catch] signup', async () => {
        const reject = Promise.reject({ dataValues: {} })
        models.User.create.mockReturnValue(reject)
        await controller.signup(req, res, next)

        expect(next).toHaveBeenCalled()
    })

    it('[try] getToken', async () => {
        expect(typeof controller.getToken).toBe('function')
        req.body = {
            userid: 'web7722',
            userpw: '1234',
        }

        const data = { ...req.body, userpw: service.SHA256(req.body.userpw).toString() }
        models.User.findOne.mockReturnValue(Promise.resolve(data))
        expect(models.User.findOne).toBeCalledWith(data)
        // expect(res.statusCode).toBe(200)

        await controller.login(req, res, next)
    })
})
