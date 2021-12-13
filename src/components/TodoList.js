import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, onRemove }) => {
  // props로 받아온 onRemove를 하위컴포넌트에 전달
  return (
    <div className="TodoList">
      {todos.map((todo, index) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
        ></TodoListItem>
      ))}
    </div>
  );
};
export default TodoList;
