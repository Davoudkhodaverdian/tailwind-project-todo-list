import SidebarData from './sidebarData.json'
import HomeIcon from './../../../images/home.svg'
import TeamIcon from './../../../images/team.svg'
import { Link } from 'react-router-dom'

function MenubarItems() {

    return (
        <>
            {SidebarData.map((item,index) => (
                item.descreption === "counter" ?
                    <Link to="/counter" key={index}>
                        <div key={item.id} className="flex p-2 mx-2 hover:bg-indigo-800 cursor-pointer rounded-sm active:bg-indigo-900">
                            <img src={item.descreption === "home" ? HomeIcon : TeamIcon} alt={item.descreption} className="h-6 w-6 mx-2" />
                            <span>{item.name}</span>
                        </div>
                    </Link> : item.descreption === "main-page" ?
                        <Link to="/" key={index}> 
                            <div key={item.id} className="flex p-2 mx-2 hover:bg-indigo-800 cursor-pointer rounded-sm active:bg-indigo-900">
                                <img src={item.descreption === "home" ? HomeIcon : TeamIcon} alt={item.descreption} className="h-6 w-6 mx-2" />
                                <span>{item.name}</span>
                            </div>
                        </Link> :
                        <Link to="/dashbord" key={index}>
                            <div key={item.id} className="flex p-2 mx-2 hover:bg-indigo-800 cursor-pointer rounded-sm active:bg-indigo-900">
                                <img src={item.descreption === "home" ? HomeIcon : TeamIcon} alt={item.descreption} className="h-6 w-6 mx-2" />
                                <span>{item.name}</span>
                            </div>
                        </Link>
            ))}
        </>
    )
}

export default MenubarItems