import React from 'react';
import Footer from './Footer';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
function AgentCreation() {
  return (
    <div>
        <Navbar />
         <Sidebar />
        <div className="main-content">

            <div className="page-content" style={{backgroundColor:"#f1f5f7"}}>
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                <h4 className="mb-sm-0">CREATE A NEW AGENT</h4>
                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-md-12 p-0">
                            <div className="edit_profileSec">
                                <div className="editProfileForm">
                                    <h5 className="">Access</h5>
                                    <div className="clearDiv row">
                                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                            <label>User Name<span className="mandatory">*</span></label>
                                            <div className="input_icon">
                                                <input type="text" className="form-control" name="txt_current_password_text" id="txt_current_password_text"  autocomplete="none" />
                                            </div>
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
                                    <h5 className="">Agency Information</h5>
                                        <div className="clearDiv row">
                                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                <label>Agency Name<span className="mandatory">*</span></label>
                                                <input type="text" name="txt_agency_name" value="" title="Company Name" placeholder="Company Name" className="form-control" autocomplete="none" />
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                <label>Agency Name<span className="mandatory">*</span></label>
                                                <input type="text" name="txt_agency_name" value="" title="Company Name" placeholder="Company Name" className="form-control" autocomplete="none" />
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                <label>Company ( Agency Email )</label>
                                                <input type="text" name="txt_iata_number" id="txt_iata_number" value="" maxlength="20" className="form-control txt_iata_number itaDisabled" title="IATA number" placeholder="IATA Status" autocomplete="none" />
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                <label>Accounding ID</label>
                                                <input type="text" name="txt_reg_no" id="txt_reg_no" className="form-control" value="" title="Company Reg.No" placeholder="Company Reg. No" autocomplete="none" />
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                <label>First Name<span className="mandatory">*</span></label>
                                                <input type="text" name="txt_agency_name" value="" title="Company Name" placeholder="Company Name" className="form-control" autocomplete="none" />
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                <label>Middle Name<span className="mandatory">*</span></label>
                                                <input type="text" name="txt_agency_name" value="" title="Company Name" placeholder="Company Name" className="form-control" autocomplete="none" />
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                <label>Last Name</label>
                                                <input type="text" name="txt_iata_number" id="txt_iata_number" value="" maxlength="20" className="form-control txt_iata_number itaDisabled" title="IATA number" placeholder="IATA Status" autocomplete="none" />
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                <label>Designation</label>
                                                <input type="text" name="txt_reg_no" id="txt_reg_no" className="form-control" value="" title="Company Reg.No" placeholder="Company Reg. No" autocomplete="none" />
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
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
                                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group input_dv">
                                                <label>Agent Logo
                                                    <a href="edit_profile.php?action_name=remove_image" className="dustBtn">
                                                    <i className="fa fa-trash-o" aria-hidden="true" data-toggle="tooltip" title="" data-original-title="Delete Logo"></i>
                                                    </a>
                                                </label>
                                            <input type="text" name="agent_logo" className="brwse form-control" id="agent_logo" readonly="readonly" autocomplete="none" />
                                                <div className="file_input_Btn_wrap">
                                                    <input type="button" className="file_button" value="Upload Logo" autocomplete="none" />
                                                    <input tabindex="14" type="file" className="file_button1" name="agent_logo" id="getFileValue" autocomplete="none" />
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group input_dv">
                                                <label>Profile Image
                                                    <a href="edit_profile.php?action_name=remove_profile_image" className="dustBtn">
                                                    <i className="fa fa-trash-o" aria-hidden="true" data-toggle="tooltip" title="" data-original-title="Delete "></i>
                                                </a>
                                                </label>
                                                                                        
                                                <input type="text" name="agent_image" className="brwse form-control" id="agent_image" readonly="readonly" autocomplete="none" />
                                                <div className="file_input_Btn_wrap">
                                                    <input type="hidden" name="agent_profile_image" id="agent_profile_image" autocomplete="none" />
                                                    <input type="button" className="file_button" value="Upload Logo" autocomplete="none" />
                                                    <input tabindex="14" type="file" className="file_button1" name="agent_image" id="getFileValueimg"  autocomplete="none" />
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                <label>Address<span className="mandatory">*</span></label>
                                                <input type="text" name="txt_address" className="form-control" value="" placeholder="Address" title="Address" autocomplete="none" />
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
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
                                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
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
                                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                <label>Pincode/Zipcode</label>
                                                <input type="text" name="txt_pincode" id="txt_pincode" className="form-control" value="" maxlength="6" title="Pincode/Zipcode" placeholder="Pincode/Zipcode"  autocomplete="none" />
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
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
                                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                <div className="contactDlts row">
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                                        <label> Code<span className="mandatory">*</span></label>
                                                            <input type="text" name="country_code_phone" id="country_code_phone" value="91" maxlength="3" className="form-control edit_countryCodeNo countryCode ui-autocomplete-input flag text-right flag-in" autocomplete="none" />
                                                    </div>
                                                    <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                                                        <label>Phone Number<span className="mandatory">*</span></label>
                                                            <input type="text" name="txt_phone" value="" maxlength="15" title="Phone Number" placeholder="Phone Number" className="form-control edit_phoneNumber phNumber" autocomplete="none" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                <div className="contactDlts row">
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                                        <label> Code<span className="mandatory">*</span></label>
                                                        <input type="text" name="country_code_phone" id="country_code_phone" value="91" maxlength="3" className="form-control edit_countryCodeNo countryCode ui-autocomplete-input flag text-right flag-in" autocomplete="none" />
                                                    </div>
                                                    <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                                                        <label>Mobile Number<span className="mandatory">*</span></label>
                                                            <input type="text" name="txt_mobile" value="" maxlength="10" title="Mobile Number" placeholder="Mobile Number" className="form-control edit_phoneNumber phNumber"  autocomplete="none" />
                                                    </div>
                                                </div>
                                            </div>
                                        
                                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                <div className="contactDlts row">
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                                        <label> Code</label>
                                                            <input type="text" name="country_code_fax" id="country_code_fax" value="91" maxlength="3" title="Country code" placeholder="Code" className="form-control edit_countryCodeNo countryCode disabledInput flag text-right flag-in" autocomplete="none" />
                                                    </div>
                                                    <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                                                        <label>Fax Number</label>
                                                            <input type="text" name="txt_fax" value="" maxlength="10" title="Fax No." placeholder="" className="form-control edit_phoneNumber phNumber" autocomplete="none" />
                                                        </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                <label>Website</label>
                                                <input type="text" name="txt_website" value="" title="Website" placeholder="Website" className="form-control" autocomplete="none" />
                                            </div>
                                            

                                        </div>
                                    </div>
                                    
                                    <div className="editProfileForm">
                                        <h5 className="">Agency Contact informoation</h5>
                                        <div className="clearDiv row financeTlt">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                                                <h4>Accounts</h4>
                                                <div className="row">
                                                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                        <label>Name</label>
                                                        <input type="text" name="txt_acc_name" value="" maxlength="100" title="Name" placeholder="Name" className="form-control" autocomplete="none" />
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                        <label>Email</label>
                                                        <input type="text" name="txt_acc_email" value="" maxlength="100" title="Email Address" placeholder="Email Address" className="form-control" autocomplete="none" />
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                        <label>Phone Number</label>
                                                        <input type="text" name="txt_acc_email" value="" maxlength="100" title="Email Address" placeholder="Email Address" className="form-control" autocomplete="none" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                                                <h4>Reservations</h4>
                                                <div className="row">
                                                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                        <label>Name</label>
                                                        <input type="text" name="txt_acc_name" value="" maxlength="100" title="Name" placeholder="Name" className="form-control" autocomplete="none" />
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                        <label>Email</label>
                                                        <input type="text" name="txt_acc_email" value="" maxlength="100" title="Email Address" placeholder="Email Address" className="form-control" autocomplete="none" />
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                        <label>Phone Number</label>
                                                        <input type="text" name="txt_acc_email" value="" maxlength="100" title="Email Address" placeholder="Email Address" className="form-control" autocomplete="none" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                                                <h4>Management </h4>
                                                <div className="row">
                                                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                        <label>Name</label>
                                                        <input type="text" name="txt_acc_name" value="" maxlength="100" title="Name" placeholder="Name" className="form-control" autocomplete="none" />
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                        <label>Email</label>
                                                        <input type="text" name="txt_acc_email" value="" maxlength="100" title="Email Address" placeholder="Email Address" className="form-control" autocomplete="none" />
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                        <label>Phone Number</label>
                                                        <input type="text" name="txt_acc_email" value="" maxlength="100" title="Email Address" placeholder="Email Address" className="form-control" autocomplete="none" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                                                <label>Remarks</label>
                                                <textarea type="text" name="txt_acc_name" value="" rows="3" title="Name" placeholder="Name" className="form-control" autocomplete="none" ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="editProfileForm">
                                        <h5 className="">Agency Setting</h5>
                                        <div className="clearDiv row financeTlt">
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                <label>Currency<span className="mandatory">*</span></label>
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
                                                <label>Time Zone<span className="mandatory">*</span></label>
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
                                                <div className="approvalRadioBtn">
                                                    <label>Agent Type</label>
                                                    <div className="edit_Profile d-flex">
                                                        <div className="radio-inline iataStatus">
                                                            <input type="radio" id="approve_iata" name="rad_iata_status" value="1" />
                                                            <label for="approve_iata" className="pt-2">  credit</label>
                                                        </div>
                                                        <div className="radio-inline iataStatus">
                                                            <input type="radio" id="not_approve_iata" name="rad_iata_status" value="0" checked="" />
                                                            <label for="not_approve_iata"  className="pt-2 pl-1"> Cash</label>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                <label>Credit Limit</label>
                                                <input type="text" name="txt_pincode" id="txt_pincode" className="form-control" value="" maxlength="6" title="Credit Limit" placeholder=""  autocomplete="none" />
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                <label>Temp Credit Limit</label>
                                                <input type="text" name="txt_pincode" id="txt_pincode" className="form-control" value="" maxlength="6" title="Credit Limit" placeholder=""  autocomplete="none" />
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                <div className="approvalRadioBtn">
                                                    <label>Credit Distribution</label>
                                                    <div className="edit_Profile d-flex">
                                                        <div className="radio-inline iataStatus">
                                                            <input type="radio" id="approve_iata" name="rad_iata_status" value="1" />
                                                            <label for="approve_iata" className="pt-2">  Yes</label>
                                                        </div>
                                                        <div className="radio-inline iataStatus">
                                                            <input type="radio" id="not_approve_iata" name="rad_iata_status" value="0" checked="" />
                                                            <label for="not_approve_iata"  className="pt-2 pl-1">  No</label>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                <label>Branch<span className="mandatory">*</span></label>
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
                                                <label>Sales Manager</label>
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
                                                <label>Consultant<span className="mandatory">*</span></label>
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
                                            
                                        </div>
                                        
                                        
                                        <h5 className="">Rights</h5>
                                        <div className="clearDiv row">
                                        
                                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 form-group">
                                                <div className="addStaff">
                                                    <div className="checkbox checkbox-inline">
                                                        <input id="allowCancel" checked type="checkbox" name="chk_allow_book_under_cancellation" value="1" autocomplete="none" />
                                                        <label for="allowCancel">Multi Currency Search</label>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 form-group">
                                                <div className="addStaff">
                                                    <div className="checkbox checkbox-inline">
                                                        <input type="checkbox" id="can_cancel" name="can_cancel" value="1" autocomplete="none" />
                                                        <label for="can_cancel">Allow Create Quotations</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                <div className="addStaff">
                                                    <div className="checkbox checkbox-inline">
                                                        <input type="checkbox" id="can_cancel" name="can_cancel" value="1" autocomplete="none" />
                                                        <label for="can_cancel">Allow Non-Refundable bookings</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 form-group">
                                                <div className="addStaff">
                                                    <div className="checkbox checkbox-inline">
                                                        <input type="checkbox" id="can_cancel" name="can_cancel" value="1" autocomplete="none" />
                                                        <label for="can_cancel">Allow Voucher bookings</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 form-group">
                                                <div className="addStaff">
                                                    <div className="checkbox checkbox-inline">
                                                    <input type="checkbox" id="view_all_bookings" name="view_all_bookings" value="1" autocomplete="none" />
                                                    <label for="view_all_bookings">Make Bookings</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 form-group">
                                                <div className="addStaff">
                                                    <div className="checkbox checkbox-inline">
                                                    <input type="checkbox" id="view_all_bookings" name="view_all_bookings" value="1" autocomplete="none" />
                                                    <label for="view_all_bookings">Debug Mode</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 form-group">
                                                <div className="addStaff">
                                                    <div className="checkbox checkbox-inline">
                                                        <input type="checkbox" id="can_cancel" name="can_cancel" value="1" autocomplete="none" />
                                                        <label for="can_cancel">Flights Allow Ticketing</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 form-group">
                                                <div className="addStaff">
                                                    <div className="checkbox checkbox-inline">
                                                    <input type="checkbox" id="view_all_bookings" name="view_all_bookings" value="1" autocomplete="none" />
                                                    <label for="view_all_bookings">Web Services</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="editProfileForm">
                                        <div className="col-md-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="editProfileSubmitBtn">
                                                <a className="submitebtn" href=""><i className="fa fa-floppy-o" aria-hidden="true"> </i>  Save </a>
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

export default AgentCreation