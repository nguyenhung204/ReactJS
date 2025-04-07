import { faDownload, faPlus, faUpload } from "@fortawesome/free-solid-svg-icons";
import Table from "../components/Table";
import Tags from "../components/Tags";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useState } from "react";
import iconOV from "../assets/overview.png";
import iconDetail from "../assets/file.png";

function Dashboard() {
    const [openAddUserModal, setOpenAddUserModal] = useState(null);

    const addUserCallback = useCallback((addUserFn) => {
        setOpenAddUserModal(() => addUserFn);
    }, []);

    const handleAddUser = () => {
        if (openAddUserModal) {
            openAddUserModal();
        }
    };

    return (
        <div>
            <main className="dashboard">
                <div className="overview">
                    <div className="flex items-center mb-8">
                        <img src={iconOV} alt="" />
                        <h1 className="font-bold text-[20px]">Overview</h1>
                    </div>
                    <Tags />
                </div>
                <div className="detail-report">
                    <div className="detail flex justify-between items-center mb-5">
                        <div className=" flex items-center">
                            <img className="object-contain " src={iconDetail} alt="" />
                            <h1 className="font-bold text-[20px]">Detailed Report</h1>
                        </div>
                        <div className="feature gap-3 flex">
                            <button
                                className="border-1 border-[#F44B87FF] text-[#F44B87FF] px-2 py-1 text-[14px] rounded-[6px]"
                                onClick={handleAddUser}
                            >
                                <FontAwesomeIcon icon={faPlus} />  Add User
                            </button>
                            <button className="border-1 border-[#F44B87FF] text-[#F44B87FF] px-2 py-1 text-[14px] rounded-[6px]">
                                <FontAwesomeIcon icon={faDownload} />  Import
                            </button>
                            <button className="border-1 border-[#F44B87FF] text-[#F44B87FF] px-2 py-1 text-[14px] rounded-[6px]">
                                <FontAwesomeIcon icon={faUpload} />  Export
                            </button>
                        </div>
                    </div>
                    <Table onAddUser={addUserCallback} />
                </div>
            </main>
        </div>
    );
}
export default Dashboard;