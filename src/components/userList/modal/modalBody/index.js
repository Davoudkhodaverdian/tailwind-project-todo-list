
import { useState } from 'react';
import DateInput from './dateInput'
import ModalHandler from './modalHandler';
import NormalInput from './normalInput'
import RoleInput from './roleInput';
import WorkExperienceInput from './workExperienceInput';
import PropTypes from 'prop-types';

function ModalBodyUserList({ closeModal }) {

    const [state, setState] = useState({
        name: "", day: "", month: "", year: "", email: "", role: "user", title: "", field: "", age: "",
        workExperience: "lessoneyear", userPss: ""
    });

    const setValueInput = (name, event) => { setState(prevState => ({ ...prevState, [name]: event.target.value })) }
    let { day, month, year, name, Role, workExperience } = state;

    return (
        <form  className='text-right'>
            <div className=' grid md:grid-cols-3 sm:grid-cols-2'>
                <NormalInput setValueInput={setValueInput} name={name} />
            </div>
            <DateInput setValueInput={setValueInput} year={year} month={month} day={day} />
            <RoleInput Role={Role} setValueInput={setValueInput} />
            <WorkExperienceInput workExperience={workExperience} setValueInput={setValueInput} />
            <ModalHandler closeModal={closeModal} state={state} setState={setState} />
        </form>
    );
}

export default ModalBodyUserList;

ModalBodyUserList.propTypes = {
    closeModal: PropTypes.func
};
