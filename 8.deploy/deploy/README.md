```sh
scp -i [키값] -r [로컬경로] 계정@호스트:/home/ubuntu/www
```

/home/ingoo/deploy/frontend.pem

scp -i /home/ingoo/deploy/frontend.pem -r /home/ingoo/deploy/front/build ubuntu@ec2-43-201-66-106.ap-northeast-2.compute.amazonaws.com:/home/ubuntu/www
