
import DateInput from './dateInput'
import { useState } from 'react';
import ModalHandler from './modalHandler';
import NormalInput from './normalInput'

function ModalBody({ closeModal }) {



    const [state, setState] = useState({
        name: "", day: "", month: "", year: "", email: "", role: "user", title: "", field: "", age: "", workExperience: "lessoneyear"
    });

    const setValueInput = (name, event) => { setState(prevState => ({ ...prevState, [name]: event.target.value })) }

    let { day, month, year, name, email, Role, title, field, age, workExperience } = state;

    return (
        <>
            <form>
                <NormalInput setValueInput={setValueInput} name={name} />
                <DateInput setValueInput={setValueInput} year={year} month={month} day={day} />

                <div>
                    <select id="user-type" name="user-type" value={Role} onChange={setValueInput.bind(this, "role")} >
                        <option value="user">user</option>
                        <option value="admin">admin</option>
                    </select>
                    <label htmlFor="user-type">نقش</label>
                </div>
                <div>
                    <select id="workExperience" name="workExperience" value={workExperience}
                        onChange={setValueInput.bind(this, "workExperience")} >
                        <option value="lessoneyear">کمتر ازیک سال</option>
                        <option value="betweenoneandtwoyear">بین یک تا دو سال</option>
                        <option value="moretwoyear">بیشتر از دو سال</option>
                    </select>
                    <label htmlFor="workExperience">سابقه کار</label>
                </div>

            <ModalHandler  closeModal={closeModal} state={state} setState={setState} />
            </form>


        
        </>

    );
}

export default ModalBody;