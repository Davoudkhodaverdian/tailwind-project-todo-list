
function AddUser() {


    return (

        <div className="flex justify-between container p-3 ">
            <div >
                <p className="text-lg">Users</p>
            </div>
            <div>
                <a href="/#" className="px-3 rounded-lg text-white text-center bg-violet-500 font-bold drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300 ">Add user</a>
            </div>
        </div>

    );
}

export default AddUser;