sudo apt-get update
sudo apt-get install snapd

sudo snap install core
sudo snap refresh core

sudo snap install --classic certbot

sudo ln -s /snap/bin/certbot /usr/bin/certbot

# Ngnix 설정파일 구경해보기
sudo vi /etc/nginx/sites-available/default



sudo certbot --nginx

# email
# y
# y
# domain.. web7722.co.kr