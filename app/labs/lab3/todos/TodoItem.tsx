export default function TodoItem({
  todo,
}: {
  todo: { title: string; status: string; done: boolean };
}) {
  return (
    <li className="list-group-item" key={todo.title}>
      <input type="checkbox" checked={todo.done} readOnly />
      <select value={todo.status} disabled>
        <option value="CANCELED">CANCELED</option>
        <option value="IN PROGRESS">IN PROGRESS</option>
        <option value="DEFERRED">DEFERRED</option>
      </select>
      <input type="text" defaultValue={todo.title} />
    </li>
  );
}
