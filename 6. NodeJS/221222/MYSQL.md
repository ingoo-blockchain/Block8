# Mysql 설치

## install

### 맥북

```sh
$ brew install mysql
$ mysql --version
$ brew services start mysql
$ ps -ef | grep mysql
$ sudo mysql_secure_installation
# all done 뜰떄까지

mysql -uroot -p[패스워드]
mysql >
# 여기화면까지
```

### WSL for linux

```sh
$ sudo apt update
$ sudo apt upgrade
$ sudo apt install mysql-server
$ mysql --version
$ sudo service mysql start
$ ps -ef | grep mysql

$ sudo mysql
`mysql >` ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password by 'ASDFasdf1@';


# 8자이상 숫자 대소문자 특수문자
`Query Ok`


```

## setting

```sh
sudo mysql_secure_installation
# sudo 에 관련된 패스워드를 물어봄 N
# 1. mysql root N
# 2. 익명사용자 y
# 3. 원격접속 권한 y
# 4. test 테이블 삭제 y
# 5.

# all done
mysql -uroot -p[패스워드]
mysql > mysql 관련된 명령어를 작성하면
ctrl + c
mysql > exit
```



## DATABASE (데이터베이스)

단순하게 데이터들을 저장하는 공간



## DBMS

**D**ata**B**ase **M**anagement **S**ystem



## SQL

**S**tructured **Q**uery **L**anguage



`DBMS` 에서 구현된 기능을 실행시키위해 특정한 언어이다. 

데이터를 보관하거나, 저장하거나, 삭제하거나, 수정



`No SQL` vs `SQL` 



`RDBMS` 



## RDBMS



**R**elational **D**ata**B**ase **M**anagement **S**ystem



관계형 데이터베이스 대표적인 플랫폼(프로그램)

- Oracle
- Mysql
- MariaDB
- PostgreSQL
- Mssql 



비관계형 데이터베이스 대표적인 플랫폼(프로그램)

- MongoDB





## SQL 개요

```sh
$ mysql -uroot -proot
mysql >  [SQL문법]
```



### SQL 분류

- **데이터 정의어 (DDL)** 
- **데이터 조작어 (DML)**
- **데이터 제어어 (DCL)**



#### 데이터 정의어 (DDL)

- CREATE
- SHOW
- DROP
- ALTER 



```sql
SHOW DATABASES;
+--------------------+
| Database           |
+--------------------+
| example            |
| example2           |
| express_board      |
| home               |
| homepage           |
| img                |
| information_schema |
| ingchat            |
| mysql              |
| performance_schema |
| sample             |
| sleact             |
| sys                |
| test               |
| test_db            |
+--------------------+
```





````sql
CREATE DATABASE ingoo
# Query OK, 1 row affected (0.02 sec)

SHOW DATABASES;

DROP DATABASE ingoo;
# Query OK, 0 rows affected (0.03 sec)

SHOW DATABASES;

CREATE DATABASE ingoo DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
# Query OK, 1 row affected (0.03 sec)

USE ingoo;
# Database changed

SHOW tables;
# Empty set (0.00 sec)
````



```sql
CREATE TABLE store(
	category VARCHAR(50),
    store_name VARCHAR(50),
    menu_name VARCHAR(50),
    price VARCHAR(50),
    tel VARCHAR(50),
    address VARCHAR(50)
);
# Query OK, 0 rows affected (0.12 sec)
```



```sql
ALTER TABLE store RENAME TO store2;
# Query OK, 0 rows affected (0.11 sec)

SHOW TABLES;
+-----------------+
| Tables_in_ingoo |
+-----------------+
| store2          |
+-----------------+

ALTER TABLE store2 RENAME TO store;

DESC store;
+------------+-------------+------+-----+---------+-------+
| Field      | Type        | Null | Key | Default | Extra |
+------------+-------------+------+-----+---------+-------+
| category   | varchar(50) | YES  |     | NULL    |       |
| store_name | varchar(50) | YES  |     | NULL    |       |
| menu_name  | varchar(50) | YES  |     | NULL    |       |
| price      | varchar(50) | YES  |     | NULL    |       |
| tel        | varchar(50) | YES  |     | NULL    |       |
| address    | varchar(50) | YES  |     | NULL    |       |
+------------+-------------+------+-----+---------+-------+
```



##### Field Type 

`숫자형` , `문자형` , `날짜형` , ` 이진데이터타입` 



###### 숫자형

- INT  : 4byte  -21억~21억 



###### 문자형

- CHAR : 255byte `고정 데이터`
- VARCHAR : 255byte  `가변 데이터`
- TEXT : 65535 byte



###### 날짜형

- DATE : 년월일
- TIME : 시간 
- **DATETIME** : 년월일 시간 (yyyy-mm-dd hh:MM:ss) 8byte
- **TIMESTAMP** : 년월일 시간  (interger) 4byte
- YEAR



###### 이진데이터타입

- BLOB : 이미지 



###### Key

- PRIMARY KEY  : 중복 입력불가 null X, 테이블당 하나만 넣을수있음.

- UNIQUE : 중복 입력 불가 , null 됨





자동생성

AUTO_INCREMENT : 1씩 자동생성 



```sql
CREATE TABLE user(
    user_id VARCHAR(50) PRIMARY KEY,
    user_pw VARCHAR(50) NOT NULL,
    user_name VARCHAR(50) NOT NULL,
    gender char(4) DEFAULT '남자',
    register_date DATETIME DEFAULT now()
);

# Query OK, 0 rows affected (0.12 sec)
```







#### 데이터 조작어(DML)

- SELECT
- INSERT
- UPDATE
- DELETE



```sql
INSERT INTO [테이블명](필드1,필드2...) values(값1,값2...);

INSERT INTO user(user_id, user_pw, user_name, gender) values('web7722','1234','곽인구','남자');
# Query OK, 1 row affected (0.03 sec)

SELECT user_id, user_pw, user_name, gender FROM user;
+---------+---------+-----------+--------+
| user_id | user_pw | user_name | gender |
+---------+---------+-----------+--------+
| web7722 | 1234    | 곽인구    | 남자   |
+---------+---------+-----------+--------+
1 row in set (0.00 sec)

DESC user;

SELECT user_id, user_pw, user_name, gender,register_date FROM user;
+---------+---------+-----------+--------+---------------------+
| user_id | user_pw | user_name | gender | register_date       |
+---------+---------+-----------+--------+---------------------+
| web7722 | 1234    | 곽인구    | 남자   | 2022-12-22 11:20:38 |
+---------+---------+-----------+--------+---------------------+
1 row in set (0.00 sec)


INSERT INTO user(user_id, user_pw, user_name, gender) values('web7722','1234','곽인구','남자');
# ERROR 1062 (23000): Duplicate entry 'web7722' for key 'user.PRIMARY'


INSERT INTO user(user_id, user_name, gender) values('web7722','곽인구','남자');

# ERROR 1364 (HY000): Field 'user_pw' doesn't have a default value

SELECT * FROM user;

INSERT INTO user(user_id,user_pw, user_name, gender) values('admin','1234','관리자','남자');
# Query OK, 1 row affected (0.01 sec)

SELECT * FROM user;
+---------+---------+-----------+--------+---------------------+
| user_id | user_pw | user_name | gender | register_date       |
+---------+---------+-----------+--------+---------------------+
| admin   | 1234    | 관리자    | 남자   | 2022-12-22 11:30:28 |
| web7722 | 1234    | 곽인구    | 남자   | 2022-12-22 11:20:38 |
+---------+---------+-----------+--------+---------------------+
```



**where 절**

```sql
SELECT * FROM user WHERE user_id='admin';
+---------+---------+-----------+--------+---------------------+
| user_id | user_pw | user_name | gender | register_date       |
+---------+---------+-----------+--------+---------------------+
| admin   | 1234    | 관리자    | 남자   | 2022-12-22 11:30:28 |
+---------+---------+-----------+--------+---------------------+
```





**UPDATE**

```sql
UPDATE user SET gender='여자' WHERE user_id='admin';
# Query OK, 1 row affected (0.02 sec)
# Rows matched: 1  Changed: 1  Warnings: 0

SELECT * FROM user WHERE user_id='admin';
UPDATE user SET user_pw='0000', user_name='슈퍼관리자', gender='남자' WHERE user_id='admin';
# Query OK, 1 row affected (0.01 sec)
# Rows matched: 1  Changed: 1  Warnings: 0
```





**DELETE**

```sql
DELETE FROM user WHERE user_id='admin';
# Query OK, 1 row affected (0.01 sec)

SELECT * FROM user;
+---------+---------+-----------+--------+---------------------+
| user_id | user_pw | user_name | gender | register_date       |
+---------+---------+-----------+--------+---------------------+
| web7722 | 1234    | 곽인구    | 남자   | 2022-12-22 11:20:38 |
+---------+---------+-----------+--------+---------------------+
```





#### 데이터 제어어 (DCL)

- GRANT
- REVOKE





## 연습

게시판 테이블 만들기. 



```sql
CREATE TABLE board(
    idx int(11) AUTO_INCREMENT PRIMARY KEY,
    subject VARCHAR(150) NOT NULL, 
    content TEXT NULL,
    writer VARCHAR(50) NOT NULL,
    registerDate DATETIME NOT NULL default now(),
    hit int(11) default 0
);

# Query OK, 0 rows affected, 2 warnings (0.18 sec)
```



row 를 5개 만드세요! 



```sql
INSERT INTO board(subject, content, writer) values('test1','냉무','곽인구');
INSERT INTO board(subject, content, writer) values('test2','냉무1','곽인구');
INSERT INTO board(subject, content, writer) values('test3','냉무2','곽인구');
INSERT INTO board(subject, content, writer) values('test4','냉무3','곽인구');
INSERT INTO board(subject, content, writer) values('test5','냉무4','곽인구');
```





```sql
mysql> exit

mysqldump -uingoo -p ingoo > backup.sql
Enter password : 

mysql -uingoo -pingoo

create database ingoo2;
use ingoo2;
```

