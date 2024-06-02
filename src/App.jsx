import Todo from'./components/Todo';
import React,{useState} from 'react';
import './App.css';


const App =()=>{
 
  const [name, setName] = useState('Office Task 1');
  const [description, setDescription] = useState('This is the description for my first task');

 
  let [todoKey, setTodoKey] = useState(0);
  const [components, setComponents] = useState([]);
  
  const createTodoItem = () => {
    components.push(<Todo key={todoKey} name={name} description={description} id={todoKey} onDelete={removeTodo} editTodoInfo={editTodoInfo} />);
    setComponents([components]);
    setTodoKey(++todoKey);
  };

  const removeTodo = (id) => {    
    components.splice(id,1);
    setComponents([components]);
  };

  


  /************* Later ****************/
  const editTodoInfo = (id) => {
    console.log("key :::: ",id);
    console.log("components :::",components);
    
  };

  const handleNameChange = (e)=> {
    console.log("Test : ",e.target.value)
    setName(e.target.value);
  }

  const handleDescriptionChange = (e)=> {
    setDescription(e.target.value);
  }
/************* Later ****************/



return (
<div className="head">
  <div>
    <div className="header">
        <h1>my todo</h1>
     </div>
        <div className="prabu">
          <input  type="text" placeholder='Name' value={name} onChange={handleNameChange}/>
          <input  type="text" placeholder='Description' value={description} onChange={handleDescriptionChange} />
            <button onClick={createTodoItem}>Add Todo</button>
        </div>
        <div className="midle">
          <h3>My Todos</h3>
          <h3>Status Filter:</h3>
          <button>All▼</button>
        </div>
 
      <div >
      <div>{components.map(component => component)}</div>
    </div>
       
  </div>
</div>
)
}
export default App;
