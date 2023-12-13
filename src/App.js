import Header from "./components/Header";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { v4 } from "uuid";
import Container from 'react-bootstrap/Container'

function App() {
  const [text, setText] = useState("");
  const [addTodo, setAddTodo] = useState(JSON.parse(localStorage.getItem("list")) || []);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      return;
    }
    const newTodo = {
      id: v4(),
      text: text,
    };

    setAddTodo([...addTodo, newTodo]);
    localStorage.setItem("list", JSON.stringify([...addTodo, newTodo]))
    setText("");
  };

  const handleDelete = (id) => {
    const filtered = addTodo.filter((item) => item.id !== id);
    setAddTodo(filtered);
    localStorage.setItem("list", JSON.stringify(filtered))
  };

  return (
    <Container className="App">
      <Header
        handleSubmit={handleSubmit}
        text={text}
        handleChange={handleChange}
      />
      <TodoList addTodo={addTodo} handleDelete={handleDelete} />
    </Container>
  );
}

export default App;
