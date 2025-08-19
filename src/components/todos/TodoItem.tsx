import { useState } from 'react';
import { TodoType } from 'types/todoType';

type TodoItemProps = {
  todo: TodoType;

  onToggle: (id: string) => void;
  OnDelete: (id: string) => void;
  onEdit: (id: string, newTitle: string) => void;
};

const TodoItem = ({ todo, onToggle, OnDelete, onEdit }: TodoItemProps) => {
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

  // tsx
  return (
    <li
      className={['flex items-center justify-between gap-2 rounded-lg border px-3 py-2'].join(' ')}
    >
      {isEdit ? (
        <div className="flex w-full items-center gap-2">
          <input
            type="text"
            value={editTitle}
            onChange={e => setEditTitle(e.target.value)}
            className="flex-1 rounded-md border border-neutral-300 bg-white px-2 py-1 outline-none focus:ring-brand"
          />
          <button onClick={handleEditSave}>저장</button>
          <button onClick={handleEditCancle}>취소</button>
        </div>
      ) : (
        <>
          <input type="checkbox" onChange={() => onToggle(todo.id)} checked={todo.completed} />
          <span>{todo.title}</span>
          <button onClick={handleEdit}>수정</button>
          <button onClick={() => OnDelete(todo.id)}>삭제</button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
