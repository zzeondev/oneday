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
  // 할일 목록 상태 관리
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

  const onDelete = (id: string): void => {
    const arr: TodoType[] = todos.filter(todo => todo.id !== id);
    setTodos(arr);
  };

  const onEdit = (id: string, newTitle: string): void => {
    const arr = todos.map(item => (item.id === id ? { ...item, title: newTitle } : item));
    setTodos(arr);
  };

  // tsx
  return (
    <div className="w-full max-w-xl mx-auto px-4">
      <h1 className="text-3xl font-bold text-center text-sky-600 my-6">ONEDAY</h1>
      <TodoWrite setTodos={setTodos} handleTodoUpdate={handleTodoUpdate} />
      <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />
    </div>
  );
}

export default App;
