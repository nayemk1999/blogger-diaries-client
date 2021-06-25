import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faGripHorizontal, faPlusCircle, faSignOutAlt, faTasks, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';
import AddBlog from '../AddBlog/AddBlog';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import NavBar from '../../Home/Header/Navbar/Navbar';
import ManageBlog from '../ManageBlog/ManageBlog';

const Dashboard = () => {

    const [loggedInUser, setloggedInuser] = useContext(UserContext)
    return (
        <div className='dash-container'>
            <NavBar />
            <div className='dashboardWel'>
                <h5 className='text-center p-2 mt-5' >Welcome Admin Dashboard <span className='text-brand'>{loggedInUser.displayName}</span></h5>
            </div>
            <div className="container">
                <div className='d-flex row'>
                    <Router>
                        <div className="sidebar d-flex flex-column justify-content-between col-md-3 py-5 px-4" style={{ height: "100vh", marginLeft: '-27vh'}}>
                            <ul className="list-unstyled">
                                <li>
                                    <Link to="/dashboard" className="text-white">
                                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/dashboard/add-blog' className="text-white">
                                        <FontAwesomeIcon icon={faPlusCircle} /> <span>Add Blog</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/dashboard/addAdmin' className="text-white">
                                        <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/dashboard/manage-blogs' className="text-white" >
                                        <FontAwesomeIcon icon={faTasks} /> <span>Manage Blogs</span>
                                    </Link>
                                </li>
                            </ul>
                            <div>
                                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
                            </div>
                        </div>
                        <div className="col p-0">
                            <Switch>
                                <Route path="/dashboard/add-blog">
                                    <AddBlog />
                                </Route>
                                <Route path="/admin/orderList">
                                    {/* <OrdersList /> */}
                                </Route>
                                <Route path="/dashboard/addAdmin">
                                    <MakeAdmin />
                                </Route>
                                <Route path="/admin">
                                    {/* <AdminPanel /> */}
                                </Route>
                                <Route path="/dashboard/manage-blogs">
                                    <ManageBlog />
                                </Route>
                                <Route exact path="/">
                                    {/* <Dashboard /> */}
                                </Route>
                                <Route path="/dashboard">
                                    {/* <Dashboard /> */}
                                </Route>
                            </Switch>
                        </div>
                    </Router>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;