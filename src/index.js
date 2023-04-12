import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './app/store'; // Redux 스토어를 가져오기 위해 'store.js' 파일을 import
import { Provider } from 'react-redux'; // React 애플리케이션에서 Redux를 사용할 수 있도록  React Redux의 Provider 컴포넌트를 import , 이 컴포넌트는 하위 컴포넌트에 Reudx 스토어를 제공
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
