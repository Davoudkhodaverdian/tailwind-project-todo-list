import { useSelector } from "react-redux";
import DashboardLayout from "../dashboard/dashboardLayout";
import AddUser from "./addUser";
import ModalUserList from "./modal";
import Table from "./table";

function UserList() {

  const show = useSelector(state => state.showModal.show);

  return (
    <DashboardLayout>
      <div>managementPanel</div>
      <div className="flex flex-col items-center" dir="ltr">
        <AddUser />
        <Table />
        {show && <ModalUserList show={show} />}
      </div>
    </DashboardLayout>

  );
}

export default UserList;
