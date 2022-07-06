
import MaleAvatar from './../../images/maleAvatar.svg'


function Header({ sendSidebarState, sidebar }) {


    const showSidebar = (event) => {

        event.preventDefault()
        sendSidebarState(!sidebar)
    }

    return (
        <div className="flex flex-row justify-between shadow h-16 items-center px-2">

            <div className="flex flex-row items-center">
                <button className='focus:ring-2 focus:ring-indigo-700 rounded-sm m-2 sm:hidden' onClick={showSidebar}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <div>نام کاربر</div>
            </div>

            <div>
                <button className="flex flex-row items-center">
                    <span className="px-2">حساب کاربری من</span>
                    {/* avatar svg */}
                    <img src={MaleAvatar} width={24} alt="avatar" />
                </button>
            </div>
        </div>
    )
}

export default Header;