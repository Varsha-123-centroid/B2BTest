import React from 'react';
import Footer from './Footer';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
function BookingDetails() {
  return (
    <div>
        <Navbar />
       
                <div className="main-content">

                    <div className="page-content"   style={{backgroundColor:"#f1f5f7"}}>
                        <div className="container-fluid">

                            <div className="row">
                                <div className="col-12">
                                    <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                        <h4 className="mb-sm-0">AIRLINE MODIFY BOOKING</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12 p-0">
                                    
                                        <div className="edit_profileSec">
                                            <a href="#" className="trainname"><i className="fa fa-plane" aria-hidden="true"> </i> TSF00099</a>
                                            <div className="editProfileForm" style={{borderTop: "3px solid #5122a3"}}>
                                                <h5 className="headlines">BOOKING INFORMATION</h5>
                                                <div className="clearDiv row">
                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                                                        <table className="table bookingview table-bordered dt-responsive nowrap" style={{borderCollapse: "collapse", borderSpacing: 0, width: "100%"}}>
                                                            <thead>
                                                                <tr>
                                                                    <th style={{width:"25%"}}>BOOKING REFERENCE #</th>
                                                                    <th style={{width:"25%"}}>TSF00099</th>
                                                                    <th style={{width:"25%"}}>SUPPLIER REFERENCE</th>
                                                                    <th style={{width:"25%"}}><input className="form-control" value="MPUG984646551" /></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td style={{width:"25%"}}>CURRENT STATUS</td>
                                                                    <td style={{width:"25%"}}>
                                                                        <span className="voucherbtn">VOUCHERED</span>
                                                                        <span className="invoicebtn"><i className="fa fa-file-text-o" aria-hidden="true"> </i> Invoice </span>
                                                                        <div className="input_icon">
                                                                            <select className="form-control" name="sel_country" title="">
                                                                                <option value="">Vouchered</option>
                                                                                <option value="97">Afghanistan</option>
                                                                                <option value="429">Aland Islands</option>
                                                                                <option value="43">Albania</option>
                                                                                <option value="142">Algeria</option>
                                                                            </select>
                                                                            <span className="editProfileSelect"><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                                                                        </div>
                                                                    </td>
                                                                    <td style={{width:"25%"}}>PNR</td>
                                                                    <td style={{width:"25%"}}><input className="form-control" value="MPUG51" /></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>SERVICE DATE</td>
                                                                    <td>
                                                                        <div className="input_icon" id="datepicker1">
                                                                            <input type="text" id="txt_expiry_date" name="txt_expiry_date" readonly="" value="" data-date-container="#datepicker1" data-provide="datepicker" placeholder="dd/mm/yyy" className="form-control" autocomplete="none" />
                                                                        </div>
                                                                    </td>
                                                                    <td>DEADLINE DATE</td>
                                                                    <td>
                                                                        <div className="row">
                                                                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group"  style={{paddingRight:"1px"}}>
                                                                            <div className="input_icon" id="datepicker1">
                                                                                <input type="text" id="txt_expiry_date" name="txt_expiry_date" readonly="" value="" data-date-container="#datepicker1" data-provide="datepicker" placeholder="dd/mm/yyy" className="form-control" autocomplete="none" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 p-0 form-group"  style={{paddingRight:"1px"}}>
                                                                            <input className="form-control" type="time" value="13:45:00" id="example-time-input" />
                                                                        </div>
                                                                        <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5 form-group"  style={{paddingLeft:"1px"}}>
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
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>RESERVATION ID</td>
                                                                    
                                                                    <td colspan="3">OT654</td>
                                                                </tr>
                                                                <tr>
                                                                    <td colspan="4">FLIGHTS(S) DETALIS</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <table className="table bookingviews table-bordered dt-responsive nowrap" style={{borderCollapse: "collapse", borderSpacing: 0, width: "100%"}}>
                                                            <thead>
                                                                <tr>
                                                                    <th>#</th>
                                                                    <th style={{width:"19%"}}>AIRLINE NAME </th>
                                                                    <th style={{width:"5%"}}>FLAIGHT <br /> NUMBER</th>
                                                                    <th  style={{width:"17%"}}>className TRAVEL</th>
                                                                    <th>FROM</th>
                                                                    <th>TO</th>
                                                                    <th>START DATE</th>
                                                                    <th>START TIME</th>
                                                                    <th>END DATE</th>
                                                                    <th>END TIME</th>
                                                                    <th>JOURNEY <br />TME</th>
                                                                    <th>EQUIPMENTS</th>
                                                                    <th>ADD ON <br />BAGGAGE</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td></td>
                                                                    <td>
                                                                        <div className="input_icon">
                                                                            <select className="form-control" name="sel_country" title="">
                                                                                <option value="">GO AIRLINE INDIA PVT LTD</option>
                                                                                <option value="97">Afghanistan</option>
                                                                                <option value="429">Aland Islands</option>
                                                                                <option value="43">Albania</option>
                                                                                <option value="142">Algeria</option>
                                                                            </select>
                                                                            <span className="editProfileSelect"><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                                                                        </div>
                                                                    </td>
                                                                    <td><input className="form-control" type="text" value="586" id="example-time-input" /></td>
                                                                    <td>
                                                                        <div className="row">
                                                                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group" style={{paddingRight:"1px"}}>
                                                                                <div className="input_icon">
                                                                                    <select name="sel_timezone" id="sel_timezone" className="form-control">
                                                                                        <option value="">Economy</option>
                                                                                        <option value="3.5">Economydfd</option>
                                                                                        <option value="4">Economyfvfdvfvv</option>
                                                                                        <option value="4.5">Economyfdvf</option>
                                                                                    </select>
                                                                                    <span className="editProfileSelect"><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group" style={{paddingLeft:"1px"}}>
                                                                                <input className="form-control" type="text" value="586" id="example-time-input" />
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td><input className="form-control" type="text" value="BOM" id="example-time-input" /></td>
                                                                    <td><input className="form-control" type="text" value="GOA" id="example-time-input" /></td>
                                                                    <td>
                                                                        <div className="input_icon" id="datepicker1">
                                                                            <input type="text" id="txt_expiry_date" name="txt_expiry_date" readonly="" value="" data-date-container="#datepicker1" data-provide="datepicker" placeholder="dd/mm/yyy" className="form-control" autocomplete="none" />
                                                                        </div>
                                                                    </td>
                                                                    <td><input className="form-control" type="text" value="13:45:00" id="example-time-input" /></td>
                                                                    <td>
                                                                        <div className="input_icon" id="datepicker1">
                                                                            <input type="text" id="txt_expiry_date" name="txt_expiry_date" readonly="" value="" data-date-container="#datepicker1" data-provide="datepicker" placeholder="dd/mm/yyy" className="form-control" autocomplete="none" />
                                                                        </div>
                                                                    </td>
                                                                    <td><input className="form-control" type="text" value="13:45:00" id="example-time-input" /></td>
                                                                    <td><input className="form-control" type="text" value="01:20" id="example-time-input" /></td>
                                                                    <td><input className="form-control" type="text" value="" id="example-time-input" /></td> 
                                                                    <td><input className="form-control" type="text" value="15kg" id="example-time-input" /></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <h5 className="headlines">PASSENGER INFORMATION</h5>
                                                <table className="table bookingview table-bordered dt-responsive nowrap" style={{borderCollapse: "collapse", borderSpacing: 0, width: "100%"}}>
                                                    <tbody>
                                                        <tr>
                                                            <th style={{width:"25%"}}>PASSENGER NAMES(S)</th>
                                                            <th style={{width:"75%"}}>
                                                                <table className="table bookingviews table-bordered dt-responsive nowrap" style={{borderCollapse: "collapse", borderSpacing: 0, width: "100%"}}>
                                                                    <thead>
                                                                        <tr>
                                                                            <th style={{width:"26%"}}>NAME</th>
                                                                            <th>TYPE</th>
                                                                            <th>DATE OF BIRTH</th>
                                                                            <th>TICKET  <br /> NUMBER</th>
                                                                            <th>PASSPORT <br /> NUMBER</th>
                                                                            <th>PASSPORT <br /> EXPIRY DATE</th>
                                                                            <th>FREQUENT <br /> FLYER NO</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>
                                                                                <div className="row">
                                                                                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 form-group" style={{paddingRight:"0px"}}>
                                                                                        <div className="input_icon">
                                                                                            <select name="sel_timezone" id="sel_timezone" className="form-control">
                                                                                                <option value="">Mr</option>
                                                                                                <option value="3.5">Mrs</option>
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5 p-0 form-group">
                                                                                        <input className="form-control" type="text" value="JUDE MENON" id="example-time-input" />
                                                                                    </div>
                                                                                    <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5 form-group" style={{paddingLeft:"0px"}} >
                                                                                        <input className="form-control" type="text" value="MEZANCES" id="example-time-input" />
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <div className="input_icon">
                                                                                    <select name="sel_timezone" id="sel_timezone" className="form-control">
                                                                                        <option value="">Adult</option>
                                                                                        <option value="3.5">Mrs</option>
                                                                                    </select>
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <div className="input_icon" id="datepicker1">
                                                                                    <input type="text" id="txt_expiry_date" name="txt_expiry_date" readonly="" value="" data-date-container="#datepicker1" data-provide="datepicker" placeholder="dd/mm/yyy" className="form-control" autocomplete="none" />
                                                                                </div>
                                                                            </td>
                                                                            <td><input className="form-control" type="text" value="WKGT68" id="example-time-input" /></td>
                                                                            <td><input className="form-control" type="text" placeholder="Enter Passport Number" id="example-time-input" /></td>
                                                                            <td>
                                                                                <div className="input_icon" id="datepicker1">
                                                                                    <input type="text" id="txt_expiry_date" name="txt_expiry_date" readonly="" value="" data-date-container="#datepicker1" data-provide="datepicker" placeholder="dd/mm/yyy" className="form-control" autocomplete="none" />
                                                                                </div>
                                                                            </td>
                                                                            <td><input className="form-control" type="text" placeholder="Enter frequent flyer Number" id="example-time-input" /></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <div className="row">
                                                                                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 form-group" style={{paddingRight:"0px"}}>
                                                                                        <div className="input_icon">
                                                                                            <select name="sel_timezone" id="sel_timezone" className="form-control">
                                                                                                <option value="">Mr</option>
                                                                                                <option value="3.5">Mrs</option>
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5 p-0 form-group">
                                                                                        <input className="form-control" type="text" value="JUDE MENON" id="example-time-input" />
                                                                                    </div>
                                                                                    <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5 form-group" style={{paddingLeft:"0px"}}>
                                                                                        <input className="form-control" type="text" value="MEZANCES" id="example-time-input" />
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <div className="input_icon">
                                                                                    <select name="sel_timezone" id="sel_timezone" className="form-control">
                                                                                        <option value="">Adult</option>
                                                                                        <option value="3.5">Mrs</option>
                                                                                    </select>
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <div className="input_icon" id="datepicker1">
                                                                                    <input type="text" id="txt_expiry_date" name="txt_expiry_date" readonly="" value="" data-date-container="#datepicker1" data-provide="datepicker" placeholder="dd/mm/yyy" className="form-control" autocomplete="none" />
                                                                                </div>
                                                                            </td>
                                                                            <td><input className="form-control" type="text" value="WKGT68" id="example-time-input" /></td>
                                                                            <td><input className="form-control" type="text" placeholder="Enter Passport Number" id="example-time-input" /></td>
                                                                            <td>
                                                                                <div className="input_icon" id="datepicker1">
                                                                                    <input type="text" id="txt_expiry_date" name="txt_expiry_date" readonly="" value="" data-date-container="#datepicker1" data-provide="datepicker" placeholder="dd/mm/yyy" className="form-control" autocomplete="none" />
                                                                                </div>
                                                                            </td>
                                                                            <td><input className="form-control" type="text" placeholder="Enter frequent flyer Number" id="example-time-input" /></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            
                                                            </th>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <h5 className="headlines">CONTACT DETAILS</h5>
                                                
                                                <table className="table bookingviews table-bordered dt-responsive nowrap" style={{borderCollapse: "collapse", borderSpacing: 0, width: "100%"}}>
                                                    <tbody>
                                                        <tr>
                                                            <td style={{width:"25%"}}>NAME</td>
                                                            <td style={{width:"25%"}}>
                                                                <div className="row">
                                                                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 form-group" style={{paddingRight:"0px"}}>
                                                                        <div className="input_icon">
                                                                            <select name="sel_timezone" id="sel_timezone" className="form-control">
                                                                                <option value="">Mr</option>
                                                                                <option value="3.5">Mrs</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5 p-0 form-group">
                                                                        <input className="form-control" type="text" value="JUDE MENON" id="example-time-input" />
                                                                    </div>
                                                                    <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5 form-group" style={{paddingLeft:"0px"}} >
                                                                        <input className="form-control" type="text" value="MEZANCES" id="example-time-input" />
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td style={{width:"25%"}}></td>
                                                            <td style={{width:"25%"}}></td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{width:"25%"}}>PHONE</td>
                                                            <td style={{width:"25%"}}>
                                                                <div className="contactDlts row">
                                                                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2" style={{paddingRight:"0px"}}>
                                                                            <input type="text" name="country_code_phone" id="country_code_phone" value="91" maxlength="3" className="form-control edit_countryCodeNo countryCode ui-autocomplete-input flag text-right flag-in" autocomplete="none" />
                                                                    </div>
                                                                    <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10" style={{paddingLeft:"0px"}}>
                                                                            <input type="text" name="txt_phone" value="9786453125" maxlength="15" title="Phone Number" placeholder="Phone Number" className="form-control edit_phoneNumber phNumber" autocomplete="none" />
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td style={{width:"25%"}}>EMAIL</td>
                                                            <td style={{width:"25%"}}><input className="form-control" type="text" value="jude@gmail.com" id="example-time-input" /></td>
                                                        </tr>
                                                    </tbody>
                                                </table>	
                                                
                                                <h5 className="headlines">RATE IMFORMATION</h5>
                                                    <table className="table bookingviews table-bordered dt-responsive nowrap" style={{borderCollapse: "collapse", borderSpacing: 0, width: "100%"}}>
                                                    <tbody>
                                                        <tr>
                                                            <td style={{width:"25%"}}>MULTIPLERS</td>
                                                            <td style={{width:"18%"}}>
                                                                <label>Supplier Currency<span className="mandatory">*</span></label>
                                                                <div className="input_icon">
                                                                    <select className="form-control" name="sel_country" title="">
                                                                        <option value="">INR</option>
                                                                        <option value="">INR</option>
                                                                        <option value="">INR</option>

                                                                    </select>
                                                                    <span className="editProfileSelect"><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                                                                </div>
                                                            </td>
                                                            <td style={{width:"18%"}}>
                                                                <label>Agent Currency<span className="mandatory">*</span></label>
                                                                <div className="input_icon">
                                                                    <select className="form-control" name="sel_country" title="">
                                                                        <option value="">INR</option>
                                                                        <option value="">INR</option>
                                                                        <option value="">INR</option>

                                                                    </select>
                                                                    <span className="editProfileSelect"><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                                                                </div>
                                                            </td>
                                                            <td style={{width:"18%"}}>
                                                                <label>Currency Multiplier<span className="mandatory">*</span></label>
                                                                <div className="input_icon input-group fullDiv">
                                                                
                                                                <input type="text" id="hotel_service_per" name="hotel_service_per" className="form-control" value="1" maxlength="5" autocomplete="none" />
                                                                <span className="input-group-addon markup_option_box">INR TO INR</span>
                                                                </div>
                                                            </td>
                                                            <td style={{width:"18%"}}>
                                                                <label>Current Rate<span className="mandatory">*</span></label>
                                                                <input className="form-control" type="text" value="1" id="example-time-input" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{width:"25%"}} rowspan="3">FARE BREAKEUPS</td>
                                                            <td style={{width:"18%"}}>
                                                                <label>Adult Base Fare</label>
                                                                <div className="input_icon input-group fullDiv">
                                                                
                                                                <input type="text" id="hotel_service_per" name="hotel_service_per" className="form-control" value="1" maxlength="5" autocomplete="none" />
                                                                <span className="input-group-addon markup_option_box">INR</span>
                                                                </div>
                                                            </td>
                                                            <td style={{width:"18%"}}>
                                                                <label>Adult taxes & Fee</label>
                                                                <div className="input_icon input-group fullDiv">
                                                                
                                                                <input type="text" id="hotel_service_per" name="hotel_service_per" className="form-control" value="1" maxlength="5" autocomplete="none" />
                                                                <span className="input-group-addon markup_option_box">INR</span>
                                                                </div>
                                                            </td>
                                                            <td style={{width:"18%"}}>
                                                                <label>Adult count</label>
                                                                <div className="input_icon input-group fullDiv">
                                                                
                                                                <input type="text" id="hotel_service_per" name="hotel_service_per" className="form-control" value="1" maxlength="5" autocomplete="none" />
                                                                </div>
                                                            </td>
                                                            <td style={{width:"18%"}}>
                                                                <label>Total adult fare</label>
                                                                <div className="input_icon input-group fullDiv">
                                                                <input type="text" id="hotel_service_per" name="hotel_service_per" className="form-control" value="1" maxlength="5" autocomplete="none" />
                                                                <span className="input-group-addon markup_option_box">INR</span>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{width:"18%"}}>
                                                                <label>Total supplier price</label>
                                                                <div className="input_icon input-group fullDiv">
                                                                
                                                                <input type="text" id="hotel_service_per" name="hotel_service_per" className="form-control" value="1" maxlength="5" autocomplete="none" />
                                                                <span className="input-group-addon markup_option_box">INR</span>
                                                                </div>
                                                            </td>
                                                            <td style={{width:"18%"}}>
                                                                <label>Agent markup</label>
                                                                <div className="input_icon input-group fullDiv">
                                                                
                                                                <input type="text" id="hotel_service_per" name="hotel_service_per" className="form-control" value="1" maxlength="5" autocomplete="none" />
                                                                <span className="input-group-addon markup_option_box">INR</span>
                                                                </div>
                                                            </td>
                                                            <td style={{width:"18%"}}>
                                                                <label>Total markup</label>
                                                                <div className="input_icon input-group fullDiv">
                                                                <input type="text" id="hotel_service_per" name="hotel_service_per" className="form-control" value="1" maxlength="5" autocomplete="none" />
                                                                <span className="input-group-addon markup_option_box">%</span>
                                                                </div>
                                                            </td>
                                                            <td style={{width:"18%"}}>
                                                                <label>Agent price</label>
                                                                <div className="input_icon input-group fullDiv">
                                                                <input type="text" id="hotel_service_per" name="hotel_service_per" className="form-control" value="1" maxlength="5" autocomplete="none" />
                                                                <span className="input-group-addon markup_option_box">INR</span>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{width:"18%"}}>
                                                                <label>Service charge</label>
                                                                <div className="input_icon input-group fullDiv">
                                                                
                                                                <input type="text" id="hotel_service_per" name="hotel_service_per" className="form-control" value="1" maxlength="5" autocomplete="none" />
                                                                <span className="input-group-addon markup_option_box">INR</span>
                                                                </div>
                                                            </td>
                                                            <td style={{width:"18%"}} colspan="3">
                                                            
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                </table>	
                                                
                                                <h5 className="headlines">
                                                    <div className="editProfileSubmitBtn">
                                                        <a className="submitebtn" href=""><i className="fa fa-floppy-o" aria-hidden="true"> </i>  Save </a>
                                                    </div>
                                                </h5>
                                                
                                                <div className="text-end">
                                                    <button type="button" className="btn btn-primary waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#printticket">Print Ticket</button>
                                                    
                                                    <button type="button" className="btn btn-primary waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#sendemail">Send Email</button>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        
                                                
                                    </div>
                                </div>
                                
                                </div>

                                <div className="modal fade bs-example-modal-lg" id="printticket" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                <div className="modal-header">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body card mb-0">
                                <div className="card-body" style={{boxShadow: "0px 0px 1px 1px #4caf50",padding: "8px 12px 0px",color:"#000"}}>
                                    <div className="row mb-2">
                                        <div className="col-lg-6">
                                            <h5 className="modal-title" id="myLargeModalLabel">
                                                <span className="logo-sm">
                                                    <img src="assets/images/logo.png" alt="logo-sm-dark" height="42" />
                                                </span>
                                            </h5>
                                        </div>
                                        <div className="col-lg-6 text-end">
                                            <div className="editProfileSubmitBtn text-end">
                                                <a className="printbtn text-black" href=""><i className="fa fa-print" aria-hidden="true"> </i>  Print </a>
                                                <a className="emailbtn text-black" href=""><i className="fa fa-envelope" aria-hidden="true"> </i>  Email </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row p-0 ticketview bg-dark">
                                        <div className="col-lg-9">
                                            <h4>E - TICKET </h4>
                                        </div>
                                        <div className="col-lg-3">
                                            <p>PNR No. : EWUGYF8746</p>
                                        </div>
                                    </div>
                                    <div className="row p-0" style={{borderBottom:"1px solid #1111"}}>
                                        <div className="col-lg-12">
                                            <h5>Flight Details </h5>
                                        </div>
                                    </div>
                                    <div className="row" style={{borderBottom:"1px solid #1111"}}>
                                        <div className="col-lg-12 pt-2">
                                            <p><b>Mumbai <i className="fa fa-long-arrow-right" aria-hidden="true"></i> Goa </b> In 22 Jan, 2023</p>
                                        </div>
                                        <div className="col-lg-4">
                                            <b> Goa Airlines (India) Pvt Ltd</b>
                                            <p> G8 - 987 <br />
                                            Economy ( P-JHFCJHJ ) <br />
                                            Baggage : <i className="fa fa-suitcase" aria-hidden="true"> </i> 15 Kg </p>
                                        </div>
                                        <div className="col-lg-3 text-end">
                                            <b>BOM : 20:15 </b>
                                            <p> 22 Jan, 2023 <br />
                                            Annathapuri <br />
                                            Shivaji (BOM), Mumbai </p>
                                        </div>
                                        <div className="col-lg-2 pt-4 text-center">
                                            <b> <i className="fa fa-clock-o" aria-hidden="true"> </i> 01:20</b>
                                        </div>
                                        <div className="col-lg-3 text-left">
                                            <b>GOA : 20:15 </b>
                                            <p> 23 Jan, 2023 <br />
                                            Annathapuri <br />
                                            Shivaji (BOM), Goa </p>
                                        </div>
                                    </div>
                                    <div className="row" style={{borderBottom:"1px solid #1111"}}>
                                        <div className="col-lg-12">
                                            <h5 className="pt-2">Traveller Details </h5>
                                        </div>
                                    </div>
                                    <div className="row p-0" style={{borderBottom:"1px solid #1111"}}>
                                        <div className="col-lg-12 p-0">
                                            <table className="table table-bordered mb-0" style={{lineHeight: "15px",color:"#000"}}>
                                                <thead className="text-center">
                                                    <tr>
                                                        <th>Travellers</th>
                                                        <th>Passport Details</th>
                                                        <th>Ticket No.</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-center">
                                                    <tr>
                                                        <td>Mr. jude remeidos <br /> Menezes</td>
                                                        <td> - </td>
                                                        <td> WDDSE21545D </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Mr. jude remeidos <br /> Menezes</td>
                                                        <td> - </td>
                                                        <td> WDDSE21545D </td>
                                                    </tr>
                                                </tbody>
                                                <tfoot className="text-center">
                                                    <tr>
                                                        <td colspan="3">Check Your Booking Details Carefully and advise us immediately if you have quiers</td>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 text-center">
                                            <p className="pt-2 pb-0">Our Support Team ia always ready to assist you. Please Contact us on <br />
                                            <a href="#">travexpo@gmail.com</a> Or call Us On <a href="#">9875465312</a> for any assistance or feedback</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                </div>
                                </div>
                                </div>			
                                
                                <div id="sendemail" className="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                <div className="modal-content">
                                <div className="modal-header">
                                <h5 className="modal-title" id="myLargeModalLabel">
                                    <span className="logo-sm">
                                        <img src="assets/images/logo.png" alt="logo-sm-dark" height="42" />
                                    </span>
                                </h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                <h5>BOOKING ID : TSF00099</h5>
                                <div className="form-group">
                                    <label>Enter Email Id</label>
                                    <input type="text" name="txt_iata_number" id="txt_iata_number" value="" maxlength="20" className="form-control txt_iata_number itaDisabled" title="Enter Email Id" placeholder="Enter Email Id" autocomplete="none" />
                                </div>
                                <div className="checkbox checkbox-inline">
                                    <input id="allowCancel" type="checkbox" name="chk_allow_book_under_cancellation" value="1" autocomplete="none" />
                                    <label for="allowCancel" className="pt-2"> All Sectors</label>
                                </div>
                                <div className="editProfileSubmitBtn">
                                    <a className="submitebtn" href=""> Save </a>
                                </div>
                                </div>
                                </div>
                                </div>
                                </div>
                                </div>







<footer className="footer">
    <div className="container-fluid">
        <div className="row">
            <div className="col-sm-6">
                
            </div>
            <div className="col-sm-6">
                <div className="text-sm-end d-none d-sm-block">
                    <script>document.write(new Date().getFullYear())</script> © Travexpo.
                </div>
            </div>
        </div>
    </div>
</footer>
</div>
</div>
  
  )
}

export default BookingDetails