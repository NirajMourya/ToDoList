import AddTask from "./components/AddTask"
import ToDo from "./components/ToDo"
import {useState} from "react";
import { nanoid } from 'nanoid'
import logoImg from "./assets/logo.png"
import noProjectImage from './assets/no-task.png'
function App() {
  const [tasks, setTasks] = useState([]);
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  }

  const addTask = (name) => {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
  }

  const toggleTaskCompleted = (id) => {
    const updatedTasks = tasks.map(task => {
      if (id === task.id) {
        return { ...task, completed: !task.completed }
      }
      return task;
    });
    setTasks(updatedTasks);
  } 

  return (
    <div className="App">
     <header>
      <img src={logoImg} alt="ToDO List logo" />
      <h1>ToDo App</h1>
      <p>
        React app for organized task management and productivity tracking.
      </p>
     </header>
     <main>
      <AddTask  addTask={addTask} />
      { tasks.length > 0 ?
        <ul className="todoList">
          {tasks.map(task => (
            <ToDo id={task.id} name={task.name} key={task.id} completed={task.completed} deleteTask={deleteTask} toggleTaskCompleted={toggleTaskCompleted} />
          ))}
        </ul>
        : 
         <div className="noTaskFound">
            <img  src={noProjectImage} alt="An empty task list" />
            <h2 >No task found</h2>
         </div>
       }  
      </main>
    </div>
  );
}

export default App;