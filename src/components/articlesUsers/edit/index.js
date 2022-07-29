
import DashboardLayout from "../../dashboard/dashboardLayout";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import useConfirm from "./useConfirm";
import Loading from "../../Loading/loading";
import Header from './header';

export default function EditArticleUser({ data }) {

    const navigate = useNavigate();
    const [state, setState] = useState({ title: data.title, explanation: data.body })
    const setValueInput = (name, event) => { setState(prevState => ({ ...prevState, [name]: event.target.value })) };

    const cancelHandler = () => {
        navigate("/dashboard/articlesUsers");
    };

    const { loading, confirm } = useConfirm();

    const confirmHandler = (event) => {
        event.preventDefault();
        if (state.title === "") return alert("عنوان مقاله را وارد کنید");
        confirm(state,data);
    }

    return (
        <DashboardLayout>
            <div className="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-row justify-between">
                    <h1 className="text-3xl">ویرایش مقاله</h1>
                    <Header />
                </div>
                <hr />
                <form action="#" className="mt-6 space-y-8 divide-y divide-y-slate-200">
                    <div className="grid grid-cols-1 gap-y-6 md:grid-cols-6 sm:gap-x-6">
                        <div className="col-span-6 lg:col-span-3 "><label htmlFor="title" className="block mb-2 ">عنوان مقاله</label>
                            <input type="string" onChange={setValueInput.bind(null, "title")} value={state.title}
                                placeholder="یک عنوان برای مقاله خود انتخاب کنید" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" name="title" />
                        </div>
                        <div className="col-span-6">
                            <label htmlFor="explanation" className="block  mb-2 font-medium">توضیحات مقاله</label>
                            <textarea type="text" onChange={setValueInput.bind(null, "explanation")} value={state.explanation}
                                placeholder="توضیحات مقاله" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 min-h-[130px]" name="explanation" />
                        </div>
                    </div>
                    <div>
                        <div className="pt-8 flex justify-end">
                            <button type="button" onClick={cancelHandler}
                                className="bg-white py-2 px-4 border border-slate-300 rounded shadow font-medium hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">انصراف</button>
                            <button type="submit" onClick={confirmHandler}
                                className="ltr:ml-3 rtl:mr-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm rounded text-white bg-violet-500 font-bold drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300"
                            >ویرایش  {loading ? <Loading /> : ""}</button>
                        </div>
                    </div>
                </form>
            </div>
        </DashboardLayout>
    )
}