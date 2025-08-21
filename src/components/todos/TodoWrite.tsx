import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { TodoType } from '../../types/todoType';

type TodoWriteProps = {
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
  handleTodoUpdate: (newTodo: TodoType) => void;
};

const TodoWrite = ({ setTodos, handleTodoUpdate }: TodoWriteProps) => {
  // ts
  // 할일 제목
  const [title, setTitle] = useState<string>('');

  // 제목 변경
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  // 엔터키 입력 처리
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  // 할일 등록
  const handleAdd = () => {
    if (title.trim()) {
      const newTodo: TodoType = {
        id: Date.now().toString(),
        title,
        completed: false,
      };
      console.log(newTodo);
      handleTodoUpdate(newTodo);
      setTitle('');
    }
  };

  //tsx
  return (
    <div className="flex items-center gap-3 mb-6 w-full">
      <input
        type="text"
        value={title}
        onChange={e => handleChange(e)}
        onKeyDown={handleKeyDown}
        placeholder="할 일을 입력하세요"
        className="w-full flex-1 rounded-lg border border-slate-200 bg-blue-50 px-4 py-2 text-slate-700 placeholder:text-slate-400 shadow-sm outline-none focus:ring-2 focus:ring-sky-400 transition"
      />
      <button
        onClick={handleAdd}
        className="px-4 py-2 rounded-lg bg-sky-500 text-white font-medium shadow-md hover:bg-sky-600 transition-colors"
      >
        등록
      </button>
    </div>
  );
};

export default TodoWrite;
