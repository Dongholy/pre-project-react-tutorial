import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './counterSlice';
import styled from 'styled-components';

const ChangeValueButton = styled.button`
  font-size: 16px;
  margin: 100px;
  padding: 10px 30px;
  border-radius: 5px;
  border: none;
  background-color: aqua;
`;

const Valuespan = styled.span`
  font-size: 36px;
`;

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <ChangeValueButton
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          더하기
        </ChangeValueButton>
        <Valuespan>{count}</Valuespan>
        <ChangeValueButton
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          빼기
        </ChangeValueButton>
      </div>
    </div>
  );
}
