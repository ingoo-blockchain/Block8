const UserRepository = require("./user.repository")

describe("UserRepository", () => {
    let User, repository
    beforeEach(() => {
        User = {
            create: jest.fn().mockResolvedValue({}),
        }

        repository = new UserRepository({ User }) //UserRepository { User:{} }
    })

    it("UserRepository 를 잘 가져오는가", () => {
        expect(typeof UserRepository).toBe("function")
    })

    describe("addUser", () => {
        let payload = {
            userid: "web7722",
            userpw: "1234",
            username: "ingoo",
        }
        it("[try] addUser 메서드 확인", async () => {
            const user = await repository.addUser(payload)
            expect(User.create).toHaveBeenCalledWith(payload, { raw: true })
            expect(user).toEqual({})
        })

        it("[catch] create method 가 reject 가 발생되었을때.", async () => {
            User.create = jest.fn().mockRejectedValue({})
            await expect(async () => await repository.addUser(payload)).rejects.toThrow()
        })
    })
})
