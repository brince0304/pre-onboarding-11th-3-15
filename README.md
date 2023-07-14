![header](https://capsule-render.vercel.app/api?type=waving&color=timeGradient&text=Team%2015&height=300&fontSize=80&fontAlignY=42&animation=twinkling)

<div align='center'>

# `3주차 - Best Practice 과제`

</div>

# 📚 과제 내용

### 특정 깃헙 레파지토리의 이슈 목록과 상세 내용을 확인하는 웹 사이트 구축

<br />

# 🚀 배포 링크

### <a href="https://friendly-jalebi-7586b7.netlify.app/" target="_blank" rel="noopener noreferrer">`https://friendly-jalebi-7586b7.netlify.app/`</a>

\*링크를 누르면 새탭에서 열립니다.

<br />

# 🙌 팀 소개

**프로젝트 흐름이 구현에 있어서 어느 한명 빠지지 않고 참여하여 전체적인 실력 향상을 목표로 진행 되었습니다.**

| <img src="https://avatars.githubusercontent.com/u/110673427?v=4" width="100" height="100" style="border-radius: 50%" /> | <img src="https://avatars.githubusercontent.com/u/71440070?v=4" width="100" height="100" style="border-radius: 50%" /> | <img src="https://avatars.githubusercontent.com/u/89186225?v=4" width="100" height="100" style="border-radius: 50%" /> | <img src="https://avatars.githubusercontent.com/u/97942837?v=4" width="100" height="100" style="border-radius: 50%" /> | <img src="https://avatars.githubusercontent.com/u/108984141?v=4" width="100" height="100" style="border-radius: 50%" /> |
| :---------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------: |
|                                       [brince0304](https://github.com/brince0304)                                       |                                        [totter15](https://github.com/totter15)                                         |                                      [eunjeong90](https://github.com/eunjeong90)                                       |                                          [JulyK9](https://github.com/JulyK9)                                           |                                      [eastsunyong](https://github.com/eastsunyong)                                      |
|                                                      백석현(팀장)                                                       |                                                      천진아(팀원)                                                      |                                                      장은정(팀원)                                                      |                                                      김정구(팀원)                                                      |                                                      윤선용(팀원)                                                       |

<br/>

# ⚙️ 설치 및 실행

### 깃 레파지토리 클론

    git clone https://github.com/brince0304/pre-onboarding-11th-3-15

### 설치 경로로 이동

    cd pre-onboarding-11th-3-15

### 설치

    npm install

### 환경변수 설정

**npm start 이전에 설정해주시거나 설정 후 재실행 해주세요.**

/프로젝트루트/.env 파일 생성 후 아래 내용 추가

```dotenv
REACT_APP_GITHUB_API_KEY={깃허브 api키}
REACT_APP_GITHUB_OWNER={조회 원하는 깃허브 아이디}
REACT_APP_GITHUB_REPO={조회 원하는 깃허브 레포지토리}
```

### 실행

    npm start

<br/>

# 🛠 의존성과 스택

<img src='https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white' /> <img src="https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white"> <img src="https://img.shields.io/badge/Eslint-4B32C3?style=for-the-badge&logo=Eslint&logoColor=white" /> <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=white" /> <img src="https://img.shields.io/badge/Husky-00C65E?style=for-the-badge&logo=Husky&logoColor=white" />

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black" /> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"/> <img src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white" /> <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white">

<img src="https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white" /> <img src="https://img.shields.io/badge/Emotion-DB7093?style=for-the-badge&logologoColor=white" /> <img src="https://img.shields.io/badge/react markdown-A6A9AA?style=for-the-badge&logo=Husky&logoColor=white" />

**NodeJS: `16.0.0`**

<br/>

# 🎯 과제목표

### ✅ Github 공용 api 를 이용해 이슈 목록 및 상세 화면 기능 구현

### ✅ Context API를 활용한 API 연동

### ✅ 데이터 요청 중 로딩 표시

### ✅ 에러 화면 구현

### ✅ 지정된 조건(open 상태, 코멘트 많은 순)에 맞게 데이터 요청 및 표시

<br/>

# 🔗 협업을 위한 ES Lint, Prettier, Husky 설정

### .eslintrc

```
{
  "extends": ["react-app", "eslint:recommended", "prettier"],
  "env": {
    "es6": true
  },
  "rules": {
    "no-var": "error", // var 금지
    "no-multiple-empty-lines": "error", // 여러 줄 공백 금지
    "no-console": ["error", { "allow": ["warn", "error", "info"] }], // console.log() 금지
    "eqeqeq": "error", // 일치 연산자 사용 필수
    "dot-notation": "error", // 가능하다면 dot notation 사용
    "no-unused-vars": "error" // 사용하지 않는 변수 금지
  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["src"] //절대경로 설정
      }
    }
  }
}
```

### .prettierrc

```
{
  "trailingComma": "all",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true,
  "printWidth": 120
}
```

# 📌 팀 코드 컨벤션

### git commit message 컨벤션

| 커밋 유형 | 의미                                                         |
| --------- | ------------------------------------------------------------ |
| Feat      | 새로운 기능 추가                                             |
| Fix       | 버그, 기능 수정                                              |
| Docs      | 문서 수정                                                    |
| Style     | 코드 formatting, 세미콜론 누락, 코드 자체의 변경이 없는 경우 |
| Refactor  | 코드 리팩토링                                                |
| Test      | 테스트 코드, 리팩토링 테스트 코드 추가                       |
| Chore     | 패키지 매니저 수정, 그 외 기타 수정 ex) .gitignore           |
| Design    | CSS 등 사용자 UI 디자인 변경                                 |
| Comment   | 필요한 주석 추가 및 변경                                     |
| Rename    | 파일 또는 폴더 명을 수정하거나 옮기는 작업만인 경우          |
| Remove    | 파일을 삭제하는 작업만 수행한 경우                           |
| !HOTFIX   | 급하게 치명적인 버그를 고쳐야 하는 경우                      |
| ReadMe    | 리드미파일 추가, 수정, 삭제                                  |

<br />

# 🤔 고민되었던 부분

**저희팀은 회의를 통해 이번 과제에서 가장 중요하다고 생각하는 3가지를 뽑았습니다.**

### 1. Context Api 를 이용한 모듈화 및 관심사 분리

- 과제 요구사항으로 존재하던 **context api를 사용하여 api 연동**에 대한 부분에 대한 고민이 많았습니다.
- 선택 사항으로 redux와 같은 전역 상태관리 라이브러리를 사용할 수 있었는데, Redux 와 context api 를 사용하여 어떻게 모듈화를 할지에 대한 고민도 존재하였습니다.

### 2. 무한 스크롤

- 과제 핵심 요구사항이었던 무한스크롤을 구현할 때 , 여러 상황에 대한 핸들링이 필요했습니다.

### 3. 추상화

- context api를 이용한 모듈화로 인해 기존에 진행하던 방식으로 진행할 수 없어서 추상화에 대한 고민이 많았습니다.

<br />

# 🔑 중요한 것에 대한 Best Practice 선정

전체적인 요구사항을 충족한 결과물과 회의를 토대로 팀원 백석현의 프로젝트를 Best Practice 로 선정하였습니다.

> ## 1. Context API 를 이용한 모듈화 및 관심사 분리

- 기존에 함수로만 선언했던 비즈니스 로직들을 2주차 세션에서 진행되었던 클래스 선언을 통한 모듈화를 참고하여 클래스 메소드로 선언하여 관리하도록 구현했습니다.
- http 요청을 처리하는 HttpClient 클래스를 선언하여 공통적으로 호출되는 fetch 의 옵션 값들을 설정하였고, HTTP 메소드별로 별도의 클래스 메소드를 선언해 가독성을 높였습니다.
- GithubService 에는 이슈 조회에 필요한 로직들을 선언해 관심사를 분리하였습니다.
- 선택사항이었던 Redux를 사용할 때 , 어떻게 리덕스의 Action과 ContextAPI를 사용하여 분리한 비즈니스 로직들을 연관지어서 하나의 행동으로 처리할 수 있을지에 대한 고민이 많았습니다.
  - 서버 데이터는 Redux를 통해 관리하고, Redux Thunk 의 비동기 액션을 통해 서버와의 통신을 하였습니다.
  - 기본적인 loading 과 error 상태를 리덕스 스토어에 저장하여 관리하였고, thunk 를 통해 공통 로직을 처리하여 가독성과 재사용성을 높였습니다.

### 🤝 팀원들과 함께 고민한 부분

- 기존에는 하나의 Context 안에 리덕스 Action까지 포함하여 내려주는 방식으로 구현되었습니다.
- 하지만 이렇게 되면 **Context의 역할이 무엇인지, 리덕스의 역할이 무엇인지에 대한 구분이 모호해지고, 추후에 리덕스를 사용하지 않고 Context만 사용하게 될 경우에도 리덕스의 Action을 사용해야 하는 문제가 발생할 수 있다고 생각이 들었습니다.**
- 따라서 **Context는 Context의 역할에 충실하도록 하고, 리덕스의 Action은 리덕스의 역할에 충실하도록** 분리하였습니다.
- 이렇게 하면 추후에 리덕스를 사용하지 않고 Context만 사용하게 될 경우에도 Context의 역할에 충실하도록 구현할 수 있습니다.
- **Redux의 액션과 상태값은 따로 Hook으로 분리하여 해당 훅에서 컨텍스트의 로직을 가져와서 재가공하여 사용하도록 구현하였습니다.**
- 이로써 UI와 비즈니스로직을 분리하여 각각 관심사에 충실하도록 구현할 수 있었습니다.

```tsx
// useIssueAction.tsx
function useIssueAction(): IIssueContextReturn {
  const { getIssuesByPage, getIssueByIssueNumber } = useIssues();
  const issueState = useSelector((state: RootState) => state.issueReducer);

  const dispatch = useAppDispatch();
  const { loading, error, issues, page, hasMore } = issueState;

  const handleResetPage = async () => {
    dispatch(reset());
    await handleGetIssuesByPage();
  };

  const handleGetIssuesByPage = async () => {
    try {
      await dispatch(getIssuesByPageThunk(getIssuesByPage)).unwrap();
    } catch (e) {
      dispatch(setError(e));
    }
  };
  const handleDispatchGetIssueByIssueNumber = async (id: number) => {
    try {
      await dispatch(
        getIssueByIssueNumberThunk({
          getIssueByIssueNumber: getIssueByIssueNumber,
          issueNumber: id,
        }),
      ).unwrap();
    } catch (e) {
      dispatch(setError(e));
    }
  };
  ...
```

```tsx
// IssueList.tsx
// UI에서 비즈니스로직이 노출되는 것을 방지하여 관심사를 분리하였습니다.
const IssueList = () => {
  const { handleGetIssues, loading, issues, hasMore } = useIssueAction();
  const observerRef = useIntersect(() => hasMore && handleGetIssues());

  const adBoxProps = {
    alt: '광고',
    src: 'https://image1.marpple.co/files/u_1371660/2020/11/original/79f3b672740b1a7688b84a8bfd903bcc1b28d4431.png?w=1200&f=webp',
    linkTo: 'https://www.wanted.co.kr/',
    width: '100%',
    height: '100%',
  };
  ...
```

> ## 2. 무한 스크롤

- 무한 스크롤 같은 경우에는 **무한스크롤 라이브러리 사용이 금지되어있었기** 때문에 직접 구현해야 했습니다.
- 무한 스크롤을 구현하기 위해서는 **IntersectionObserver API**를 사용해야 했고, **useRef를 사용하여 지정된 위치가 화면에 보이는지를 감지하여 감지될때 마다 페이지를 증가시켜서 데이터를 불러오도록 구현하였습니다.**
- **기본적으로 페이지 증가 로직은 ReduxThunk 로 구현하였고**, 무한 스크롤을 사용하는 컴포넌트에서는 해당 로직을 호출하는 함수를 선언하여 사용하였습니다.
- 초기에는 무한 스크롤에 대한 로직이 다른 컴포넌트에서 구현될 필요가 없다고 생각하여 필요한 컴포넌트에서만 구현했지만, **확장성을 고려하여 훅으로 분리하여 관리할 수 있도록 변경하였습니다.**

```tsx
// useIntersect.tsx
function useIntersect(callback: () => void) {
  const observerRef = useRef<HTMLDivElement>(null);

  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting) {
      callback();
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(handleObserver, observerOptions);
    if (observerRef.current) {
      observer.observe(observerRef.current);
    }
    return () => {
      if (observerRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(observerRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return observerRef;
}
```

```ts
// issueReducer.ts
builder.addCase(getIssuesByPageThunk.fulfilled, (state, action) => {
  state.loading = 'succeeded';
  state.issues = state.issues.concat(action.payload);
  state.issues = state.issues.sort((a, b) => b.comments - a.comments);
  state.page += 1;
  state.hasMore = action.payload.length > 0;
});
```

- 가끔 observer가 여러번 감지되었을때 한번씩 중복으로 데이터를 요청하는 경우가 발생할 수 있었기 때문에, redux thunk의 createAsyncThunk 를 이용하여 condition 옵션에서 기존의 loading state 가 pending 중일 때는 요청을 중단하도록 구현하였습니다.
- **캐싱 구현**을 위해 **기존에 리스트에서 상세조회 페이지로 이동시에는 리스트를 담고있는 state에서 이슈넘버를 확인해 존재하면 api요청을 진행하지 않고** 배열에서 가져와 데이터를 출력하도록 구현하고, 새로고침이나 해당 상세조회 페이지로 바로 접근하는 경우에는 api를 요청하도록 하고 중복 데이터 처리를 위해 리스트로 이동시에 해당 데이터는 배열에서 제거하도록 구현했습니다.
- 무한스크롤의 경우에는 불러오는 데이터의 양이 많아질수록, **기존의 리스트를 계속 새로 렌더링할 수 있는 부담**이 생기기 때문에 React.memo를 사용하여 최적화를 진행하였고 결과적으로 **두배이상의 리렌더링 시간 단축**이 가능하였습니다.
```ts
// issueReducer.ts
export const getIssuesByPageThunk = createAsyncThunk(
  'issues/getIssues',

  async (getIssues: (page: number) => Promise<IIssues>, { getState }) => {
    const state = getState() as RootState;
    return await getIssues(state.issueReducer.page);
  },
  {
    condition: (arg, { getState }) => {
      const state = getState() as RootState;
      return (
        (state.issueReducer.loading === 'idle' || state.issueReducer.loading === 'succeeded') &&
        state.issueReducer.hasMore
      );
    },
  },
);
```

```ts
// useIssueAction.tsx
  const handleGetIssueByIssueNumber = async (id: number) => {
  const issue = await dispatch(getIssueByIssueNumberAction(id));
  if (issue) {
    return issue;
  } else {
    await handleDispatchGetIssueByIssueNumber(id);
    return dispatch(getIssueByIssueNumberAction(id));
  }
};
```

```tsx
// IssueItem.tsx
export default React.memo(IssueItem);
```
ReactMemo 적용 전

![memo 사용 전](https://github.com/brince0304/pre-onboarding-11th-3-15/assets/110673427/e48ec0f9-b920-4cdb-b8e5-22e5f5a443fe)

ReactMemo 적용 후

![사용 후](https://github.com/brince0304/pre-onboarding-11th-3-15/assets/110673427/56106de1-7a64-46a9-8d68-0d6a8ed5ce5b)


> ## 3. 추상화

- **컴포넌트의 재사용성을 높이기 위해 추상화를 고려하였습니다.**
- 기존에는 함수로 선언했던 비즈니스로직들을 클래스를 사용하여 선언하는데에 있어서 어려움을 겪었습니다.
- **클래스를 사용하여 선언하면서, 클래스의 메서드를 사용하는 컴포넌트에서는 this를 사용하여 메서드를 호출하도록 구현하였습니다.**
- 클래스는 기본적으로 인스턴스화되어 객체로 관리해야했고, 이를 위해 context를 사용하여 관리하였습니다.
- 기본적으로 메서드 선언은 최대한 개방폐쇄원칙을 고려하여 인터페이스 선언을 통해 추상화를 진행하고 메서드를 정의했습니다.
- **컴포넌트에서는 추상화된 메서드를 사용하여 비즈니스 로직을 호출하도록 구현하였습니다.**

```ts
// githubService.ts
export interface IGithubService {
  getIssuesByPage(page: number): Promise<IIssues>;
  getIssueByIssueNumber(issueNumber: number): Promise<IIssueChild>;
}

export class GithubService implements IGithubService {
  httpClient: IHttpClient;
  owner: string;
  repo: string;
  constructor(httpClient: IHttpClient, owner: string, repo: string) {
    this.httpClient = httpClient;
    this.owner = owner;
    this.repo = repo;
  }

  async getIssuesByPage(page: number): Promise<IIssues> {
    return await this.httpClient.get(getIssuesURL(page, this.owner, this.repo));
  }
  async getIssueByIssueNumber(issueNumber: number): Promise<IIssueChild> {
    return await this.httpClient.get(getIssueURL(issueNumber, this.owner, this.repo));
  }
}
```
