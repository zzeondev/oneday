import { TodoType } from 'types/todoType';
import TodoItem from './TodoItem';

type TodoListProps = {
  todos: TodoType[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newTitle: string) => void;

  onStartEdit: (id: string) => void;
  onEndEdit: () => void;
  editId: string | null;
};

const TodoList = ({
  todos,
  onToggle,
  onDelete,
  onEdit,
  onStartEdit,
  onEndEdit,
  editId,
}: TodoListProps) => {
  // 완료된 체크리스트 아래로
  const sortedTodos = [...todos].sort((a, b) => {
    if (a.completed === b.completed) return 0;
    return a.completed ? 1 : -1;
  });

  return (
    <div className="w-full border border-gray-100 max-w-2xl mx-auto mt-8 bg-white rounded-2xl shadow-lg p-8 transition-all duration-300">
      <h2 className="text-2xl font-bold text-center text-sky-600 mb-6 drop-shadow-md select-none">
        할 일 목록
      </h2>
      {todos.length === 0 ? (
        <p className="text-slate-400 text-center italic">목록이 없습니다.</p>
      ) : (
        <ul>
          {sortedTodos.map(item => (
            <TodoItem
              key={item.id}
              todo={item}
              onToggle={onToggle}
              onDelete={onDelete}
              onEdit={onEdit}
              onStartEdit={onStartEdit}
              onEndEdit={onEndEdit}
              editId={editId}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
