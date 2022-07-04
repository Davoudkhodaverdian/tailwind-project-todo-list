

function ModalComponent({ show, setShow }) {


    return (
        <div className="modal-background">
            <div className="modal-container">
                <button onClick={closeHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 m-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
                <div className="title"></div>
                <div className="body"></div>
                <div className="foooter"></div>
            </div>
        </div>

    );
}

export default ModalComponent;