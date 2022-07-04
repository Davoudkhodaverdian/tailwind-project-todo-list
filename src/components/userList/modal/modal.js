import ModalBody from "./modalBody";

function Modal({ show, setShow }) {

    const closeHandler = () => {
        setShow(false)
    }

    return (
        <>
        <div className={`${show ? "" : "hidden"} fixed inset-0  h-full w-full bg-black bg-opacity-30 overflow-auto `}>
            <div className={`fixed inset-0  h-full w-full  p-3 transition-all`} onClick={closeHandler}></div>
            <div className="relative modal-container w-[100% - 40px] md:w-3/4 bg-white mx-5 md:mx-auto mt-10 rounded shadow ">
                <div className="flex justify-end">
                    <button onClick={closeHandler}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 m-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>

                </div>
                <div className=" p-3 flex justify-end"><ModalBody/></div>
                <div className="flex justify-end p-3">
                <button  className="px-3 py-1 mx-1  rounded text-white text-center bg-violet-500 font-bold drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300 ">Add user</button>
                <button  onClick={closeHandler} className="px-3 py-1 mx-1 rounded text-white text-center bg-red-500 font-bold drop-shadow hover:bg-red-600 active:bg-red-700 focus:ring focus:ring-red-300 ">cancel</button>
                </div>
            </div>
        </div>
        </>

    );
}

export default Modal;