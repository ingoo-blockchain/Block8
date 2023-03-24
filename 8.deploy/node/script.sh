# curl 설치
sudo apt-get update
sudo apt-get install curl -y

# nvm 설치
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# NVM 환경 변수 추가
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.bashrc
echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm' >> ~/.bashrc

# 환경 변수 적용
source ~/.bashrc

nvm install 16
npm install -g npm