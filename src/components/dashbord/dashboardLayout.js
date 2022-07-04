
import Dashbord from "./dashbord";


function DashboardLayout({ children }) {

    return (
        <div >
            <Dashbord>
                {children}
                <div className='text-center'>Footer</div>
            </Dashbord>
        </div>
    );
}

export default DashboardLayout;
