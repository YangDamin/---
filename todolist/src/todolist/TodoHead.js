import React, { useState } from 'react';
import styled from 'styled-components';
import { useTodoState } from './TodoProvider';

const TodoHeadStyle = styled.div`
  padding: 50px 30px 30px 30px;
  border-bottom: 1px solid lightgray;
  h1 {
    margin: 0;
    font-size: 35px;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    font-size: 15px;
    margin-top: 30px;
    font-weight: bold;
    color: #20c997;
  }
`;

function TodoHead(props) {
  let now = new Date();
  let day = now.getDay();
  let dayString;

  switch (day) {
    case 0:
      dayString = '일요일';
      break;
    case 1:
      dayString = '월요일';
      break;
    case 2:
      dayString = '화요일';
      break;
    case 3:
      dayString = '수요일';
      break;
    case 4:
      dayString = '목요일';
      break;
    case 5:
      dayString = '금요일';
      break;
    case 6:
      dayString = '토요일';
      break;
    default:
      break;
  }

  const todos = useTodoState();
  const undoneTasks = todos.filter((todo) => !todo.done);

  return (
    <TodoHeadStyle>
      <h1>
        {now.getFullYear()}년 {now.getMonth() + 1}월 {now.getDate()}일
      </h1>
      <div className="day">{dayString}</div>
      <div className="tasks-left">할 일 {undoneTasks.length}개 남음</div>
    </TodoHeadStyle>
  );
}

export default TodoHead;
