import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import image from '../assets/image.png';
function Sidenav() {
    return (


        <div className="flex justify-between flex-col h-full ">
            <div>
            <div className="sidebar-header">
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <nav className="sidebar-nav">
                <ul>
                    <li>
                        <NavLink to="/">Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to="/project" >Project</NavLink>
                    </li>
                    <li>
                        <NavLink to="/team" >Teams</NavLink>
                    </li>
                    <li>
                        <NavLink to="/analytics" >Analytics</NavLink>
                    </li>
                    <li>
                        <NavLink to="/messages" >Messages</NavLink>
                    </li>
                    <li>
                        <NavLink to="/integrations" >Integrations</NavLink>
                    </li>
                </ul>
            </nav >
            </div>
            <div className="section bg-[#F0F6FF] flex flex-col gap-2 text-center p-2">
                <img src={image} alt="" />
                <h2>V2.0 is available</h2>
                <button className="px-6 border-[#2B80FFFF] text-[#2B80FFFF] border-1 rounded-[6px] bg-[#FFF]">Try now</button>
            </div>
        </div >

    )
}

export default Sidenav;