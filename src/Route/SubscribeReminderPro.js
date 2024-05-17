import React from 'react';
import Footer from './Footer';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
function SubscribeReminderPro() {
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
                    <h4 className="mb-sm-0">Subscribe to Reminder Pro</h4>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12 p-0">
                <div className="changePasswordSec">
                    <div className="changePasswordForm"> 
                        <div id="addproduct-nav-pills-wizard" className="twitter-bs-wizard">
                            <ul className="twitter-bs-wizard-nav">
                                <li className="nav-item">
                                    <a href="#basic-info" className="nav-link" data-toggle="tab">
                                        <span className="step-number">01</span>
                                        <span className="step-title">Google Calendar</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#product-img" className="nav-link" data-toggle="tab">
                                        <span className="step-number">02</span>
                                        <span className="step-title">Ical</span>
                                    </a>
                                </li>
                                
                                <li className="nav-item">
                                    <a href="#metadata" className="nav-link" data-toggle="tab">
                                        <span className="step-number">03</span>
                                        <span className="step-title">Microsoft Outlook</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#Calendar" className="nav-link" data-toggle="tab">
                                        <span className="step-number">04</span>
                                        <span className="step-title">Calendar Settings</span>
                                    </a>
                                </li>
                            </ul>
                            
                                  
                            <div className="tab-content twitter-bs-wizard-tab-content">
                                <div className="tab-pane" id="basic-info">
                                  <p className="card-title-desc">To Subscribe to the feed in Google Calendar, please follow the steps as mentioned below:</p>
                                    
                                <p className="card-title-desc">Paste the above Link in the Add by URL section and Click on Add Calendar.</p>

                                    <form>
                                        <div className="mb-3">
                                            <label className="form-label" for="productname">Product Name</label>
                                            <input id="productname" name="productname" type="text" className="form-control" />
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4">
                                                
                                                <div className="mb-3">
                                                    <label className="form-label" for="manufacturername">Manufacturer Name</label>
                                                    <input id="manufacturername" name="manufacturername" type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                
                                                <div className="mb-3">
                                                    <label className="form-label" for="manufacturerbrand">Manufacturer Brand</label>
                                                    <input id="manufacturerbrand" name="manufacturerbrand" type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="mb-3">
                                                    <label className="form-label" for="price">Price</label>
                                                    <input id="price" name="price" type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label" >Category</label>
                                                    <select className="form-control select2">
                                                        <option>Select</option>
                                                        <option value="EL">Electronic</option>
                                                        <option value="FA">Fashion</option>
                                                        <option value="FI">Fitness</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label" >Features</label>
    
                                                    <select className="select2 form-control select2-multiple" multiple="multiple" data-placeholder="Choose ...">
                                                        <option value="TO">Touchscreen</option>
                                                        <option value="CF">Call Function</option>
                                                        <option value="NO" selected>Notifications</option>
                                                        <option value="FI" selected>Fitness</option>
                                                        <option value="OU">Outdoor</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label" for="productdesc">Product Description</label>
                                            <textarea className="form-control" id="productdesc" rows="5"></textarea>
                                        </div>
                                    </form>
    
                                </div>
                                <div className="tab-pane" id="product-img">
                                    <h4 className="card-title">Product Images</h4>
                                    <p className="card-title-desc">Upload product image</p>
                                    <form action="https://themesdesign.in/" method="post" className="dropzone">
                                        <div className="fallback">
                                            <input name="file" type="file" multiple />
                                        </div>
        
                                        <div className="dz-message needsclick">
                                            <div className="mb-3">
                                                <i className="display-4 text-muted ri-upload-cloud-2-line"></i>
                                            </div>
                                            
                                            <h4>Drop files here or click to upload.</h4>
                                        </div>
                                    </form>
                                </div>
                                <div className="tab-pane" id="metadata">
                                    <h4 className="card-title">Meta Data</h4>
                                    <p className="card-title-desc">Fill all information below</p>

                                    <form>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="mb-3">
                                                    <label className="form-label" for="metatitle">Meta title</label>
                                                    <input id="metatitle" name="metatitle" type="text" className="form-control" />
                                                </div>
                                                
                                            </div>
    
                                            <div className="col-sm-6">
                                                <div className="mb-3">
                                                    <label className="form-label" for="metakeywords">Meta Keywords</label>
                                                    <input id="metakeywords" name="metakeywords" type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label" for="metadescription">Meta Description</label>
                                            <textarea className="form-control" id="metadescription" rows="5"></textarea>
                                        </div>
                                    </form>

                                    <div className="text-center mt-4">
                                        <button type="submit" className="btn btn-primary me-2 waves-effect waves-light">Save Changes</button>
                                        <button type="submit" className="btn btn-light waves-effect">Cancel</button>
                                    </div>
                                </div>
                                <div className="tab-pane" id="Calendar">
                                    <h4 className="card-title">Meta Data</h4>
                                    <p className="card-title-desc">Fill all information below</p>

                                    <form>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="mb-3">
                                                    <label className="form-label" for="metatitle">Meta title</label>
                                                    <input id="metatitle" name="metatitle" type="text" className="form-control" />
                                                </div>
                                                
                                            </div>
    
                                            <div className="col-sm-6">
                                                <div className="mb-3">
                                                    <label className="form-label" for="metakeywords">Meta Keywords</label>
                                                    <input id="metakeywords" name="metakeywords" type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label" for="metadescription">Meta Description</label>
                                            <textarea className="form-control" id="metadescription" rows="5"></textarea>
                                        </div>
                                    </form>

                                    <div className="text-center mt-4">
                                        <button type="submit" className="btn btn-primary me-2 waves-effect waves-light">Save Changes</button>
                                        <button type="submit" className="btn btn-light waves-effect">Cancel</button>
                                    </div>
                                </div>
                            </div>
                            <ul className="pager wizard twitter-bs-wizard-pager-link">
                                <li className="previous"><a href="#">Previous</a></li>
                                <li className="next"><a href="#">Next</a></li>
                            </ul>
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

export default SubscribeReminderPro