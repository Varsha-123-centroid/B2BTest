import React from 'react';
import Footer from './Footer';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
function SupplierPayment() {
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
                                <h4 className="mb-sm-0">ADD NEW PAYMENT</h4>
                            </div>
                        </div>
                    </div>
            <div className="row">
            <div className="col-md-12 p-0">
                
                <div className="edit_profileSec">
                    <div className="editProfileForm">
                        <div className="clearDiv row">
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                <label>Supplier<span className="mandatory">*</span></label>
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
                                <label>Date Of Payment<span className="mandatory">*</span></label>
                                <div id="datepicker2">
                                    <input type="text" className="form-control w-100" placeholder="dd M, yyyy" data-date-format="dd M, yyyy" data-date-container="#datepicker2" data-provide="datepicker" style={{background:"#fff"}}/>
                                </div>
                            </div>
                        </div>
                        <div className="clearDiv row">
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                <label>Particulars<span className="mandatory">*</span></label>
                                <textarea rows="5" className="form-control w-100"></textarea>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9 form-group">
                                <div className="clearDiv row">
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                        <label>Payment Due Till Date<span className="mandatory">*</span></label>
                                        <input type="text" className="form-control" name="txt_first_name" value="" title="First Name"  placeholder="" autocomplete="none" />
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                        <label>Payment Amount<span className="mandatory">*</span></label>
                                        <input type="text" name="txt_last_name" value="" title="Last Name" placeholder="" className="form-control" autocomplete="none" />
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                        <label>Rate Of Exchange<span className="mandatory">*</span></label>
                                        <input type="text" name="txt_last_name" value="" title="Last Name" placeholder="" className="form-control" autocomplete="none" />
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                        <label>Amount In (INR) currency<span className="mandatory">*</span></label>
                                        <input type="text" className="form-control" name="txt_first_name" value="" title="First Name"  placeholder=""autocomplete="none" />
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                        <label>Mode Payment<span className="mandatory">*</span></label>
                                        <input type="text" name="txt_last_name" value="" title="Last Name" placeholder="" className="form-control" autocomplete="none" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h5>System Bank Details</h5>
                        <div className="clearDiv row">
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                <label>Bank Name<span className="mandatory">*</span></label>
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
                                <label>Refference No.<span className="mandatory">*</span></label>
                                <input type="text" name="txt_last_name" value="" title="Last Name" placeholder="" className="form-control" autocomplete="none" />
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                <label>Charges<span className="mandatory">*</span></label>
                                <input type="text" name="txt_last_name" value="" title="Last Name" placeholder="" className="form-control" autocomplete="none" />
                            </div>
                        </div>
                        <h5>Supplier Bank Details</h5>
                        <div className="clearDiv row">
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                <label>Bank Name<span className="mandatory">*</span></label>
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
                                <label>Instrument No.<span className="mandatory">*</span></label>
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
                                <label>Date<span className="mandatory">*</span></label>
                                <div id="datepicker2">
                                    <input type="text" className="form-control w-100" placeholder="dd M, yyyy" data-date-format="dd M, yyyy" data-date-container="#datepicker2" data-provide="datepicker" style={{background:"#fff"}} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="editProfileForm">
                        <div className="col-md-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="editProfileSubmitBtn">
                                <a className="submitebtn" href="">Submit </a>
                                <a className="Cancelebtn" href="">Reset</a>
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

export default SupplierPayment