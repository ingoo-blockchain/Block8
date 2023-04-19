# ts-node

ts-node는 우리가 Typescript 를 코드로 작성하면, 확인하고싶을떄마다,
빌드하고 확인하고.. (개발단계)

```sh
npm init -y
npm install -D typescript tsc-alias
```

```sh
npm install -D ts-node
npm install -g ts-node
```

```sh
npm install -D tsconfig-paths
```

## nodemon

nodemon.json

```json
{
    "watch": ["src/**/*"],
    "ext": "ts",
    "exec": "ts-node -r tsconfig-paths/register -p tsconfig.json ./src/message"
}
```

```
npm install -D nodemon
```
