
import Navbar from './navbar/navbar';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import TodoList from './../todoList/todoList';
import UserList from './../userList/userList';
import Dashbord from './../dashbord/dashbord';
import Home from './../home/home';
import Sign from './../sign/sign';
import Counter from './../counter/counter';

function Main() {

    return (
        <div dir='rtl'>
            <div>

                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/todoList" element={<TodoList />} />
                        <Route path="/userList" element={<UserList />} />
                        <Route path="/dashbord" element={<Dashbord />} />
                        <Route path="/sign" element={<Sign />} />
                        <Route path="/counter" element={<Counter />} />
                    </Routes>
                </BrowserRouter>
            </div>
            <div className='text-center'>Footer</div>


        </div>
    );
}

export default Main;