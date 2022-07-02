

import Workflow from './../../../images/workflow.svg'
import MenubarDynamic from './menubarDynamic'
import MenubarItems from './menubarItems';

function Menubar({ sidebar, sendSidebarState }) {


    return (


        <>
            <nav className='bg-indigo-500 text-white w-64 p-2 hidden sm:block'>
                <div className="p-4">
                    <img className="h-8 w-auto" src={Workflow} alt="Workflow" />
                </div>
                <MenubarItems />
            </nav>
            <MenubarDynamic sidebar={sidebar} sendSidebarState={sendSidebarState} />
        </>


    )
}

export default Menubar;