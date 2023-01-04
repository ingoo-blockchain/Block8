# 비동기 통신

(callback || promise || async/await)

-   back 3000
-   front 3005

-   터미널도 2개켜서

## Database

## CRUD

## xmlhttprequest -> fetch

## fetch --> axios

## back-end

CRUD

GET /board/list
POST /board/write
GET /board/view
POST /board/modify?idx=1
POST /board/delete

GET /comments
POST /comments
GET /comments/:id
PUT /comments/:id
DELETE /comments/:id

comment
controllers
services
repostiroy

## postman

HTTP 요청을 해주는 친구에요.

```html
<!-- x-www-form-urlencoded -->
<form action="/" method="post">
    <input type="text" name="userid" />
    <input type="text" name="userpw" />
    <button type="submit">Submit</button>
</form>

POST / alksdjf:asl;djfkl;asdf userid=asdfasdf&userpw=asdfasdf
```

### DB

sudo service mysql start
mysql -uingoo -pingoo

```sql
create database comments;

use comments;

create table Comment(
    `id` INT(11) PRIMARY KEY AUTO_INCREMENT,
    `userid` VARCHAR(30) NOT NULL,
    `content` TEXT NOT NULL,
    `register` DATETIME NOT NULL DEFAULT now()
);
```

`id`
`userid`
`content`
`register`
