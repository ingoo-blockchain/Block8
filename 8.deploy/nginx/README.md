```sh
# nginx 상태 확인
sudo systemctl status nginx
```

## 설정파일

server {
listen 80
root /var/www/html
index index.html

    server_name _;

    location / {
        try_files $uri $uri/ index.html;
    }

}


##

/home/ubuntu/www/index.html
cd ~
mkdir www
vi index.html
i
내용쓰고
esc
:wq!


sudo nginx -t
sudo systemctl status nginx
sudo systemctl restart nginx
sudo systemctl stop nginx
sudo systemctl start nginx