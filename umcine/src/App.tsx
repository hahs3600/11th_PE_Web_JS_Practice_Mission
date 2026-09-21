/*
컴포넌트 부모-자식 관계

App
├── Header
└── MovieList
    ├── MovieCard
    └── MovieCard
*/

function Header() {
  return <h1>영화 목록</h1>;
}

function MovieCard() {
  return (
    <article>
      <h2>스파이더맨: 브랜드 뉴 데이</h2>
      <p>장르: 슈퍼히어로</p>
      <p>개봉일: 2026.07.29</p>
    </article>
  );
}

function MovieList() {
  return (
    <>
      <MovieCard />
      <MovieCard />
    </>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <MovieList />
    </>
  );
}