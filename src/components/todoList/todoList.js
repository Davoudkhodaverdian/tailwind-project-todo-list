

import AddTodo from './addTodo';
import { useSelector } from 'react-redux'
import TodoItem from './todoItem';
import { useEffect } from 'react';
import axios from 'axios';
import { setTodo } from "../../store/slices/todoSlice";
import { useDispatch } from 'react-redux';

function TodoList() {
    
    const dispatch = useDispatch();
    const getTodos = async ()=> {
        let response = await axios.get('https://629ef5bce67470ca4dec9bcb.endapi.io/todos');
        dispatch(setTodo(response.data.data))
        
    }

    useEffect(()=> {
        getTodos()
    },[])


    const todo = useSelector((state) => state.todo.list)


    return (

        <div className="w-full flex items-center justify-center  " dir='ltr'>
            <div className="bg-slate-50 rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
                <div className="mb-4">
                    <h1 className="text-gray-700">Todo List</h1>
                    <AddTodo/>
                </div>
                <div>
                    {
                        todo.map(item =>  <TodoItem key={item.id} data={item}/>)
                    }
                   
     
                </div>
            </div>
        </div>

    );
}

export default TodoList;
