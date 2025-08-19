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
    <div>
      <input
        type="text"
        value={title}
        onChange={e => handleChange(e)}
        onKeyDown={handleKeyDown}
        className=" rounded-md border border-neutral-800 "
      />
      <button onClick={handleAdd}>등록</button>
    </div>
  );
};

export default TodoWrite;
