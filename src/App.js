import Header from "./components/Header";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { v4 } from "uuid";
import Container from 'react-bootstrap/Container'

function App() {
  const [text, setText] = useState("");
  const [addTodo, setAddTodo] = useState(JSON.parse(localStorage.getItem("list")) || []);
  const [completed, setCompleted] = useState(false)

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
      completed: false,
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

  const handleDuble = (id) => {
    setCompleted(!completed)
    const cizgi = addTodo.map((item) => (item.id === id ? {...item, completed: !item.completed} : item))
    setAddTodo(cizgi)
    localStorage.setItem("list", JSON.stringify(cizgi))
  }

  return (
    <Container className="App">
      <Header
        handleSubmit={handleSubmit}
        text={text}
        handleChange={handleChange}
      />
      <TodoList addTodo={addTodo} handleDelete={handleDelete} handleDuble={handleDuble} />
    </Container>
  );
}

export default App;
