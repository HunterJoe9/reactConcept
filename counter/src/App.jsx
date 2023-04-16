import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(1);

  useEffect(() => {}, []);
  function plusNum() {
    setCount(count + 1);
  }

  function substructNum() {
    setCount(count - 1);
  }
  /* 작동 방식 :
    count의 state 초기값 = 0
    button 태그에 onClick 이벤트 부여
    누르면 count 초기값 + 1 이 되는 함수명 작성
    함수 작성 : PlusNum
    plusNum은 값을 렌더링해주는 SetCount 사용
    SetCount는 {count +1}을 인자로 받음
    렌더링 해준 값을 다시 초기값에 넣음
    반복 */

  //그럼 여기서 숫자를 빼주는 버튼도 생성해보자

  return (
    <div className="bg-red-100 min-h-screen flex flex-col justify-center items-center">
      <div className>{count}</div>
      <div className="flex justify-between">
        <button
          onClick={plusNum}
          className="border-4 w-12 h-12 bg-blue-500 rounded-full"
        >
          + 1
        </button>
        <button
          onClick={substructNum}
          className="border-4 w-12 h-12 bg-red-500 rounded-full"
        >
          - 1
        </button>
      </div>
    </div>
  );
}

export default App;
