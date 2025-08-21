import { TodoType } from 'types/todoType';
import TodoItem from './TodoItem';

type TodoListProps = {
  todos: TodoType[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newTitle: string) => void;
};

const TodoList = ({ todos, onToggle, onDelete, onEdit }: TodoListProps) => {
  return (
    <div className="w-full max-w-2xl mx-auto mt-8 bg-white rounded-2xl shadow-lg p-8 transition-all duration-300">
      <h2 className="text-3xl font-bold text-sky-600 mb-6">🌿 할 일 목록</h2>
      {todos.length === 0 ? (
        <p className="text-slate-400 text-center italic">목록이 없습니다.</p>
      ) : (
        <ul>
          {todos.map(item => (
            <TodoItem
              key={item.id}
              todo={item}
              onToggle={onToggle}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
