import { useSelector } from 'react-redux'
//import RowComponent from "../RowComponent/RowComponent";
//import { useDispatch } from 'react-redux';

function Table () {
    
    const user = useSelector((state) => state.user.list)
  
     
        return (
            <div className="table">
                <div className="table-part">

                    <table className="content-table">
                        <thead>
                            <tr>
                                <th>نام کاربر</th>
                                <th>ناریخ عضویت</th>
                                <th>عنوان شغلی</th>
                                <th>رشته تحصیلی</th>
                                <th>سن</th>
                                <th>تجربه کاری</th>
                                <th>ایمیل</th>
                                <th>نقش</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {user.map((item, index) => (<RowComponent key={item.password} UserData={item} />))} */}
                        </tbody>
                    </table>
                    {user.length === 0 ? <p className='text-center'>there is no user</p> : null}
                </div>
            </div>
        )
  
}

export default Table;