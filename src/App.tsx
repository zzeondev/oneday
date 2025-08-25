import TodoList from 'components/todos/TodoList';
import TodoWrite from 'components/todos/TodoWrite';
import { useState } from 'react';
import { TodoType } from 'types/todoType';

function App() {
  // ts
  // 할일 목록 상태 관리
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [editId, setEditId] = useState<string | null>(null);

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
  const onStartEdit = (id: string) => {
    setEditId(id);
  };

  const onEndEdit = () => {
    setEditId(null);
  };

  // tsx
  return (
    <div className="min-h-screen w-full max-w-xl mx-auto px-4 py-12 bg-gradient-to-br from-sky-50 via-cyan-50 to-blue-50 flex flex-col items-center ">
      <h1 className="text-3xl font-bold text-center text-sky-600 my-6 mb-10 drop-shadow-md select-none">
        ONEDAY
      </h1>
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-lg p-8 ring-1 ring-sky-200">
        <TodoWrite setTodos={setTodos} handleTodoUpdate={handleTodoUpdate} />
        <TodoList
          todos={todos}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
          onStartEdit={onStartEdit}
          onEndEdit={onEndEdit}
          editId={editId}
        />
      </div>
    </div>
  );
}

export default App;
