import React from 'react';
import Footer from './Footer';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
function Receipts() {
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
                                <h4 className="mb-sm-0">Allocate Receipt</h4>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 p-0">
                            <form action="/edit_profile.php" name="frm_edit_profile" method="post" enctype="multipart/form-data">
                                <input type="hidden" name="action_name" value="edit_profile" autocomplete="none" />
                                <input type="hidden" name="encrypt_agent" value="1ff1de774005f8da13f42943881c655f" autocomplete="none" />
                                <div className="edit_profileSec">
                                    <div className="editProfileForm">
                                    <h5 className="">Search Receipt</h5>
                                        <div className="clearDiv">
                                            <div className="formFields row">
                                                <div className="col-lg-2 col-md-6 col-sm-2 col-xs-2 form-group">
                                                    <label>Receipt No</label>
                                                    <input type="text" name="txt_recipt_no" id="txt_recipt_no" placeholder="Enter Receipt ID" className="form-control" autocomplete="none" />
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                    <label>Receipt Mode</label>
                                                    <div className="input_icon">
                                                    <select name="receipt_mode" id="receipt_mode" title="" className="form-control">
                                                        <option value="" selected="selected">All</option>
                                                            <option value="CSH">Cash</option>
                                                            <option value="CHQ">Cheque</option>
                                                            <option value="DFT">Draft</option>
                                                            <option value="EFT">Credit Card</option>
                                                            <option value="VCC">VCC</option>
                                                            <option value="Bank">Bank</option>

                                                        </select>
                                                        <span className="receiptSelect"><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                <label>Receipt Form Date</label>
                                                    <div className="input_icon" id="datepicker1">
                                                        <input type="text" className="form-control" placeholder="dd M, yyyy" data-date-format="dd M, yyyy" data-date-container="#datepicker1" data-provide="datepicker" />
                                                            <span className="receiptDateIcon"><i className="fa fa-calendar" aria-hidden="true"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                        
                                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                <label>Receipt To Date</label>
                                                    <div className="input_icon" id="datepicker1">
                                                        <input type="text" className="form-control" placeholder="dd M, yyyy" data-date-format="dd M, yyyy" data-date-container="#datepicker1" data-provide="datepicker" />
                                                        <span className="receiptDateIcon">
                                                            <i className="fa fa-calendar" aria-hidden="true"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-1 col-md-4 col-sm-12 col-xs-1 p-0 form-group">
                                                    <div className="searchBtn receiptBtn pt-4">
                                                            <a href="#">Search</a>
                                                    </div>
                                                </div>	
                                                
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </form>
                    
                            <div className="edit_profileSec">
                                <div className="editProfileForm">
                                <h5 className="">Receipt Report</h5>	
                                    <table id="datatable" className="table table-bordered dt-responsive nowrap" style={{borderCollapse: "collapse", borderSpacing: 0, width: "100%"}}>
                                        <thead>
                                        <tr>
                                            <th>Receipt No.</th>
                                            <th>Receipt Date</th>
                                            <th>Receipt Mode</th>
                                            <th>Currency</th>
                                            <th>Received</th>
                                            <th>Unallocated Amount</th>
                                            <th>Actions</th>
                                        </tr>
                                        </thead>


                                        <tbody>
                                        <tr>
                                            <td>Tiger Nixon</td>
                                            <td>System Architect</td>
                                            <td>Edinburgh</td>
                                            <td>61</td>
                                            <td>2011/04/25</td>
                                            <td>$320,800</td>
                                            <td id="tooltip-container1">
                                                <a href="javascript:void(0);" className="me-3 text-primary" data-bs-container="#tooltip-container1" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><i className="mdi mdi-pencil font-size-18"></i></a>
                                                <a href="javascript:void(0);" className="text-danger" data-bs-container="#tooltip-container1" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><i className="mdi mdi-trash-can font-size-18"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Garrett Winters</td>
                                            <td>Accountant</td>
                                            <td>Tokyo</td>
                                            <td>63</td>
                                            <td>63</td>
                                            <td>2011/07/25</td>
                                            <td id="tooltip-container1">
                                                <a href="javascript:void(0);" className="me-3 text-primary" data-bs-container="#tooltip-container1" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><i className="mdi mdi-pencil font-size-18"></i></a>
                                                <a href="javascript:void(0);" className="text-danger" data-bs-container="#tooltip-container1" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><i className="mdi mdi-trash-can font-size-18"></i></a>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
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

export default Receipts