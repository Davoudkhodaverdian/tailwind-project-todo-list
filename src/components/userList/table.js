import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import Row from "./row/row";
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setUser } from "../../store/slices/userListSlice";


function Table () {
    
    const user = useSelector((state) => state.user.list)
    const dispatch = useDispatch();

    const getTodos = async () => {
        let response = await axios.get('https://62891163abc3b5e327cc086b.endapi.io/users');
        dispatch(setUser(response.data.data))

    }

    useEffect(() => {
        getTodos()
    }, [])
     
        return (
            <div className="shadow border border-slate-200 rounded-lg overflow-hidden text-center">
                <div className="max-h-[300px] overflow-auto">

                    <table className="">
                        <thead>
                            <tr className='bg-gray-100 border-b border-gray-300'>
                                <th className='py-2 px-4'>نام کاربر</th>
                                <th className='py-2 px-4'>تاریخ عضویت</th>
                                <th className='py-2 px-4'>عنوان شغلی</th>
                                <th className='py-2 px-4'>رشته تحصیلی</th>
                                <th className='py-2 px-4'>سن</th>
                                <th className='py-2 px-4'>تجربه کاری</th>
                                <th className='py-2 px-4'>ایمیل</th>
                                <th className='py-2 px-4'>نقش</th>
                                <th className='py-2 px-4'></th>
                            </tr>
                        </thead>
                        <tbody>
                            {user.map((item, index) => (<Row key={index} UserData={item} indexRow={index} rowNumber={user.length} />))}
                        </tbody>
                    </table>
                    {user.length === 0 ? <p className='text-center'>there is no user</p> : null}
                </div>
            </div>
          
        )
  
}

export default Table;