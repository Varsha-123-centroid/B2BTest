import React from 'react'
import Footer from './Footer'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
function SetDefaultMarkup() {
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
                                <h4 className="mb-sm-0">Set Markup</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 p-0">
                            <div className="changePasswordSec">
                                <div className="changePasswordForm"> 
                                <div className="row"> 
                                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 form-group p-5 bg-white">
                                        <label>Hotel </label>
                                        <div className="input_icon input-group fullDiv">
                                        <span className="input-group-addon markup_option_box">%</span>
                                        <input type="text" id="hotel_service_per" name="hotel_service_per" className="form-control" value="" maxlength="5" autocomplete="none" />
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 form-group p-5 bg-white">
                                        <label>Activity </label>
                                        <div className="input_icon input-group fullDiv">
                                        <span className="input-group-addon markup_option_box">%</span>
                                        <input type="text" id="hotel_service_per" name="hotel_service_per" className="form-control" value="" maxlength="5" autocomplete="none" />
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 form-group p-5 bg-white">
                                        <label>Transfer </label>
                                        <div className="input_icon input-group fullDiv">
                                        <span className="input-group-addon markup_option_box">%</span>
                                        <input type="text" id="hotel_service_per" name="hotel_service_per" className="form-control" value="" maxlength="5" autocomplete="none" />
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 form-group p-5 bg-white">
                                        <label>Flight </label>
                                        <div className="input_icon input-group fullDiv">
                                        <span className="input-group-addon markup_option_box">%</span>
                                        <input type="text" id="hotel_service_per" name="hotel_service_per" className="form-control" value="" maxlength="5" autocomplete="none" />
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 form-group p-5 bg-white">
                                        <label>Groups </label>
                                        <div className="input_icon input-group fullDiv">
                                        <span className="input-group-addon markup_option_box">%</span>
                                        <input type="text" id="hotel_service_per" name="hotel_service_per" className="form-control" value="" maxlength="5" autocomplete="none" />
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-md-12 col-sm-12 col-xs-12 form-group">
                                        <div className="changePasswordBtn">
                                        <a href="#">Submit</a>
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

export default SetDefaultMarkup