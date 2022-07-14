import React from 'react';
import './App.css';
import {Form,Button,Card} from 'react-bootstrap';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';




function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div >
    <div className="todo " size="sm">
      <span  style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
      <div>
        <Button variant="outline-success" size="sm" onClick={() => markTodo(index)}>Completed</Button>{' '}
        <Button variant="outline-danger" size="sm" onClick={() => removeTodo(index)}>delete</Button>
      </div>
    </div>
    </div>
  );
}

function FormTodo({ addTodo })
 {
  const [value, setValue] = useState("");

  const handleSubmit = task => {
    task.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <Form  onSubmit={handleSubmit}> 

    <Form.Group size="sm">
      <Form.Label><b>Add Task</b></Form.Label>
      <Form.Control type="text" className="input " size  value={value} 
      onChange={task => setValue(task.target.value)} placeholder="Add new task" />
    </Form.Group>

    <div className='mt-3 mb-3 '>
    <div className="d-grid gap-2">
      <Button className="rounded-pill" variant="primary"  type="submit" >
       Submit
      </Button>
    </div> 
    </div>
    
  </Form>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: " Sample",
      isDone: false
    }
  ]);



  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };



  return (
    <div className="app">
      
      <div className="container">      
        <h1 >Todo List</h1>
        <FormTodo addTodo={addTodo} />
          <div>
              {todos.map((todo, index) => (
               <Card>
                 <Card.Body>
                   <Todo className="mb-3"
                     key={index}
                     index={index}
                     todo={todo}
                     markTodo={markTodo}
                    removeTodo={removeTodo}
                   />
                 </Card.Body>
               </Card>
             ))}
          </div>
      </div>
    </div>
  );
}
export default App;
