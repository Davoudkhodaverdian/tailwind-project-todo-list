
import { useState } from 'react';
import { addTodo } from "../../store/slices/todoSlice"
import { useDispatch } from 'react-redux'



function AddTodo() {

    const [inputTodo, setInputTodo] = useState("");


    const dispatch = useDispatch()

    const inputTodoHandler = (event) => {

        setInputTodo(event.target.value)
    }

    const addTodoHandler = (event) => {

        if (inputTodo.length > 0) {

            dispatch(addTodo({ text: inputTodo, done: false, id: Date.now() }))
            setInputTodo("")
        }

    }

    return (

        <div className="flex mt-4">
            <input className="shadow border rounded w-full py-2 px-3 mr-4 text-gray-700" placeholder="Add Todo"
                onChange={inputTodoHandler}
                value={inputTodo} />
            <button onClick={addTodoHandler}
                className="flex-shrink-0 p-2 border-2 rounded text-blue-700 border-blue-700 hover:text-white hover:bg-blue-700">
                Add
            </button>
        </div>


    );
}

export default AddTodo;