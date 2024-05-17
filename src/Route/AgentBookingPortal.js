import React from 'react';
import Footer from './Footer';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function AgentBookingPortal() {
  return (
    <div>
        <Navbar />
         <Sidebar />
        <div className="main-content">

            <div className="page-content"   style={{backgroundColor:"#f1f5f7"}}>
                <div className="container-fluid">




                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                <h4 className="mb-sm-0">My Bookings</h4>
                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-md-12 p-0">
                            <div className="edit_profileSec">
                                <div className="editProfileForm">
                                    <div className="clearDiv row">
                                        <div className="bookingFrom">
                                            

                                            <div className="panel with-nav-tabs homeSearchCont product-desc">
                                                <ul className="nav nav-tabs nav-tabs-custom" role="tablist">
                                                    <li className="nav-item">
                                                    <a className="nav-link active" id="booking1-tab" data-bs-toggle="tab" href="#booking1" role="tab"><i className="fa fa-file-text-o" aria-hidden="true"> </i> All Bookings</a>
                                                    </li>
                                                    <li className="nav-item">
                                                    <a className="nav-link" id="booking2-tab" data-bs-toggle="tab" href="#booking2" role="tab"><i className="fa fa-plane" aria-hidden="true"> </i> Flights</a>
                                                    </li>
                                                    <li className="nav-item">
                                                    <a className="nav-link" id="booking3-tab" data-bs-toggle="tab" href="#booking3" role="tab"><i className="fa fa-bed" aria-hidden="true"> </i> Hotels</a>
                                                    </li>
                                                    <li className="nav-item">
                                                    <a className="nav-link" id="booking4-tab" data-bs-toggle="tab" href="#booking4" role="tab"><i className="fa fa-car" aria-hidden="true"> </i> Transfers</a>
                                                    </li>
                                                    <li className="nav-item">
                                                    <a className="nav-link" id="booking5-tab" data-bs-toggle="tab" href="#booking5" role="tab"><i className="fa fa-pagelines" aria-hidden="true"> </i> Activities</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="tab-content">
                                                <div className="tab-pane fade show active" id="booking1" role="tabpanel">
                                                    <div className="row">
                                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group mb-0">
                                                            <label>Booking ID</label>
                                                            <input type="text" name="txt_booking_refno" maxlength="10" id="txt_booking_refno" value="" className="form-control" placeholder="Enter Booking Id" autocomplete="none" />
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group mb-0">
                                                            <label>Booking Status</label>
                                                            <div className="input_icon form-group">
                                                                <select name="sel_reservation_status" className="form-control" title="">
                                                                    <option value="" selected="selected">All</option>
                                                                    <option value="on_request">On Request</option>
                                                                    <option value="confirmed">Confirmed</option>
                                                                    <option value="vouchered">Vouchered</option>
                                                                    <option value="cancelled">Cancelled</option>
                                                                    <option value="rejected">Rejected</option>
                                                                    <option value="failed">Sold Out</option>
                                                                    <option value="inprocess_cancel">In Process Cancel</option>
                                                                </select>
                                                                <span className="reservationSelect"><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group mb-0">
                                                            <label>User Name</label>
                                                            <div className="input_icon form-group">
                                                                <select name="sel_sub_agent" className="form-control" title="">
                                                                    <option value="">Select</option>
                                                                    <option value="">All</option>
                                                                    <option value="24">uniquetech1( CA0024 )</option>
                                                                </select>
                                                                <span className="reservationSelect"><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group mb-0">
                                                            <label>Operation Staff</label>
                                                            <div className="input_icon form-group">
                                                                <select name="sel_sub_user" className="form-control">
                                                                    <option value="">Select</option>
                                                                    <option value="">All</option>
                                                                </select>
                                                                <span className="reservationSelect"><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group mb-0">
                                                            <div className="checkbox  d-flex">
                                                                <input type="checkbox" name="all_bookings" id="all_bookings" autocomplete="none" />
                                                                <label for="all_bookings" className="pt-2"> Show Past Bookings</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group mb-0">
                                                            <div className="checkbox d-flex">
                                                                <input type="checkbox" name="show_sub_agentRate" id="show_sub_agent_rate" value="yes" autocomplete="none" />
                                                                <label for="show_sub_agent_rate" className="pt-2">  Show Sub-agent Details</label>
                                                            </div>
                                                        </div>
                                                        
                                                        
                                                        <div id="gen-question-accordion" className="custom-accordion-arrow">
                                                            <div className="card">
                                                                <a href="#gen-question-collapseOne" className="text-dark" data-bs-toggle="collapse" aria-expanded="true" aria-controls="gen-question-collapseOne">
                                                                    <div className="card-header" id="gen-question-headingOne" style={{paddingLeft:"5px"}}>
                                                                        <h5 className="font-size-14 m-0">
                                                                            <i className="fa fa-plus"></i> More Option
                                                                        </h5>
                                                                    </div>
                                                                </a>
                        
                                                                <div id="gen-question-collapseOne" className="collapse fade" aria-labelledby="gen-question-headingOne" data-bs-parent="#gen-question-accordion">
                                                                    <div className="card-body">
                                                                        <div className="row">
                                                                            <div className="col-lg-6">
                                                                            <h5>Filter by Date</h5>
                                                                                <div className="row">
                                                                                    <label>Booked</label>	
                                                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group">
                                                                                        <div id="datepicker1">
                                                                                            <input type="text" className="form-control w-100" placeholder="dd M, yyyy" data-date-format="dd M, yyyy" data-date-container="#datepicker1" data-provide="datepicker" style={{background:"#fff"}} />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group">
                                                                                        <div id="datepicker1">
                                                                                            <input type="text" className="form-control w-100" placeholder="dd M, yyyy" data-date-format="dd M, yyyy" data-date-container="#datepicker1" data-provide="datepicker" style={{background:"#fff"}} />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="row">
                                                                                    <label>Vouchered</label>	
                                                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group">
                                                                                        <div id="datepicker1">
                                                                                            <input type="text" className="form-control w-100" placeholder="dd M, yyyy" data-date-format="dd M, yyyy" data-date-container="#datepicker1" data-provide="datepicker" style={{background:"#fff"}} />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group">
                                                                                        <div id="datepicker1">
                                                                                            <input type="text" className="form-control w-100" placeholder="dd M, yyyy" data-date-format="dd M, yyyy" data-date-container="#datepicker1" data-provide="datepicker" style={{background:"#fff"}} />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="row">
                                                                                    <label>Deadline Date</label>	
                                                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group">
                                                                                        <div id="datepicker1">
                                                                                            <input type="text" className="form-control w-100" placeholder="dd M, yyyy" data-date-format="dd M, yyyy" data-date-container="#datepicker1" data-provide="datepicker" style={{background:"#fff"}} />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group">
                                                                                        <div id="datepicker1">
                                                                                            <input type="text" className="form-control w-100" placeholder="dd M, yyyy" data-date-format="dd M, yyyy" data-date-container="#datepicker1" data-provide="datepicker" style={{background:"#fff"}} />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-6">
                                                                            <h5>Filter by Details</h5>
                                                                                <div className="row">
                                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                                                                                        <label>Guest Name</label>
                                                                                        <input type="text" name="txt_first_name" value="" title="First Name" className="form-control" placeholder="Add Tags"autocomplete="none" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div> 
                                                        </div> 
                                                        <div className="editProfileSubmitBtn">
                                                            <a className="submitebtn" href=""> Search </a>
                                                        </div>
                                                    </div>
                                                </div>
                            
                                                <div className="tab-pane fade" id="booking2" role="tabpanel">
                                                    <div className="row">
                                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group mb-0">
                                                            <label>Booking ID</label>
                                                            <input type="text" name="txt_booking_refno" maxlength="10" id="txt_booking_refno" value="" className="form-control" placeholder="Enter Booking Id" autocomplete="none" />
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group mb-0">
                                                            <label>Booking Status</label>
                                                            <div className="input_icon form-group">
                                                                <select name="sel_reservation_status" className="form-control" title="">
                                                                    <option value="" selected="selected">All</option>
                                                                    <option value="on_request">On Request</option>
                                                                    <option value="confirmed">Confirmed</option>
                                                                    <option value="vouchered">Vouchered</option>
                                                                    <option value="cancelled">Cancelled</option>
                                                                    <option value="rejected">Rejected</option>
                                                                    <option value="failed">Sold Out</option>
                                                                    <option value="inprocess_cancel">In Process Cancel</option>
                                                                </select>
                                                                <span className="reservationSelect"><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group mb-0">
                                                            <label>User Name</label>
                                                            <div className="input_icon form-group">
                                                                <select name="sel_sub_agent" className="form-control" title="">
                                                                    <option value="">Select</option>
                                                                    <option value="">All</option>
                                                                    <option value="24">uniquetech1( CA0024 )</option>
                                                                </select>
                                                                <span className="reservationSelect"><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group mb-0">
                                                            <label>Operation Staff</label>
                                                            <div className="input_icon form-group">
                                                                <select name="sel_sub_user" className="form-control">
                                                                    <option value="">Select</option>
                                                                    <option value="">All</option>
                                                                </select>
                                                                <span className="reservationSelect"><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group mb-0">
                                                            <div className="checkbox  d-flex">
                                                                <input type="checkbox" name="all_bookings" id="all_bookings" autocomplete="none" />
                                                                <label for="all_bookings" className="pt-2"> Show Past Bookings</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group mb-0">
                                                            <div className="checkbox d-flex">
                                                                <input type="checkbox" name="show_sub_agentRate" id="show_sub_agent_rate" value="yes" autocomplete="none" />
                                                                <label for="show_sub_agent_rate" className="pt-2">  Show Sub-agent Details</label>
                                                            </div>
                                                        </div>
                                                        
                                                        
                                                        <div id="gen-question-accordion" className="custom-accordion-arrow">
                                                            <div className="card">
                                                                <a href="#gen-question-collapseTwo" className="text-dark" data-bs-toggle="collapse" aria-expanded="true" aria-controls="gen-question-collapseTwo">
                                                                    <div className="card-header" id="gen-question-headingOne" style={{paddingLeft:"5px"}}>
                                                                        <h5 className="font-size-14 m-0">
                                                                            <i className="fa fa-plus"></i> More Option
                                                                        </h5>
                                                                    </div>
                                                                </a>
                        
                                                                <div id="gen-question-collapseTwo" className="collapse fade" aria-labelledby="gen-question-headingOne" data-bs-parent="#gen-question-accordion">
                                                                    <div className="card-body">
                                                                        <div className="row">
                                                                            <div className="col-lg-6">
                                                                            <h5>Filter by Date</h5>
                                                                                <div className="row">
                                                                                    <label>Booked</label>	
                                                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group">
                                                                                        <div id="datepicker1">
                                                                                            <input type="text" className="form-control w-100" placeholder="dd M, yyyy" data-date-format="dd M, yyyy" data-date-container="#datepicker1" data-provide="datepicker" style={{background:"#fff"}} />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group">
                                                                                        <div id="datepicker1">
                                                                                            <input type="text" className="form-control w-100" placeholder="dd M, yyyy" data-date-format="dd M, yyyy" data-date-container="#datepicker1" data-provide="datepicker" style={{background:"#fff"}} />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="row">
                                                                                    <label>Departure</label>	
                                                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group">
                                                                                        <div id="datepicker1">
                                                                                            <input type="text" className="form-control w-100" placeholder="dd M, yyyy" data-date-format="dd M, yyyy" data-date-container="#datepicker1" data-provide="datepicker" style={{background:"#fff"}} />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group">
                                                                                        <div id="datepicker1">
                                                                                            <input type="text" className="form-control w-100" placeholder="dd M, yyyy" data-date-format="dd M, yyyy" data-date-container="#datepicker1" data-provide="datepicker" style={{background:"#fff"}} />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="row">
                                                                                    <label>Arrival</label>	
                                                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group">
                                                                                        <div id="datepicker1">
                                                                                            <input type="text" className="form-control w-100" placeholder="dd M, yyyy" data-date-format="dd M, yyyy" data-date-container="#datepicker1" data-provide="datepicker" style={{background:"#fff"}} />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group">
                                                                                        <div id="datepicker1">
                                                                                            <input type="text" className="form-control w-100" placeholder="dd M, yyyy" data-date-format="dd M, yyyy" data-date-container="#datepicker1" data-provide="datepicker" style={{background:"#fff"}} />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="row">
                                                                                    <label>Issued</label>	
                                                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group">
                                                                                        <div id="datepicker1">
                                                                                            <input type="text" className="form-control w-100" placeholder="dd M, yyyy" data-date-format="dd M, yyyy" data-date-container="#datepicker1" data-provide="datepicker" style={{background:"#fff"}} />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group">
                                                                                        <div id="datepicker1">
                                                                                            <input type="text" className="form-control w-100" placeholder="dd M, yyyy" data-date-format="dd M, yyyy" data-date-container="#datepicker1" data-provide="datepicker" style={{background:"#fff"}} />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-6">
                                                                            <h5>Filter by Details</h5>
                                                                                <div className="row">
                                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                                                                                        <label>Passenger Name</label>
                                                                                        <input type="text" name="txt_first_name" value="" title="First Name" className="form-control" placeholder="Passenger Name"autocomplete="none" />
                                                                                    </div>
                                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                                                                                        <label>Airline Name</label>
                                                                                        <input type="text" name="txt_first_name" value="" title="First Name" className="form-control" placeholder="Add Tags"autocomplete="none" />
                                                                                    </div>
                                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                                                                                        <label>Destination</label>
                                                                                        <input type="text" name="txt_first_name" value="" title="First Name" className="form-control" placeholder="Add Tags"autocomplete="none" />
                                                                                    </div>
                                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                                                                                        <label>PNR No.</label>
                                                                                        <input type="text" name="txt_first_name" value="" title="First Name" className="form-control" placeholder="Add Tags"autocomplete="none" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div> 
                                                        </div> 
                                                        <div className="editProfileSubmitBtn">
                                                            <a className="submitebtn" href=""> Search </a>
                                                        </div>
                                                    </div>
                                                </div> 
                                        
                                                
                                                <div className="tab-pane fade" id="booking3" role="tabpanel">
                                                    <div className="row">
                                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group mb-0">
                                                            <label>Booking ID</label>
                                                            <input type="text" name="txt_booking_refno" maxlength="10" id="txt_booking_refno" value="" className="form-control" placeholder="Enter Booking Id" autocomplete="none" />
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group mb-0">
                                                            <label>Booking Status</label>
                                                            <div className="input_icon form-group">
                                                                <select name="sel_reservation_status" className="form-control" title="">
                                                                    <option value="" selected="selected">All</option>
                                                                    <option value="on_request">On Request</option>
                                                                    <option value="confirmed">Confirmed</option>
                                                                    <option value="vouchered">Vouchered</option>
                                                                    <option value="cancelled">Cancelled</option>
                                                                    <option value="rejected">Rejected</option>
                                                                    <option value="failed">Sold Out</option>
                                                                    <option value="inprocess_cancel">In Process Cancel</option>
                                                                </select>
                                                                <span className="reservationSelect"><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group mb-0">
                                                            <label>User Name</label>
                                                            <div className="input_icon form-group">
                                                                <select name="sel_sub_agent" className="form-control" title="">
                                                                    <option value="">Select</option>
                                                                    <option value="">All</option>
                                                                    <option value="24">uniquetech1( CA0024 )</option>
                                                                </select>
                                                                <span className="reservationSelect"><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group mb-0">
                                                            <label>Operation Staff</label>
                                                            <div className="input_icon form-group">
                                                                <select name="sel_sub_user" className="form-control">
                                                                    <option value="">Select</option>
                                                                    <option value="">All</option>
                                                                </select>
                                                                <span className="reservationSelect"><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group mb-0">
                                                            <div className="checkbox  d-flex">
                                                                <input type="checkbox" name="all_bookings" id="all_bookings" autocomplete="none" />
                                                                <label for="all_bookings" className="pt-2"> Show Past Bookings</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group mb-0">
                                                            <div className="checkbox d-flex">
                                                                <input type="checkbox" name="show_sub_agentRate" id="show_sub_agent_rate" value="yes" autocomplete="none" />
                                                                <label for="show_sub_agent_rate" className="pt-2">  Show Sub-agent Details</label>
                                                            </div>
                                                        </div>
                                                        
                                                        
                                                        <div id="gen-question-accordion" className="custom-accordion-arrow">
                                                            <div className="card">
                                                                <a href="#gen-question-collapsethree" className="text-dark" data-bs-toggle="collapse" aria-expanded="true" aria-controls="gen-question-collapsethree">
                                                                    <div className="card-header" id="gen-question-headingOne" style={{paddingLeft:"5px"}}>
                                                                        <h5 className="font-size-14 m-0">
                                                                            <i className="fa fa-plus"></i> More Option
                                                                        </h5>
                                                                    </div>
                                                                </a>
                        
                                                                <div id="gen-question-collapsethree" className="collapse fade" aria-labelledby="gen-question-headingOne" data-bs-parent="#gen-question-accordion">
                                                                    <div className="card-body">
                                                                        <div className="row">
                                                                            <div className="col-lg-6">
                                                                            <h5>Filter by Date</h5>
                                                                                <div className="row">
                                                                                    <label>Booked</label>	
                                                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group">
                                                                                        <div id="datepicker1">
                                                                                            <input type="text" className="form-control w-100" placeholder="dd M, yyyy" data-date-format="dd M, yyyy" data-date-container="#datepicker1" data-provide="datepicker" style={{background:"#fff"}} />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group">
                                                                                        <div id="datepicker1">
                                                                                            <input type="text" className="form-control w-100" placeholder="dd M, yyyy" data-date-format="dd M, yyyy" data-date-container="#datepicker1" data-provide="datepicker" style={{background:"#fff"}} />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="row">
                                                                                    <label>Vouchered</label>	
                                                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group">
                                                                                        <div id="datepicker1">
                                                                                            <input type="text" className="form-control w-100" placeholder="dd M, yyyy" data-date-format="dd M, yyyy" data-date-container="#datepicker1" data-provide="datepicker" style={{background:"#fff"}} />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group">
                                                                                        <div id="datepicker1">
                                                                                            <input type="text" className="form-control w-100" placeholder="dd M, yyyy" data-date-format="dd M, yyyy" data-date-container="#datepicker1" data-provide="datepicker" style={{background:"#fff"}} />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="row">
                                                                                    <label>Check-in date</label>	
                                                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group">
                                                                                        <div id="datepicker1">
                                                                                            <input type="text" className="form-control w-100" placeholder="dd M, yyyy" data-date-format="dd M, yyyy" data-date-container="#datepicker1" data-provide="datepicker" style={{background:"#fff"}} />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group">
                                                                                        <div id="datepicker1">
                                                                                            <input type="text" className="form-control w-100" placeholder="dd M, yyyy" data-date-format="dd M, yyyy" data-date-container="#datepicker1" data-provide="datepicker" style={{background:"#fff"}} />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="row">
                                                                                    <label>Check-out date</label>	
                                                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group">
                                                                                        <div id="datepicker1">
                                                                                            <input type="text" className="form-control w-100" placeholder="dd M, yyyy" data-date-format="dd M, yyyy" data-date-container="#datepicker1" data-provide="datepicker" style={{background:"#fff"}} />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group">
                                                                                        <div id="datepicker1">
                                                                                            <input type="text" className="form-control w-100" placeholder="dd M, yyyy" data-date-format="dd M, yyyy" data-date-container="#datepicker1" data-provide="datepicker" style={{background:"#fff"}} />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-6">
                                                                            <h5>Filter by Details</h5>
                                                                                <div className="row">
                                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                                                                                        <label>Confirmation No</label>
                                                                                        <input type="text" name="txt_first_name" value="" title="First Name" className="form-control" placeholder="Add Tags"autocomplete="none" />
                                                                                    </div>
                                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                                                                                        <label>Hotel Name</label>
                                                                                        <input type="text" name="txt_first_name" value="" title="First Name" className="form-control" placeholder="Add Tags"autocomplete="none" />
                                                                                    </div>
                                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                                                                                        <label>Hotel City</label>
                                                                                        <input type="text" name="txt_first_name" value="" title="First Name" className="form-control" placeholder="Add Tags"autocomplete="none" />
                                                                                    </div>
                                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                                                                                        <label>Guest Name</label>
                                                                                        <input type="text" name="txt_first_name" value="" title="First Name" className="form-control" placeholder="Add Tags"autocomplete="none" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div> 
                                                        </div> 
                                                        <div className="editProfileSubmitBtn">
                                                            <a className="submitebtn" href=""> Search </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                        
                                                
                                                <div className="tab-pane fade" id="booking4" role="tabpanel">
                                                    <div className="row">
                                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group mb-0">
                                                            <label>Booking ID</label>
                                                            <input type="text" name="txt_booking_refno" maxlength="10" id="txt_booking_refno" value="" className="form-control" placeholder="Enter Booking Id" autocomplete="none" />
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group mb-0">
                                                            <label>Booking Status</label>
                                                            <div className="input_icon form-group">
                                                                <select name="sel_reservation_status" className="form-control" title="">
                                                                    <option value="" selected="selected">All</option>
                                                                    <option value="on_request">On Request</option>
                                                                    <option value="confirmed">Confirmed</option>
                                                                    <option value="vouchered">Vouchered</option>
                                                                    <option value="cancelled">Cancelled</option>
                                                                    <option value="rejected">Rejected</option>
                                                                    <option value="failed">Sold Out</option>
                                                                    <option value="inprocess_cancel">In Process Cancel</option>
                                                                </select>
                                                                <span className="reservationSelect"><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group mb-0">
                                                            <label>User Name</label>
                                                            <div className="input_icon form-group">
                                                                <select name="sel_sub_agent" className="form-control" title="">
                                                                    <option value="">Select</option>
                                                                    <option value="">All</option>
                                                                    <option value="24">uniquetech1( CA0024 )</option>
                                                                </select>
                                                                <span className="reservationSelect"><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group mb-0">
                                                            <label>Operation Staff</label>
                                                            <div className="input_icon form-group">
                                                                <select name="sel_sub_user" className="form-control">
                                                                    <option value="">Select</option>
                                                                    <option value="">All</option>
                                                                </select>
                                                                <span className="reservationSelect"><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group mb-0">
                                                            <div className="checkbox  d-flex">
                                                                <input type="checkbox" name="all_bookings" id="all_bookings" autocomplete="none" />
                                                                <label for="all_bookings" className="pt-2"> Show Past Bookings</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group mb-0">
                                                            <div className="checkbox d-flex">
                                                                <input type="checkbox" name="show_sub_agentRate" id="show_sub_agent_rate" value="yes" autocomplete="none" />
                                                                <label for="show_sub_agent_rate" className="pt-2">  Show Sub-agent Details</label>
                                                            </div>
                                                        </div>
                                                        
                                                        
                                                        <div id="gen-question-accordion" className="custom-accordion-arrow">
                                                            <div className="card">
                                                                <a href="#gen-question-collapsefour" className="text-dark" data-bs-toggle="collapse" aria-expanded="true" aria-controls="gen-question-collapsefour">
                                                                    <div className="card-header" id="gen-question-headingOne" style={{paddingLeft:"5px"}}>
                                                                        <h5 className="font-size-14 m-0">
                                                                            <i className="fa fa-plus"></i> More Option
                                                                        </h5>
                                                                    </div>
                                                                </a>
                        
                                                                <div id="gen-question-collapsefour" className="collapse fade" aria-labelledby="gen-question-headingOne" data-bs-parent="#gen-question-accordion">
                                                                    <div className="card-body">
                                                                        <div className="row">
                                                                            <div className="col-lg-6">
                                                                            <h5>Filter by Date</h5>
                                                                                <div className="row">
                                                                                    <label>Booked</label>	
                                                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group">
                                                                                        <div id="datepicker1">
                                                                                            <input type="text" className="form-control w-100" placeholder="dd M, yyyy" data-date-format="dd M, yyyy" data-date-container="#datepicker1" data-provide="datepicker" style={{background:"#fff"}} />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group">
                                                                                        <div id="datepicker1">
                                                                                            <input type="text" className="form-control w-100" placeholder="dd M, yyyy" data-date-format="dd M, yyyy" data-date-container="#datepicker1" data-provide="datepicker" style={{background:"#fff"}} />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="row">
                                                                                    <label>Vouchered</label>	
                                                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group">
                                                                                        <div id="datepicker1">
                                                                                            <input type="text" className="form-control w-100" placeholder="dd M, yyyy" data-date-format="dd M, yyyy" data-date-container="#datepicker1" data-provide="datepicker" style={{background:"#fff"}} />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group">
                                                                                        <div id="datepicker1">
                                                                                            <input type="text" className="form-control w-100" placeholder="dd M, yyyy" data-date-format="dd M, yyyy" data-date-container="#datepicker1" data-provide="datepicker" style={{background:"#fff"}} />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="row">
                                                                                    <label>Pick Up</label>	
                                                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group">
                                                                                        <div id="datepicker1">
                                                                                            <input type="text" className="form-control w-100" placeholder="dd M, yyyy" data-date-format="dd M, yyyy" data-date-container="#datepicker1" data-provide="datepicker" style={{background:"#fff"}} />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group">
                                                                                        <div id="datepicker1">
                                                                                            <input type="text" className="form-control w-100" placeholder="dd M, yyyy" data-date-format="dd M, yyyy" data-date-container="#datepicker1" data-provide="datepicker" style={{background:"#fff"}} />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="row">
                                                                                    <label>Drop Off</label>	
                                                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group">
                                                                                        <div id="datepicker1">
                                                                                            <input type="text" className="form-control w-100" placeholder="dd M, yyyy" data-date-format="dd M, yyyy" data-date-container="#datepicker1" data-provide="datepicker" style={{background:"#fff"}} />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group">
                                                                                        <div id="datepicker1">
                                                                                            <input type="text" className="form-control w-100" placeholder="dd M, yyyy" data-date-format="dd M, yyyy" data-date-container="#datepicker1" data-provide="datepicker" style={{background:"#fff"}} />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-6">
                                                                            <h5>Filter by Details</h5>
                                                                                <div className="row">
                                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                                                                                        <label>Passenger Name</label>
                                                                                        <input type="text" name="txt_first_name" value="" title="First Name" className="form-control" placeholder="Add Tags"autocomplete="none" />
                                                                                    </div>
                                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                                                                                        <label>City</label>
                                                                                        <input type="text" name="txt_first_name" value="" title="First Name" className="form-control" placeholder="Add Tags"autocomplete="none" />
                                                                                    </div>
                                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                                                                                        <label>Pickup Location</label>
                                                                                        <div className="input_icon">
                                                                                            <select className="form-control" name="sel_nature_of_business">
                                                                                                <option value="0">Select</option>
                                                                                                <option value="Destination Management Company">Destination Management Company</option>
                                                                                                <option value="Tour Operator">Tour Operator</option>
                                                                                                <option value="Travel Agent" selected="">Travel Agent</option>
                                                                                                <option value="Wholesale Travel Company">Wholesale Travel Company</option>
                                                                                                <option value="Corporate">Corporate</option>
                                                                                            </select>
                                                                                            <span className="editProfileSelect"><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                                                                                        <label>Drop-off Location</label>
                                                                                        <div className="input_icon">
                                                                                            <select className="form-control" name="sel_nature_of_business">
                                                                                                <option value="0">Select</option>
                                                                                                <option value="Destination Management Company">Destination Management Company</option>
                                                                                                <option value="Tour Operator">Tour Operator</option>
                                                                                                <option value="Travel Agent" selected="">Travel Agent</option>
                                                                                                <option value="Wholesale Travel Company">Wholesale Travel Company</option>
                                                                                                <option value="Corporate">Corporate</option>
                                                                                            </select>
                                                                                            <span className="editProfileSelect"><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div> 
                                                        </div> 
                                                        <div className="editProfileSubmitBtn">
                                                            <a className="submitebtn" href=""> Search </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                
                                                
                                                <div className="tab-pane fade" id="booking5" role="tabpanel">
                                                    <div className="row">
                                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group mb-0">
                                                            <label>Booking ID</label>
                                                            <input type="text" name="txt_booking_refno" maxlength="10" id="txt_booking_refno" value="" className="form-control" placeholder="Enter Booking Id" autocomplete="none" />
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group mb-0">
                                                            <label>Booking Status</label>
                                                            <div className="input_icon form-group">
                                                                <select name="sel_reservation_status" className="form-control" title="">
                                                                    <option value="" selected="selected">All</option>
                                                                    <option value="on_request">On Request</option>
                                                                    <option value="confirmed">Confirmed</option>
                                                                    <option value="vouchered">Vouchered</option>
                                                                    <option value="cancelled">Cancelled</option>
                                                                    <option value="rejected">Rejected</option>
                                                                    <option value="failed">Sold Out</option>
                                                                    <option value="inprocess_cancel">In Process Cancel</option>
                                                                </select>
                                                                <span className="reservationSelect"><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group mb-0">
                                                            <label>User Name</label>
                                                            <div className="input_icon form-group">
                                                                <select name="sel_sub_agent" className="form-control" title="">
                                                                    <option value="">Select</option>
                                                                    <option value="">All</option>
                                                                    <option value="24">uniquetech1( CA0024 )</option>
                                                                </select>
                                                                <span className="reservationSelect"><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group mb-0">
                                                            <label>Operation Staff</label>
                                                            <div className="input_icon form-group">
                                                                <select name="sel_sub_user" className="form-control">
                                                                    <option value="">Select</option>
                                                                    <option value="">All</option>
                                                                </select>
                                                                <span className="reservationSelect"><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group mb-0">
                                                            <div className="checkbox  d-flex">
                                                                <input type="checkbox" name="all_bookings" id="all_bookings" autocomplete="none" />
                                                                <label for="all_bookings" className="pt-2"> Show Past Bookings</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group mb-0">
                                                            <div className="checkbox d-flex">
                                                                <input type="checkbox" name="show_sub_agentRate" id="show_sub_agent_rate" value="yes" autocomplete="none" />
                                                                <label for="show_sub_agent_rate" className="pt-2">  Show Sub-agent Details</label>
                                                            </div>
                                                        </div>
                                                        
                                                        
                                                        <div id="gen-question-accordion" className="custom-accordion-arrow">
                                                            <div className="card">
                                                                <a href="#gen-question-collapsefive" className="text-dark" data-bs-toggle="collapse" aria-expanded="true" aria-controls="gen-question-collapsefive">
                                                                    <div className="card-header" id="gen-question-headingOne" style={{paddingLeft:"5px"}}>
                                                                        <h5 className="font-size-14 m-0">
                                                                            <i className="fa fa-plus"></i> More Option
                                                                        </h5>
                                                                    </div>
                                                                </a>
                        
                                                                <div id="gen-question-collapsefive" className="collapse fade" aria-labelledby="gen-question-headingOne" data-bs-parent="#gen-question-accordion">
                                                                    <div className="card-body">
                                                                        <div className="row">
                                                                            <div className="col-lg-6">
                                                                            <h5>Filter by Date</h5>
                                                                                <div className="row">
                                                                                    <label>Booked</label>	
                                                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group">
                                                                                        <div id="datepicker1">
                                                                                            <input type="text" className="form-control w-100" placeholder="dd M, yyyy" data-date-format="dd M, yyyy" data-date-container="#datepicker1" data-provide="datepicker" style={{background:"#fff"}} />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group">
                                                                                        <div id="datepicker1">
                                                                                            <input type="text" className="form-control w-100" placeholder="dd M, yyyy" data-date-format="dd M, yyyy" data-date-container="#datepicker1" data-provide="datepicker" style={{background:"#fff"}} />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="row">
                                                                                    <label>Vouchered</label>	
                                                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group">
                                                                                        <div id="datepicker1">
                                                                                            <input type="text" className="form-control w-100" placeholder="dd M, yyyy" data-date-format="dd M, yyyy" data-date-container="#datepicker1" data-provide="datepicker" style={{background:"#fff"}} />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group">
                                                                                        <div id="datepicker1">
                                                                                            <input type="text" className="form-control w-100" placeholder="dd M, yyyy" data-date-format="dd M, yyyy" data-date-container="#datepicker1" data-provide="datepicker" style={{background:"#fff"}} />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-6">
                                                                            <h5>Filter by Details</h5>
                                                                                <div className="row">
                                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                                                                                        <label>Passenger Name</label>
                                                                                        <input type="text" name="txt_first_name" value="" title="First Name" className="form-control" placeholder="Add Tags"autocomplete="none" />
                                                                                    </div>
                                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                                                                                        <label>Activity City</label>
                                                                                        <input type="text" name="txt_first_name" value="" title="First Name" className="form-control" placeholder="Add Tags"autocomplete="none" />
                                                                                    </div>
                                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                                                                                        <label>Activity Name</label>
                                                                                        <input type="text" name="txt_first_name" value="" title="First Name" className="form-control" placeholder="Add Tags"autocomplete="none" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div> 
                                                        </div> 
                                                        <div className="editProfileSubmitBtn">
                                                            <a className="submitebtn" href=""> Search </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                
                                                
                                                
                                                
                                                
                                            
                                            
                                        
                                            </div>
                                        </div>
                            
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
            
            <Footer />
                    
        </div>
    </div>
  )
}

export default AgentBookingPortal