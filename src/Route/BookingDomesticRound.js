import React,{ useState,useEffect } from 'react';
import Footer from './Footer';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { useLocation,useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment/moment';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Style from './Style';
const BookingDomesticRound = () => {
    const location = useLocation();
    const response = location.state?.responsebook;
    const responsereturn = location.state?.responsebookreturn;
    //console.log(response);
    //console.log(responsereturn);
    const navigate = useNavigate();
    const [value, setValue] = useState('');
    const [branchData, setBranchData] = useState('');
    const [dataa,setDataa] = useState(response.Response.Response);
    const [farevl,setFarevl] = useState(response.Response.Response.FlightItinerary.Fare);
    const [datas,setDatas] = useState(response.Response.Response.FlightItinerary.Passenger);
    const [segm,setSegm] = useState(response.Response.Response.FlightItinerary.Segments[0]);
    const [fare,setFare] = useState(response.Response.Response.FlightItinerary.FareRules);
    const len=response.Response.Response.FlightItinerary.Segments.length;
    const [lsegm,lsetSegm] = useState(response.Response.Response.FlightItinerary.Segments[len-1]);

    const [dataa1,setDataa1] = useState(responsereturn.Response.Response);
    const [farevl1,setFarevl1] = useState(responsereturn.Response.Response.FlightItinerary.Fare);
    const [datas1,setDatas1] = useState(responsereturn.Response.Response.FlightItinerary.Passenger);
    const [segm1,setSegm1] = useState(responsereturn.Response.Response.FlightItinerary.Segments[0]);
    const [fare1,setFare1] = useState(responsereturn.Response.Response.FlightItinerary.FareRules);
    const len1=responsereturn.Response.Response.FlightItinerary.Segments.length;
    const [lsegm1,lsetSegm1] = useState(responsereturn.Response.Response.FlightItinerary.Segments[len1-1]);
    const [markupamount, setMarkupamount] = useState(0);
    const [markupamountib, setMarkupamountib] = useState(0);
    const head1="PDF heading1";
    const head2="PDF heading2";
    const branchId =sessionStorage.getItem('branchId'); 
    useEffect(() => {
  
      const storedValue = localStorage.getItem('tokenValue');
      const markupamount1=localStorage.getItem('markupamount');
  if (storedValue) {
    setValue(storedValue);
  }
  if (markupamount1) {
    setMarkupamount(markupamount1);
    setMarkupamountib(markupamount1);
  }
},[]) ;
    useEffect(() => {   
      const fetchAgentInfo = async () => {
       try {
          const datt={
              "branchId": branchId
              }
         const response = await axios.post('https://b2b.travelxpo.in/api/getUserData',datt);	 
      console.log("mmmmmmmm..."+JSON.stringify(response.data));
        
        setBranchData(response);
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
    // Get the target element
    const pdfView1 = document.getElementById('pdf-view1');
    const pdfView2 = document.getElementById('pdf-view2');
    // Use html2canvas to capture the content as an image
    html2canvas(pdfView1).then((canvas1) => {
      html2canvas(pdfView2).then((canvas2) => {
        const doc = new jsPDF('portrait', 'pt', 'A4');
        doc.addImage(canvas1.toDataURL('image/png'), 'PNG', 10, 10, doc.internal.pageSize.getWidth()-10, doc.internal.pageSize.getHeight()-10);
        doc.addPage();
        doc.addImage(canvas2.toDataURL('image/png'), 'PNG', 10, 10, doc.internal.pageSize.getWidth()-10, doc.internal.pageSize.getHeight()-10);

      doc.save('TravelxpoTicket.pdf');
    });
  });
  };


  const concatByTwo = (value) => {
    
    return 'assets/images/AirlineLogo_25x25/'+value+'.gif';
  };
  const convertJ=(vl) =>{
    let x="";
 if(vl === 1) x="Oneway";
 else if(vl === 2) x="RoundTrip";
 else if(vl === 3) x="Multiway";
 return x;
  }
  const stopCounts=(ln) =>{
    let y="";
 if(ln === 1) y=" Non Stop";
 else if(ln === 2) y=" One Stop";
 else if(ln > 2) y=" 2 Plus Stops";
 return y;
  }
  const TotalDuration=(segment) =>{
    if (!Array.isArray(segment)) {
      throw new Error('Invalid segment format. Expecting an array.');
    }
    const totalDuration = segment.reduce((sum, flight) => {
      // Ensure each flight has a Duration property
      if (flight && flight.Duration && typeof flight.Duration === 'number') {
        return sum + flight.Duration;
      }

      return sum;
    }, 0);
    let hrs=Math.floor(totalDuration / 60);
    let mnts=totalDuration % 60;
   return hrs+' h ' + mnts +' m ';
  }
  const paxType = (z) => {
let cc= '';
if(z === 1) cc= 'Adult';
else if(z === 2) cc= 'Child';
else if(z === 3) cc= 'Infant';
    return cc;
  }
  const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };


   let markup = sessionStorage.getItem('Markup'); 

   

    return (
      <div>
<style>{Style}</style>
      <Navbar />
      {/* <Sidebar /> */}
      
        <div className="page-content">
            
            <div class="row">
                                                
                                                <div class="col-lg-8">
                                                </div>
                                                    <div class="col-lg-1"  style={{marginTop:"-25px"}} >
                                                    <Link to="/dashboard">
                                                    <a href="javaScript:void(0);"> <h5> ◄◄ <i className="fa fa-home pt-4" aria-hidden="true"style={{color: "#333",size:"50px"}}></i> </h5></a>
                                                    </Link>
                                                    </div>
                                                    <div class="col-lg-2" style={{marginTop:"-15px"}}>
                                                    <a href="javaScript:void(0);" onClick={pdfDownload} className="btn btn-info">Download PDF <i class="fa fa-download" aria-hidden="true"></i></a>
                                                    </div>
                                          </div>

                
                <div className="row" >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-1">
                    </div>
                      <div className="col-lg-10" id="pdf-view1">
                        <div className="p-3">
                          <div className="hedersection">
                            <div className="row">
                              <div className="col-lg-4">
                                <img className="img-logo" src="assets/images/SIGNATORY01.png" alt="logo" style={{height:"100px"}} />
                              </div>
                              <div className="col-lg-8">
                                <div className="text-end">
                                  <p className="mb-0"><b>Flight Ticket</b> {convertJ(dataa.FlightItinerary.JourneyType)}</p>
                                  <p className="mb-0">Booking ID :<b> {dataa.FlightItinerary.BookingId}</b> , (Booked on {new Date().toLocaleTimeString([], { year: 'numeric', month: 'long', day: 'numeric' })})</p>
                                  <p className="mb-0">{branchData?.data?.poc_name}</p>
                                  <h5 className="mb-0 pb-0">{branchData?.data?.company_name}</h5>
                                  <p className="mb-0">{branchData?.data?.company_email} , {branchData?.data?.poc_mobile}</p>
                                  <p className="mb-0">{branchData?.data?.address}</p>
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
                            <div className="col-lg-6">
                            
                              <h5>{dataa.FlightItinerary.Origin} - {dataa.FlightItinerary.Destination}</h5>
                              <p>{moment(dataa.FlightItinerary.DepTime).format('DD/MM/YYYY HH:mm:ss')} - {stopCounts(len)}  -  {TotalDuration(response.Response.Response.FlightItinerary.Segments)} duration</p>
                            </div>
                            <div className="col-lg-3">
                                <span className="pt-2"><i className="fa text-gary fa-suitcase" aria-hidden="true"></i></span><span className="me-2 ms-2">{segm.Baggage}*</span> <span>check-in</span>
                            </div>
                            <div className="col-lg-3">
                                <span claclassNamess="pt-2"><i className="fa text-gary fa-suitcase" aria-hidden="true"></i></span><span className="me-2 ms-2">{segm.CabinBaggage}*</span> <span>cabin</span>
                            </div>
                          </div>
                          
                          <div className="row">
                            <div className="col-lg-12">
                              <table className="table table-bordered" style={{borderRadius: "23px"}}>
                                
                                  <tr>
                                    <td className="p-5" style={{width:"30%"}}>
                                      <div className="d-flex">
                                      <img src={concatByTwo(dataa.FlightItinerary.AirlineCode)} className="pt-3" style={{height:"50px",width:"auto",marginTop:"-20px"}}  />
                                      <h5 className="ms-2">
                                       {segm.Airline?.AirlineName} - {segm.Airline?.FlightNumber}</h5>
                                        </div>
                                      <div className="row mt-2 border-light">
                                        <div className="col-lg-4 p-0"><span className="onepnr">PNR</span></div>
                                        <div className="col-lg-8 p-0"><span className="twopnr">{dataa.FlightItinerary.PNR}</span></div>
                                      </div>
                                    </td>
                                    <td className="p-3">
                                      <div className="row">
                                        <div className="col-lg-5 text-left">
                                          <h5>{segm.Origin?.Airport?.CityName} - {segm.Destination?.Airport?.CityName} </h5>
                                          <p>{moment(segm.Origin?.DepTime).format('DD/MM/YYYY HH:mm:ss')}</p>
                                          
                                          <hr />
                                          <p>{segm.Origin?.Airport?.AirportName} - Terminal {segm.Origin?.Airport?.Terminal}</p>
                                        </div>
                                        <div className="col-lg-2">
                                          <div className="icontime ">
                                            <span>---</span><span className="me-2 ms-2"><i className="fa fa-clock-o" aria-hidden="true"></i></span><span>---</span>
                                            <br />
                                            <p>{TotalDuration(response.Response.Response.FlightItinerary.Segments)} </p>
                                          </div>
                                        </div>
                                        <div className="col-lg-5 text-end">
                                          <h5>{lsegm.Origin?.Airport?.CityName} - {lsegm.Destination?.Airport?.CityName}</h5>
                                          <p>{moment(lsegm.Destination.DepTime).format('DD/MM/YYYY HH:mm:ss')}</p>
                                          
                                          <hr />
                                          <p>{lsegm.Destination?.Airport?.AirportName} - Terminal {lsegm.Destination?.Airport?.Terminal}</p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  
                                  {
                                  datas.map((data,k) => (
                                                  
                                                  <>
                                  <tr className="p-3">
                                    <td colspan="2">
                                    <div className="row">
                                        <div className="col-lg-3 text-left">
                                          <p>TRAVELLERS</p>
                                          <h5 style={{fontSize:"14px"}}><strong>{data?.Title}.{data?.FirstName} {data?.LastName}</strong> - {paxType(data?.PaxType)}</h5>
                                          
                                        </div>
                                        <div className="col-lg-2">
                                          <p>BAGGAGE</p>
                                          {data?.Baggage && data.Baggage.length > 0 && (
                                            <p>{data.Baggage[0].Weight}KG (Additinal)</p>
                                          )}
                                        </div>
                                        <div className="col-lg-5">
                                          <p>MEAL</p>
                                          {data?.MealDynamic && data.MealDynamic.length > 0 && (
                                            <p>{data.MealDynamic[0].AirlineDescription}</p>
                                          )}
                                        </div>
                                        <div className="col-lg-2 text-end">
                                          <p>E-TICKET No</p>
                                          <h5  style={{fontSize:"14px",textAlign:"right",}}>{data?.Ticket?.TicketId}-{data?.Ticket?.TicketNumber}</h5>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>

                                  </>
                                        ))}


                                
                              </table>
                              <h5>TOTAL INVOICE AMOUNT</h5>
                              <div className="row">
                                      <div className="col-lg-2 text-left">
                                          <p>BaseFare</p>
                                          <h5 style={{fontSize:"14px"}}><strong>{parseFloat(farevl?.BaseFare).toLocaleString('en-IN', {style: 'currency',currency: 'INR'})}</strong></h5>
                                        </div>
                                      <div className="col-lg-1">
                                          <p>Tax</p>
                                          <h5 style={{fontSize:"14px"}}><strong>{parseFloat(farevl?.Tax).toLocaleString('en-IN', {style: 'currency',currency: 'INR'})}</strong></h5>
                                          
                                        </div>
                                        <div className="col-lg-2">
                                          <p>TransactionFee</p>
                                          <h5 style={{fontSize:"14px"}}><strong>{parseFloat(farevl?.TransactionFee || 0).toLocaleString('en-IN', {style: 'currency',currency: 'INR'})}</strong></h5>
                                          
                                        </div>
                                        <div className="col-lg-2">
                                          <p>OtherCharges</p>
                                          <h5 style={{fontSize:"14px"}}><strong>{parseFloat(farevl?.OtherCharges).toLocaleString('en-IN', {style: 'currency',currency: 'INR'})}</strong></h5>
                                          
                                        </div>
                                        <div className="col-lg-1">
                                          <p>Baggage</p>
                                          <h5 style={{fontSize:"14px"}}><strong>{parseFloat(farevl?.TotalBaggageCharges).toLocaleString('en-IN', {style: 'currency',currency: 'INR'})}</strong></h5>
                                          
                                        </div>
                                        <div className="col-lg-1">
                                          <p>Meal</p>
                                          <h5 style={{fontSize:"14px"}}><strong>{parseFloat(farevl?.TotalMealCharges).toLocaleString('en-IN', {style: 'currency',currency: 'INR'})}</strong></h5>
                                          
                                        </div>
                                        <div className="col-lg-1">
                                          <p>Service</p>
                                          <h5 style={{fontSize:"14px"}}><strong>{parseFloat(markupamount).toLocaleString('en-IN', {style: 'currency',currency: 'INR'})}</strong></h5>
                                          
                                        </div>
                                        <div className="col-lg-2">
                                          <p>Total</p>
                                          <h5 style={{fontSize:"14px"}}><strong>{parseFloat(parseFloat(farevl?.PublishedFare)+parseFloat(markupamount)).toLocaleString('en-IN', {style: 'currency',currency: 'INR'})}</strong></h5>
                                          
                                        </div>
                                      </div>
                            </div>
                          </div>
                  
                  
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="info p-3">
                        <h5>IMPORTANT INFORMATION</h5>
                        <ul style={{lineHeight: "20px"}}>
                          <li style={{textAlign:"justify"}}><b>Check-in Time :</b> Passenger to report 2 hours before departure. Check-in procedure and baggage
                          drop will close 1 hour before departure.</li>
                          <li  style={{textAlign:"justify"}}><b>DGCA passenger charter :</b> Please refer to passenger charter by clicking <a href="#">Here</a></li>
                          <li  style={{textAlign:"justify"}}><b>Transit Visa Requirement :</b> Please note that travellers are solely responsible for ensuring their
                          eligibility to enter the destination or transit countries. We accept no liability in this regard. Please
                          check the travel rules of all regulatory websites before booking and commencing travel.</li>
                          <li  style={{textAlign:"justify"}}><b> Passengers travelling to Thailand, please note :</b> Who can travel? Travel is open for all visa holders.
                          Please check all the detailed guidelines for both your chosen destination and airline by visiting our
                          guidelines page here -<a href="#">Know More</a></li>
                          <li  style={{textAlign:"justify"}}><b> Please Note :</b>  Passengers travelling on a tourist visa are not allowed to travel with one-way ticket.
                          They must show a return ticket else they may not be allowed to board the flight.You must adhere to
                          baggage dimension (length, breadth, width etc.) guidelines of the airline, else you may have to pay
                          additional charges or be even denied boarding. Kindly refer to the airline website for more details.</li>
                          <li  style={{textAlign:"justify"}}><b> Visa Requirements :</b> Passport should be valid for minimum 6 months from the date of travel.All
                          travellers must present hard copies of their foreign visa (soft copies won’t be accepted) at the
                          immigration counters during departure.MakeMyTrip holds no liability with respect to visa information.
                          To get further details on visa and passport requirements, before booking your travel, <a href="#">click here </a></li>
                          <li  style={{textAlign:"justify"}}><b> A Note on Guidelines :</b> Please note that travellers are solely responsible for ensuring their eligibility to
                          enter the destination or transit countries. We accept no liability in this regard. Please check the travel
                          rules of all regulatory websites before booking and commencing travel.</li>
                          <li  style={{textAlign:"justify"}}><b>Valid ID proof needed :</b> Please carry a valid Passport and Visa (mandatory for international travel).
                          Passport should have at least 6 months of validity at the time of travel</li>
                          <li  style={{textAlign:"justify"}}><b>Ensure Compliance with Visa/Transit Visa Requirements :</b>Please ensure you verify and adhere to
                          the visa and transit visa requirements based on your nationality, passport type, and destination
                          country. MakeMyTrip holds our customers' best interests at heart; however, we cannot be held liable
                          for any issues that may arise from a failure to seek and follow the necessary visa information. For the
                          most reliable and up-to-date visa requirements, check reputable regulatory websites like or with IATA
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
                  
                <div className="row">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-1">
                    </div>
                      <div className="col-lg-10" id="pdf-view2">
                        <div className="p-3">
                          <div className="hedersection">
                            <div className="row">
                              <div className="col-lg-4">
                                <img className="img-logo" src="assets/images/SIGNATORY01.png" alt="logo" style={{height:"100px"}} />
                              </div>
                              <div className="col-lg-8">
                                <div className="text-end">
                                  <p className="mb-0"><b>Flight Ticket</b> {convertJ(dataa1.FlightItinerary.JourneyType)}</p>
                                  <p className="mb-0">Booking ID :<b> {dataa1.FlightItinerary.BookingId}</b> , (Booked on {new Date().toLocaleTimeString([], { year: 'numeric', month: 'long', day: 'numeric' })})</p>
                                  <p className="mb-0">{branchData?.data?.poc_name}</p>
                                  <h5 className="mb-0 pb-0">{branchData?.data?.company_name}</h5>
                                  <p className="mb-0">{branchData?.data?.company_email} , {branchData?.data?.poc_mobile}</p>
                                  <p className="mb-0">{branchData?.data?.address}</p>
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
                            <div className="col-lg-6">
                            
                              <h5>{dataa1.FlightItinerary.Origin} - {dataa1.FlightItinerary.Destination}</h5>
                              <p>{moment(dataa1.FlightItinerary.DepTime).format('DD/MM/YYYY HH:mm:ss')} - {stopCounts(len1)}  -  {TotalDuration(responsereturn.Response.Response.FlightItinerary.Segments)} duration</p>
                            </div>
                            <div className="col-lg-3">
                                <span className="pt-2"><i className="fa text-gary fa-suitcase" aria-hidden="true"></i></span><span className="me-2 ms-2">{segm1.Baggage}*</span> <span>check-in</span>
                            </div>
                            <div className="col-lg-3">
                                <span claclassNamess="pt-2"><i className="fa text-gary fa-suitcase" aria-hidden="true"></i></span><span className="me-2 ms-2">{segm1.CabinBaggage}*</span> <span>cabin</span>
                            </div>
                          </div>
                          
                          <div className="row">
                            <div className="col-lg-12">
                              <table className="table table-bordered" style={{borderRadius: "23px"}}>
                                
                                  <tr>
                                    <td className="p-5" style={{width:"30%"}}>
                                      <div className="d-flex">
                                      <img src={concatByTwo(dataa1.FlightItinerary.AirlineCode)} className="pt-3" style={{height:"50px",width:"auto",marginTop:"-20px"}}  />
                                      <h5 className="ms-2">
                                       {segm1.Airline?.AirlineName} - {segm1.Airline?.FlightNumber}</h5>
                                        </div>
                                      <div className="row mt-2 border-light">
                                        <div className="col-lg-4 p-0"><span className="onepnr">PNR</span></div>
                                        <div className="col-lg-8 p-0"><span className="twopnr">{dataa1.FlightItinerary.PNR}</span></div>
                                      </div>
                                    </td>
                                    <td className="p-3">
                                      <div className="row">
                                        <div className="col-lg-5 text-left">
                                          <h5>{segm1.Origin?.Airport?.CityName} - {segm1.Destination?.Airport?.CityName} </h5>
                                          <p>{moment(segm1.Origin?.DepTime).format('DD/MM/YYYY HH:mm:ss')}</p>
                                          
                                          <hr />
                                          <p>{segm1.Origin?.Airport?.AirportName} - Terminal {segm1.Origin?.Airport?.Terminal}</p>
                                        </div>
                                        <div className="col-lg-2">
                                          <div className="icontime ">
                                            <span>---</span><span className="me-2 ms-2"><i className="fa fa-clock-o" aria-hidden="true"></i></span><span>---</span>
                                            <br />
                                            <p>{TotalDuration(responsereturn.Response.Response.FlightItinerary.Segments)} </p>
                                          </div>
                                        </div>
                                        <div className="col-lg-5 text-end">
                                          <h5>{lsegm1.Origin?.Airport?.CityName} - {lsegm1.Destination?.Airport?.CityName}</h5>
                                          <p>{moment(lsegm1.Destination?.DepTime).format('DD/MM/YYYY HH:mm:ss')}</p>
                                          
                                          <hr />
                                          <p>{lsegm1.Destination?.Airport?.AirportName} - Terminal {lsegm1.Destination?.Airport?.Terminal}</p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  
                                  {
                                  datas1.map((data,k) => (
                                                  
                                                  <>
                                  <tr className="p-3">
                                    <td colspan="2">
                                    <div className="row">
                                        <div className="col-lg-3 text-left">
                                          <p>TRAVELLERS</p>
                                          <h5 style={{fontSize:"14px"}}><strong>{data?.Title}.{data?.FirstName} {data?.LastName}</strong> - {paxType(data?.PaxType)}</h5>
                                          
                                        </div>
                                        <div className="col-lg-2">
                                          <p>BAGGAGE</p>
                                          {data?.Baggage && data.Baggage.length > 0 && (
                                            <p>{data.Baggage[0].Weight}KG (Additinal)</p>
                                          )}
                                        </div>
                                        <div className="col-lg-5">
                                          <p>MEAL</p>
                                          {data?.MealDynamic && data.MealDynamic.length > 0 && (
                                            <p>{data.MealDynamic[0].AirlineDescription}</p>
                                          )}
                                        </div>
                                        <div className="col-lg-2 text-end">
                                          <p>E-TICKET No</p>
                                          <h5  style={{fontSize:"14px",textAlign:"right",}}>{data?.Ticket?.TicketId}-{data?.Ticket?.TicketNumber}</h5>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>

                                  </>
                                        ))}


                                
                              </table>
                              <h5>TOTAL INVOICE AMOUNT RETURN</h5>
                              <div className="row">
                                      <div className="col-lg-2 text-left">
                                          <p>BaseFare</p>
                                          <h5 style={{fontSize:"14px"}}><strong>{parseFloat(farevl1?.BaseFare).toLocaleString('en-IN', {style: 'currency',currency: 'INR'})}</strong></h5>
                                        </div>
                                      <div className="col-lg-1">
                                          <p>Tax</p>
                                          <h5 style={{fontSize:"14px"}}><strong>{parseFloat(farevl1?.Tax).toLocaleString('en-IN', {style: 'currency',currency: 'INR'})}</strong></h5>
                                          
                                        </div>
                                        <div className="col-lg-2">
                                          <p>TransactionFee</p>
                                          <h5 style={{fontSize:"14px"}}><strong>{parseFloat(farevl1?.TransactionFee || 0).toLocaleString('en-IN', {style: 'currency',currency: 'INR'})}</strong></h5>
                                          
                                        </div>
                                        <div className="col-lg-2">
                                          <p>OtherCharges</p>
                                          <h5 style={{fontSize:"14px"}}><strong>{parseFloat(farevl1?.OtherCharges).toLocaleString('en-IN', {style: 'currency',currency: 'INR'})}</strong></h5>
                                          
                                        </div>
                                        <div className="col-lg-1">
                                          <p>Baggage</p>
                                          <h5 style={{fontSize:"14px"}}><strong>{parseFloat(farevl1?.TotalBaggageCharges).toLocaleString('en-IN', {style: 'currency',currency: 'INR'})}</strong></h5>
                                          
                                        </div>
                                        <div className="col-lg-1">
                                          <p>Meal</p>
                                          <h5 style={{fontSize:"14px"}}><strong>{parseFloat(farevl1?.TotalMealCharges).toLocaleString('en-IN', {style: 'currency',currency: 'INR'})}</strong></h5>
                                          
                                        </div>
                                        <div className="col-lg-1">
                                          <p>Service</p>
                                          <h5 style={{fontSize:"14px"}}><strong>{parseFloat(markupamountib).toLocaleString('en-IN', {style: 'currency',currency: 'INR'})}</strong></h5>
                                          
                                        </div>
                                        <div className="col-lg-2">
                                          <p>Total</p>
                                          <h5 style={{fontSize:"14px"}}><strong>{parseFloat(parseFloat(farevl1?.PublishedFare)+parseFloat(markupamountib)).toLocaleString('en-IN', {style: 'currency',currency: 'INR'})}</strong></h5>
                                          
                                        </div>
                                      </div>
                            </div>
                          </div>
                  
                  
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="info p-3">
                        <h5>IMPORTANT INFORMATION</h5>
                        <ul style={{lineHeight: "20px"}}>
                          <li style={{textAlign:"justify"}}><b>Check-in Time :</b> Passenger to report 2 hours before departure. Check-in procedure and baggage
                          drop will close 1 hour before departure.</li>
                          <li  style={{textAlign:"justify"}}><b>DGCA passenger charter :</b> Please refer to passenger charter by clicking <a href="#">Here</a></li>
                          <li  style={{textAlign:"justify"}}><b>Transit Visa Requirement :</b> Please note that travellers are solely responsible for ensuring their
                          eligibility to enter the destination or transit countries. We accept no liability in this regard. Please
                          check the travel rules of all regulatory websites before booking and commencing travel.</li>
                          <li  style={{textAlign:"justify"}}><b> Passengers travelling to Thailand, please note :</b> Who can travel? Travel is open for all visa holders.
                          Please check all the detailed guidelines for both your chosen destination and airline by visiting our
                          guidelines page here -<a href="#">Know More</a></li>
                          <li  style={{textAlign:"justify"}}><b> Please Note :</b>  Passengers travelling on a tourist visa are not allowed to travel with one-way ticket.
                          They must show a return ticket else they may not be allowed to board the flight.You must adhere to
                          baggage dimension (length, breadth, width etc.) guidelines of the airline, else you may have to pay
                          additional charges or be even denied boarding. Kindly refer to the airline website for more details.</li>
                          <li  style={{textAlign:"justify"}}><b> Visa Requirements :</b> Passport should be valid for minimum 6 months from the date of travel.All
                          travellers must present hard copies of their foreign visa (soft copies won’t be accepted) at the
                          immigration counters during departure.MakeMyTrip holds no liability with respect to visa information.
                          To get further details on visa and passport requirements, before booking your travel, <a href="#">click here </a></li>
                          <li  style={{textAlign:"justify"}}><b> A Note on Guidelines :</b> Please note that travellers are solely responsible for ensuring their eligibility to
                          enter the destination or transit countries. We accept no liability in this regard. Please check the travel
                          rules of all regulatory websites before booking and commencing travel.</li>
                          <li  style={{textAlign:"justify"}}><b>Valid ID proof needed :</b> Please carry a valid Passport and Visa (mandatory for international travel).
                          Passport should have at least 6 months of validity at the time of travel</li>
                          <li  style={{textAlign:"justify"}}><b>Ensure Compliance with Visa/Transit Visa Requirements :</b>Please ensure you verify and adhere to
                          the visa and transit visa requirements based on your nationality, passport type, and destination
                          country. MakeMyTrip holds our customers' best interests at heart; however, we cannot be held liable
                          for any issues that may arise from a failure to seek and follow the necessary visa information. For the
                          most reliable and up-to-date visa requirements, check reputable regulatory websites like or with IATA
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


            </div> 
   

           
      </div>
    )
  }

export default BookingDomesticRound