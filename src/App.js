
// import './App.css';

// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }

// export default App;

// src/App.js


import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNumber , minusNumber } from "./redux/modules/counter";

const App = () => {
  // 2-1. dispatch를 사용하기 위한 선언
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);
  //1.코드 추가
  const globalNumber = useSelector((state) => state.counter.number);

  const onChangeHandler = (event) => {
    const { value } = event.target;
		// event.target.value는 문자열 입니다.
		// 이것을 숫자형으로 형변환해주기 위해서 +를 붙여 주었습니다.
    setNumber(+value);
  };

	// 콘솔로 onChangeHandler가 잘 연결되었는지 확인해봅니다.
	// input에 값을 넣을 때마다 콘솔에 그 값이 찍히면 연결 성공!
  // console.log(number);

  // 2-2. 더하기 버튼을 눌렀을 때 실행할 이벤트핸들러 만들기
  const onClickAddNumberHandler = () => {
    //2-5. action creator를 dispatch 해주고, action creator의 인자에 number넣기
    dispatch(addNumber(number));
  }

  const onClickMinusNumberHandler = () => {
    dispatch(minusNumber(number));
  }

  return (
    <div>
      {/* 2.코드 추가 */}
      <div>{globalNumber}</div>
      <input type="number" onChange={onChangeHandler} />
      {/* 2-3.더하ㅣㄱ 버튼 이벤트핸들러 연결 */}
      <button onClick={onClickAddNumberHandler}>더하기</button>
      <button onClick={onClickMinusNumberHandler}>빼기</button>
    </div>
  );
};

export default App;
