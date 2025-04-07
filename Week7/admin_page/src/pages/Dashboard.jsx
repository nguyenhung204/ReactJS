import Table from "../components/Table";
import Tags from "../components/Tags";

function Dashboard() {
    return (
        <div>
            <main className="dashboard">
                <div className="overview">
                    <h1>Overview</h1>
                    <Tags />
                </div>
                <div className="detail-report">
                    <h1>Detail Report</h1>
                    <Table />
                </div>
            </main>
        </div>
    );
}
export default Dashboard;