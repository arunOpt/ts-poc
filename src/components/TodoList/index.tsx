import React from 'react';
import './TodoList.css';
import { ToggleComplete, Todo, DeleteTodo} from '../../Model';

interface TodoListProps {
  items: Todo[];
  onDeleteTodo: DeleteTodo;
  toggleComplete: ToggleComplete;
}

const TodoList: React.FC<TodoListProps> = ({
  items,
  toggleComplete,
  onDeleteTodo
})  => {
  return (
    <ul>
      {items.map(todo => (
        <li  className="todo"key={todo.id}>
           <label className={"todo_container"}>
           <input
          type="checkbox"
          onChange={() => toggleComplete(todo)}
          checked={todo.complete}
        />
          <div className={`${todo.complete ? "complete" : undefined}`}>{todo.text}</div>
          <button onClick={onDeleteTodo.bind(null, todo.id)}>
            DELETE
          </button>
          </label>  
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
