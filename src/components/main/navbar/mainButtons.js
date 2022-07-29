import { Link } from 'react-router-dom';
import AvatarItems from '../../account/avatarItems';

function MainButtons() {

    return (
        <>
            <Link to="/dashboard">
                <button className="px-3 rounded-lg text-white text-center bg-violet-500 font-bold drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300 ">داشبورد</button>
            </Link>
            <AvatarItems />
        </>
    );
}

export default MainButtons;
