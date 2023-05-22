export interface Todo {
  id: string;
  text: string;
  complete: boolean;
}
export type ToggleComplete = (selectedTodo: Todo) => void;
export type DeleteTodo = (todoId: string) => void;
