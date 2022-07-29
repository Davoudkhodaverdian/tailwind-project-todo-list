import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { editArticle } from "../../../store/slices/articlesSlice";

export default function useConfirm() {

    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const confirm = async (state,data) => {

        
        let sendingData = { ...data, title: state.title, body: state.explanation ? state.explanation : "-", }
        try {
            const res = await fetch(`https://62d9b19f76028b55ae71d76e.endapi.io/articles/${data.id}`, {
                method: "PUT", body: JSON.stringify(sendingData),
                headers: { 'Content-Type': 'application/json', 'charset': 'utf-8' }
            })
            const dataRes = await res.json();
            dispatch(editArticle(dataRes.data));
            
            navigate("/dashboard/articlesUsers");

        } catch (error) { console.log(error) }
        setLoading(false);
    }

    return { loading, confirm }


}