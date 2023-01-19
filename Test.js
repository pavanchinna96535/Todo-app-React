
function Test(props){ 
    

    return (
        <tr onClick={()=>props.deleteTodo(props.number)}>
              <td>{props.number}</td>
              <td>{props.description}</td>
              <td>{props.action}</td>
              <td>{props.remark}</td>
              <td>{props.deleteTodo}</td>
        </tr>
        );
    
    
}
export default Test;