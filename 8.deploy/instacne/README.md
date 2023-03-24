```sh

# aws configure  진행되었다고 가정하고

# 키페어 생성
aws ec2 create-key-pair --key-name frontend --query 'KeyMaterial' --output text > frontend.pem
sudo chmod 400 frontend.pem

# 보안 그룹
aws ec2 create-security-group --group-name frontend-sg --description "frontend-sg" --output text --query 'GroupId'

## group id = sg-0cf36b2fbc3bd70f5

## 보안 규칙 생성
aws ec2 authorize-security-group-ingress --group-id sg-0cf36b2fbc3bd70f5 --protocol tcp --port 22 --cidr 0.0.0.0/0

aws ec2 authorize-security-group-ingress --group-id sg-0cf36b2fbc3bd70f5 --protocol tcp --port 80 --cidr 0.0.0.0/0

aws ec2 authorize-security-group-ingress --group-id sg-0cf36b2fbc3bd70f5 --protocol tcp --port 443 --cidr 0.0.0.0/0

aws ec2 authorize-security-group-ingress --group-id sg-0cf36b2fbc3bd70f5 --protocol tcp --port 3306 --cidr 0.0.0.0/0


aws ec2 run-instances --image-id ami-0e735aba742568824 --count 1 --instance-type t2.micro --key-name frontend --security-group-ids sg-0cf36b2fbc3bd70f5 --output text --query 'Instances[0].instanceId'


aws ec2 describe-instances --instance-ids i-0cbadfcca87441a1f --query 'Reservations[*].Instances[*].PublicDnsName' --output text

# ec2-43-201-66-106.ap-northeast-2.compute.amazonaws.com

ssh -i frontend.pem ubuntu@ec2-43-201-66-106.ap-northeast-2.compute.amazonaws.com
```
