# Front 배포

## EC2 생성

```sh
# keygen 생성
aws ec2 create-key-pair --key-name front --query 'KeyMaterial' --output text > front.pem

## window..
#aws ec2 create-key-pair --key-name front --query 'KeyMaterial' --output text | Out-File #-Encoding utf8 front.pem

# 보안그룹 그룹추가
aws ec2 create-security-group --group-name front-sg --description "front-sg"
```

{
"GroupId": "sg-09b5411934760651c"
}

```

# 보안그룹 검색
aws ec2 describe-security-groups --group-name front-sg

# group_id
## 그룹 규칙추가
aws ec2 authorize-security-group-ingress --group-id sg-09b5411934760651c --protocol tcp --port 22 --cidr 0.0.0.0/0

aws ec2 authorize-security-group-ingress --group-id sg-09b5411934760651c --protocol tcp --port 80 --cidr 0.0.0.0/0


# 인스턴스 생성 --image id : ami-0e735aba742568824
aws ec2 run-instances --image-id ami-0e735aba742568824 --count 1 --instance-type t2.micro --key-name front --security-group-ids sg-09b5411934760651c
```

```sh
aws ec2 describe-instances  --query 'Reservations[*].Instances[*].[InstanceId, State.Name, InstanceType]'
# i-00983b83c0962d915

aws ec2 describe-instances --instance-ids i-00983b83c0962d915 --query 'Reservations[*].Instances[*].PublicDnsName' --output text


## ec2-13-125-187-21.ap-northeast-2.compute.amazonaws.com

ssh -i front.pem ubuntu@ec2-13-125-224-187.ap-northeast-2.compute.amazonaws.com
```

## 인스턴스

## Nginx - WebServer

(설정)
index.html

React -> build -> index.html

내일

도메인! 생겼다!
https 달수가있어요

백앤드
nginx
expres 만들어서 배포

hello world!
cors

도메인
https

리버스 프록시
backend 배포

**CD**

이번프로젝트는 **발표**

흐름도 사진 -> 배포설명만

금요일 점심시간 이후에 10~20분

# 도메인

naver.com
google.com


AWS EC2  IP가 바뀐다. 

AWS EC2 

탄력적 IP <--
1~2만원

console <--




## Https

http 80


https 443

암호화
도메인 <--

모질라 -> https 암호화 -> certbot 


https://certbot.eff.org/


```sh
```







