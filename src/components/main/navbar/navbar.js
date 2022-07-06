

import ReactIcon from '../../../images/logo.svg';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import AccountButton from '../../userAccount/accountButton';
import { setAuthenticate } from "../../../store/slices/authenticateSlice"
import { useDispatch } from 'react-redux'
function Navbar() {

    //this state is for menu of responsive main page
    const [state, setState] = useState(false);
    const MenuHandle = () => { setState(prevState => !prevState) }

    const authenticate = useSelector((state) => state.authenticate.authenticate);

    const dispatch = useDispatch()
    const authenticateHandler = () => {
        dispatch(setAuthenticate(false))
    }

    console.log("athentcate: ", authenticate)
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
                    <Link to="/">
                        <button className="px-3 rounded-lg text-white text-center bg-violet-500 font-bold drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300 ">صفحه اصلی</button>
                    </Link>

                    {
                        authenticate ?
                            <>
                                <Link to="/dashboard">
                                    <button className="px-3 rounded-lg text-white text-center bg-violet-500 font-bold drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300 ">داشبرد</button>
                                </Link>
                                <button onClick={authenticateHandler}
                                    className="px-3 rounded-lg text-white text-center bg-violet-500 font-bold drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300 ">خروج</button>
                                <Link to="/userAccount"><AccountButton /></Link>
                            </>

                            :
                            <>
                                <Link to="/register">
                                    <button className="px-3 rounded-lg text-white text-center bg-violet-500 font-bold drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300 ">ثبت نام</button>
                                </Link>
                                <Link to="/login">
                                    <button className="px-3 rounded-lg text-white text-center bg-violet-500 font-bold drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300 ">ورود</button>
                                </Link>
                            </>
                    }

                </div>

            </div>
        </nav>
    );
}

export default Navbar;