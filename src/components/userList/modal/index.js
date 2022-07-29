

import { useDispatch } from "react-redux";
import Modal from "../../modal";
import ModalBodyUserListBody from "./modalBody";
import PropTypes from 'prop-types';
import { setShow } from "../../../store/slices/modalSlice";

export default function ModalUserList({ show }) {

    const dispatch = useDispatch()
    //close modal handler
    const closeModal = () => { dispatch(setShow(false)) }

    return (
        <Modal isOpen={show} setIsOpen={closeModal}>
            <ModalBodyUserListBody closeModal={closeModal} />
        </Modal>
    )
}

ModalUserList.prototype = {
    show: PropTypes.bool
}