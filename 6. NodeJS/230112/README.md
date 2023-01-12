# Mysql

## 제약조건

-   기본키 (Primary key)

    -   중복되지 않는 고유값
    -   Null 허용하지않음.
    -   테이블당 하나의 기본키만 지정 가능

-   고유키 (Unique)

    -   중복되지 않는 고유값
    -   Null 가능

-   외래키 (Foreign key)

부모, 자식
자식테이블에게 필드하나추가 부모테이블의 고유식별자 FK

1:1 : 유저테이블
1:N : 1 인 친구가 부모테이블 , N : 자식테이블
N:M : 해시태그 , #선팔 #맞팔 #좋아요반사

## 테이블 생성

```
npm init -y
npm install mysql2 sequelize
```

**디렉토리**

```
/
| -- models
| ---- index.js
| ---- user.model.js
| ---- board.model.js
| -- config.js
```

**SQL**

```sql
CREATE TABLE `user`(
    userid VARCHAR(30) PRIMARY KEY,
    userpw VARCHAR(64) NOT NULL,
    username VARCHAR(20)
)
```

```sql
CREATE TABLE `Board`(
    id INT PRIMARY KEY AUTO_INCREMENT,
    subject VARCHAR(100) NOT NULL,
    content TEXT NOT NULL,
    userid VARCHAR(30) NOT NULL,
    register_date datetime default now(),
    hit INT default 0
)
```

**Sequelize**

## 외래키 설정

```sql

ALTER TABLE `Board` -- 자식테이블
    ADD CONSTRAINT fk_board_userid
    FOREIGN KEY (userid) -- 자식테이블에서 부모의 식별자를 담는 필드명 , 자식테이블 FK , 자식테이블 외래키
    REFERENCES User(userid);
    -- ON DELETE
    -- ON UPDATE

Query OK, 0 rows affected (0.65 sec)
Records: 0  Duplicates: 0  Warnings: 0


SELECT * FROM information_schema.table_constraints
WHERE TABLE_SCHEMA = 'sample' AND TABLE_NAME = 'Board';


ALTER TABLE `Board` DROP CONSTRAINT fk_board_userid;
```

```sql

ALTER TABLE `Board` -- 자식테이블
    ADD CONSTRAINT fk_board_userid
    FOREIGN KEY (userid) -- 자식테이블에서 부모의 식별자를 담는 필드명 , 자식테이블 FK , 자식테이블 외래키
    REFERENCES User(userid);
    -- ON DELETE CASCADE || NO ACTION ~ RESTRICT
    -- ON UPDATE
```

user 내용을 채우고,
board 내용을 채우고

user 내용을 지웁니다.

```sql
ALTER TABLE `Board` -- 자식테이블
    ADD CONSTRAINT fk_board_userid
    FOREIGN KEY (userid) -- 자식테이블에서 부모의 식별자를 담는 필드명 , 자식테이블 FK , 자식테이블 외래키
    REFERENCES User(userid)
    ON DELETE SET NULL;
    -- ON UPDATE CASCADE
```

```sql
UPDATE Board SET userid='admin2' WHERE id=6;

-- 제약사항을 안지우고, update 했을대.
-- Cannot add or update a child row: a foreign key constraint fails (`sample`.`Board`, CONSTRAINT -- `fk_board_userid`
-- FOREIGN KEY (`userid`) REFERENCES `User` (`userid`) ON DELETE CASCADE)
```

CASCADE 같이 삭제시키기
RESTRICT 아예 실행이 안되게.
SET NULL

-   자식테이블에서 FK내용을 NOT NULL 되어선 안됩니다.

```sql
delete from User where userid='web7722';
```

#### JOIN

```sql
SELECT
    A.id,
    A.subject,
    A.registerDate,
    A.hit,
    A.userid,
    B.username
FROM Board as A
JOIN User as B
  ON A.userid = B.userid;
```
