import { Link } from 'react-router-dom';

function AuthenticateButtons() {

    return (
        <>
            <Link to="/register">
                <button className="px-3 rounded-lg text-white text-center bg-violet-500 font-bold drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300 ">ثبت نام</button>
            </Link>
            <Link to="/login">
                <button className="px-3 rounded-lg text-white text-center bg-violet-500 font-bold drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300 ">ورود</button>
            </Link>
        </>
    );
}

export default AuthenticateButtons;
