import React, { useState } from 'react';
import TodoList from '../../components/TodoList';
import NewTodo from '../../components/NewTodo';
import { Todo as TodoModal ,ToggleComplete, DeleteTodo} from '../../Model';

const Todo: React.FC = () => {
  const [todos, setTodos] = useState<TodoModal[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos(prevTodos => [
      ...prevTodos,
      { id: Math.random().toString(), text: text , complete:false}
    ]);
  };

  const todoDeleteHandler:DeleteTodo = (todoId) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  };

  const toggleComplete: ToggleComplete = selectedTodo => {
    const updatedTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler}   toggleComplete={toggleComplete}/>
    </div>
  );
};

export default Todo;
