import './App.css';
import React, { Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import TodoTemplate from './todolist/TodoTemplate';
import TodoHead from './todolist/TodoHead';
import TodoList from './todolist/TodoList';

const Style = createGlobalStyle`
  body {
    background-color : #425364
  }
`;

function App() {
  return (
    <>
      <Style />
      <TodoTemplate>
        <TodoHead></TodoHead>
        <TodoList></TodoList>
      </TodoTemplate>
    </>
  );
}

export default App;
