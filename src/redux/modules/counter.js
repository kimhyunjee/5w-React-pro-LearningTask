import { createSlice } from "@reduxjs/toolkit";

// Action Value
const ADD_NUMBER = "ADD_NUMBER";
const MINUS_NUMBER = "MINUS_NUMBER";

// Initial State
const initialState = {
    number: 0,
};

// 리듀서 counterSlice
export const counterSlice = createSlice({ //새로 설치한 툴킷 사용해주고 위에 import해온다
    name: "counter",    //모듈의 이름
    initialState,   //{}, 이 모듈의 초기상태값
    reducers:{      //리듀서 안의 이 함수가 reducer 로직이자 action creator가 된다 / action value까지 함수이름따서 자동으로 생성됨
        addNumber: (state, action) => {
            state.number = state.number + action.payload;
        },

        minusNumber : (state, action) => {
            state.number = state.number - action.payload;
        },
    },
});

// export default reducer
export const { addNumber, minusNumber } = counterSlice.actions;
export default counterSlice.reducer;