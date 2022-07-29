
import DashboardLayout from "../dashboard/dashboardLayout"
import { useSelector } from "react-redux";
import Articles from "./articles";
import { useNavigate } from 'react-router-dom';


export default function ArticlesUsers() {

    const articles = useSelector((state) => state.articles.articles);
    const navigate = useNavigate();
    //const dispatch = useDispatch()
    //show modal handler
    const addArticleHandler = () => {
        navigate("/dashboard/articlesUsers/add");
        // dispatch(setShow(true))
    }

    return (
        <DashboardLayout>
            <div className="m-4">
                <div className="text-center">مقالات کاربران</div>
                <div>
                    <button onClick={addArticleHandler}
                        className="py-2 px-4 rounded text-white text-center bg-violet-500 font-bold drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300">
                        افزودن مقاله
                    </button>
                    {articles.length > 0 && <Articles articles={articles}/>}
                </div>
            </div>
        </DashboardLayout>
    )

}