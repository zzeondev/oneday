import { TodoType } from 'types/todoType';
import TodoItem from './TodoItem';
import { useState } from 'react';

type TodoListProps = {
  todos: TodoType[];
  onToggle: (id: string) => void;
  OnDelete: (id: string) => void;
  onEdit: (id: string, newTitle: string) => void;
};

const TodoList = ({ todos, onToggle, OnDelete, onEdit }: TodoListProps) => {
  const [editId, setEditId] = useState<string>();
  return (
    <div>
      <h2>할일 목록</h2>
      {todos.length === 0 ? (
        <p>목록이 없습니다.</p>
      ) : (
        <ul>
          {todos.map(item => (
            <TodoItem
              key={item.id}
              todo={item}
              onToggle={onToggle}
              OnDelete={OnDelete}
              onEdit={onEdit}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
