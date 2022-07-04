
import MaleAvatar from './../../images/maleAvatar.svg'


function Header({sendSidebarState, sidebar}) {

    
    const showSidebar = (event) => {
        
        event.preventDefault()
        sendSidebarState(!sidebar)
    }

    return (
        <div className="flex flex-row justify-between shadow h-16 items-center px-2">

            <form action="" className="flex flex-row w-full items-center">
                <button className='focus:ring-2 focus:ring-indigo-700 rounded-sm m-2 sm:hidden' onClick={showSidebar}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <div>
                    {/* search svg */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <div className='w-full'>
                    <input className='w-full h-14 outline-none px-2' placeholder="جستجو" />
                </div>
            </form>
            <div className="flex flex-row items-center">
                <div>
                    {/* bell svg */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>

                </div>
                <div>
                    {/* avatar svg */}
                    <img src={MaleAvatar} width={24} alt="avatar" />
                </div>
            </div>

        </div>
    )
}

export default Header;