// Class
// 객체를 만들기 위해!
// OOP
// class 안에선느 어지간하면 다 메서드

interface UserInfo {
    username: string
    userid: string
}

abstract class Person {
    abstract addUser(userid: string, username: string): UserInfo
}

class User extends Person {
    addUser(userid: string, username: string): UserInfo {
        return { userid, username }
    }
}


