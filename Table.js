import Test from "./Test.js";

function Table(props) {
    return (

        <div className='container'>
            <table className='table'>
                <thead className='table table-dark'>
                    <tr>
                        <td>SR.no</td>
                        <td>description</td>
                        <td>action</td>
                        <td>remark</td>
                    </tr>
                </thead>
                <tbody>
                {
                    props.todos.map(todos => (
                       <Test
                            key={todos.number}
                            number={todos.number}
                            description={todos.description}
                            action={todos.action}
                            remark={todos.remark}
                            deleteTodo={todos.deleteTodo}
                       />



                    ))
                        }
                </tbody>
                
            </table>
        </div>





    );
}
export default Table;