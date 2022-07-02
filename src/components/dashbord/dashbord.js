

import Menubar from './menubar/menubar';
import Header from './header';
import { useState } from 'react';

function Dashbord() {

    const [sidebar,setSidebar] = useState(false);
    const sendSidebarState = (show) => {
        setSidebar(show)
    }

    return (
        
            <div className='pr-0 sm:flex flex-row relative'>
                <Menubar sidebar={sidebar} sendSidebarState={sendSidebarState}/>

                <div className="flex flex-col w-full">

                    <Header sendSidebarState={sendSidebarState}  sidebar={sidebar}/>

                    <div className="w-full max-w-7xl m-2">
                        <span>داشبورد</span>
                    </div>
                    <div className="w-full max-w-7xl mx-auto">
                        <div className="border-4 border-dashed h-96 rounded-lg border-gray-200 "></div>
                    </div>
                </div>

            </div>


    );
}

export default Dashbord;