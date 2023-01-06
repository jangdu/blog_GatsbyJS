# gaysby로 만드는 블로그

### 공부랑 같이 ㅇㅇ

### gatsby 디렉토리 내 파일
- Root Directory 
  - contents
    - 블로그 포스트 관련 파일들을 저장하기 위한 디렉토리입니다.

  - src
    - components
      - React Component를 저장하기 위한 디렉토리입니다.

    - hooks
      - Custom Hooks을 저장하기 위한 디렉토리입니다.

    - pages
      - 페이지의 역할을 하는 컴포넌트를 저장하기 위한 디렉토리입니다.

      - 기본적으로 브라우저에서 pages 디렉토리에 있는 파일의 이름을 통해 페이지에 접근할 수 있기 때문에 페이지의 역할이 아닌 컴포넌트들은 해당 디렉토리에 절대 저장하면 안 됩니다.

    - templates
      - 게시글 페이지와 같이 페이지의 역할을 하면서 같은 형식의 여러 콘텐츠를 보여주는 컴포넌트를 저장하기 위한 디렉토리입니다.

      - Gatsby에서 제공하는 API를 통해 이 디렉토리에 저장된 템플릿 컴포넌트로 여러 페이지를 만들 수 있습니다.

      - pages 디렉토리와는 다르게 파일명으로 페이지에 접근이 불가능합니다.


### typescript 설치 
```terminnal
yarn add typescript --dev
yarn add gatsby-plugin-typescript
```

## ---------------------------------------------------------------
## Generic
어떤 클래스나 함수에서 사용할 타입을 그 함수나 클래스를 사용할 때 결정할 수 있게 만들수있는 기능

ex) ts를 통해 만든 Stack자료구조
```ts
class Stack {
  // 어떤 타입의 데이터가 올지 몰라서 any타입 지정
  private data: any[] = []

  constructor() {}

  push(item: any): void {
    this.data.push(item)
  }

  pop(): any {
    return this.data.pop()
  }
}
```

```ts
const stack = new Stack()

stack.push(10)
stack.push('10')

// toFixed(): number자료형에만 사용가능한 반올림 함수
console.log(stack.pop().toFixed()) // 10
console.log(stack.pop().toFixed()) // Error
```
위와 같이 Stack자료구조는 숫자 자료형이 아닌 데이터도 추가가능해서
숫자만 있을 것으로 확신해 코드 작성 중에 에러가 방생

Generic: 확실하게 숫자 데이터만 받을 것을 명시

Generic을 사용한 Stack자료구조
```ts
// 제네리을 사용한 클래스
class Stack<DataType> {
  private data: DataType[] = []

  constructor() {}

  push(item: DataType): void {
    this.data.push(item)
  }

  pop(): DataType {
    return this.data.pop()
  }
}

// 인스턴스 생성시 <>안에 number를 사용해 타입지정
const stack = new Stack<number>()
```


- src
 - components
    - Common
      - Footer.tsx - 페이지 하단 푸터
      - GlobalStyle.tsx - 전역 스타일
    - Main
      - CategoryList.tsx - 카테고리 목록
      - Introduction.tsx - 페이지 상단 소개글
      - PostItem.tsx - 포스트 아이템
      - PostList.tsx - 여러 포스트 아이템을 묶은 포스트 리스트
      - ProfileImage.tsx - 소개글 구역에서 사용할 프로필 이미지
aa
# typescript_study
