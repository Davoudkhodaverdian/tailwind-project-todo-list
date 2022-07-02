

import ReactIcon from '../../../images/logo.svg';
import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Navbar() {

    const [state, setState] = useState(false);

    const MenuHandle = () => { setState(prevState => !prevState) }

    return (
        <nav className=' p-3 bg-gray-100'>
            <div className='flex flex-wrap justify-between items-center container mx-auto'>
                <div className='flex  items-center'>
                    <img src={ReactIcon} width={50} alt="logo" />
                </div>

                <button className='  rounded-lg shadow' onClick={MenuHandle} >
                    <div className='space-y-1 m-1 md:hidden '>
                        <div className='bg-violet-500 w-5 h-1 rounded-sm'></div>
                        <div className='bg-violet-500 w-5 h-1 rounded-sm'></div>
                        <div className='bg-violet-500 w-5 h-1 rounded-sm'></div>
                    </div>

                </button>

                <div
                    className={
                        `md:flex flex-col md:flex-row  w-full md:w-auto items-start ${!state ? "hidden" : "flex flex-col"} 
                        md:space-x-4 md:space-x-reverse space-y-4 md:space-y-0 mt-2 md:mt-0`
                    }
                >
                    <Link to="/todoList">
                        <button className="px-3 rounded-lg text-white text-center bg-violet-500 font-bold drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300 ">todo list</button>
                    </Link>
                    <Link to="/userList">
                        <button className="px-3 rounded-lg text-white text-center bg-violet-500 font-bold drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300 ">user list</button>
                    </Link>
                    <Link to="/dashbord">
                        <button className="px-3 rounded-lg text-white text-center bg-violet-500 font-bold drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300 ">داشبورد</button>
                    </Link>
                    <Link to="/">
                        <button className="px-3 rounded-lg text-white text-center bg-violet-500 font-bold drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300 ">home</button>
                    </Link>
                    <Link to="/sign">
                        <button className="px-3 rounded-lg text-white text-center bg-violet-500 font-bold drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300 ">ورود/ثبت نام</button>
                    </Link>
                    <Link to="/counter">
                        <button className="px-3 rounded-lg text-white text-center bg-violet-500 font-bold drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300 ">شمارنده</button>
                    </Link>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;