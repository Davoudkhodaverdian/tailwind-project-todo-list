import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { useState } from 'react';
import observable from '../../patterns/observable';
import { setAuthenticate } from "../../../store/slices/authenticateSlice"
import { setCurrentUser } from "../../../store/slices/currentUserSlice"
import { addUser } from '../../../store/slices/userListSlice';

export default function useSendData(state) {

    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const sendData = async () => {
        let key = Date.now();
        let values = {
            name: state.name, title: "-", field: "-", age: "0000", workExperience: "lessoneyear", email: state.email, role: "user",
            membershipDate: new Date().toLocaleDateString('fa-IR').replace(/([۰-۹])/g, token => String.fromCharCode(token.charCodeAt(0) - 1728)),
            password: key.toString(), userPassword: state.password,
        }
        setLoading(true);
        try {
            const res = await fetch(`https://62891163abc3b5e327cc086b.endapi.io/users`, {
                method: "POST",
                body: JSON.stringify(values),
                headers: { 'Content-Type': 'application/json', 'charset': 'utf-8 ' }
            })
            const data = await res.json();

            dispatch(addUser(data.data))
            dispatch(setAuthenticate(true));
            dispatch(setCurrentUser(data.data));
            setLoading(false);
            let toastRegister = () => { toast(<div className='vazir-matn-font'>شما با موفقیت ثبت نام کردید</div>) };
            observable.subscribe(toastRegister);
            navigate("/");

        } catch (error) { console.log(error) }
        setLoading(false);
    }

    return { loading, sendData };
}
