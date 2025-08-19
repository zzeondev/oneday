import TodoList from 'components/todos/TodoList';
import TodoWrite from 'components/todos/TodoWrite';
import { useState } from 'react';
import { TodoType } from 'types/todoType';

const initialTodos: TodoType[] = [
  { id: '1', title: '할일 1', completed: false },
  { id: '2', title: '할일 2', completed: false },
  { id: '3', title: '할일 3', completed: false },
];

function App() {
  // ts
  const [todos, setTodos] = useState<TodoType[]>(initialTodos);

  // 업데이트
  const handleTodoUpdate = (newTodo: TodoType): void => {
    const arr: TodoType[] = [newTodo, ...todos];
    setTodos(arr);
  };

  const onToggle = (id: string): void => {
    const arr: TodoType[] = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    setTodos(arr);
  };

  const OnDelete = (id: string): void => {
    const arr: TodoType[] = todos.filter(todo => todo.id !== id);
    setTodos(arr);
  };

  const onEdit = (id: string, newTitle: string): void => {
    const arr = todos.map(item => (item.id === id ? { ...item, title: newTitle } : item));
    setTodos(arr);
  };

  // tsx
  return (
    <div>
      <h1>원데이</h1>
      <TodoWrite setTodos={setTodos} handleTodoUpdate={handleTodoUpdate} />
      <TodoList todos={todos} onToggle={onToggle} OnDelete={OnDelete} onEdit={onEdit} />
    </div>
  );
}

export default App;
