import React from 'react';
import styled from 'styled-components';

const TodoListStyle = styled.div`
  flex: 1; /* 차지할 수 있는 영역을 꽉 채운다.*/
  padding: 20px 30px;
  padding-bottom: 50px;
  overflow-y: auto;
`;

function TodoList() {
  return <TodoListStyle>TodoList</TodoListStyle>;
}

export default TodoList;
