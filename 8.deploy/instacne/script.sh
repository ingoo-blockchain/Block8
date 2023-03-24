#!/bin/bash

# $1 : path
# $2 : name

# 키페어 생성
aws ec2 create-key-pair --key-name $2 --query 'KeyMaterial' --output text > $1/$2.pem
echo "$2.pem 파일 생성"

# 보안 그룹 생성
GROUP_ID=$(aws ec2 create-security-group --group-name $2-sg --description "$2-sg" --output text --query 'GroupId')
echo "보안 그룹 생성 id: $GROUP_ID"

# 보안 그룹 규칙 추가
aws ec2 authorize-security-group-ingress --group-id $GROUP_ID --protocol tcp --port 22 --cidr 0.0.0.0/0  
aws ec2 authorize-security-group-ingress --group-id $GROUP_ID --protocol tcp --port 80 --cidr 0.0.0.0/0 
aws ec2 authorize-security-group-ingress --group-id $GROUP_ID --protocol tcp --port 443 --cidr 0.0.0.0/0 
aws ec2 authorize-security-group-ingress --group-id $GROUP_ID --protocol tcp --port 3306 --cidr 0.0.0.0/0
echo "22, 80, 443, 3306 인바운드 설정완료"

INSTANCE_ID=$(aws ec2 run-instances --image-id ami-0e735aba742568824 --count 1 --instance-type t2.micro --key-name $2 --security-group-ids $GROUP_ID --output text --query 'Instances[0].InstanceId')
echo "인스턴스 ID : $INSTANCE_ID"

echo "instance 실행중..."
aws ec2 wait instance-running --instance-ids $INSTANCE_ID
echo "instance 완료"

PUBLIC_DNS=$(aws ec2 describe-instances --instance-ids $INSTANCE_ID --query 'Reservations[*].Instances[*].PublicDnsName' --output text)
echo "ssh -i $2.pem ubuntu@$PUBLIC_DNS"

chmod 400 $1/$2.pem
ssh -i $1/$2.pem ubuntu@$PUBLIC_DNS