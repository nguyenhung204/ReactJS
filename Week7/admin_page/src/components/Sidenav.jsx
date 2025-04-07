import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import image from '../assets/image.png';
import { faBuromobelexperte } from '@fortawesome/free-brands-svg-icons';
import { faChartPie, faCode, faFolder, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-regular-svg-icons';

function Sidenav() {
    return (
        <div className="flex justify-between flex-col h-full">
            <div>
                <div className="sidebar-header">
                    <img src={logo} alt="Logo" className="logo" />
                </div>
                <nav className="sidebar-nav">
                    <ul className="space-y-2">
                        <li>
                            <NavLink to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? "flex items-center gap-3 px-4 py-2 rounded-md bg-[#F44B87FF] text-[#FFF] font-medium transition-colors "
                                        : "flex items-center gap-3 px-4 py-2 rounded-md"
                                }
                            >
                                <FontAwesomeIcon icon={faBuromobelexperte} />
                                <span>Dashboard</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/project"
                               className={({ isActive }) =>
                                isActive
                                    ? "flex items-center gap-3 px-4 py-2 rounded-md bg-[#F44B87FF] text-[#FFF] font-medium transition-colors "
                                    : "flex items-center gap-3 px-4 py-2 rounded-md"
                            }
                            >
                                <FontAwesomeIcon icon={faFolder} />
                                <span>Projects</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/team"
                                className={({ isActive }) =>
                                    isActive
                                        ? "flex items-center gap-3 px-4 py-2 rounded-md bg-[#F44B87FF] text-[#FFF] font-medium transition-colors "
                                        : "flex items-center gap-3 px-4 py-2 rounded-md"
                                }
                            >
                                <FontAwesomeIcon icon={faUserGroup} />
                                <span>Teams</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/analytics"
                                className={({ isActive }) =>
                                    isActive
                                        ? "flex items-center gap-3 px-4 py-2 rounded-md bg-[#F44B87FF] text-[#FFF] font-medium transition-colors "
                                        : "flex items-center gap-3 px-4 py-2 rounded-md"
                                }
                            >
                                <FontAwesomeIcon icon={faChartPie} />
                                <span>Analytics</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/messages"
                                className={({ isActive }) =>
                                    isActive
                                        ? "flex items-center gap-3 px-4 py-2 rounded-md bg-[#F44B87FF] text-[#FFF] font-medium transition-colors "
                                        : "flex items-center gap-3 px-4 py-2 rounded-md"
                                }
                            >
                                <FontAwesomeIcon icon={faMessage} />
                                <span>Messages</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/integrations"
                                className={({ isActive }) =>
                                    isActive
                                        ? "flex items-center gap-3 px-4 py-2 rounded-md bg-[#F44B87FF] text-[#FFF] font-medium transition-colors "
                                        : "flex items-center gap-3 px-4 py-2 rounded-md"
                                }
                            >
                                <FontAwesomeIcon icon={faCode} />
                                <span>Integrations</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="section bg-[#F0F6FF] flex flex-col gap-2 text-center p-2">
                <img src={image} alt="" />
                <h2>V2.0 is available</h2>
                <button className="px-6 py-1 border-[#2B80FFFF] text-[#2B80FFFF] border-1 rounded-[6px] bg-[#FFF]">Try now</button>
            </div>
        </div>
    )
}

export default Sidenav;
