
import Items from './items.json'
import { Link } from 'react-router-dom';

function Instantbuttons() {

    return (
        <>
            {
                Items.map(item => (
                    <Link key={item.id} to={item.root}>
                            <button className="px-3 rounded-lg text-white text-center bg-violet-500 font-bold drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300 ">
                                {item.descreption}
                            </button>
                    </Link>
                ))
            }
        </>
    );
}

export default Instantbuttons;
