

function Modal({ show, setShow }) {

    const closeHandler = () => {
        setShow(false)
    }

    return (
        <div className={`${show ? "" : "hidden"} absolute inset-0  h-full w-full overflow-hidden transition-all`}>
            <div className={`absolute inset-0  h-full w-full bg-black bg-opacity-30 p-3`} onClick={closeHandler}>
            </div>
            <div className={`relative bg-white rounded shadow-lg md:mx-auto  mx-3 md:w-2/3 h-80 mt-10 z-10 `}>
                <div className="flex justify-end">
                    <button onClick={closeHandler}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 m-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

    );
}

export default Modal;