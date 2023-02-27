# Webpack

babel 코드자체를 변환할때, 단일파일

Webpack 모듈번들러 = 여러파일 하나의 파일로 만들어주는 도구

웹 애플리케이션을 구성하는 다양한 자원들을 하나의 파일로 번들링하고,
이를 사용해서 웹페이지 로딩하는데 필요한 최소한의 파일을 제공함
이를통해서 로딩속도를 개선할수 있다.

-   모듈

모듈 이란 프로그램을 구성하는 구성요소로, 관련된 데이터와 함수를 하나로 묶은 단위

users
user.controller
user.service
user.repository

-   번들러

번들러는 의존성있는 모듈코드를 하나의 파일로 만들어주는 도구
controller, service, repository

```html
<script src="./js1.js"></script>
<script src="./js2.js"></script>
<script src="./js3.js"></script>
<script src="./js4.js"></script>
```

연결 종료

```html
<script src="./bundle.js"></script>
```

SPA

App
Commnet
CommnetList
CommnetForm
CommentItem

```html
<script src="./bundle.js"></script>
```

## webpack 속성

babel 같은경우
presets
plugins

-   entry
-   output
-   loaders
-   plugins
