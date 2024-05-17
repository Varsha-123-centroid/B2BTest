import React from 'react';
import Footer from './Footer';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function ManageSubAgent() {
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
                    <h4 className="mb-sm-0">Manage Sub Agent </h4>
                </div>
            </div>
        </div>
 <div className="row">
    <div className="col-md-12 p-0">
        <div className="edit_profileSec">
            <div className="editProfileForm p-0">
               <div className="accFlow_dtlBox">
                    <h3 className="accFlow_Ttl">Manage Sub Agent </h3>
                    <span className="addUserBtn manageBtn">
                        <a href="manage_sub_user.php?action_name=add">+ Add Sub Agent</a>
                    </span>
                </div>
            </div>
            <div className="addStaffForm">
                <div className="clearDiv row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group addSubAgnt_passWrap">
                        <label>User Name<span className="mandatory">*</span></label>
                        <input name="txt_user_name" size="20" maxlength="20" id="txt_user_name" type="text" className="form-control" value="" title="User Name" placeholder="User Name" autocomplete="none" />
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group addSubAgnt_passWrap">
                        <label>User Password<span className="mandatory">*</span></label>
                        <div className="input_icon">
                            <input className="form-control passwordstrenth" placeholder="User Password" data-indicator="pwindicator" autocomplete="none" name="txt_password" id="txt_password" type="password" value="" title="User Password" />
                            <span className="showPassBtn"><i className="fa fa-eye-slash"></i></span>
                        </div>
                    </div> 
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                        <label>Confirm Password<span className="mandatory">*</span></label>
                        <div className="input_icon">
                            <input autocomplete="none" id="txt_confirm_password" className="form-control" type="password" placeholder="Confirm Password" name="txt_confirm_password" value="" />
                            <span className="showPassBtn"><i className="fa fa-eye-slash"></i></span>
                        </div>
                    </div> 
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                        <label>Status</label>
                        <div className="input_icon">
                            <select className="form-control" name="sel_sub_status" title="Active">
                                <option value="A">Active</option>
                                <option value="I">Inactive</option>
                            </select>
                            <span className="editProfileSelect"><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                        <div className="addStaff">
                            <div className="checkbox checkbox-inline">
                                <input type="checkbox" id="carVoucher" name="chk_can_voucher" value="1" autocomplete="none" />
                                <label for="carVoucher" className="">Can Voucher</label>
                            </div>
                            <div className="checkbox checkbox-inline">
                                <input type="checkbox" id="carBook" name="chk_can_book" value="1" autocomplete="none" />
                                <label for="carBook" className="">Can Book</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                        <div className="addStaff">
                            <div className="checkbox checkbox-inline">
                                <input id="allowCancel" type="checkbox" name="chk_allow_book_under_cancellation" value="1" autocomplete="none" />
                                <label for="allowCancel">Allow making Non-Refundable bookings</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                        <div className="addStaff">
                            <div className="checkbox checkbox-inline">
                            <input type="checkbox" id="view_all_bookings" name="view_all_bookings" value="1" autocomplete="none" />
                            <label for="view_all_bookings">View all Bookings</label>
                            
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                        <div className="addStaff">
                            <div className="checkbox checkbox-inline">
                                <input type="checkbox" id="can_cancel" name="can_cancel" value="1" autocomplete="none" />
                                <label for="can_cancel">Can Cancel</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        <div className="addStaffForm">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                <h3 className="accFlow_Ttl">Company Details</h3>
            </div>	
            <div className="clearDiv row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                <label>Company Name<span className="mandatory">*</span></label>
                <input name="txt_company_name" type="text" value="" size="20" maxlength="50" title="Company Name" className="form-control" autocomplete="none" />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                <label>Nature of Business</label>
                <div className="input_icon">
                    <select name="sel_nature_of_business" className="form-control">
                        <option value="0">Select</option>
                        <option value="Destination Management Company">Destination Management Company</option>
                        <option value="Tour Operator">Activity Operator</option>
                    </select>
                    <span className="editProfileSelect"><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                <label>Country<span className="mandatory">*</span></label>
                                                                                                                <div className="input_icon">
                    <select name="sel_country" onchange="JavaScript:getCityList(this);" className="form-control">
                        <option value="">Select</option>
                        <option value="97">Afghanistan</option>
                        <option value="429">Aland Islands</option>
                        <option value="43">Albania</option>
                        <option value="142">Algeria</option>
                    </select>
                    <span className="editProfileSelect"><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                <label>City<span className="mandatory">*</span></label>
                <div className="input_icon">
                    <select name="sel_city" id="sel_city" className="form-control" title="">
                        <option value="">Select</option>
                    </select>
                    <span className="editProfileSelect"><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                <label>Pincode/Zipcode<span className="mandatory">*</span></label>
                <input type="text" name="txt_pincode" id="txt_pincode" size="6" maxlength="6" value=""title="Pin Code" className="form-control" autocomplete="none" />
            </div>
        
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                <label>Address<span className="mandatory">*</span></label>
                <input name="txt_address" id="txt_address" title="Address" className="form-control" value="" autocomplete="none" />
            </div>
        

            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group input_dv">
                <label>Your Logo (150 pixels x 150 pixels)<a href="javascript:void(0);" id="clearuplaod" className="dustBtn"><i className="fa fa-trash-o" aria-hidden="true" data-toggle="tooltip" title="" data-original-title="Clear"></i></a></label>
                <input type="text" name="sub_agent_logo" className="brwse form-control" id="sub_agent_logo" readonly="readonly" autocomplete="none" />
                <div className="file_input_Btn_wrap">
                    <input type="button" className="file_button" value="Upload Logo" autocomplete="none" />
                    <input tabindex="14" type="file" className="file_button1" name="sub_agent_logo" id="getFileValue" autocomplete="none" />
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group input_dv">
                <label>Profile Image <a href="#" id="clearuplaod" className="dustBtn"><i className="fa fa-trash-o" aria-hidden="true" data-toggle="tooltip" title="" data-original-title="Clear"></i></a></label>
                <input type="text" name="sub_agent_image" className="brwse form-control" id="sub_agent_image" readonly="readonly" autocomplete="none" />
                <div className="file_input_Btn_wrap">
                    <input type="button" className="file_button" value="Upload Logo" autocomplete="none" />
                    <input type="hidden" className="file_button" id="agent_profile_image" name="agent_profile_image" autocomplete="none" />
                    <input tabindex="14" type="file" className="file_button1" name="sub_agent_image" id="getFileValueimg" onchange="javascript: document.getElementById ('sub_agent_image').value = this.value" autocomplete="none" />
                </div>
            </div>
            </div>
        </div>	
            
            
        <div className="addStaffForm">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                <h3 className="accFlow_Ttl">Personal Details</h3>
            </div>	
            <div className="clearDiv row">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                    <label>First Name<span className="mandatory">*</span></label>
                    <input type="text" name="txt_first_name" className="form-control" placeholder="First Name" value="" title="First Name" onkeypress="return ValidateNumber(event);" autocomplete="none" />
                </div> 
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                    <label>Last Name<span className="mandatory">*</span></label>
                    <input type="text" name="txt_last_name" className="form-control" placeholder="Last Name" value="" title="Last Name" onkeypress="return ValidateNumber(event);" autocomplete="none" />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                    <label>Designation</label>
                    <input type="text" name="txt_designation" className="form-control" placeholder="Designation" value="" title="Designation" autocomplete="none" />
                </div> 
            </div>
            <div className="clearDiv row">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                    <label>Expiry Date <span className="mandatory">*</span></label>
                    <div className="input_icon" id="datepicker1">
                        <input type="text" id="txt_expiry_date" name="txt_expiry_date" readonly="" value="" data-date-container="#datepicker1" data-provide="datepicker" placeholder="dd/mm/yyy" className="form-control" autocomplete="none" />
                        <span className="editProfileSelect"><i className="fa fa-calendar" aria-hidden="true"></i></span>
                    </div>
                </div> 
                
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                    <div className="inputDiv">
                       <div className="contactDlts row">
                         <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                             <label>Country Code<span className="mandatoryStar">*</span></label>
                             <div className="clearDiv">
                                 <input type="text" name="country_code_phone" id="country_code_phone" className="form-control edit_countryCodeNo countryCode ui-autocomplete-input flag text-right flag-undefined" value="91 +" maxlength="3" onkeyup="extractNumber(this,0,0);copy_country_code(this);removeFlagImg(event,'#country_code_phone,#country_code')" title="Country Code" autocomplete="none" />
                             </div>
                         </div>
                         <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                             <label>Phone Number<span className="mandatoryStar">*</span></label>
                             <div className="clearDiv">
                                 <input type="text" name="txt_phone_number" className="form-control edit_phoneNumber phNumber" value="" maxlength="15" onkeyup="extractNumber(this,0,0);" placeholder="Phone Number" title="Phone Number" autocomplete="none" />
                           </div>
                         </div>
                       </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                    <div className="inputDiv">
                       <div className="contactDlts row">
                          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                             <label>Country Code<span className="mandatoryStar">*</span></label>
                                 <input type="text" name="country_code" id="country_code" className="form-control edit_countryCodeNo countryCode ui-autocomplete-input flag text-right flag-undefined" placeholder="" value="" maxlength="3" onkeyup="extractNumber(this,0,0);copy_country_code(this);" title="Country Code" disabled="" autocomplete="none" />
                           </div>
                          <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                             <label>Mobile Number<span className="mandatoryStar">*</span></label>
                                 <input type="text" name="txt_mobile_number" className="form-control edit_phoneNumber phNumber" placeholder="Mobile Number" size="15" value="" maxlength="20" onkeyup="extractNumber(this,0,0);" title="Mobile Number" autocomplete="none" />
                          </div>
                       </div>
                    </div>
                </div>
            </div>
            <div className="clearDiv row">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                    <label>Country<span className="mandatory">*</span></label>
                    <div className="input_icon">
                        <select className="form-control" name="sel_country" title="">
                            <option value="">Select</option>
                            <option value="97">Afghanistan</option>
                            <option value="429">Aland Islands</option>
                            <option value="43">Albania</option>
                            <option value="142">Algeria</option>

                        </select>
                        <span className="editProfileSelect"><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                    <label>City<span className="mandatory">*</span></label>
                    <div className="input_icon">
                        <select name="sel_city" id="sel_city" className="form-control" title="">
                            <option value="">Select</option>
                        </select>
                        <span className="editProfileSelect"><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                    </div>
                </div> 
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                    <label>Address<span className="mandatory">*</span></label>
                    <input type="text" name="txt_address" title="Address" placeholder="Address" className="form-control" value="" autocomplete="none" />
                </div>  
            </div>
            <div className="clearDiv row">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                    <label>Email<span className="mandatory">*</span></label>
                    <input type="email" name="txt_email" className="form-control" placeholder="Email" size="30" value="" title="Email" autocomplete="none" />
                </div>
            </div>
            <div className="clearDiv row pt-3">
                <div className="col-md-12 col-md-12 col-sm-12 col-xs-12 form-group">
                    <div className="editProfileSubmitBtn">
                        <a className="submitebtn" href="">Submit </a>
                        <a className="Cancelebtn" href="">Cancel</a>
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

export default ManageSubAgent