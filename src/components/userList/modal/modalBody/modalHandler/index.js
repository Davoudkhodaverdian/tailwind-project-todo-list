

import PropTypes from 'prop-types';
import useAddUserHandler from './useAddUserHandler';

function ModalHandler({ closeModal, state, setState }) {

    // addUserHandler as hook
    const { addUserHandler } = useAddUserHandler({ closeModal, setState });

    const submitHandler = (receivedValues, event) => {

        event.preventDefault();
        let { day, month, year, name, email, role, title, field, age, workExperience, userPassword } = receivedValues;

        if (!isNaN(Number(name)) || name === "") return alert("نام را به درستی وارد کنید");
        else if (userPassword === "") return alert("رمز عبور وارد نشده");
        else if (isNaN(Number(day)) || Number(day) === 0 || Number(day) > 31) return alert("روز را به درستی وارد کنید");
        else if (isNaN(Number(month)) || Number(month) === 0 || Number(month) > 12) return alert("ماه را به درستی وارد کنید");
        else if (isNaN(Number(year)) || Number(year) === 0) return alert("سال را به درستی وارد کنید");
        else if (title == "") return alert("عنوان شغلی را به درستی وارد کنید");
        else if (field == "") return alert("رشته تحصیلی را به درستی وارد کنید");
        else if (isNaN(Number(age)) || age === "") return alert("سن را به درستی وارد کنید");
        let key = Date.now();

        let values = {
            name, membershipDate: (Number(year) + "/" + Number(month) + "/" + Number(day)), title, field, age,
            workExperience, email, role, userPassword, password: key.toString()
        }
        addUserHandler(values);
    }

    return (
        <div className="flex p-3 " dir='rtl'>
            <button onClick={closeModal} className="px-3 py-1 mx-1 rounded text-white text-center bg-red-500 font-bold drop-shadow hover:bg-red-600 active:bg-red-700 focus:ring focus:ring-red-300 ">انصراف</button>
            <button onClick={submitHandler.bind(null, state)} className="px-3 py-1 mx-1  rounded text-white text-center bg-violet-500 font-bold drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300 ">اضافه کردن</button>
        </div>
    )
}

export default ModalHandler

ModalHandler.propTypes = {
    closeModal: PropTypes.func,
    setState: PropTypes.func,
    state: PropTypes.object
};

