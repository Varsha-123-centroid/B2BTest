import React from 'react';
import Footer from './Footer';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function Dashbord() {
  return (
    <div>
        <Navbar />
         <Sidebar />
        <div className="main-content">

            <div className="page-content"  style={{backgroundColor:"#f1f5f7"}}>
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                <h4 className="mb-sm-0">Dashboard</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="edit_profileSec">
                                <div className="editProfileForm">
                                        <h5 className="">SEARCH BOOKING</h5>
                                            <div className="clearDiv row">
                                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                    <label>Consultant<span className="mandatory">*</span></label>
                                                    <div className="input_icon">
                                                                                                                                                                                                                <select className="form-control" name="Consultant" id="Consultant"  title="Consultant">
                                                            <option value="">Select</option>
                                                            <option value="">Afghanistan</option>
                                                            <option value="">Aland Islands</option>
                                                            <option value="">Albania</option>

                                                        </select>
                                                        <span className="editProfileSelect"><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                    <label>Branch<span className="mandatory">*</span></label>
                                                    <div className="input_icon">
                                                                                                                                                                                                                <select className="form-control" name="Consultant" id="Consultant"  title="Consultant">
                                                            <option value="">Select</option>
                                                            <option value="">Afghanistan</option>
                                                            <option value="">Aland Islands</option>
                                                            <option value="">Albania</option>

                                                        </select>
                                                        <span className="editProfileSelect"><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                    <label>Agent<span className="mandatory">*</span></label>
                                                    <input type="text" name="txt_agency_name" value="" title="Company Name" placeholder="Company Name" className="form-control" autocomplete="none" />
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                    <label>Traveller Name<span className="mandatory">*</span></label>
                                                    <input type="text" name="txt_agency_name" value="" title="Company Name" placeholder="Company Name" className="form-control" autocomplete="none" />
                                                </div>
                                                
                                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                    <label>Booking ID</label>
                                                    <input type="text" name="txt_iata_number" id="txt_iata_number" value="" maxlength="20" className="form-control txt_iata_number itaDisabled" title="IATA number" placeholder="IATA Status" autocomplete="none" />
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                    <label>Services Date<span className="mandatory">*</span></label>
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
                                                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6" style={{paddingLeft:"7px"}}>
                                                                <div id="datepicker1">
                                                                <input type="text" className="form-control" placeholder="dd M, yyyy" data-date-format="dd M, yyyy" data-date-container="#datepicker1" data-provide="datepicker" />
                                                                </div>
                                                            </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                    <label>Master Reference</label>
                                                    <input type="text" name="txt_iata_number" id="txt_iata_number" value="" maxlength="20" className="form-control txt_iata_number itaDisabled" title="IATA number" placeholder="IATA Status" autocomplete="none" />
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                    <label>Booking Status</label>
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
                                                    <label>Supplier Ref.</label>
                                                    <input type="text" name="txt_iata_number" id="txt_iata_number" value="" maxlength="20" className="form-control txt_iata_number itaDisabled" title="IATA number" placeholder="IATA Status" autocomplete="none" />
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                    <label>Supplier<span className="mandatory">*</span></label>
                                                    <div className="input_icon">
                                                        <select className="form-control" name="sel_country" id="sel_country"  title="India">
                                                            <option value="0">Select</option>
                                                            <option value="97">Afghanistan</option>
                                                            <option value="429">Aland Islands</option>
                                                            <option value="43">Albania</option>

                                                        </select>
                                                        <span className="editProfileSelect"><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                    <label>Booking Date<span className="mandatory">*</span></label>
                                                    <div className="inputDiv">
                                                    <div className="contactDlts row">
                                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                                                <div className="row" id="datepicker1">
                                                                    <div className="col-lg-11" style={{paddingRight: "2px"}}>
                                                                        <input type="text" className="form-control w-100" placeholder="dd M, yyyy" data-date-format="dd M, yyyy" data-date-container="#datepicker1" data-provide="datepicker" style={{background:"#fff"}} />
                                                                    </div>
                                                                    <div className="col-lg-1 p-0">	
                                                                        <a href="#!" className="arrowicon">To</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6" style={{paddingLeft:"7px"}}>
                                                                <div id="datepicker1">
                                                                <input type="text" className="form-control" placeholder="dd M, yyyy" data-date-format="dd M, yyyy" data-date-container="#datepicker1" data-provide="datepicker" />
                                                                </div>
                                                            </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                    <label>Voucher Date<span className="mandatory">*</span></label>
                                                    <div className="inputDiv">
                                                    <div className="contactDlts row">
                                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                                                <div className="row" id="datepicker1">
                                                                    <div className="col-lg-11" style={{paddingRight: "2px"}}>
                                                                        <input type="text" className="form-control w-100" placeholder="dd M, yyyy" data-date-format="dd M, yyyy" data-date-container="#datepicker1" data-provide="datepicker" style={{background:"#fff"}} />
                                                                    </div>
                                                                    <div className="col-lg-1 p-0">	
                                                                        <a href="#!" className="arrowicon">To</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6" style={{paddingLeft:"7px"}}>
                                                                <div id="datepicker1">
                                                                <input type="text" className="form-control" placeholder="dd M, yyyy" data-date-format="dd M, yyyy" data-date-container="#datepicker1" data-provide="datepicker" />
                                                                </div>
                                                            </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                    <label>Agent Reference</label>
                                                    <input type="text" name="txt_iata_number" id="txt_iata_number" value="" maxlength="20" className="form-control txt_iata_number itaDisabled" title="IATA number" placeholder="IATA Status" autocomplete="none" />
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                    <label>Status Date<span className="mandatory">*</span></label>
                                                    <div className="inputDiv">
                                                    <div className="contactDlts row">
                                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                                                <div className="row" id="datepicker1">
                                                                    <div className="col-lg-11" style={{paddingRight: "2px"}}>
                                                                        <input type="text" className="form-control w-100" placeholder="dd M, yyyy" data-date-format="dd M, yyyy" data-date-container="#datepicker1" data-provide="datepicker" style={{background:"#fff"}} />
                                                                    </div>
                                                                    <div className="col-lg-1 p-0">	
                                                                        <a href="#!" className="arrowicon">To</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6" style={{paddingLeft:"7px"}}>
                                                                <div id="datepicker1">
                                                                <input type="text" className="form-control" placeholder="dd M, yyyy" data-date-format="dd M, yyyy" data-date-container="#datepicker1" data-provide="datepicker" />
                                                                </div>
                                                            </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                    <label>Services Type<span className="mandatory">*</span></label>
                                                    <div className="input_icon">
                                                                                                                                                                                                                <select className="form-control" name="Consultant" id="Consultant"  title="Consultant">
                                                            <option value="">Select</option>
                                                            <option value="">Afghanistan</option>
                                                            <option value="">Aland Islands</option>
                                                            <option value="">Albania</option>

                                                        </select>
                                                        <span className="editProfileSelect"><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                    <label>Services Type<span className="mandatory">*</span></label>
                                                    <div className="input_icon">
                                                                                                                                                                                                                <select className="form-control" name="Consultant" id="Consultant"  title="Consultant">
                                                            <option value="">Select</option>
                                                            <option value="">Afghanistan</option>
                                                            <option value="">Aland Islands</option>
                                                            <option value="">Albania</option>

                                                        </select>
                                                        <span className="editProfileSelect"><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-md-10 col-md-10 col-sm-10 col-xs-10">
                                                    <div className="editProfileSubmitBtn">
                                                        <a className="submitebtn" href=""><i className="fa fa-search" aria-hidden="true"> </i> Search Booking </a>
                                                        <a className="Cancelebtn" href=""><i className="ri-line-chart-fill" aria-hidden="true"> </i>  Show Bl Reports</a>
                                                    </div>
                                                </div>
                                                <div className="col-md-2 col-md-2 col-sm-2 col-xs-2">
                                                    <div className="editProfileSubmitBtn">
                                                        <a className="submitebtn w-100" href=""><i className="fa fa-plus" aria-hidden="true"> </i> More </a>
                                                    </div>
                                                </div>

                                            </div>
                                    </div>  
                                </div>
                            
                                <div className="edit_profileSec">
                                    <div className="BookinglistForm bookingreports">
                                        <h5 className="">Booking Reports</h5>
                                        <table id="datatable" className="table Bookinglist table-striped table-bordered nowrap" style={{borderCollapse: "collapse", borderSpacing: 0, width: "100%"}}>
                                            <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Service</th>
                                                <th>Booking <br /> ID</th>
                                                <th>Status</th>
                                                <th>Agent</th>
                                                <th>Consultant</th>
                                                <th>Destination</th>
                                                <th>Amount</th>
                                                <th>Booking <br /> Date</th>
                                                <th>Service <br />Date</th>
                                                <th>Deadline<br />Date</th>
                                                <th>Supplier <br />Date</th>
                                                <th>Supplier<br /> Ref</th>
                                                <th>Traveller <br />Name</th>
                                                <th>Actions</th>
                                            </tr>
                                            </thead>


                                            <tbody>
                                            <tr>
                                                <td>#</td>
                                                <td><i className="fa fa-plane" aria-hidden="true"></i></td>
                                                <td>TDF8974<br /> <span>84652</span></td>
                                                <td><b className="textgreen"> CONFIRMED</b>
                                                    <br /><a className="invoicebtn" href=""><i className="fa fa-file-text-o" aria-hidden="true"> </i> Invoice </a><br />
                                                    <span className="reject">AU</span> <span className="reject">SU</span>
                                                </td>
                                                <td>System Architect<br /><span>Sales Team</span></td>
                                                <td>Tiger Nixon</td>
                                                <td>BOM - Goa</td>
                                                <td>INR <br /> 4405.25</td>
                                                <td>
                                                    <div className="calndercard">
                                                        <a href="" className="datebtn">06</a><br />
                                                        <a href="" className="monthbtn">Jan 2023</a><br />
                                                        <span className="time">19.08</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="calndercard">
                                                        <a href="" className="datebtn">06</a><br />
                                                        <a href="" className="monthbtn">Jan 2023</a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="calndercard">
                                                        <a href="" className="datebtn">06</a><br />
                                                        <a href="" className="monthbtn">Jan 2023</a><br />
                                                        <span className="time">19.08</span>
                                                    </div>
                                                </td>
                                                <td>myself</td>
                                                <td>MFT98765465132</td>
                                                <td>MR Jude</td>
                                                <td id="tooltip-container1">
                                                    <span className="actionicons">
                                                        <a href="javascript:void(0);" className="me-3 text-primary" data-bs-container="#tooltip-container1" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><i className="mdi mdi-pencil font-size-18"></i></a>
                                                        <a href="javascript:void(0);" className="me-3 text-primary" data-bs-container="#tooltip-container1" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><i className="fa fa-file-text-o font-size-15"></i></a>
                                                        <a href="javascript:void(0);" className="text-danger" data-bs-container="#tooltip-container1" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><i className="mdi mdi-trash-can font-size-18"></i></a>
                                                    </span>
                                                    <br />
                                                    <span className="actionicons">
                                                        <a href="javascript:void(0);" className="me-3 text-primary" data-bs-container="#tooltip-container1" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><i className="fa fa-download font-size-18"></i></a>
                                                        <a href="javascript:void(0);" className="me-3 text-primary" data-bs-container="#tooltip-container1" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><i className="fa fa-tags font-size-15"></i></a>
                                                        <a href="javascript:void(0);" className="text-primary" data-bs-container="#tooltip-container1" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><i className="fa fa-envelope font-size-18"></i></a>
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>#</td>
                                                <td><i className="fa fa-bed" aria-hidden="true"></i></td>
                                                <td>TDF8974<br /> <span>84652</span></td>
                                                <td><span className="textgreen"> CONFIRMED</span><br />
                                                    <span><a className="invoicebtn" href=""><i className="fa fa-file-text-o" aria-hidden="true"> </i> Invoice </a></span><br />
                                                    <span className="reject">AU</span> <span className="reject">SU</span>
                                                </td>
                                                <td>System Architect<br /><span>Sales Team</span></td>
                                                <td>Tiger Nixon</td>
                                                <td>BOM - Goa</td>
                                                <td>INR <br /> 4405.25</td>
                                                <td>
                                                    <div className="calndercard">
                                                        <a href="" className="datebtn">06</a><br />
                                                        <a href="" className="monthbtn">Jan 2023</a><br />
                                                        <span className="time">19.08</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="calndercard">
                                                        <a href="" className="datebtn">06</a><br />
                                                        <a href="" className="monthbtn">Jan 2023</a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="calndercard">
                                                        <a href="" className="datebtn">06</a><br />
                                                        <a href="" className="monthbtn">Jan 2023</a><br />
                                                        <span className="time">19.08</span>
                                                    </div>
                                                </td>
                                                <td>myself</td>
                                                <td>MFT98765465132</td>
                                                <td>MR Jude</td>
                                                <td id="tooltip-container1">
                                                    <span className="actionicons">
                                                        <a href="javascript:void(0);" className="me-3 text-primary" data-bs-container="#tooltip-container1" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><i className="mdi mdi-pencil font-size-18"></i></a>
                                                        <a href="javascript:void(0);" className="me-3 text-primary" data-bs-container="#tooltip-container1" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><i className="fa fa-file-text-o font-size-15"></i></a>
                                                        <a href="javascript:void(0);" className="text-danger" data-bs-container="#tooltip-container1" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><i className="mdi mdi-trash-can font-size-18"></i></a>
                                                    </span>
                                                    <br />
                                                    <span className="actionicons">
                                                        <a href="javascript:void(0);" className="me-3 text-primary" data-bs-container="#tooltip-container1" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><i className="fa fa-download font-size-18"></i></a>
                                                        <a href="javascript:void(0);" className="me-3 text-primary" data-bs-container="#tooltip-container1" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><i className="fa fa-tags font-size-15"></i></a>
                                                        <a href="javascript:void(0);" className="text-primary" data-bs-container="#tooltip-container1" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><i className="fa fa-envelope font-size-18"></i></a>
                                                    </span>
                                                </td>
                                            </tr>
                                            
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                            
                        <div className="row">
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-flex">
                                                <div className="flex-1 overflow-hidden">
                                                    <p className="text-truncate font-size-14 mb-2">Vouchered</p>
                                                    <h4 className="mb-0">1452</h4>
                                                </div>
                                                <div className="text-primary ms-auto">
                                                    <i className="ri-stack-line font-size-24"></i>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-flex">
                                                <div className="flex-1 overflow-hidden">
                                                    <p className="text-truncate font-size-14 mb-2">Sold Out</p>
                                                    <h4 className="mb-0">452</h4>
                                                </div>
                                                <div className="text-primary ms-auto">
                                                    <i className="ri-store-2-line font-size-24"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-flex">
                                                <div className="flex-1 overflow-hidden">
                                                    <p className="text-truncate font-size-14 mb-2">Rejected</p>
                                                    <h4 className="mb-0">15</h4>
                                                </div>
                                                <div className="text-primary ms-auto">
                                                    <i className="ri-briefcase-4-line font-size-24"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-flex">
                                                <div className="flex-1 overflow-hidden">
                                                    <p className="text-truncate font-size-14 mb-2">Cencel</p>
                                                    <h4 className="mb-0">20</h4>
                                                </div>
                                                <div className="text-primary ms-auto">
                                                    <i className="ri-briefcase-4-line font-size-24"></i>
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

export default Dashbord