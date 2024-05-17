import React from 'react';
import Footer from './Footer';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
function FlightRules() {
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
                                <h4 className="mb-sm-0">ADD RULE</h4>
                            </div>
                        </div>
                    </div>
                    

                    <div className="row">
                        <div className="col-md-12 p-0">
                            
                            <div className="edit_profileSec">
                                <div className="editProfileForm">
                                    <div className="clearDiv row">
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                            <label>Rule Identifier<span className="mandatory">*</span></label>
                                            <input type="text" name="txt_agency_name" value="" title="Company Name" placeholder="Company Name" className="form-control" autocomplete="none" />
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                            <div className="approvalRadioBtn">
                                                <label>Rule Type</label>
                                                <div className="edit_Profile d-flex">
                                                    <div className="radio-inline iataStatus">
                                                        <input type="radio" id="approve_iata" name="rad_iata_status" value="1" />
                                                        <label for="approve_iata" className="pt-2">  Rate Policy</label>
                                                    </div>
                                                    <div className="radio-inline iataStatus">
                                                        <input type="radio" id="not_approve_iata" name="rad_iata_status" value="0" checked="" />
                                                        <label for="not_approve_iata"  className="pt-2 pl-1">  Reissue Charges</label>
                                                    </div>
                                                </div>
                                                <div className="radio-inline  d-flex iataStatus">
                                                    <input type="radio" id="not_approve_iata" name="rad_iata_status" value="0" checked="" />
                                                    <label for="not_approve_iata"  className="pt-2 pl-1">  Cencellation Charges</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                            <div className="approvalRadioBtn">
                                                <label> Mark Up / Discount </label>
                                                <div className="edit_Profile d-flex">
                                                    <div className="radio-inline iataStatus">
                                                        <input type="radio" id="approve_iata" name="rad_iata_status" value="1" />
                                                        <label for="approve_iata" className="pt-2">  Mark Up</label>
                                                    </div>
                                                    <div className="radio-inline iataStatus">
                                                        <input type="radio" id="not_approve_iata" name="rad_iata_status" value="0" checked="" />
                                                        <label for="not_approve_iata"  className="pt-2 pl-1">  Discount</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                            <div className="approvalRadioBtn">
                                                <label>Status</label>
                                                <div className="edit_Profile d-flex">
                                                    <div className="radio-inline iataStatus">
                                                        <input type="radio" id="approve_iata" name="rad_iata_status" value="1" />
                                                        <label for="approve_iata" className="pt-2"> Active</label>
                                                    </div>
                                                    <div className="radio-inline iataStatus">
                                                        <input type="radio" id="not_approve_iata" name="rad_iata_status" value="0" checked="" />
                                                        <label for="not_approve_iata"  className="pt-2 pl-1">  In Active</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                            <label>Consultant</label>
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
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                            <label>Branch</label>
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
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                            <label>Agent</label>
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
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                            <label>Currency</label>
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
                                <div className="editProfileForm">
                                    <div className="clearDiv row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group fromtobox">
                                            <label>From</label>
                                            <div className="clearDiv row">
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group">
                                                    <label>Country</label>
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
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group">
                                                    <label>Airport</label>
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
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group fromtobox">
                                            <label>To</label>
                                            <div className="clearDiv row">
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group">
                                                    <label>Country</label>
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
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group">
                                                    <label>Airport</label>
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
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                            <label>Airline</label>
                                            <div className="input_icon">
                                                <select name="sel_timezone" id="sel_timezone" className="form-control">
                                                    <option value="">Select</option>
                                                    <option value="3.5">GMT +3:30 Hours (7:47 AM)</option>
                                                    <option value="4">GMT +4:00 Hours (8:17 AM)</option>
                                                    <option value="4.5">GMT +4:30 Hours (8:47 AM)</option>
                                                    <option value="5">GMT +5:00 Hours (9:17 AM)</option>
                                                </select>
                                                <span className="editProfileSelect"><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                            <label>className Of Travel</label>
                                            <div className="input_icon">
                                                <select name="sel_timezone" id="sel_timezone" className="form-control">
                                                    <option value="">Select</option>
                                                    <option value="3.5">GMT +3:30 Hours (7:47 AM)</option>
                                                    <option value="4">GMT +4:00 Hours (8:17 AM)</option>
                                                    <option value="4.5">GMT +4:30 Hours (8:47 AM)</option>
                                                    <option value="5">GMT +5:00 Hours (9:17 AM)</option>
                                                </select>
                                                <span className="editProfileSelect"><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                            <label>Fare className</label>
                                            <div className="input_icon">
                                                <select name="sel_timezone" id="sel_timezone" className="form-control">
                                                    <option value="">Select</option>
                                                    <option value="3.5">GMT +3:30 Hours (7:47 AM)</option>
                                                    <option value="4">GMT +4:00 Hours (8:17 AM)</option>
                                                    <option value="4.5">GMT +4:30 Hours (8:47 AM)</option>
                                                    <option value="5">GMT +5:00 Hours (9:17 AM)</option>
                                                </select>
                                                <span className="editProfileSelect"><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                            <label>Flight Providers</label>
                                            <div className="input_icon">
                                                <select name="sel_timezone" id="sel_timezone" className="form-control">
                                                    <option value="">Select</option>
                                                    <option value="3.5">GMT +3:30 Hours (7:47 AM)</option>
                                                    <option value="4">GMT +4:00 Hours (8:17 AM)</option>
                                                    <option value="4.5">GMT +4:30 Hours (8:47 AM)</option>
                                                    <option value="5">GMT +5:00 Hours (9:17 AM)</option>
                                                </select>
                                                <span className="editProfileSelect"><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <label><b>Last Available Seats</b></label>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                            <label>From</label>
                                            <input type="text" name="txt_first_name" value="" title="First Name" className="form-control" placeholder="First Name"autocomplete="none" />
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                            <label>To</label>
                                            <input type="text" name="txt_first_name" value="" title="First Name" className="form-control" placeholder="First Name"autocomplete="none" />
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                            <label>Booking Policy</label>
                                            <input type="text" name="txt_first_name" value="" title="First Name" className="form-control" placeholder="First Name"autocomplete="none" />
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                            <label>Journey Type</label>
                                            <input type="text" name="txt_first_name" value="" title="First Name" className="form-control" placeholder="First Name"autocomplete="none" />
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                            <label>Last Minute</label>
                                            <input type="text" name="txt_first_name" value="" title="First Name" className="form-control" placeholder="First Name"autocomplete="none" />
                                            <small>Search Dates Before Departure</small>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                            <label>Booking Dates<span className="mandatory">*</span></label>
                                            <div className="inputDiv">
                                            <div className="contactDlts row">
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                                        <div className="row">
                                                            <div className="col-lg-11" style={{paddingRight: "2px"}}>
                                                                <div id="datepicker1">
                                                                    <input type="text" className="form-control w-100" placeholder="dd M, yyyy" data-date-format="dd M, yyyy" data-date-container="#datepicker1" data-provide="datepicker" style={{background:"#fff"}} />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-1 p-0">	
                                                                <a href="#!" className="arrowicon">To</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6" style={{paddingLeft: "7px"}}>
                                                        <div id="datepicker1">
                                                        <input type="text" className="form-control" placeholder="dd M, yyyy" data-date-format="dd M, yyyy" data-date-container="#datepicker1" data-provide="datepicker" />
                                                        </div>
                                                    </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                            <label>Travel Dates<span className="mandatory">*</span></label>
                                            <div className="inputDiv">
                                            <div className="contactDlts row">
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                                        <div className="row">
                                                            <div className="col-lg-11" style={{paddingRight: "2px"}}>
                                                                <div id="datepicker1">
                                                                    <input type="text" className="form-control w-100" placeholder="dd M, yyyy" data-date-format="dd M, yyyy" data-date-container="#datepicker1" data-provide="datepicker" style={{background:"#fff"}} />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-1 p-0">	
                                                                <a href="#!" className="arrowicon">To</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6" style={{paddingLeft: "7px"}}>
                                                        <div id="datepicker1">
                                                        <input type="text" className="form-control" placeholder="dd M, yyyy" data-date-format="dd M, yyyy" data-date-container="#datepicker1" data-provide="datepicker" />
                                                        </div>
                                                    </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <label><b>Booking Amount Range</b></label>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                            <label>From</label>
                                            <input type="text" name="txt_first_name" value="" title="" className="form-control" placeholder="Amount Range"autocomplete="none" />
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                            <label>To</label>
                                            <input type="text" name="txt_first_name" value="" title="" className="form-control" placeholder="Amount Range"autocomplete="none" />
                                        </div>
                                    </div>
                                </div>	
                                
                                
                                <div className="editProfileForm">
                                    <h5 className="">APPLICABLE CHARGES</h5>
                                    <h5>Mark Up</h5>
                                        <div className="clearDiv row">
                                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                <div className="approvalRadioBtn">
                                                    <label>Apply On</label>
                                                    <div className="edit_Profile d-flex">
                                                        <div className="radio-inline iataStatus">
                                                            <input type="radio" id="approve_iata" name="rad_iata_status" value="1" />
                                                            <label for="approve_iata" className="pt-2">  Per Flight</label>
                                                        </div>
                                                        <div className="radio-inline iataStatus">
                                                            <input type="radio" id="not_approve_iata" name="rad_iata_status" value="0" checked="" />
                                                            <label for="not_approve_iata"  className="pt-2 pl-1"> Per Pax</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="clearDiv row">
                                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                <label>Mark Up By</label>
                                                <div className="input_icon">
                                                    <select name="sel_timezone" id="sel_timezone" className="form-control">
                                                        <option value="">Select</option>
                                                        <option value="3.5">GMT +3:30 Hours (7:47 AM)</option>
                                                        <option value="4">GMT +4:00 Hours (8:17 AM)</option>
                                                        <option value="4.5">GMT +4:30 Hours (8:47 AM)</option>
                                                        <option value="5">GMT +5:00 Hours (9:17 AM)</option>
                                                    </select>
                                                    <span className="editProfileSelect"><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                <label>Charges</label>
                                                <input type="text" name="txt_first_name" value="" title="" className="form-control" placeholder="Amount Range"autocomplete="none" />
                                            </div>
                                            <div className="col-lg-6 col-md-3 col-sm-3 col-xs-3 form-group">
                                                <label></label>
                                                <div className="radio-inline pt-3 d-flex iataStatus">
                                                    <input type="radio" id="approve_iata" name="rad_iata_status" value="1" />
                                                    <label for="approve_iata" className="pt-2">  Apply Different Markup For Ancillary </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="editProfileForm">
                                        <div className="col-md-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="editProfileSubmitBtn">
                                                <a className="submitebtn" href=""><i className="fa fa-plus" aria-hidden="true"> </i>  Add Rule </a>
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

export default FlightRules