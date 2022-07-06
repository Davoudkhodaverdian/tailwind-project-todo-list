
import Navbar from './navbar/navbar';
import { Routes, Route } from "react-router-dom";
import TodoList from './../todoList/todoList';
import UserList from './../userList/userList';
import Dashbord from './../dashbord/dashbord';
import Home from './../home/home';
import Sign from './../authenticate/register';
import Login from './../authenticate/login';
import Counter from './../counter/counter';
import UserAccount from './../userAccount/userAccount';

function Main() {

    return (
        <div dir='rtl'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/todoList" element={<TodoList />} />
                <Route path="/userList" element={<UserList />} />
                <Route path="/dashbord" element={<Dashbord />} />
                <Route path="/register" element={<Sign />} />
                <Route path="/login" element={<Login />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/userAccount" element={<UserAccount />} />
            </Routes>
        </div>
    );
}

export default Main;