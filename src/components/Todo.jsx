import './Todo.css';
const Todo =({ name, description,id,onDelete,editTodoInfo})=>{
       
        const options = [
                { value: 'red', label: 'Not Completed', color: 'red' },
                { value: 'green', label: 'Completed', color: 'green' },
              ];
        
        return (
                <div className="todoCard">
                    <p><label><b>Name :</b> {name}</label></p>
                    <p><label><b>Description :</b> {description}</label></p>
                    <p>
                        <label><b>Status :</b></label>
                        <select >
                                {options.map((option) => (
                                        <option
                                        key={option.value}
                                        value={option.value}
                                        style={{ color: option.color }}
                                        >
                                       {option.label}
                                </option>
                                ))}
                        </select>
                   </p>
                    <div>
                        <button onClick={() => editTodoInfo(id)}>Edit</button>
                        <button onClick={() => onDelete(id)}>Delete</button>
                    </div>
                </div>

        )

}

export default Todo;