

import NavBar from './navBar/navBar';
import TodoList from './../todoList/todoList';
import { useSelector } from 'react-redux'

function HomePage() {

    const todo = useSelector(state => state.todo.list)
    console.log(todo)
    return (
        <div dir='rtl'>
            <div>
                <NavBar />
            </div>

            <TodoList/>
        </div>
    );
}

export default HomePage;
