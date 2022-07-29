


import Header from './header';
import { useState } from 'react';
import MenubarDynamic from './menubar/menubarDynamic'

function Dashbord({ children }) {

    const [sidebar, setSidebar] = useState(false);
    const sendSidebarState = (show) => { setSidebar(show) }



    return (
        <div className='pr-0 md:flex flex-row overflow-hidden dark:bg-slate-800 dark:text-white'>
            <MenubarDynamic sidebar={sidebar} sendSidebarState={sendSidebarState} />
            <div className="flex flex-col w-full">
                <Header sendSidebarState={sendSidebarState} sidebar={sidebar} />
                <div className="w-full max-w-7xl mx-auto p-3">
                    {children ? children : <h1>no subject</h1>}
                </div>
            </div>
        </div>
    );
}

export default Dashbord;