import { MdDelete } from "react-icons/md";

const TodoList = ({ addTodo, handleDelete, handleDuble }) => {
  return (
    <div
      className={
        "d-flex justify-content-center align-items-center flex-column m-5 mx-auto p-4 todo-list rounded-4"
      }
    >
      <h2 className="text-secondary text-center">Todos</h2>

      <ul className="w-100 list-unstyled">
        {addTodo.map((item) => (
          <li
            key={item.id}
            className={`d-flex justify-content-between align-items-center rounded-5 my-3 py-2 px-3 w-100 ${
              item.completed ? "text-info text-decoration-line-through bg-light" : "text-danger bg-warning text-decoration-none"
            }`}
            onDoubleClick={() => handleDuble(item.id)}
            type="button"
          >
            <span>{item.text}</span>
            <MdDelete
              className="text-danger fs-3"
              onClick={() => handleDelete(item.id)}
              type="button"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
