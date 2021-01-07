import './App.css';
import React , {useState} from 'react';
const App = () => {
  const [todos, setTodos] = useState([]);
  const [dataInput,setDataInput] = useState('');
  const handleChange = (e) =>{
    setDataInput(e.target.value);
  }
  const handleClick = (e) =>{
    e.preventDefault();
    setTodos([dataInput,...todos]);
    setDataInput('');
  }
  return (
    <div className="App">
      <h1>Todo List App</h1>
      <form>
      <input type="text" value={dataInput} onChange={handleChange}/>
      <button onClick={handleClick}>add to do</button>
      </form>
      <ul>
        {todos.map((item,i)=>
          <li key={i}>{item}</li>
        )}
      </ul>
    </div>
  );
}

export default App;
