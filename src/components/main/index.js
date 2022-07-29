

import { Routes, Route } from "react-router-dom";
import TodoList from '../todoList/todoList';
import UserList from '../userList/userList';
import Dashbord from './../dashboard';
import Home from './../../components/home';
import Sign from '../authenticate/register';
import Login from '../authenticate/login';
import Counter from '../counter/counter';
import Account from '../account';
import InformationAccount from '../account/information';
import EditAccount from '../account/edit';

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
                <Route path="/account/information" element={<InformationAccount />} />
                <Route path="/account/edit" element={<EditAccount />} />
            </Routes>
        </div>
    );
}

export default Main;