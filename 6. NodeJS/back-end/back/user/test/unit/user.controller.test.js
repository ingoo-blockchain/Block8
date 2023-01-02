const { controller } = require('../../user.module')
const http = require('node-mocks-http')

const body = {
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
    controller.userService.signup = jest.fn()
    controller.userService.login = jest.fn()
    controller.userService.getUserByToken = jest.fn()
})

describe('user Controller **signup**', () => {
    beforeEach(() => {
        req.body = body
    })
    it('[try]', async () => {
        controller.userService.signup.mockReturnValue(Promise.resolve({ ...req.body }))

        expect(typeof controller.userService).toBe('object')
        expect(typeof controller.signup).toBe('function')
        await controller.signup(req, res, next)

        expect(controller.userService.signup).toBeCalledWith({ ...req.body })
        expect(res.statusCode).toBe(201)
        expect(res._getJSONData()).toStrictEqual(req.body)
        expect(res._isEndCalled()).toBe(true)
    })

    it('[catch]', async () => {
        const msg = { message: 'isvalid data' }
        const reject = Promise.reject(msg)
        controller.userService.signup.mockReturnValue(reject)
        await controller.signup(req, res, next)

        expect(next).toHaveBeenCalledWith(msg)
    })
})

describe('user Controller **getToken**', () => {
    it('[try]', async () => {
        const token = 'asdfasdf'
        expect(typeof controller.getToken).toBe('function')
        controller.userService.login.mockReturnValue(Promise.resolve(token))
        await controller.getToken(req, res, next)

        expect(controller.userService.login).toBeCalledWith({
            userid: req.body.userid,
            userpw: req.body.userpw,
        })

        expect(res.statusCode).toBe(200)
        expect(res._getJSONData()).toStrictEqual({ token })
    })

    it('[catch]', async () => {
        const msg = { message: 'error' }
        controller.userService.login.mockReturnValue(Promise.reject(msg))
        await controller.getToken(req, res, next)
        expect(next).toHaveBeenCalledWith(msg)
    })
})

describe('user Controller **getProfile**', () => {
    it('[try]', async () => {
        const token = 'asdfasdf'
        req.headers.authorization = `Bearer ${token}`
        controller.userService.getUserByToken.mockReturnValue({ userid: 'web7722' })
        expect(typeof controller.getProfile).toBe('function')
        await controller.getProfile(req, res, next)

        expect(res.statusCode).toBe(200)
        expect(res._getJSONData()).toStrictEqual({ userid: 'web7722' })
        expect(res._isEndCalled()).toBe(true)

        expect(controller.userService.getUserByToken).toBeCalledWith(token)
    })

    it('[catch]', async () => {
        const msg = { message: 'error' }
        const reject = Promise.reject(msg)
        controller.userService.getUserByToken.mockReturnValue(reject)
        await controller.getProfile(req, res, next)

        expect(next).toHaveBeenCalledWith(msg)
    })
})
