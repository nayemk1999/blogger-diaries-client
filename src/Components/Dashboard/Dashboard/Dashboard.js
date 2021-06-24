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

const Dashboard = () => {
    const [loggedInUser, setloggedInuser] = useContext(UserContext)
    return (
        <div className=''>
            <h5 className='text-center dashboardWel p-2' >Welcome Admin Dashboard <span className='text-brand'>{loggedInUser.displayName}</span></h5>
            <div className="container">
                <div className=' d-flex row'>
                    <Router>
                        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
                            <ul className="list-unstyled">
                                <li>
                                    <Link to="/dashboard" className="text-white">
                                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/admin/orderList' className="text-white">
                                        <FontAwesomeIcon icon={faFolder} /> <span>Order List</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/admin/addServicePlan' className="text-white">
                                        <FontAwesomeIcon icon={faPlusCircle} /> <span>Add Service</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/admin/addAdmin' className="text-white">
                                        <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/manageService' className="text-white" >
                                        <FontAwesomeIcon icon={faTasks} /> <span>Manage Service</span>
                                    </Link>
                                </li>
                            </ul>
                            <div>
                                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
                            </div>
                        </div>
                        <div className="col-md-10">
                            <Switch>
                                <Route path="/admin/addServicePlan">
                                    <AddBlog />
                                </Route>
                                <Route path="/admin/orderList">
                                    {/* <OrdersList /> */}
                                </Route>
                                <Route path="/admin/addAdmin">
                                    <MakeAdmin />
                                </Route>
                                <Route path="/admin">
                                    {/* <AdminPanel /> */}
                                </Route>
                                <Route path="/manageService">
                                    {/* <ManageBlog /> */}
                                </Route>
                                <Route exact path="/">
                                    <Dashboard />
                                </Route>
                                <Route path="/dashboard">
                                    <Dashboard />
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