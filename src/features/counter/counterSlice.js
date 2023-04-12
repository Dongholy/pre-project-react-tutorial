import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter', // 슬라이스의 이름
  initialState: {
    // 초기 상태 값
    value: 0,
  },

  // reducers 객체에서 정의한 reducer 함수들 중에서 액션을 생성할 때 사용(increment, decrement, incrementByAmount)
  reducers: {
    // Slice에서 사용할 reducer함수를 정의
    increment: (state) => {
      //현재 상태값을 받아서 새로운 상태값을 반환
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload; // payload: 액션객체 , 액션에서 필요한 값을 전달할때 사용
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions; // counterSlice에서 생성된 액션 생성자들을 named export로 선언하여 다른 모듈에서 해당 액션 생성자들을 불러와 사용할 수 있도록 만드는 코드

export default counterSlice.reducer; // slice의 reducer 함수를 내보내기
