import { useSelector } from "react-redux";
import AddUser from "./";
import ModalUserList from "./../modal";
import Table from "./table";

function UserList() {
  
   const show = useSelector(state => state.showModal.show);

    return (

        <div className="flex flex-col items-center" dir="ltr">
          <AddUser/>
          <Table/>
          {show && <ModalUserList show={show} />}
        </div>

    );
}

export default UserList;
