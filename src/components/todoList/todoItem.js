
import { removeTodo, toggleDoneTodo,editTodo } from "../../store/slices/todoSlice"
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function TodoItem({ data }) {

    const [edit, seteditItem] = useState(false);
    const [inputEdit, setInputEdit] = useState(data.text);
    const dispatch = useDispatch();

    //removeTodoHandler sent id to todoSlice removeTodo 
    const removeTodoHandler = () => {
        dispatch(removeTodo(data.id))
    }

    //toggleTodoHandler sent id to todoSlice toggleDoneTodo 
    const toggleTodoHandler = () => {
        dispatch(toggleDoneTodo(data.id))
    }

    //editTodoHandler sent id to todoSlice editTodo 
    const editTodoHandler = () => {
        dispatch(editTodo({ id: data.id, text: inputEdit }))
        seteditItem(false)
    }

    //set edit state for current item
    const setEditItemHandler = () => {
        seteditItem(true)
    }

    const inputTodoHandler = (event) => {

        setInputEdit(event.target.value)
    }

    return (

        <div className="flex mb-4 items-center">


            {
                !edit ?
                    <>
                        <p className={`w-full ${data.done ? "line-through text-green-700" : "text-gray-700"}`}>{data.text}</p>
                        <button
                            className={`flex-shrink-0 p-2 ml-4 border-2 rounded hover:text-white 
                            ${data.done ? "text-green-700 border-green-700 hover:bg-green-700" : "text-gray-700 border-gray-700 hover:bg-gray-700"}`}
                            onClick={toggleTodoHandler}  >{data.done ? "Done" : "Not done"}</button>
                        <button
                            className="flex-shrink-0 p-2 ml-2 border-2 rounded text-red-700 border-red-700 hover:text-white hover:bg-red-700"
                            onClick={removeTodoHandler} >
                            Remove</button>
                        <button className="flex-shrink-0 p-2 ml-2 border-2 rounded text-blue-700 border-blue-700 hover:text-white hover:bg-blue-700"
                            onClick={setEditItemHandler} >
                            edit</button>
                    </>
                    :
                    <>

                        <input className="shadow border rounded w-full py-2 px-3 mr-4 text-gray-700" placeholder="Add Todo"
                            onChange={inputTodoHandler}
                            value={inputEdit} />
                        <button className="flex-shrink-0 p-2 ml-2 border-2 rounded text-blue-700 border-blue-700 hover:text-white hover:bg-blue-700"
                            onClick={editTodoHandler} >
                            edited</button>
                    </>

            }

        </div>

    );
}

export default TodoItem;