

import NavBar from './navBar/navBar';
import TodoList from './../todoList/todoList';


function HomePage() {

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
