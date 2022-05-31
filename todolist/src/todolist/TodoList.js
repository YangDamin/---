import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoState } from './TodoProvider';

const TodoListStyle = styled.div`
  flex: 1; /* 차지할 수 있는 영역을 꽉 채운다.*/
  padding: 20px 30px;
  padding-bottom: 50px;
  overflow-y: auto;
`;

function TodoList() {
  const todos = useTodoState();
  return (
    <TodoListStyle>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </TodoListStyle>
  );
}

export default TodoList;
