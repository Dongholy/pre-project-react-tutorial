import { configureStore } from '@reduxjs/toolkit'; // Redux Toolkit에서 API를 가져오기 ,  빈 Redux 스토어를 만들고 내보내기
import counterReducer from '../features/counter/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
