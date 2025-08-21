import { KeyboardEvent, useState } from 'react';
import { TodoType } from 'types/todoType';

type TodoItemProps = {
  todo: TodoType;

  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newTitle: string) => void;
};

const TodoItem = ({ todo, onToggle, onDelete, onEdit }: TodoItemProps) => {
  // ts
  const [isEdit, setIsEdit] = useState(false);

  const [editTitle, setEditTitle] = useState(todo.title);

  // 수정
  const handleEdit = () => {
    setIsEdit(true);
  };

  // 저장
  const handleEditSave = () => {
    if (editTitle.trim()) {
      onEdit(todo.id, editTitle);
      setIsEdit(false);
    }
  };

  // 취소
  const handleEditCancle = () => {
    setEditTitle(todo.title);
    setIsEdit(false);
  };

  // 엔터키 저장
  const handleEditKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleEditSave();
    }
    if (e.key === 'escape') {
      handleEditCancle();
    }
  };

  // tsx
  return (
    <li className="w-full flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow hover:shadow-md transition-all duration-200">
      {isEdit ? (
        <div className="flex w-full items-center gap-3">
          <input
            type="text"
            value={editTitle}
            onChange={e => setEditTitle(e.target.value)}
            onKeyDown={handleEditKeyDown}
            placeholder="할 일을 입력하세요"
            className="flex-1 rounded-md border border-slate-300 bg-blue-50 px-4 py-2 text-slate-700 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-sky-400 transition"
          />
          <button
            onClick={handleEditSave}
            className="px-4 py-2 rounded-md bg-sky-500 text-white font-medium hover:bg-sky-600 transition"
          >
            저장
          </button>
          <button
            onClick={handleEditCancle}
            className="px-4 py-2 rounded-md bg-slate-200 text-slate-700 font-medium hover:bg-slate-300 transition"
          >
            취소
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-4 flex-1">
          <input
            type="checkbox"
            onChange={() => onToggle(todo.id)}
            checked={todo.completed}
            className="w-5 h-5 accent-sky-500"
          />
          <span
            className={`text-base ${
              todo.completed ? 'line-through text-slate-400' : 'text-slate-700 font-semibold'
            }`}
          >
            {todo.title}
          </span>
          <div className="flex gap-2 ml-auto">
            <button
              onClick={handleEdit}
              className="px-4 py-2 rounded-md bg-sky-400 text-white hover:bg-sky-500 transition"
            >
              수정
            </button>
            <button
              onClick={() => onDelete(todo.id)}
              className="px-4 py-2 rounded-md bg-gray-400 text-white hover:bg-gray-500 transition"
            >
              삭제
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
