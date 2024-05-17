import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import Autocomplete from './Autocomplete';
import { useEffect } from "react";

const DynamicMultycity = () => {

    const [divs, setDivs] = useState([{ fromcity: '', tocity: '' ,depatdt:''}]);
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://gist.githubusercontent.com/tdreyno/4278655/raw/7b0762c09b519f40397e4c3e100b097d861f5588/airports.json");
            const json = await response.json();
            setData(json);
            
          }
          fetchData();
    },[]) ;
    const handleAddDiv = () => {
        const newDivs = [...divs, { fromcity: '', tocity: '' , departdt:''}];
        setDivs(newDivs);
      }
    
    const handleRemoveDiv = (index) => {
        alert(index);
        const newDivs = [...divs];
        newDivs.splice(index, 1);
        setDivs(newDivs);
      }
    
    const handleChangeFromcity = (event, index) => {
        const newDivs = [...divs];
        newDivs[index].fromcity = event.target.value;
        setDivs(newDivs);
      }
    
    const handleChangeTocity = (event, index) => {
        const newDivs = [...divs];
        newDivs[index].tocity = event.target.value;
        setDivs(newDivs);
      }
    const handleChangeDepartdt = (event, index) => {
        const newDivs = [...divs];
        newDivs[index].depattdt = event.target.value;
        setDivs(newDivs);
      }  

  return (
    <div>
      {divs.map((div, index) => (
        <div key={index}>


                                                                    <div className="row">
                                                                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group" >
                                                                            <label>From</label>
                                                                            <Autocomplete suggestions={data} name="fromAirdyn" id="fromAirdyn" />
                                                                            {/*<input type="text" name="txt_booking_refno" maxlength="10" id="txt_booking_refno" value={div.fromcity} onChange={(event) => handleChangeFromcity(event, index)} className="form-control" placeholder="Enter Booking Id" autocomplete="none" />*/}
                                                                            <div className="text-center form-group">
                                                                                <a href="" className="exchangeicom"><i className="fa fa-exchange" aria-hidden="true"></i></a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                                            <label>To</label>
                                                                            <Autocomplete suggestions={data} name="toAirdyn" id="toAirdyn" />
                                                                            {/*<input type="text" name="txt_booking_refno" maxlength="10" id="txt_booking_refno" value={div.tocity} onChange={(event) => handleChangeTocity(event, index)}  className="form-control" placeholder="Enter Booking Id" autocomplete="none" />*/}
                                                                        </div>
                                                                    
                                                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group" >
                                                                            <label>Depart On</label>
                                                                            <div id="datepicker">
                                                                                <input type="text" className="form-control w-100 " value={div.depatdt} onChange={(event) => handleChangeDepartdt(event, index)} data-date-start-date="0d"   placeholder="dd M, yyyy" data-date-autoclose="true" data-date-format="dd M, yyyy" data-date-container="#datepicker" data-provide="datepicker" style={{backgroundColor:"#fff"}} />
                                                                            </div>
                                                                        </div>
                                                                       
                                                                       
                                                                        <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 form-group" >
                                                                                 <label>&nbsp;</label>
                                                                                <button className="form-control" onClick={() => handleRemoveDiv(index)}  style={{backgroundColor:"fff"}} ><FontAwesomeIcon icon={faMinus} /></button>
                                                                            
                                                                        </div>
                                                                    </div> 





        </div>
      ))}
      
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group" >
        </div> 
        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 form-group" >
        <label>&nbsp;</label>
                <button className="form-control" onClick={handleAddDiv}  style={{backgroundColor:"fff"}} ><FontAwesomeIcon icon={faPlus} /></button>Add More
            
        </div> 
    </div> 
    </div>
  )
}

export default DynamicMultycity