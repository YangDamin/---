import './App.css';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './todolist/TodoTemplate';
import TodoHead from './todolist/TodoHead';
import TodoList from './todolist/TodoList';
import TodoCreate from './todolist/TodoCreate';
import { TodoProvider } from './todolist/TodoProvider';

const Style = createGlobalStyle`
  body {
    background-color : #425364
  }
`;

function App() {
  return (
    <TodoProvider>
      <Style />
      <TodoTemplate>
        <TodoHead></TodoHead>
        <TodoList></TodoList>
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
