# Back-end

나누기

ORM

-   Table -> Object
    Object -> table
    Object <- table

SQL 프로그래머스 SQL

-

TDD

```
| GET    /comments
| GET    /comments/:id
| POST   /comments
| PUT    /comments/:id
| DELETE /comments/:id

```

Router -> Controller -> Service -> Repository -> pool

## ORM 설정 > SQL구문을 사용하지 않을수도 있다.

```sql
create table User(
    id int(11) primary key auto_increment,
    userid varchar(30) not null,
)

```

```js
class User {
    constructor() {
        this.id
        this.userid
    }
}

User.find() // select * from user
```

JAVA 

Nodejs

`sequelize` typeORM  - typescript 기반 ^^.. 

ORM <-- 

설정하고 간단한 사용까지 


model...
