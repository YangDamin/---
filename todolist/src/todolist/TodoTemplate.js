import React from 'react';
import styled from 'styled-components';

const TodoTemplateStyle = styled.div`
  width: 500px;
  height: 700px;

  position: relative;
  background: white;
  border-radius: 15px;
  bax-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto;

  margin-top: 90px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
`;

function TodoTemplate({ children }) {
  return <TodoTemplateStyle>{children}</TodoTemplateStyle>;
}
export default TodoTemplate;
