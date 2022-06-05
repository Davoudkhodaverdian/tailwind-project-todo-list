
import './todoList.css';

function todoList() {
    return (

        <div className="h-96 w-full flex items-center justify-center  " dir='ltr'>
            <div className="bg-slate-50 rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
                <div className="mb-4">
                    <h1 className="text-gray-700">Todo List</h1>
                    <div className="flex mt-4">
                        <input className="shadow border rounded w-full py-2 px-3 mr-4 text-gray-700" placeholder="Add Todo" />
                        <button className="flex-shrink-0 p-2 border-2 rounded text-blue-700 border-blue-700 hover:text-white hover:bg-blue-700">Add</button>
                    </div>
                </div>
                <div>
                    <div className="flex mb-4 items-center">
                        <p className="w-full text-gray-700">Add another component to Tailwind Components</p>
                        <button className="flex-shrink-0 p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-700 border-green-700 hover:bg-green-700">Done</button>
                        <button className="flex-shrink-0 p-2 ml-2 border-2 rounded text-red-700 border-red-700 hover:text-white hover:bg-red-700">Remove</button>
                    </div>
                    <div className="flex mb-4 items-center">
                        <p className="w-full line-through text-green-700">Submit Todo App Component to Tailwind Components</p>
                        <button className="flex-shrink-0 p-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-700 border-gray-700 hover:bg-gray-700">Not Done</button>
                        <button className="flex-shrink-0 p-2 ml-2 border-2 rounded text-red-700 border-red-700 hover:text-white hover:bg-red-700">Remove</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default todoList;
