import { faDownload, faPlus, faUpload } from "@fortawesome/free-solid-svg-icons";
import Table from "../components/Table";
import Tags from "../components/Tags";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useState } from "react";

function Dashboard() {
    // Use useState instead of a regular variable
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
                    <h1>Overview</h1>
                    <Tags />
                </div>
                <div className="detail-report">
                    <div className="detail flex justify-between align-middle">
                        <h1>Detailed Report</h1>
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