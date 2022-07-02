

function Sign() {

    return (

    <form className="text-center">
        <div>
            <input type="text" name="user-name" placeholder="نام" className="px-3 border-2 border-gray-300 rounded-lg my-2"/>
        </div>
        <div>
            <input type="text" name="user-name" placeholder="نام خانوادگی" className="px-3 border-2 border-gray-300 rounded-lg my-2"/>
        </div>
        <div>
            <input type="text" name="user-name" placeholder="نام کاربری" className="px-3 border-2 border-gray-300 rounded-lg my-2"/>
        </div>
        <div>
            <input type="email" name="email" placeholder="ایمیل"  className="px-3 border-2 border-gray-300 rounded-lg my-2"/>
        </div>
        <div>
            <input type="password" name="password" placeholder="رمز عبور"  className="px-3 border-2 border-gray-300 rounded-lg my-2"/>
        </div>
        <div>
            <input type="submit" name="submit" value="ثبت"  className="px-3 rounded-lg text-white text-center bg-violet-500 font-bold drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300 "/>
        </div>
    </form>
    )
}


export default Sign;