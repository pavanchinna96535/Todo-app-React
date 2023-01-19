import React, { useState } from 'react';
import './App.css';
import Table from "./components/Table";
import Form from "./components/Form";



function App() {
  const [todos, Settodos] = useState([
    { number: 1, description: "project", action: "not done", remark: "have to finish" },
    { number: 2, description: "drink water", action: "done", remark: "drink regularly" },
    { number: 3, description: "document reading", action: "not done", remark: "yet to start" }

  ])
  const addTodo = (description, action, remark) => {
    let number = 0;
    if (todos.length > 0) {
      number = todos[todos.length - 1].number + 1;
    }
    else {
      number = 1;
    }
    const newTodo = {
      number: todos.length + 1,
      description: description,
      action: action,
      remark: remark
    }
    Settodos(todos => [...todos, newTodo])
  }

    const deleteTodo = (deleteTodonumber) => {
      let filtered=todos.filter(function(value){
        return value.number !== deleteTodonumber;
        });
        Settodos(filtered);
    }
    const [showForm,setshowForm]=useState(false);

  return (
    <div >
      <div className="container">
        <div className="card">
          <div className="card-header">
            My Todos
          </div>
        </div>

        <div className="card-body">
          <Table todos={todos}  deleteTodo ={deleteTodo} />
          <button className="btn btn-primary" onClick={()=>setshowForm(!showForm)}>
            {showForm ? 'close the form': 'Add new todo'}
          </button>
        </div>
        {
          showForm &&
          <Form addTodo={addTodo} />

        }<br></br>
        


      </div>

    </div>

  );
}

export default App;
