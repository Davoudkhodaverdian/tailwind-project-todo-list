
import Modal from "./modal";
import { useState } from "react";

function AddUser() {

    const [show,setShow] = useState(false);

    const addUserHandler = () => {
        setShow(true)
    }

    return (

        <div className="flex justify-between container p-3 ">
            <div >
                <p className="text-lg">Users</p>
            </div>
            <div>
                <button onClick={addUserHandler} className="px-3 py-1 rounded text-white text-center bg-violet-500 font-bold drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300 ">Add user</button>
            </div>
            <Modal show={show} setShow={setShow}/>
        </div>

    );
}

export default AddUser;