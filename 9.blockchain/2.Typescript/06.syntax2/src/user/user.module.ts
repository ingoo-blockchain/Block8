import UserService from "./service/user.service"
import Strategy from "./strategy/Strategy"
import { GoogleAuthenticator } from "./strategy/google.strategy"
import { KakaoAuthenticator } from "./strategy/kakao.strategy"
import { EmailAuthenticator } from "./strategy/local.strategy"
import UserController from "./user.controller"

const strategy = new Strategy()
strategy.set("local", new EmailAuthenticator())
strategy.set("kakao", new KakaoAuthenticator())
strategy.set("google", new GoogleAuthenticator())

const userService = new UserService(strategy)
const userController = new UserController(userService)

userController.signin()
