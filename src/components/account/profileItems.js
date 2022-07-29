import SidebarData from './sidebarData.json'
import { Link } from 'react-router-dom';

function ProfileItems() {

    return (
        <>
            {SidebarData.map((item,index) => (
                <Link to={item.root ? item.root : "/"} key={item.id}>
                   
                        <div key={item.id}
                            className={`flex p-2 mx-2 hover:text-violet-800 cursor-pointer rounded-sm active:text-violet-900 
                                ${index === SidebarData.length - 1 ? "" : "border-b-2"}`}>
                            <span>{item.descreption}</span>
                        </div>
                   
                </Link>
            ))}
        </>
    )
}

export default ProfileItems