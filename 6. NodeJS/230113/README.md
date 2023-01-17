# Sequelize

-   User
-   Board
-   Comment
-   Liked
-   hash
-   hashtag

```sql
CREATE TABLE person(
    first_name VARCHAR(30) not null,
    last_name VARCHAR(30) not null,
    PRIMARY KEY(first_name,last_name)
);

'곽','인구'
'곽','이구'
```

PRIMARY KEY 는 기본키인데, 두개합쳐서 하나의 기본키가 된다.

**User**

```
userid PK
userpw
username
provider enum 'local', 'kakao'
snsId null
```

**Board**

```
id PK
subject
content
userid
createdAt
hit
```

**Comment**

```
id PK
boardid FK
userid FK
```

**liked**

```
userid FK
boardid FK
```

**hashtag**

```
boardid fk
tag fk
```

**hash**

```
tag pk
```

```
npm init -y
npm install express mysql2 sequelize
```

**config.js**

```

```


FK 

테이블명 + PK
User + UserId = UserUserId

Board + Id = BoardId



1 #javascript, #nodejs, #typescript
2 #javascript, #DOM, #HTML


javascript
nodejs
typescript
dom
html
