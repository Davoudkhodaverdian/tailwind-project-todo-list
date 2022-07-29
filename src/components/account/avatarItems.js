import { setAuthenticate } from "../../store/slices/authenticateSlice"
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import MaleAvatar from './../../images/maleAvatar.svg'

function AccountItems() {

    const dispatch = useDispatch()
    const authenticateHandler = () => {
        //logout
        dispatch(setAuthenticate(false));
        toast(<div className='vazir-matn-font'>شما از سایت خارج شدید</div>);

    }

    return (
        <>
            <Link to="/account/information">
                    <button className="flex flex-row items-center">
                        <span className="px-2">پروفایل</span>
                        {/* avatar svg */}
                        <img src={MaleAvatar} width={24} alt="avatar" className="my-2" />
                    </button>
            </Link>
            <button onClick={authenticateHandler} >
                <Link to="/" className="flex flex-row items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 my-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
                        </svg>
                        <span className="px-2">خروج</span>
                </Link>
            </button>
        </>
    )
}

export default AccountItems