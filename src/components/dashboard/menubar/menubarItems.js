import SidebarData from './sidebarData.json'
import { Link } from 'react-router-dom';
import HomeImage from './../../../images/home.svg';
import TeamImage from './../../../images/team.svg';

function MenubarItems() {

    return (
        <>
            {SidebarData.map((item) => (
                <Link to={item.root ? item.root : "/"} key={item.id}>
                
                        <div  className="flex p-2 mx-2 hover:bg-indigo-800 cursor-pointer rounded-sm active:bg-indigo-900">
                            <img src={item.name === "home" ? HomeImage: TeamImage} alt={item.name} className="h-6 w-6 mx-2" />
                            <span>{item.descreption}</span>
                        </div>
                   
                </Link>
            ))}
        </>
    )
}

export default MenubarItems