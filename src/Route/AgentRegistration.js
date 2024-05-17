import React from 'react';
import Footer from './Footer';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
function AgentRegistration() {
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
                                <h4 className="mb-sm-0">AGENT REGISTRATION</h4>
                            </div>
                        </div>
                    </div>
            
                    <div className="row">
                            <div className="col-md-12 p-0">
                            
                                <div className="edit_profileSec">
                                    <div className="editProfileForm">
                                        <div className="clearDiv row">
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                <label>User Name<span className="mandatory">*</span></label>
                                                <div className="input_icon">
                                                    <input type="text" className="form-control" name="txt_current_password_text" id="txt_current_password_text"  autocomplete="none" />
                                                </div>
                                                <span>Please note username cannot be changed, once chosen</span>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                <label>Password<span className="mandatory">*</span></label>
                                                <div className="input_icon">
                                                    <input type="text" className="form-control" name="txt_current_password_text" id="txt_current_password_text"  autocomplete="none" />
                                                    <span className="showPassBtn"><i className="fa fa-eye-slash"></i></span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                <label>confirm password<span className="mandatory">*</span></label>
                                                <div className="input_icon">
                                                    <input type="text" className="form-control" name="txt_current_password_text" id="txt_current_password_text"  autocomplete="none" />
                                                    <span className="showPassBtn"><i className="fa fa-eye-slash"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="edit_profileSec">
                                    <div className="editProfileForm">
                                        <h5 className="">Company Details</h5>
                                        <div className="clearDiv row">
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                <label>Company Name<span className="mandatory">*</span></label>
                                                <input type="text" name="txt_agency_name" value="" title="Company Name" placeholder="Company Name" className="form-control" autocomplete="none" />
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                <div className="approvalRadioBtn">
                                                    <label>IATA Status</label>
                                                    <div className="edit_Profile d-flex">
                                                        <div className="radio-inline iataStatus">
                                                            <input type="radio" id="approve_iata" name="rad_iata_status" value="1" />
                                                            <label for="approve_iata" className="pt-2">  Approved</label>
                                                        </div>
                                                        <div className="radio-inline iataStatus">
                                                            <input type="radio" id="not_approve_iata" name="rad_iata_status" value="0" checked="" />
                                                            <label for="not_approve_iata"  className="pt-2 pl-1">  Non-Approved</label>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group russianCls" id="iata_number" style={{display:"block"}} >
                                                <label>IATA Number</label>
                                                <input type="text" name="txt_iata_number" id="txt_iata_number" value="" maxlength="20" className="form-control txt_iata_number itaDisabled" title="IATA number" placeholder="IATA Status" autocomplete="none" />
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                <label>Company Reg. No</label>
                                                <input type="text" name="txt_reg_no" id="txt_reg_no" className="form-control" value="" title="Company Reg.No" placeholder="Company Reg. No" autocomplete="none" />
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                <label>Nature of Business</label>
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
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                <label>Address<span className="mandatory">*</span></label>
                                                <input type="text" name="txt_address" className="form-control" value="" placeholder="Address" title="Address" autocomplete="none" />
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                <label>Country<span className="mandatory">*</span></label>
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
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                <label>City<span className="mandatory">*</span></label>
                                                <div className="input_icon">
                                                    <select name="sel_city" id="sel_city" className="form-control">
                                                        <option value="0">Select</option>
                                                        <option value="106_728338_306718_108808">Abohar</option>
                                                        <option value="106_abu road_789730_108642">Abu road</option>
                                                        <option value="106_720964_795496_137474">Achrol</option>
                                                        <option value="106_72445121_397688_108785">Adimali</option>
                                                        <option value="64625">Agartala</option>
                                                    </select>
                                                    <span className="editProfileSelect"><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                                                </div>
                                            
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                <label>Pincode/Zipcode</label>
                                                <input type="text" name="txt_pincode" id="txt_pincode" className="form-control" value="" maxlength="6" title="Pincode/Zipcode" placeholder="Pincode/Zipcode"  autocomplete="none" />
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                <label>Website</label>
                                                <input type="text" name="txt_website" value="" title="Website" placeholder="Website" className="form-control" autocomplete="none" />
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group input_dv">
                                                <label>Your Logo (150 pixels x 150 pixels)
                                                    <a href="edit_profile.php?action_name=remove_image" className="dustBtn">
                                                    <i className="fa fa-trash-o" aria-hidden="true" data-toggle="tooltip" title="" data-original-title="Delete Logo"></i>
                                                    </a>
                                                </label>
                                                <input type="text" name="agent_logo" className="browse form-control" id="agent_logo" readonly="readonly" autocomplete="none" />
                                                <div className="file_input_Btn_wrap">
                                                    <input type="button" className="file_button" value="Upload Logo" />
                                                    <input tabindex="14" type="file" className="file_button1" name="agent_logo" id="getFileValue" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="editProfileForm">
                                        <h5 className="">Customer Information</h5>
                                        <div className="clearDiv row">
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                <label>First Name<span className="mandatory">*</span></label>
                                                <input type="text" name="txt_first_name" value="" title="First Name" className="form-control" placeholder="First Name"autocomplete="none" />
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                <label>Last Name<span className="mandatory">*</span></label>
                                                <input type="text" name="txt_last_name" value="" title="Last Name" placeholder="Last Name" className="form-control" autocomplete="none" />
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                <label>Email<span className="mandatory">*</span></label>
                                                <input type="text" name="txt_email" value="" title="Email Address" placeholder="Email Address" className="form-control" autocomplete="none" />
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                <div className="contactDlts row">
                                                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                                        <label>Country Code<span className="mandatory">*</span></label>
                                                            <input type="text" name="country_code_phone" id="country_code_phone" value="91" maxlength="3" onkeyup="copy_country_code(this);removeFlagImg(event,'#country_code_phone,#country_code,#country_code_fax')" title="Country code" className="form-control edit_countryCodeNo countryCode ui-autocomplete-input flag text-right flag-in" onkeypress="return isNumber(this);" autocomplete="none" />
                                                    </div>
                                                    <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                                                        <label>Phone Number<span className="mandatory">*</span></label>
                                                            <input type="text" name="txt_phone" value="" maxlength="15" title="Phone Number" placeholder="Phone Number" className="form-control edit_phoneNumber phNumber" onkeypress="return isNumber(this);" autocomplete="none" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                <div className="contactDlts row">
                                                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                                        <label>Country Code<span className="mandatory">*</span></label>
                                                        <input type="text" name="country_code" id="country_code" value="91" maxlength="3" onkeyup="copy_country_code(this);" title="Country code" className="form-control edit_countryCodeNo countryCode disabledInput flag text-right flag-in" onkeypress="return isNumber(this);" autocomplete="none" />
                                                    </div>
                                                    <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                                                        <label>Mobile Number<span className="mandatory">*</span></label>
                                                            <input type="text" name="txt_mobile" value="" maxlength="10" title="Mobile Number" placeholder="Mobile Number" className="form-control edit_phoneNumber phNumber" onkeypress="return isNumber(this);" autocomplete="none" />
                                                    </div>
                                                </div>
                                            </div>
                                        
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                <div className="contactDlts row">
                                                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                                        <label>Country Code</label>
                                                            <input type="text" name="country_code_fax" id="country_code_fax" value="91" maxlength="3" title="Country code" placeholder="Code" className="form-control edit_countryCodeNo countryCode disabledInput flag text-right flag-in" autocomplete="none" />
                                                    </div>
                                                    <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                                                        <label>Fax Number</label>
                                                            <input type="text" name="txt_fax" value="" maxlength="10" title="Fax No." placeholder="" className="form-control edit_phoneNumber phNumber" onkeypress="return isNumberKey(event)" autocomplete="none" />
                                                        </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                <label>Preferred currency<span className="mandatory">*</span></label>
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
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                <label>Time zone<span className="mandatory">*</span></label>
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
                                    </div>
                                </div>
                                <div className="editProfileForm">
                                    <h5 className="">Finance Contact </h5>
                                    <div className="clearDiv row financeTlt Financepage">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                                            
                                            <div className="row">
                                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                    <h3>Accounts Details</h3>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                    <label>Name</label>
                                                    <input type="text" name="txt_acc_name" value="" maxlength="100" title="Name" placeholder="Name" className="form-control" autocomplete="none" />
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                    <label>Email</label>
                                                    <input type="text" name="txt_acc_email" value="" maxlength="100" title="Email Address" placeholder="Email Address" className="form-control" autocomplete="none" />
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                    <label>Phone Number</label>
                                                    <input type="text" name="txt_acc_email" value="" maxlength="100" title="Email Address" placeholder="Email Address" className="form-control" autocomplete="none" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                                            <div className="row">
                                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                    <h3>Reservations/Operations Details</h3>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                    <label>Name</label>
                                                    <input type="text" name="txt_acc_name" value="" maxlength="100" title="Name" placeholder="Name" className="form-control" autocomplete="none" />
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                    <label>Email</label>
                                                    <input type="text" name="txt_acc_email" value="" maxlength="100" title="Email Address" placeholder="Email Address" className="form-control" autocomplete="none" />
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                    <label>Phone Number</label>
                                                    <input type="text" name="txt_acc_email" value="" maxlength="100" title="Email Address" placeholder="Email Address" className="form-control" autocomplete="none" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                                            <div className="row">
                                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                    <h3>Management Details</h3>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                    <label>Name</label>
                                                    <input type="text" name="txt_acc_name" value="" maxlength="100" title="Name" placeholder="Name" className="form-control" autocomplete="none" />
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                    <label>Email</label>
                                                    <input type="text" name="txt_acc_email" value="" maxlength="100" title="Email Address" placeholder="Email Address" className="form-control" autocomplete="none" />
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                    <label>Phone Number</label>
                                                    <input type="text" name="txt_acc_email" value="" maxlength="100" title="Email Address" placeholder="Email Address" className="form-control" autocomplete="none" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                                <div className="editProfileForm">
                                    <div className="col-md-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="addStaff">
                                            <div className="checkbox checkbox-inline">
                                                <input id="allowCancel" type="checkbox" name="chk_allow_book_under_cancellation" value="1" autocomplete="none" />
                                                <label for="allowCancel">I agree to the <a href="#"> Terms and Conditions </a></label>
                                            </div>
                                        </div>
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

            <Footer />

        </div>
   
  )
}

export default AgentRegistration