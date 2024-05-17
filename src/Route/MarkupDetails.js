import React from 'react';
import Footer from './Footer';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
function MarkupDetails() {
  return (
    <div>
         <Navbar />
         <Sidebar />   
            <div className="main-content">

                <div className="page-content">
                    <div className="container-fluid">
     
                        <div className="row">
                            <div className="col-12">
                                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                    <h4 className="mb-sm-0"> MARKUP DETAILS </h4>
                                </div>
                            </div>
                        </div>
         

                        <div className="row">
                            <div className="col-md-12 p-0">
                                
                                <div className="edit_profileSec">
                                    <div className="editProfileForm">
                                        <div className="clearDiv row">
                                            
                                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                <label>Markup Type</label>
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
                                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                <label>City</label>
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
                                                <label>Markup</label>
                                                <div className="input_icon input-group fullDiv">
                                                <input type="text" id="hotel_service_per" name="hotel_service_per" className="form-control" value="1" maxlength="5" autocomplete="none" />
                                                <span className="input-group-addon markup_option_box"> % </span>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                <label>Vaild Date<span className="mandatory">*</span></label>
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
                                                <div className="approvalRadioBtn">
                                                    <label> Status</label>
                                                    <div className="edit_Profile d-flex">
                                                        <div className="radio-inline iataStatus">
                                                            <input type="radio" id="approve_iata" name="rad_iata_status" value="1" />
                                                            <label for="approve_iata" className="pt-2">  Inactive</label>
                                                        </div>
                                                        <div className="radio-inline iataStatus">
                                                            <input type="radio" id="not_approve_iata" name="rad_iata_status" value="0" checked="" />
                                                            <label for="not_approve_iata" className="pt-2 pl-1"> Active</label>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                <button className="btn btn-amount">Amount</button>
                                            </div>
                                            
                                            <div className="col-md-12 col-md-12 col-sm-12 col-xs-12">
                                                <div className="editProfileSubmitBtn">
                                                    <a className="submitebtn" href=""><i className="fa fa fa-floppy-o" aria-hidden="true"> </i>  Save </a>
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

export default MarkupDetails