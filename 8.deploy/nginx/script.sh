#!/bin/bash

# Nginx 설치 및 시작
sudo apt-get update
sudo apt-get install nginx -y

sudo systemctl start nginx 


# Nginx 설정 파일 열기
sudo vi /etc/nginx/sites-available/default

# 수정한 설정 파일 저장하고 nginx 재시작
sudo systemctl restart nginx

# 다시확해보고 https(SSL) 내용이 적혀있는지 확인
sudo vi /etc/nginx/sites-available/default

# 내용이 수정되었다면 nginx를 재시작 (!?)

sudo nginx -t 
sudo systemctl restart nginx
sudo systemctl status nginx





