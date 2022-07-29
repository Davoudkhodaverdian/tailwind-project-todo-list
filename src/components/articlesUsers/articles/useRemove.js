import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { removeArticle } from "../../../store/slices/articlesSlice";

export default function useRemove() {

    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
 
    const remove = async (id) => {

        setLoading(true);
        try {
            const res = await fetch(`https://62d9b19f76028b55ae71d76e.endapi.io/articles/${id}`, {
                method: "DELETE", headers: { 'Content-Type': 'application/json', 'charset': 'utf-8 ' }
            })
            const data = await res.json();
            dispatch(removeArticle(id));
            navigate("/dashboard/articlesUsers");

        } catch (error) { console.log(error) }

        setLoading(false);
    }

    return { loading, remove }

}