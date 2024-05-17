import React from 'react';
import Footer from './Footer';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
function SeoMeta() {
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
                                <h4 className="mb-sm-0">ADD META TAGS</h4>
                            </div>
                        </div>
                    </div>
                

                    <div className="row">
                        <div className="col-md-12 p-0">
                            
                            <div className="edit_profileSec">
                                <div className="editProfileForm">
                                    <div className="clearDiv row">
                                        
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                            <label>Domain Name</label>
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
                                            <label>Domain Language</label>
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
                                            <label>Page Name</label>
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
                                            <label>Meta Title</label>
                                            <input type="text" name="txt_first_name" value="" title="First Name" className="form-control" placeholder=""autocomplete="none" />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group">
                                            <label>Description</label>
                                            <textarea className="form-control" rows="4"></textarea>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                            <label>Keywords</label>
                                            <input type="text" name="txt_first_name" value="" title="First Name" className="form-control" placeholder="Add Tags"autocomplete="none" />
                                        </div>
                                    </div>
                                    <div className="clearDiv row">
                                        <div className="col-lg-2 col-md-2  col-sm-2 col-xs-2 form-group">
                                            <div className="checkbox checkbox-inline">
                                                <input id="allowCancel" type="checkbox" name="chk_allow_book_under_cancellation" value="1" autocomplete="none" />
                                                <label for="allowCancel" className="pt-2">No Index</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-md-2  col-sm-2 col-xs-2 form-group">
                                            <div className="checkbox checkbox-inline">
                                                <input id="allowCancel" type="checkbox" name="chk_allow_book_under_cancellation" value="1" autocomplete="none" />
                                                <label for="allowCancel" className="pt-2">No Follow</label>
                                            </div>
                                        </div>
                                    
                                        <div className="col-md-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="editProfileSubmitBtn">
                                                <a className="submitebtn" href=""><i className="fa fa fa-floppy-o" aria-hidden="true"> </i>  Save </a>
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

export default SeoMeta