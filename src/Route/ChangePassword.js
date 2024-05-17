import React from 'react';
import Footer from './Footer';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
function ChangePassword() {
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
                                <h4 className="mb-sm-0">Change your Account's Password?</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="changePasswordSecs">
                                <div className="changePasswordForms"> 
                                            <div className="clearDiv">
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group p-5 bg-white">
                                                        <div className="form-group">
                                                            <label>Current Password<span className="mandatory">*</span></label>
                                                            <div className="input_icon">
                                                                <input type="text" className="form-control" name="txt_current_password_text" id="txt_current_password_text"  autocomplete="none" />
                                                                <span className="showPassBtn"><i className="fa fa-eye-slash"></i></span>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>New Password<span className="mandatory">*</span></label>
                                                            <div className="input_icon">
                                                                <input type="text" className="form-control passwordstrenth" name="txt_password_text" id="txt_password_text" autocomplete="none" />
                                                                <span className="showPassBtn"><i className="fa fa-eye-slash"></i></span>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Confirm Password<span className="mandatory">*</span></label>
                                                            <div className="input_icon">
                                                                <input type="text" className="form-control" name="txt_confirm_password_text" id="txt_confirm_password_text" value="" onclick="switchto2(1)" onkeydown="switchto2(1)" autocomplete="none" />
                                                                <span className="showPassBtn"><i className="fa fa-eye-slash"></i></span>
                                                            </div>
                                                        </div>
                                                    
                                                        <div className="editProfileSubmitBtn">
                                                            <a className="submitebtn" href="">Submit </a>
                                                            <a className="Cancelebtn" href="">Cancel</a>
                                                        </div>
                                                    
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group"></div>
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

export default ChangePassword