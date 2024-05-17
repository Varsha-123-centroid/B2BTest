import React,{ useState,useEffect} from 'react';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import axios from 'axios';
import Style from './Style';
const Testpdf = () => {
    const head1="PDF heading1";
    const head2="PDF heading2";
    let ing="https://b2b.travelxpo.in/assets/images/logo.png";
    const branchId =sessionStorage.getItem('branchId');

    useEffect(() => {   
      const fetchAgentInfo = async () => {
       try {
          const datt={
              "branchId": branchId
              }
         const response = await axios.post('https://b2b.travelxpo.in/api/getUserData',datt);	 
        console.log("mmmmmmmm..."+JSON.stringify(response.data));
        
      
          } catch (error) {
              if (axios.isAxiosError(error)) {
                  console.error('Axios Error:', error.response.data);
                } else {
                  console.error('Non-Axios Error:', error);
                }
              }
         }
         fetchAgentInfo();   
  },[branchId]) ;
  const pdfDownload = (e) => {
    e.preventDefault();
    alert("pdf");
  
    // Get the target element
    const pdfView = document.getElementById('pdf-view');
  
    // Use html2canvas to capture the content as an image
    html2canvas(pdfView).then((canvas) => {
      // Convert the canvas to a data URL
      const imgData = canvas.toDataURL('image/png');
  
      // Create a new jsPDF instance
      const doc = new jsPDF('portrait', 'pt', 'A4');
  
      // Add the image (captured content) to the PDF
      doc.addImage(imgData, 'PNG', 10, 10, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight());
  
      // Save the PDF
      doc.save('test.pdf');
    });
  };
  const concatByTwo = (value) => {
    return 'assets/images/logos/6E.png';
  };
  return (
    <div>
       <style>{Style}</style>
        <button onClick={pdfDownload}>Download</button>
        <div id="pdf-view">

                <div className="container">
                  <div className="row">
                    <div className="col-lg-1">
                    </div>
                      <div className="col-lg-10">
                        <div className="p-3">
                          <div className="hedersection">
                            <div className="row">
                              <div className="col-lg-4">
                                <img className="img-logo" src="assets/images/SIGNATORY01.png" alt="logo" style={{height:"100px"}} />
                              </div>
                              <div className="col-lg-8">
                                <div className="text-end">
                                  <p className="mb-0"><b>Flight Ticket</b> (One Way)</p>
                                  <p className="mb-0">Booking ID :<b> HVDFEHF54EER4654684VEF648</b> , (Booked on 04 December 2023)</p>
                                  <p className="mb-0">Ranju Pk</p>
                                  <h5 className="mb-0 pb-0">TRAVELEXPO</h5>
                                  <p className="mb-0">info@gmail.com , 9874563214</p>
                                  <p className="mb-0">121 King Street, Melbourne 1200, Australia</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="topsection mb-3">
                            <div className="row">
                              <div className="col-lg-4">
                                <h4>BOOKING DETAILS</h4>
                              </div>
                              <div className="col-lg-8">
                                <div className="hrline"></div>
                              </div>
                            </div>
                          </div>
                          <div className="row mb-2">
                            <div className="col-lg-12">
                              <h5>Cochi - Bombay</h5>
                              <p>Thu, 07 Dec 2023 - Non stop  -  3h 55m duration</p>
                            </div>
                          </div>
                          
                          <div className="row">
                            <div className="col-lg-12">
                              <table className="table table-bordered" style={{borderRadius: "23px"}}>
                                
                                  <tr>
                                    <td className="p-5" style={{width:"30%"}}>
                                      <div className="d-flex">
                                      <img src="assets/images/logos/6E.png" className="pt-3" style={{height:"50px",width:"auto"}}  />
                                      <h5 className="ms-2">indigo <br /> SL-215</h5>
                                        </div>
                                      <div className="row mt-2 border-light">
                                        <div className="col-lg-4 p-0"><span className="onepnr">PNR</span></div>
                                        <div className="col-lg-8 p-0"><span className="twopnr">LPKELM</span></div>
                                      </div>
                                    </td>
                                    <td className="p-3">
                                      <div className="row">
                                        <div className="col-lg-5 text-left">
                                          <h5>Cochi <br /> BLR <b>0.36hrs </b></h5>
                                          <p>Thu, 07 Dec</p>
                                          
                                          <hr />
                                          <p>Cochi internatiaonl airport - Terminal 2</p>
                                        </div>
                                        <div className="col-lg-2">
                                          <div className="icontime ">
                                            <span>---</span><span className="me-2 ms-2"><i className="fa fa-clock-o" aria-hidden="true"></i></span><span>---</span>
                                            <br />
                                            <p>3h 55m </p>
                                          </div>
                                        </div>
                                        <div className="col-lg-5 text-end">
                                          <h5>Cochi <br /> BLR <b>0.36hrs </b></h5>
                                          <p>Thu, 07 Dec</p>
                                          
                                          <hr />
                                          <p>Cochi internatiaonl airport - Terminal 2</p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr className="p-2">
                                    <td colspan="2">
                                      <div className="row">
                                        <div className="col-lg-6 text-left d-flex">
                                          <span className="pt-2"><i className="fa text-gary fa-suitcase" aria-hidden="true"></i></span><span className="me-2 ms-2"><h3>20kgs *</h3></span> <span>check-in</span>
                                        </div>
                                        <div className="col-lg-6 text-left d-flex">
                                          <span claclassNamess="pt-2"><i className="fa text-gary fa-suitcase" aria-hidden="true"></i></span><span className="me-2 ms-2"><h3>7kgs *</h3></span> <span>cabin</span>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr className="p-3">
                                    <td colspan="2">
                                      <div className="row">
                                        <div className="col-lg-4 text-left">
                                          <p>TRAVELLER</p>
                                          <h4>Arjun Ravi - Adult</h4>
                                          <p>9874651321321351</p>
                                        </div>
                                        <div className="col-lg-2">
                                          <p>SEAT</p>
                                        </div>
                                        <div className="col-lg-2">
                                          <p>MEAL</p>
                                        </div>
                                        <div className="col-lg-4 text-end">
                                          <p>E-TICKET No</p>
                                          <h4>9874651321321351</h4>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                
                              </table>
                            </div>
                          </div>
                  
                  
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="info p-3">
                        <h4>IMPORTANT INFORMATION</h4>
                        <ul style={{lineHeight: "30px"}}>
                          <li><b>Check-in Time :</b> Passenger to report 2 hours before departure. Check-in procedure and baggage
                          drop will close 1 hour before departure.</li>
                          <li><b>DGCA passenger charter :</b> Please refer to passenger charter by clicking <a href="#">Here</a></li>
                          <li><b>Transit Visa Requirement :</b> Please note that travellers are solely responsible for ensuring their
                          eligibility to enter the destination or transit countries. We accept no liability in this regard. Please
                          check the travel rules of all regulatory websites before booking and commencing travel.</li>
                          <li><b> Passengers travelling to Thailand, please note :</b> Who can travel? Travel is open for all visa holders.
                          Please check all the detailed guidelines for both your chosen destination and airline by visiting our
                          guidelines page here -<a href="#">Know More</a></li>
                          <li><b> Please Note :</b>  Passengers travelling on a tourist visa are not allowed to travel with one-way ticket.
                          They must show a return ticket else they may not be allowed to board the flight.You must adhere to
                          baggage dimension (length, breadth, width etc.) guidelines of the airline, else you may have to pay
                          additional charges or be even denied boarding. Kindly refer to the airline website for more details.</li>
                          <li><b> Visa Requirements :</b> Passport should be valid for minimum 6 months from the date of travel.All
                          travellers must present hard copies of their foreign visa (soft copies won’t be accepted) at the
                          immigration counters during departure.MakeMyTrip holds no liability with respect to visa information.
                          To get further details on visa and passport requirements, before booking your travel, <a href="#">click here </a></li>
                          <li><b> A Note on Guidelines :</b> Please note that travellers are solely responsible for ensuring their eligibility to
                          enter the destination or transit countries. We accept no liability in this regard. Please check the travel
                          rules of all regulatory websites before booking and commencing travel.</li>
                          <li><b>Valid ID proof needed :</b> Please carry a valid Passport and Visa (mandatory for international travel).
                          Passport should have at least 6 months of validity at the time of travel</li>
                          <li><b>Ensure Compliance with Visa/Transit Visa Requirements :</b>Please ensure you verify and adhere to
                          the visa and transit visa requirements based on your nationality, passport type, and destination
                          country. MakeMyTrip holds our customers' best interests at heart; however, we cannot be held liable
                          for any issues that may arise from a failure to seek and follow the necessary visa information. For the
                          most reliable and up-to-date visa requirements, check reputable regulatory websites like or withIATA
                          the airline</li>
                        </ul>	
                      </div>
                    </div>
                  </div>
              
                </div>
              </div>
              <div className="col-lg-1">
              </div>
            </div>
          </div>
        </div>
        <div id="section1">
          <h2>Section 1</h2>
          <p>This is the content of Section 1.</p>
        </div>

  <div id="section2">
    <h2>Section 2</h2>
    <p>This is the content of Section 2.</p>
  </div>

  <div id="section3">
    <h2>Section 3</h2>
    <p>This is the content of Section 3.</p>
  </div>
      </div>

  )
}

export default Testpdf