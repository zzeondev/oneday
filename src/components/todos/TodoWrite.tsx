import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { TodoType } from '../../types/todoType';

type TodoWriteProps = {
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
  handleTodoUpdate: (newTodo: TodoType) => void;
};

const TodoWrite = ({ setTodos, handleTodoUpdate }: TodoWriteProps) => {
  // ts
  // 할일 제목
  const [title, setTitle] = useState('');

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
      // console.log(newTodo);
      handleTodoUpdate(newTodo);
      setTitle('');
    }
  };

  //tsx
  return (
    <div className="w-full bg-white border border-gray-100 rounded-xl shadow-md p-6 mb-6">
      <h1 className="text-3xl font-bold text-center text-sky-600 mb-4 drop-shadow-md select-none">
        TODOLIST
      </h1>
      <div className="flex items-center gap-3">
        <input
          type="text"
          value={title}
          onChange={e => handleChange(e)}
          onKeyDown={handleKeyDown}
          placeholder="할 일을 입력하세요"
          className="flex-1 rounded-lg border border-slate-300 px-4 py-2 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all"
        />
        <button
          onClick={handleAdd}
          className="px-5 py-2 rounded-lg bg-sky-500 text-white font-semibold shadow hover:bg-sky-600 active:scale-95 transition"
        >
          등록
        </button>
      </div>
    </div>
  );
};

export default TodoWrite;
