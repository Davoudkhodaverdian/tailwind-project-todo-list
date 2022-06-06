

import AddTodo from './addTodo';
import { useSelector } from 'react-redux'
import TodoItem from './todoItem';

function TodoList() {

    const todo = useSelector((state) => state.todo.list)


    return (

        <div className="h-96 w-full flex items-center justify-center  " dir='ltr'>
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
