import React from 'react'
import { createRoot } from "react-dom/client";
import Home from '../Home';
import Dashbord from '../Route/Dashbord';
// import Editprofile from '../Route/Editprofile';
// import SetDefaultMarkup from '../Route/SetDefaultMarkup';
// import ChangePassword from '../Route/ChangePassword';
// import Receipts from '../Route/Receipts';
// import ManageStaff from '../Route/ManageStaff';
// import ManageSubAgent from '../Route/ManageSubAgent';
// import SubscribeReminderPro from '../Route/SubscribeReminderPro';
// import AgentRegistration from '../Route/AgentRegistration';
// import BookingDetails from '../Route/BookingDetails';
// import FlightRules from '../Route/FlightRules';
// import SupplierPayment from '../Route/SupplierPayment';
// import SeoMeta from '../Route/SeoMeta';
// import MarkupDetails from '../Route/MarkupDetails';
// import AgentBookingPortal from '../Route/AgentBookingPortal';
import AirLineList from '../Route/AirLineList';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import AgentCreation from '../Route/AgentCreation';
function Sidebar() {
  const marginLeft={marginLeft:"-35px" ,width:"250px"};
  return (
    <div>
        
            
        <div className="vertical-menu" style={{backgroundColor:"#040837"}}>

            <div data-simplebar className="h-100">

                <div id="sidebar-menu" style={marginLeft}>
                    <ul className="metismenu list-unstyled" id="side-menu">
                        <li className="menu-title">Menu</li>
                        <li>
                        <Link to="/dashboard"> <a href="" className="waves-effect">
                                <i className="ri-dashboard-line"></i>
                                <span>
                                  Home
                                </span>
                            </a>
                            </Link>
                        </li>
                        <li>
                        <Link to="/mydashboard"> <a href="" className="waves-effect">
                                <i className="ri-dashboard-line"></i>
                                <span>
                                   Dashboard
                                    </span>
                            </a></Link>
                        </li>

                        <li >
                        
                        <li ></li>
                        <Link to="/editprofile"> <a href="" className=" waves-effect">
                                <i className="ri-calendar-2-line"></i>
                                <span>Edit Profile</span>
                            </a></Link>
                        </li>

                        <li>
                            <Link to ="/setmarkup">
                                <a href="" className=" waves-effect">
                                
                                <i className="ri-chat-1-line"></i>
                                <span>Set Markup</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link to ="/changepassword">
                            <a href="" className=" waves-effect">
                                <i className="ri-store-2-line"></i>
                                <span>Change Password</span>
                            </a>
                            </Link>
                        </li>
                        <li>
                            <Link to ="/recipts">
                            <a href=""  className="aves-effect">
                                <i className="ri-mail-send-line"></i>
                                <span>Allocate Receipt</span>
                            </a>
                            </Link>
                        </li>

                        <li>
                            <Link to ="/managestaff">
                            <a href="" className=" waves-effect">
                                <i className="ri-artboard-2-line"></i>
                                <span>Manage Operation Staff</span>
                            </a>
                            </Link>
                        </li>

                        <li>
                            <Link to ="/managesubagent">
                            <a href="" className="waves-effect">
                                <i className="ri-layout-3-line"></i>
                                <span>Manage Sub Agent</span>
                            </a>
                            </Link>
                        </li>
                        
                        <li>
                            <Link to ="/subscribetoreminder">
                            <a href="" className=" waves-effect">
                                <i className="ri-artboard-2-line"></i>
                                <span>Subscribe to Reminder Pro</span>
                            </a>
                            </Link>
                        </li>
                        <li>
                            <Link to ="/agentcreation">
                            <a href="" className=" waves-effect">
                                <i className="ri-artboard-2-line"></i>
                                <span>Agent creations</span>
                            </a>
                            </Link>
                        </li>
                        <li>
                            <Link to ="/agentregistration">
                            <a href="" className=" waves-effect">
                                <i className="ri-artboard-2-line"></i>
                                <span>Agent Registration</span>
                            </a>
                            </Link>
                        </li>
                        <li>
                            <Link to ="/bookingdetails">
                            <a href="" className=" waves-effect">
                                <i className="ri-artboard-2-line"></i>
                                <span>Booking Detalis</span>
                            </a>
                            </Link>
                        </li>
                        <li>
                            <Link to ="/flightrule">
                            <a href="" className=" waves-effect">
                                <i className="ri-artboard-2-line"></i>
                                <span>Flight Rules</span>
                            </a>
                            </Link>
                        </li>
                        <li>
                            <Link to ="/supplierpayment">
                            <a href="" className=" waves-effect">
                                <i className="ri-artboard-2-line"></i>
                                <span>Supplier Payment</span>
                            </a>
                            </Link>
                        </li>
                        <li>
                            <Link to ="/seometatag">
                            <a href="" className=" waves-effect">
                                <i className="ri-artboard-2-line"></i>
                                <span>Seo Meta Tag</span>
                            </a>
                            </Link>
                        </li>
                        <li>
                            <Link to ="/markupdetails">
                            <a href="" className=" waves-effect">
                                <i className="ri-artboard-2-line"></i>
                                <span>Markup Details</span>
                            </a>
                            </Link>
                        </li>
                        <li>
                            <Link to ="/agentbookingportal">
                            <a href="" className=" waves-effect">
                                <i className="ri-artboard-2-line"></i>
                                <span>Agent Booking Portal</span>
                            </a>
                            </Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
        <div className="rightbar-overlay"></div>
        {/* <Routes>
            <Route path="/home" element={ <Home />} />
            <Route path="dashboard" element={ <Dashbord />} />
            <Route path="airlist" element={ <AirLineList />} />
            <Route path="editprofile" element={ <Editprofile />} />
            <Route path="setmarkup" element={ <SetDefaultMarkup />} />
            <Route path="changepassword" element={ <ChangePassword />} />
            <Route path="recipts" element={ <Receipts />} />
            <Route path="managestaff" element={ <ManageStaff />} />
            <Route path="managesubagent" element={ <ManageSubAgent />} />
            <Route path="subscribetoreminder" element={ <SubscribeReminderPro />} /> 
            <Route path="agentcreation" element={ <AgentCreation />} />
            <Route path="agentregistration" element={ <AgentRegistration />} />
            <Route path="bookingdetails" element={ <BookingDetails />} />
            <Route path="flightrule" element={ <FlightRules />} />
            <Route path="supplierpayment" element={ <SupplierPayment />} />
            <Route path="seometatag" element={ <SeoMeta />} />
            <Route path="markupdetails" element={ <MarkupDetails />} />
            <Route path="agentbookingportal" element={ <AgentBookingPortal />} />
        </Routes> */}
    </div>
  )
}

export default Sidebar