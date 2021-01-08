import './App.css';
import React , {useState} from 'react';

const App = () => {
  const [todos, setTodos] = useState([ {
    text: 'Share hööks with the bretheren',
    isComplete: false
  },
  {
    text: 'Ask bröther if you may have höök',
    isComplete: false
  }]);

  const [dataInput,setDataInput] = useState('');
  const handleChange = (e) =>{
    setDataInput(e.target.value);
  }
  const handleClick = (e) =>{
    e.preventDefault();
    setTodos([{text:dataInput,isComplete: false},...todos]);
    setDataInput('');
  }
  const removeItem = (index,e) => {
    e.stopPropagation();
    const newTasks = [...todos];
    newTasks.splice(index, 1);
    console.log(newTasks);
    setTodos(newTasks);
  }

  const handleComplete = index => {
    const newTodos = [...todos];
    newTodos[index].isComplete = !newTodos[index].isComplete;
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Todo List App</h1>
      <form>
        <input type="text" value={dataInput} onChange={handleChange}/>
        <button onClick={handleClick}>add to do</button>
      </form>
      <ul>
      
        {todos.map(({text,isComplete},index)=>
          <li key={index}  className={isComplete ? 'complete' : null} onClick={handleComplete.bind(this, index)} >{text} 
          <button onClick={removeItem.bind(this, index)}>remove</button></li>
        )}
      </ul>
    </div>
  );
}

export default App;
