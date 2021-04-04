/* eslint-disable no-unused-vars */
import "./App.css";
import "./App.css";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>Mayank's To Do List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
      />
      <ToDoList inputText={inputText} />
    </div>
  );
}

export default App;
