# React

## 주요 개념

-   JSX
    JSX 문법 HTML
    `{ }` 중괄호를 사용한다는것

-   Component

    -   Element 모음
    -   단 하나의 상태를 가질수있다.
    -   상태에 따라서 Element 가 바뀐다.

-   Props

    -   데이터(값)의 전달
    -   반향은 항상 자식컴포넌트에게만.

-   State
    Element에 표현할 데이터를 모아주는 변수

-   생명주기
    상태변화에 따른 실행할 추상메서드들

    > `this.setState()` 사용할 경우에 `componenetDidUpdate` 와 > `render` 매서드가 실행되는 상황

-   이벤트
    이벤트를 등록하는 방법에 대해서만 정확히 인지하면 됩니다.
    JSX 문법안에서 작성한다는건데, class component 같은 경우에는
    this binding 을 알면 좋긴함.

-   조건부 랜더링
    JSX 문법과 `{ }` 삼항연자 컴포넌트를 호출

-   list
    같은 엘리먼트을 여러번 사용할때,
    `배열` 에 담아서 사용해도 출력되는 것만 알아도 50%
    데이터 가지고, map함수를 사용해서 배열내용을 변경할줄알면

    1. map 이해하자
    2. 이코드가 이해되는가.

    ```jsx
    <ul>{[<li>hello</li>, <li>world</li>]}</ul>
    ```

    3.

    ```js
    const arr = [{ a: 10 }, { a: 20 }]
    // map 함수를 사용해서 console.log 찍을수 있는가.
    // [<li>a:10</li>, <li>a:20</li>]
    ```

-   form
    이벤트 와 State 만 잘알아도 해결될 문제요,
    단 form 엘리먼트에서 submit 이벤트가 어떻게 돌아가는지
    새로고침하면 상태가 리셋된다는 개념을 이해하는가
    `e.preventDefault()` 를 왜 호출하는지 알아야함.

-   state 끌어올리기
    부모 컴포넌트와, 자식컴포넌트를 구별할줄알아합니다,
    Function 가 값이다라는 사실을 알아야합니다.
    상태는 컴포넌트 마다 있는거다,
    React가 구현해준게아니라, Javascript 기초적인 개념을 복합적으로 사용해서 된다라는 사실을 인지하고있어야함.

    부모 컴포넌트에서, 본인의 상태를 바꾸는 함수를 구현
    해당 함수를 자식 컴포넌트에게 Props로 전달.
    자식 컴포넌트는 부모 컴포넌트에서부터 받은 함수를 실행

## 해야할 내용들

1. webpack - 진짜 이거 안할거면 프론트접으셈
2. rotuer
3. 전역상태
4. CSS - styled-component

import
require 라던가

nodejs 환경에서 코드를 실행할때가 좀더 관리하기가 편하지않나요 ?

결론은 브라우저에서 돌아가는 코드로 나와야합니다.

webpack - bundle

nodejs 환경에서 개발할때 장점이있습니다.
외부라이브러리 설치 및 사용이 편리함. module

a.js
b.js -> bundle.js
c.js

내일은
