# Mysql 설치

## install

### 맥북

```sh
$ brew install mysql
$ mysql --version
$ brew services start mysql
$ ps -ef | grep mysql
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
