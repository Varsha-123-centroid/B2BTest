import React from 'react';
import Footer from './Footer';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function Editprofile() {
  return (
    <div>
        <Navbar />
         <Sidebar />
        <div class="main-content">
            <div class="page-content" style={{backgroundColor:"#f1f5f7"}}>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                                <h4 class="mb-sm-0">Edit Profile</h4>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 p-0">
                        <form action="/edit_profile.php" name="frm_edit_profile" method="post" enctype="multipart/form-data">
                                <input type="hidden" name="action_name" value="edit_profile" autocomplete="none" />
                                <input type="hidden" name="encrypt_agent" value="1ff1de774005f8da13f42943881c655f" autocomplete="none" />
                                <div class="edit_profileSec">
                                    <div class="editProfileForm">
                                        <h5 class="">Company Details</h5>
                                        <div class="clearDiv row">
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                <label>Company Name<span class="mandatory">*</span></label>
                                                <input type="text" name="txt_agency_name" value="" title="Company Name" placeholder="Company Name" class="form-control" autocomplete="none" />
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                <div class="approvalRadioBtn">
                                                    <label>IATA Status</label>
                                                    <div class="edit_Profile d-flex">
                                                        <div class="radio-inline iataStatus">
                                                            <input type="radio" id="approve_iata" name="rad_iata_status" value="1" />
                                                            <label for="approve_iata" class="pt-2">  Approved</label>
                                                        </div>
                                                        <div class="radio-inline iataStatus">
                                                            <input type="radio" id="not_approve_iata" name="rad_iata_status" value="0" checked="" />
                                                            <label for="not_approve_iata"  class="pt-2 pl-1">  Non-Approved</label>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group russianCls" id="iata_number" style={{ display:"block"}}>
                                                <label>IATA Number</label>
                                                <input type="text" name="txt_iata_number" id="txt_iata_number" value="" maxlength="20" class="form-control txt_iata_number itaDisabled" title="IATA number" placeholder="IATA Status" autocomplete="none" />
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                <label>Company Reg. No</label>
                                                <input type="text" name="txt_reg_no" id="txt_reg_no" class="form-control" value="" title="Company Reg.No" placeholder="Company Reg. No" autocomplete="none" />
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                <label>Nature of Business</label>
                                                <div class="input_icon">
                                                    <select class="form-control" name="sel_nature_of_business">
                                                        <option value="0">Select</option>
                                                        <option value="Destination Management Company">Destination Management Company</option>
                                                        <option value="Tour Operator">Tour Operator</option>
                                                        <option value="Travel Agent" selected="">Travel Agent</option>
                                                        <option value="Wholesale Travel Company">Wholesale Travel Company</option>
                                                        <option value="Corporate">Corporate</option>
                                                    </select>
                                                    <span class="editProfileSelect"><i class="fa fa-caret-down" aria-hidden="true"></i></span>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                <label>Address<span class="mandatory">*</span></label>
                                                <input type="text" name="txt_address" class="form-control" value="" placeholder="Address" title="Address" autocomplete="none" />
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                <label>Country<span class="mandatory">*</span></label>
                                                <div class="input_icon">
                                                                                                                                                                                                            <select class="form-control" name="sel_country" id="sel_country"  title="India">
                                                        <option value="0">Select</option>
                                                        <option value="97">Afghanistan</option>
                                                        <option value="429">Aland Islands</option>
                                                        <option value="43">Albania</option>

                                                    </select>
                                                    <span class="editProfileSelect"><i class="fa fa-caret-down" aria-hidden="true"></i></span>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                <label>City<span class="mandatory">*</span></label>
                                                <div class="input_icon">
                                                    <select name="sel_city" id="sel_city" class="form-control">
                                                        <option value="0">Select</option>
                                                        <option value="106_728338_306718_108808">Abohar</option>
                                                        <option value="106_abu road_789730_108642">Abu road</option>
                                                        <option value="106_720964_795496_137474">Achrol</option>
                                                        <option value="106_72445121_397688_108785">Adimali</option>
                                                        <option value="64625">Agartala</option>
                                                    </select>
                                                    <span class="editProfileSelect"><i class="fa fa-caret-down" aria-hidden="true"></i></span>
                                                </div>
                                            
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                <label>Pincode/Zipcode</label>
                                                <input type="text" name="txt_pincode" id="txt_pincode" class="form-control" value="" maxlength="6" title="Pincode/Zipcode" placeholder="Pincode/Zipcode"  autocomplete="none" />
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                <label>Website</label>
                                                <input type="text" name="txt_website" value="" title="Website" placeholder="Website" class="form-control" autocomplete="none" />
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group input_dv">
                                                <label>Your Logo (150 pixels x 150 pixels)
                                                    <a href="edit_profile.php?action_name=remove_image" class="dustBtn">
                                                    <i class="fa fa-trash-o" aria-hidden="true" data-toggle="tooltip" title="" data-original-title="Delete Logo"></i>
                                                    </a>
                                                </label>
                                                <input type="text" name="agent_logo" class="brwse form-control" id="agent_logo" readonly="readonly" autocomplete="none" />
                                                <div class="file_input_Btn_wrap">
                                                    <input type="button" class="file_button" value="Upload Logo" autocomplete="none" />
                                                    <input tabindex="14" type="file" class="file_button1" name="agent_logo" id="getFileValue" autocomplete="none" />
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group input_dv">
                                                <label>Profile Image
                                                    <a href="edit_profile.php?action_name=remove_profile_image" class="dustBtn">
                                                    <i class="fa fa-trash-o" aria-hidden="true" data-toggle="tooltip" title="" data-original-title="Delete "></i>
                                                </a>
                                                </label>
                                                                                        
                                                <input type="text" name="agent_image" class="brwse form-control" id="agent_image" readonly="readonly" autocomplete="none" />
                                                <div class="file_input_Btn_wrap">
                                                    <input type="hidden" name="agent_profile_image" id="agent_profile_image" autocomplete="none" />
                                                    <input type="button" class="file_button" value="Upload Logo" autocomplete="none" />
                                                    <input tabindex="14" type="file" class="file_button1" name="agent_image" id="getFileValueimg"  autocomplete="none" />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="editProfileForm">
                                        <h5 class="">Customer Information</h5>
                                        <div class="clearDiv row">
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                <label>First Name<span class="mandatory">*</span></label>
                                                <input type="text" name="txt_first_name" value="" title="First Name" class="form-control" placeholder="First Name"autocomplete="none" />
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                <label>Last Name<span class="mandatory">*</span></label>
                                                <input type="text" name="txt_last_name" value="" title="Last Name" placeholder="Last Name" class="form-control" autocomplete="none" />
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group russian_lang">
                                                <label>Designation</label>
                                                <input type="text" name="txt_designation" id="txt_designation" value="" title="Designation" placeholder="Designation" class="form-control" autocomplete="none" />
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                <label>Email<span class="mandatory">*</span></label>
                                                <input type="text" name="txt_email" value="" title="Email Address" placeholder="Email Address" class="form-control" autocomplete="none" />
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                <div class="contactDlts row">
                                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                                        <label>Country Code<span class="mandatory">*</span></label>
                                                            <input type="text" name="country_code_phone" id="country_code_phone" value="91" maxlength="3" onkeyup="copy_country_code(this);removeFlagImg(event,'#country_code_phone,#country_code,#country_code_fax')" title="Country code" class="form-control edit_countryCodeNo countryCode ui-autocomplete-input flag text-right flag-in" onkeypress="return isNumber(this);" autocomplete="none" />
                                                    </div>
                                                    <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                                                        <label>Phone Number<span class="mandatory">*</span></label>
                                                            <input type="text" name="txt_phone" value="" maxlength="15" title="Phone Number" placeholder="Phone Number" class="form-control edit_phoneNumber phNumber" onkeypress="return isNumber(this);" autocomplete="none" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                <div class="contactDlts row">
                                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                                        <label>Country Code<span class="mandatory">*</span></label>
                                                        <input type="text" name="country_code" id="country_code" value="91" maxlength="3" onkeyup="copy_country_code(this);" title="Country code" class="form-control edit_countryCodeNo countryCode disabledInput flag text-right flag-in" onkeypress="return isNumber(this);" autocomplete="none" />
                                                    </div>
                                                    <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                                                        <label>Mobile Number<span class="mandatory">*</span></label>
                                                            <input type="text" name="txt_mobile" value="" maxlength="10" title="Mobile Number" placeholder="Mobile Number" class="form-control edit_phoneNumber phNumber" onkeypress="return isNumber(this);" autocomplete="none" />
                                                    </div>
                                                </div>
                                            </div>
                                        
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                <div class="contactDlts row">
                                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                                        <label>Country Code</label>
                                                            <input type="text" name="country_code_fax" id="country_code_fax" value="91" maxlength="3" title="Country code" placeholder="Code" class="form-control edit_countryCodeNo countryCode disabledInput flag text-right flag-in" autocomplete="none" />
                                                    </div>
                                                    <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                                                        <label>Fax Number</label>
                                                            <input type="text" name="txt_fax" value="" maxlength="10" title="Fax No." placeholder="" class="form-control edit_phoneNumber phNumber" onkeypress="return isNumberKey(event)" autocomplete="none" />
                                                        </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                <label>Time zone<span class="mandatory">*</span></label>
                                                <div class="input_icon">
                                                    <select name="sel_timezone" id="sel_timezone" class="form-control">
                                                        <option value="">Select</option>
                                                        <option value="3.5">GMT +3:30 Hours (7:47 AM)</option>
                                                        <option value="4">GMT +4:00 Hours (8:17 AM)</option>
                                                        <option value="4.5">GMT +4:30 Hours (8:47 AM)</option>
                                                        <option value="5">GMT +5:00 Hours (9:17 AM)</option>

                                                    </select>
                                                    <span class="editProfileSelect"><i class="fa fa-caret-down" aria-hidden="true"></i></span>
                                                </div>
                                            </div>
                                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group hiddenBox show">
                                            <label>PAN No.</label>
                                            <input type="text" name="txt_pan_number1" id="txt_pan_number1" class="form-control verifyDocs" value="" maxlength="10" title="PAN No." placeholder="Pan Number" autocomplete="none" />
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group hiddenBox show">
                                            <label>GSTIN No.</label>
                                            <input type="text" name="txt_gstin_number1" id="txt_gstin_number1" class="form-control verifyDocs" value="" maxlength="15" title="" placeholder="GSTIN Number" autocomplete="none" />  
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group hiddenBoxVat">
                                            <label>Vat No.</label>
                                            <input type="text" name="txt_vat_number" id="txt_vat_number" class="form-control " value="" maxlength="15" title="VAT Number" placeholder="VAT Number" autocomplete="none" />  
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="editProfileForm">
                                <h5 class="">Finance Contact</h5>
                                <div class="clearDiv row financeTlt">
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                        <h4>Accounts</h4>
                                        <div class="row">
                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                                                <label>Name</label>
                                                <input type="text" name="txt_acc_name" value="" maxlength="100" title="Name" placeholder="Name" class="form-control" autocomplete="none" />
                                            </div>
                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                                                <label>Email</label>
                                                <input type="text" name="txt_acc_email" value="" maxlength="100" title="Email Address" placeholder="Email Address" class="form-control" autocomplete="none" />
                                            </div>
                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                                                <div class="form-group inputDiv">
                                                <div class="contactDlts">
                                                    
                                                    <div class="col-lg-100 col-md-100 col-sm-100 col-xs-100">
                                                    <div class="row">
                                                        <label>Phone Number</label>
                                                        <div class="clearDiv">
                                                            <input type="text" name="txt_acc_phone" value="" maxlength="20" title="Phone No." placeholder="" class="form-control " onkeypress="return isNumber(this);" autocomplete="none" />
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                        <h4>Reservations/Operations Details</h4>
                                        <div class="row">
                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                                                <label>Name</label>
                                                <input type="text" name="txt_acc_name" value="" maxlength="100" title="Name" placeholder="Name" class="form-control" autocomplete="none" />
                                            </div>
                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                                                <label>Email</label>
                                                <input type="text" name="txt_acc_email" value="" maxlength="100" title="Email Address" placeholder="Email Address" class="form-control" autocomplete="none" />
                                            </div>
                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                                                <div class="form-group inputDiv">
                                                <div class="contactDlts">
                                                    
                                                    <div class="col-lg-100 col-md-100 col-sm-100 col-xs-100">
                                                    <div class="row">
                                                        <label>Phone Number</label>
                                                        <div class="clearDiv">
                                                            <input type="text" name="txt_acc_phone" value="" maxlength="20" title="Phone No." placeholder="" class="form-control " onkeypress="return isNumber(this);" autocomplete="none" />
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                        <h4>Management Details</h4>
                                        <div class="row">
                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                                                <label>Name</label>
                                                <input type="text" name="txt_acc_name" value="" maxlength="100" title="Name" placeholder="Name" class="form-control" autocomplete="none" />
                                            </div>
                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                                                <label>Email</label>
                                                <input type="text" name="txt_acc_email" value="" maxlength="100" title="Email Address" placeholder="Email Address" class="form-control" autocomplete="none" />
                                            </div>
                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                                                <div class="form-group inputDiv">
                                                <div class="contactDlts">
                                                    
                                                    <div class="col-lg-100 col-md-100 col-sm-100 col-xs-100">
                                                    <div class="row">
                                                        <label>Phone Number</label>
                                                        <div class="clearDiv">
                                                            <input type="text" name="txt_acc_phone" value="" maxlength="20" title="Phone No." placeholder="" class="form-control " onkeypress="return isNumber(this);" autocomplete="none" />
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
                            <div class="editProfileForm">
                                <div class="col-md-12 col-md-12 col-sm-12 col-xs-12">
                                    <div class="editProfileSubmitBtn">
                                        <a class="submitebtn" href="">Submit </a>
                                        <a class="Cancelebtn" href="">Cancel</a>
                                    </div>
                                </div>
                            </div>
                        </form>  
                    </div>
                    
                </div>
            </div>


         </div>
            <Footer />

            </div>
    </div>
  )
}

export default Editprofile