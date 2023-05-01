import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { ListGroup } from "./components/ListGroup";
import Form from "./components/Form";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ListGroup />
      <Form/>
    </div>
  );
}

export default App;