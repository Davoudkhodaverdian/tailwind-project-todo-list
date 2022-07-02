import SidebarData from './sidebarData.json'
import HomeIcon from './../../../images/home.svg'
import TeamIcon from './../../../images/team.svg'
function MenubarItems() {

    console.log(HomeIcon)
    console.log(TeamIcon)
    return (
        <>
            {SidebarData.map(item => (
                <div key={item.id} className="flex p-2 mx-2 hover:bg-indigo-800 cursor-pointer rounded-sm active:bg-indigo-900">
                    <img src={item.descreption === "home" ? HomeIcon : TeamIcon} alt={item.descreption} className="h-6 w-6 mx-2" />
                    <span>{item.name}</span>
                </div>
            ))}
        </>
    )
}

export default MenubarItems