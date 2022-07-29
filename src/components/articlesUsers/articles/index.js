import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import Loading from "../../loading";
import { setEditedValues } from "../../../store/slices/articlesSlice";
import useRemove from "./useRemove";
import { Link } from 'react-router-dom';
import ImageReact from './../../../images/image-react.png'

export default function ArticlesUsersPart({ articles }) {

    const router = useRouter();
    const dispatch = useDispatch();
    const editHandler = (item) => {
        dispatch(setEditedValues(item));
        router.push(`/dashboard/articlesUsers/edit/${item.id}`);
    }

    const { loading, remove } = useRemove();

    const removeHandler = (id) => {
        if (confirm("آیا از حذف کردن مقاله اطمینان دارید؟") == true) {
            remove(id);
        }
    }

    return (
        <div className="m-4">

            <div className="grid  lg:grid-cols-2 gap-4 max-h-[460px] overflow-auto">
                {
                    articles.map(item => (

                        <div key={item.id} className='shadow-lg border rounded-md border-gray-300 p-2 w-[1000% - 16px] lg:w-80 mx-2'>
                            <Link to={`/dashboard/articlesUsers/${item.id}`} className="cursor-pointer"  >
                         
                                <div  >
                                    <div className='border-b border-gray-300'>عنوان مقاله: {item.title}</div>
                                    <div className='m-3'>
                                        <img className='mx-auto my-2 rounded shadow' src={ImageReact} width={300} alt="avatar" />
                                    </div>
                                    <div className='border-b border-gray-300'>توضیحات: {item.body}</div>
                                    <div>
                                        <div>ایجاد کننده: {item.creator}</div>
                                    </div>
                                </div>
                           
                            </Link>
                            <div>
                                <div className="pt-8 flex justify-end">
                                    <button type="button" onClick={removeHandler.bind(null, item.id)}
                                        className="bg-white py-2 px-4 border border-slate-300 rounded shadow font-medium hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >حذف {loading ? <Loading /> : ""}</button>
                                    <button type="submit" onClick={editHandler.bind(null, item)}
                                        className="ltr:ml-3 rtl:mr-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm rounded text-white bg-violet-500 font-bold drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300"
                                    >ویرایش</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}