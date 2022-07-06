
import Navbar from './navbar/navbar';
import { Routes, Route } from "react-router-dom";
import TodoList from './../todoList/todoList';
import UserList from './../userList/userList';
import Dashbord from './../dashboard/dashboard';
import Home from './../home/home';
import Sign from './../authenticate/register';
import Login from './../authenticate/login';
import Counter from './../counter/counter';
import Account from './../account/page';

function Main() {

    return (
        <div dir='rtl'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/todoList" element={<TodoList />} />
                <Route path="/userList" element={<UserList />} />
                <Route path="/dashboard" element={<Dashbord />} />
                <Route path="/register" element={<Sign />} />
                <Route path="/login" element={<Login />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/account" element={<Account />} />
            </Routes>
        </div>
    );
}

export default Main;