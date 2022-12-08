# Linux User (사용자계정)



## 사용자 (User)

리눅스 구조 특징 중 하나인 `멀티 유저 `  (여러 사용자가 동시에 하나의 시스템에 접근)

리눅스에서 작동하는 모든 `파일과 디렉토리` 사용자에서 시작됩니다.





`ingoo` 라는 사용자가 있고

`hongtae` 라는 사용자가 있다고 봅시다.



`ingoo` 라고 로그인 된 상태에서 

`vi` 통해서 `hello.txt` 라는 파일을 생성했습니다. 



`hongtae` 라는 계정이 `hello.txt` 접근 할려고 했을때

글을 못보게 할수도있고, 수정을 못하게 할수도있다.



왜냐하면 `hello.txt`는 `ingoo`라는 계정이 만들었기 때문에.

`hello.txt`의 소유자는 `ingoo` 이라서 다른 계정이 해당 파일을 접근 못하게 할 수 있다.



`hongtae` 라는 계정은 **권한** 만 존재한다면 파일 접근이 가능하다.

또한 사용자가 많아질경우 개개별로 권한을 주는것이 `귀찮기` 때문에 **그룹** 이라는 개념도 존재합니다.

>[0,1,2,3,4,5,6,7,8,9]
>
>0 이라는 계정이 짝수에게만 권한을 주고싶은경우. 
>
>2,4,6,8 -> 짝수는 



- 사용자 계정 
  - 권한 
  - 그룹 



리눅스는 사용자 타입이 3가지 타입이 존재함.



**사용자 타입**

- 루트 사용자 - UID 0
- 시스템 사용자 - UIDs 1-999
- 일반 사용자 - UIds 1000~



리눅스는 설치할때 기본적으로 `root` 계정을 생성합니다.

그리고 또 하나의 일반사용자 도 생성합니다.





**사용자 관련 명령어**

*사용자를 확인하는 명령어를 알아보기*



**id**

현재 사용자의 아이디와 사용자가 속한 그룹의 아이디를 포함한 아이디 관련 정보를 보여줌.



```sh
$ id
# uid=1000(ingoo) gid=1000(ingoo) 
#groups=1000(ingoo),4(adm),20(dialout),24(cdrom),25(floppy),27(sudo),29(audio),30(dip),44(video),46(plugdev),117(netdev),1001(docker)

$ id [사용자이름] 
$ id -u # 현재 사용자의 아이디를 출력합니다.
$ id -un # 현재 사용자의 이름을 출력합니다.

$ id -u root # root 사용자에 대한 아이디를 출력
$ id -un root # root 사용자에 대한 이름을 출력
```



**whoami**

현재 사용자의 이름을 조회합니다.

```sh
$ whoami
```



**users**

현재 로그인 되어 있는 전체 사용자의 정보를 조회함.

```sh
$ users
```





### 사용자 생성, 수정, 조회를 위한 명령어



사용자 생성,수정 관련된 명령어들은 대부분 `root` 계정이 필요합니다.

`root` 계정에 접속해서 만드는 방법도 있긴 한데.



일반 사용자에서 `root` 권한이 필요할 경우

`sudo` 

> superuser do 
>
> substiute user do (다른 사용자의 권한으로 실행)



`sudo` 가 필요한 명령어가 있다. 



**1. useradd**

`sudo`가 필요합니다.



새로운 사용자를 생성합니다.

````sh
$ useradd user1
````





**2. adduser (*)**

`sudo`가 필요합니다.



새로운 사용자를 생성합니다.

```sh
$ adduser user1

# useradd : Permission denied. 
# connot lock /etc/paswd; try again later. 

$ sudo adduser user1 
```



왜 `sudo` 명령어가 필요하진 알아보기

`/etc/passwd` 



```sh
$ cd /etc
$ sudo vi passwd
```



**/etc/passwd**

passwd 파일 내부 설명

```sh
# ... 생략
tmp1:x:1002:1004:,,,:/home/tmp1:/bin/bash

# tmp1 : 사용자이름
# 1002 : 사용자Id
# 1004 : 그룹Id
# ,,,  : 코맨트 또는 풀네임 
# /home/tmp1 : 사용자 디렉토리 / 홈디렉토리
# /bin/bash  : shell 경로 
```



**passwd**

`sudo` 권한이 필요

사용자의 패스워드를 설정할때

```sh
$ passwd [사용자이름]
```



**usermod**

`sudo` 권한 필요

```sh
$ sudo usermod [사용자이름]
```



**-s**

shell 경로를 변경할 경우

```sh
$ sudo usermod -s /bin/zsh tmp1
```



**-G**

그룹 아이디를 변경할 경우

```sh
$ sudo usermod -G blockchain tmp1
```









**userdel**

`sudo` 권한 필요

```sh
$ sudo userdel [사용자이름]
```



옵션 `-r` 사용해야 홈디렉토리 안에있는 폴더까지 삭제합니다.

`/etc/passwd` 해당하는 줄을 삭제할뿐이지.



```sh
$ cd ~ # ingoo 에 대한 홈디렉터리 이동
$ sudo userdel -r tmp1

$ cd /home
$ ls -al
# tmp1 디렉토리까지 삭제된거 확인.
```





## 사용자 그룹



리눅스에서 그룹을 통해서 파일에 관한 접근 권한을 제한 할 수 있음.

`길드`  -> `blockchain` 

`ingoo` 

`blockchain` -> `ingoo` 

`ingoo` 파일을 만들어요 .

`ingoo` -> `hello.txt` 

```sh
drwxr-xr-x 21 ingoo blockchain 4096 Nov 22 10:21 ingoo
```



`ingoo` 계정명을 만들면 `ingoo` 그룹이 만들어져요.

사용자를 만들면 최소한의 그룹이 하나를 가지고 있습니다.



**그룹 관련 명령어**



**groups**

현재 로그인 된 사용자가 속한 그룹 리스트를 확인

```sh
$ groups

$ groups [계정명]
```



**groupadd**

`sudo` 권한이 필요합니다.

새로운 그룹을 생성 할 수 있습니다.

```sh
$ groupadd [그룹이름]
$ groupadd blockchain1
# groupadd: Permission denied.
# groupadd: cannot lock /etc/group; try again later.

# /etc/group 이라는 파일이 어떻게 생겼는지 알아봅시다
#$ vi /etc/group
$ cd /etc
$ ls -al # 너무많이나오니깐.
$ ls -al | grep group

$ cd ~
$ pwd
# /home/ingoo
# /etc/group

$ groupadd blockchain1

## 사용자 같이  사용하기

$ sudo adduser tmp1
$ id tmp1

# /etc/passwd

$ sudo usermod -G blockchain1 tmp1

# cat /etc/passwd
# cat /etc/group

# id tmp1
```



**/etc/group**

```sh
blockchain:x:1003:user1

# blockchain : 그룹이름
# 1003 : 그룹ID
# blockchain : 해당하는 유저 내용들 root,user1,ingoo
```





**groupmod**

기존의 그룹을 수정 할 수 있습니다.

```sh
$ sudo groupmod -aG blockchain1 tmp1
```



**groupdel**

그룹을 삭제 할 수 있습니다.

```sh
$ sudo groupdel blockchain1

# /etc/group 
# 그룹이름이 blockchain1 이라는 녀석을 지움.
```



## 파일 접근 권한 설정



```sh
$ cd ~
$ cd /home/ingoo

$ su - [계정명]

$ ls -al
$ vi hello.txt
# hello world! 입력후 저장

$ ls -al 

-rw-r--r--  1 ingoo ingoo     13 Jan 25  2022 hello

# -rw-r--r--

# - : [0]

# [1] [2] [3]
# rw- r-- r--
```



**[0] 에 대한 설명**

파일타입에 대한 설명

조회된 내용중에 파일인지, 폴더인지 구분값



- `-` : normal file 일반파일
- `d`: directory 
- `l` : link file 바로가기
- p : named pipe
- s : socket
- c : character device
- b : block device



**[1] [2] [3] 에 대한 설명**

rw- r-- r--



r : 읽기   - 4

w : 쓰기 - 2

x : 실행  - 1



**[1]** : 소유자에 대한 설정

**[2]**:  그룹에 대한 설명

**[3]**: 기타 사용자 



**chmod**

```sh
# rw- r-- r-- 해당파일에 접근권한을 바꾸는 명령어
# rwx r-x r-x  = 7 5 5
# rwx = 7
# r-x = 5
$ chmod 755 ./hello
$ ls -al | grep hello
# -rwxr-xr-x  1 ingoo ingoo     13 Jan 25  2022 hello
# - rw- r-- r-- 644
$ chmod 644 /home/ingoo/hello
$ chmod 644 ~/hello
# -rw-r--r--  1 ingoo ingoo     13 Jan 25  2022 hello

```





**chown**

```sh
# 해당파일의 소유권을 바꾸는 명령어
# -rw-r--r--  1 ingoo ingoo     13 Jan 25  2022 hello
# root root 
$ sudo chown root:root ~/hello
$ ls -al | grep hello
$ vi hello
$ sudo chmod 700 ~/hello
```



**mac**

```sh
# wheel <--
# 
$ sudo chown 0:0 ~/hello
$ vi ~/hello
```





## sudo 권한주기



`/etc/sudoers` 

```sh
vi /etc/sudoers


root   ALL=(ALL:ALL) ALL
ingoo  ALL=(ALL:ALL) ALL
```







## Shell



```mermaid
graph LR

어플리케이션-->쉘
쉘-->커널
커널-->하드웨어
```



`bash`





`zsh`



`CLI` 설치 



`window`  브라우저 `install`  

- 브라우저

  - 인터넷

  - install 설치할수있어야함. 



`CLI` ???



## 패키지매니저 



리눅스에서 패키지 관리 방법에 대해서 알아봅시다.



`패키지 관리` 새로운 소프트웨어를 설치, 업데이트 삭제 하는 행위를 말함.

`install` 파일을 다운 받는 행위 



`install` 파일 내부들도 결국 다 코드로 되어있겠죠 ?

`소스코드` 하나의 아카이브 파일(tar) =  `.zip 파일 `



`패키지`  ===  `폴더`



1. install 파일 다운 
2. install 파일을 실행을 시킵니다. = 압축을 푼다 



`의존성 ` 



`nodejs`



`hello world` 출력프로그램 `javascript`

javascript를 실행하기 위해서는 `nodejs` 



`helloingoo` 

```js
console.log('hello world!')
```



nodejs 껴넣기.



nodejs 하나의 패키지에요 



helloingoo 다운을받을때 

1. nodejs install 파일을 다운받아
2. nodejs 압축을 풀어
3. helloingoo install 파일을 다운받아
4. helloingoo 압축풀어
5. helloingoo 실행해~



패키지매니저 



`dpkg`

`dmg`



`homebrew`

`brew install zsh `



롤 설치함.

1. install 파일 



리그오브로레전드 사이트에서 관리하고있어요 



apt-get 사이트 

다양한 install 파일들이 존재합니다.  `(dpkg)`



homebrew 사이트

다양한 install 파일들이 존재합니다. `(dmg)`



```
brew install zsh
```





apt install [프로그램이름] 



```
apt install zsh
```



### zsh 설치



```sh
$ zsh --version
```



```sh
$ apt --version
```



```sh
$ apt install zsh
# /bin <--

# $ apt update && apt upgrade  <--- 

$ cat /etc/passwd | grep ingoo
# ingoo:x:1000:1000:,,,:/home/ingoo:/bin/bash
$ sudo usermod -s /bin/zsh ingoo

$ cd ~
$ ls -al
# -rw-r--r--  1 ingoo ingoo   4012 Nov 18 21:28 .zshrc

# oh-my-zsh 

sh -c "$(wget https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"

$ sudo vi .zshrc 
#ZSH_THEME="agnoster"
$ sudo apt update 
$ sudo apt install fonts-powerline
```



```sh
$ cd ~
$ ls -al | grep .zshrc
$ vi ~/.zshrc
```



```sh
$ git --version
```



### 



### useradd



**/etc/group**

```
```





**/etc/passwd**

```
```



