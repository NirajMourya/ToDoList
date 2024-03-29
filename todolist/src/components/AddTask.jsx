import {useState} from "react";


export default function AddTask(props){
    const [name, setName] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        name.trim() === '' ? alert('Please enter a task name') : props.addTask(name);
        setName("");
    }
    const handleChange = (e) => {
        setName(e.target.value);
    }
    
    return (
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="new-todo-input"
          name="text"
          value={name}
          onChange={handleChange}
          className = "newToDo"
          placeholder="Please add your tasks"
        />
        <button type="submit" className="btn btn-primary addtodo">
          Add
        </button>
      </form>
    )
}
