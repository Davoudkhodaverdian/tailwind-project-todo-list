
import Navbar from "./navbar";
import { ToastContainer } from 'react-toastify';
function BasicLayout({ children }) {

    return (
        <div>
            <div className="dark:bg-slate-800 dark:text-white">
                <Navbar />
                {children}
                <ToastContainer />
            </div>
        </div>
    );
}

export default BasicLayout;
