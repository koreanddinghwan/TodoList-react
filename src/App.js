import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import React, { useState, useRef, useCallback } from 'react';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트 기초 다지기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링',
      checked: true,
    },
    {
      id: 3,
      text: '일정관리 앱 만들기',
      checked: false,
    },
  ]);

  const nextId = useRef(4); //고유변수생성

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos], //todos라는 state의 변화있을때만.
  );

  //삭제기능
  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} />
    </TodoTemplate>
  );
}

export default App;
