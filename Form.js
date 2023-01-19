import React, { useState } from 'react';
function Form(props) {
    const [description, setDescription] = useState();
    const [action, setAction] = useState();
    const [remark, setRemark] = useState();

    const submitTodo = () => {
        if (description !== "" && action !== "" && remark !== "") {
            props.addTodo(description, action, remark);
            setDescription("");
            setAction("");
            setRemark("");

        }
    }
    
    return (
        <div>
            <form>
                <div>
                    <label>Description</label><br></br>
                    <input type="text" className="form-control" 
                        onChange={e =>setDescription(e.target.value)}
                        value={description}
                    >
                    </input>
                </div><br></br>
                <div>
                    <label>Action</label><br></br>
                    <input type="text" className="form-control" 
                        onChange={e => setAction(e.target.value)}
                      value={action}  
                    ></input>
                </div><br></br>
                <div>
                    <label>Remark</label><br></br>
                    <textarea className="form-control" rows="3"
                       onChange={e => setRemark(e.target.value)}
                        value={remark}
                    ></textarea>
                </div><br></br>
               
            </form>
            <button className="btn btn-primary" onClick={submitTodo}>Add newtodo</button>
        </div>

    );
}
export default Form;