import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function Modal({ isOpen, setIsOpen, children }) {

    function closeModal() { setIsOpen(false) };

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative " onClose={closeModal}>
                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0"
                        enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel
                                    className=" transform overflow-hidden rounded-md bg-white p-6 text-left  shadow-xl transition-all" >
                                    <div className='text-right'>
                                        <button onClick={closeModal}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 m-2" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                        {children}
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}


// no library
// import clipRuleBody from "./modalBody";
// import { useDispatch } from "react-redux";
// import { setShow } from "../../../store/slices/modalSlice";
// import PropTypes from 'prop-types';

// function Modal({show}) {

//     const dispatch = useDispatch()
//     //close modal handler
//     const closeHandler = () => { dispatch(setShow(false)) }

//     return (
//         <>
//             <div className={`${show ? "ease-in duration-200 opacity-100" : "ease-out duration-300 opacity-0 hidden"} fixed inset-0  h-full w-full bg-black bg-opacity-30 overflow-auto z-10`}>
//                 <div className={`fixed inset-0  h-full w-full  p-3 transition-all`} onClick={closeHandler}></div>
//                 <div className="relative modal-container w-[100% - 40px] md:w-3/4 lg:w-2/4 bg-white mx-5 md:mx-auto mt-10 rounded shadow ">
//                     <div className="flex justify-end">
//                         <button onClick={closeHandler}>
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 m-2" viewBox="0 0 20 20" fill="currentColor">
//                                 <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
//                             </svg>
//                         </button>
//                     </div>
//                     <div className="p-3 flex flex-col text-right " ><ModalBody closeModal={closeHandler} /></div>
//                 </div>
//             </div>
//         </>

//     );
// }

// export default Modal;

// Modal.propTypes = {
//     show: PropTypes.bool
// };

