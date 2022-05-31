import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListStyle = styled.div`
  flex: 1; /* 차지할 수 있는 영역을 꽉 채운다.*/
  padding: 20px 30px;
  padding-bottom: 50px;
  overflow-y: auto;
`;

function TodoList() {
  return (
    <TodoListStyle>
      <TodoItem text="프로젝트 하기" done={true} />
      <TodoItem text="운동하기" done={true} />
      <TodoItem text="공부하기" done={false} />
      <TodoItem text="놀러가기" done={false} />
    </TodoListStyle>
  );
}

export default TodoList;
