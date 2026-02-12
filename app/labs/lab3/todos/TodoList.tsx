import todos from "./todos.json";
import TodoItem from "./TodoItem";
export default function TodoList() {
  return (
    <div>
      <h2>Todo List</h2>
      {/* <ul className="list-group">{todos.map((todo) => TodoItem(todo))}</ul> */}
      {/* 
      <ul className="list-group">
        {todos.map((todo) => (
          <TodoItem
            key={todo.title}
            title={todo.title}
            status={todo.status}
            done={todo.done}
          />
        ))}
      </ul> */}

      <ul className="list-group">
        {todos.map((todo) => (
          <TodoItem key={todo.title} todo={todo} />
        ))}
      </ul>
      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </div>
  );
}
