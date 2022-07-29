
import Loading from '../../loading';
import { Link } from 'react-router-dom';

export default function ConfirmButton({confirmHandler,loading,type}){

    return (
        <Link to="/">
            <button className="px-3 rounded text-white text-center bg-violet-500 font-bold drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300  mx-1"
                onClick={confirmHandler} type="submit" name="submit"
            >
                <div className='flex'>
                    <div>
                        {type === "register" ? "ثبت نام" : "ورود"}
                    </div>
                    <div>
                        {loading ? <Loading /> : ""}
                    </div>
                </div>
            </button>
    </Link>
    )
}