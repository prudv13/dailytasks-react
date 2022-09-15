import { useState,} from 'react'
import {Container , Row, Col} from 'react-bootstrap';
import './App.css'

let globalID = 0
function App() {

  const [task, setTask] = useState("")
  const [todos, setTodos] = useState([])

  function createTodo(event){
    event.preventDefault();
    setTodos(oldTodos =>{
      setTask('')
      return [...oldTodos, {todo: task, id: globalID++ }]
    })

  }

  function deleteItem(itemID){
    setTodos(oldTodos => oldTodos.filter(item => item.id !== itemID))
  }

  
  return (
    <Container fluid>
      <Row>
        <Col>
        <h1 class="todos-heading">DAILY TASKS</h1>
        <form onSubmit={createTodo}>
        <h1 class="create-task-heading">Create <span class ="create-task-heading-subpart">Task</span></h1>
        <input 
        className='todo-user-input'
        type="text" 
        value={task}
        // onKeyDown={checkForEnterKey} 
        onChange={event => {
          setTask(event.target.value)
        }}/><br/>
        <button type="submit" className='add-todo-button'>Add</button>
      </form>
      <h1 class="todo-items-heading">My <span class="todo-items-heading-subpart">Tasks</span></h1>
      <ul className='todo-items-container'>
        {todos.map((item, index) =>{
            return <div key={item.id}>
              <li className='todo-item-container'>
              <div className='label-container'>
              {item.todo}
              </div>
              <button className='delete-icon-container' onClick={()=>deleteItem(item.id)}>
              <i class="far fa-trash-alt delete-icon"></i>
              </button>
              </li>
            </div>
        })}
      </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default App
