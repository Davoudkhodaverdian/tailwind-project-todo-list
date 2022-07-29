import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { addArticle } from "../../../store/slices/articlesSlice";

export default function useConfirm(state) {

    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentUser = useSelector(state => state.currentUser.currentUser);

    const confirm = async (event) => {

        setLoading(true);
        let sendingData = {
            title: state.title, body: state.explanation ? state.explanation : "-",
            creator: currentUser.name ? currentUser.name : "نامشخص",
        }
        try {
            const res = await fetch(`https://62d9b19f76028b55ae71d76e.endapi.io/articles`, {
                method: "POST", body: JSON.stringify(sendingData),
                headers: { 'Content-Type': 'application/json', 'charset': 'utf-8' }
            })
            const data = await res.json();
            dispatch(addArticle(data.data));
            navigate("/dashboard/articlesUsers");

        } catch (error) { console.log(error) }

        setLoading(false);
    }

    return { loading, confirm }


}