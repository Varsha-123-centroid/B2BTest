import React,{ useState,useEffect } from 'react';
import Footer from './Footer';
import Navbar from '../components/Navbar';
//import Sidebar from '../components/Sidebar';
import { useFormik } from 'formik';
import { CircularProgress } from "@mui/material";
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import axios from 'axios';
import moment from 'moment/moment';
import { Link ,Routes,Route,Router,Switch, useNavigate, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CustomerInfo = () => {
    const navigate = useNavigate();
    const [adult,setAdult]=useState(0);
    const [child,setChild]=useState(0);
    const [infant,setInfant]=useState(0);
    const [totalpass,setTotalPass]=useState(0);
    const [btnhead,setBtnhead]=useState("Add New");
   const [dobtext,setDobtext]=useState("Age above 12");
   const [responsebook, setResponsebook] = useState(null);
   const [value, setValue] = useState('');
   const [journeyType, setJourneyType] = useState(1);
   let balance=sessionStorage.getItem('Balance');
   let markup = sessionStorage.getItem('Markup');
   let agentId=sessionStorage.getItem('agentId');
   let branchId=sessionStorage.getItem('branchId');

   const currentDate = new Date();
   let mxDate = new Date();
   mxDate.setFullYear(currentDate.getFullYear() - 12);
   let mnDate = new Date();
   mnDate.setFullYear(currentDate.getFullYear() - 112);
   const [minDate, setMinDate] = useState(mnDate);
   const [maxDate, setMaxDate] = useState(mxDate);
   const [data,setData]=useState();
   const [expoMarkup,setExpoMarkup]=useState(0.00);
   const [agentMarkup,setAgentMarkup]=useState(0.00);
   const [subAgentMarkup,setSubAgentMarkup]=useState(0.00);
   const [airlineCode,setAirlineCode]=useState('');
   
   let passeng =[];
//const farerule=fare.FareRules;
  const [refundable, setRefumdable] = useState("Refundable");
  const [editedFirstName, setEditedFirstName] = useState("");
  const [editedLastName, setEditedLastName] = useState("");
  const [editedDateOfBirth, setEditedDateOfBirth] = useState("");
  const [editedTitle, setEditedTitle] = useState("");
  const [editedPPNumber, setEditedPPNumber] = useState("");
  const [editedPPExpireDate, setEditedPPExpireDate] = useState("");
  const [editedPaxType, setEditedPaxType] = useState(0);
  const [editedPassType, setEditedPassType] = useState(" Adult ");
  const [editView, setEditView] = useState("block");
  const [tboService, setTboService] = useState(0.00);
  const [tboDiscount, setTboDiscount] = useState(0.00);
   const [passengers,setPassengers] =useState(passeng);
   const [heading,setHeading]=useState("Adult Passenger");
   const [resultindex,setResultindex]=useState('');
   const [traceId,setTraceId]=useState('');
   const [priceOb,setPriceOb]=useState(0);

   const [passenStr, setPassenStr] = useState('');
   const [fare, setFare] = useState();
   const [farequote, setFarequote] = useState();
   const [grandTotal, setGrandTotal] = useState(0.00);
  const [agentBalance, setAgentBalance] = useState(0.00);
  const [prevent, setPrevent] = useState(1);
  const [ssrmeal, setSSRmeal] = useState([]);
  const [ssrbag, setSSRbag] = useState([
    [
        {
            "AirlineCode": "",
            "FlightNumber": "",
            "WayType": 2,
            "Code": "",
            "Description": 2,
            "Weight": 0,
            "Currency": "INR",
            "Price": 0.00,
            "Origin": "",
            "Destination": ""
        }
    ]
]);
  const [ssrseat, setSSRseat] = useState([]);
  const [submitbtn, setSubmitbtn] = useState({ display: 'block' });
  const [ordstr, setOrdstr] = useState(0);
  const [useremail, setUseremail] = useState(sessionStorage.getItem('emailll'));
  let passString=sessionStorage.getItem('passString');
  const [isLCC, setIsLCC] = useState(true);
  const [documentDetails, setDocumentDetails] = useState([]);
  const [resultFareType, setResultFareType] = useState("RegularFare");
  const [totalMeal, setTotalMeal] = useState(0.00);
  const [totalBags, setTotalBags] = useState(0.00);
  const [selectedMealDynamic, setSelectedMealDynamic] = useState([]);
  const [selectedBagDynamic, setSelectedBagDynamic] = useState([]);
  const [editedMealDynamic, setEditedMealDynamic] = useState([]);
  const [editedBagDynamic, setEditedBagDynamic] = useState([]);
  const [editedFare, setEditedFare] = useState([]);
   const [adultss1, setAdultss1] = useState(0);
   const [childss1, setChildss1] = useState(0);
   const [infants1, setInfants1] = useState(0);
   const [email, setEmail] = useState('');
   const [ccode, setCcode] = useState('+91');
   const [mobile, setMobile] = useState('');
   const [country, setCountry] = useState('IN');
   const [city, setCity] = useState('');
   const [address1, setAddress1] = useState('');
   const [address2, setAddress2] = useState('');
   const [basefare, setBasefare] = useState(0.00);
   const [servicefare, setServicefare] = useState(0.00);
   const [totalfare, setTotalfare] = useState(0.00);

    const parseHTMLString = (htmlString) => {
        const parser = new DOMParser();
        const parsedDocument = parser.parseFromString(htmlString, 'text/html');
        return parsedDocument.body.textContent;
      };

      const today = new Date();
      const twelveYearsAgo = new Date();
      twelveYearsAgo.setFullYear(today.getFullYear() - 12);
      const twoYearsAgo = new Date();
      twoYearsAgo.setFullYear(today.getFullYear() - 2);
      const tenYearsAfter = new Date();
      tenYearsAfter.setFullYear(today.getFullYear() + 10);
      const hundredBack=new Date();
      hundredBack.setFullYear(today.getFullYear() - 100);
      const [minDt,setMinDt]=useState(hundredBack);
      const [maxDt,setMaxDt]=useState(twelveYearsAgo);
      const [dCount,setDCount]=useState(100);
      const [adultFare, setAdultFare] = useState(null);
      const [childFare, setChildFare] = useState(null);
      const [infantFare, setInfantFare] = useState(null);
      const setEditedDateOfBirthFun = (date)=>
      {
        const dd=moment(date).format('YYYY-MM-DD');
        setEditedDateOfBirth(dd);
        }
      const setEditedPPExpireDateFun = (date)=>
      {
        const dd=moment(date).format('YYYY-MM-DD');
        setEditedPPExpireDate(dd);
        }
    //mnDate.setDate(currentDate.getDate() - 729);
    useEffect(() => {   
      const fetchmarkup = async () => {
        //alert(basefare);
        if(basefare>0){
       try {
          const datt={
              "branchid": branchId
              }
         const response = await axios.post('https://b2b.travelxpo.in/api/get-markup-data',datt);	 
        // console.log("mmmmmmmm..."+JSON.stringify(response.data));
         const agent_type=response.data[0].agent_type;
          let markup_percent= 0.00;
          let branch_markup = 0;
          let mrkup_t=0.00;
          let mrkup_m=0.00;
          let mrkup_s=0.00;
         if(agent_type=="txpo")
         {
          //only travelxpo
          const markup_type_t = response.data[0].markup_type;
          const markup_percent_t = response.data[0].markup_percent;
          const branch_markup_t = response.data[0].branch_markup;
         // markup_percent=parseFloat(markup_percent_t);
         // branch_markup=parseInt(branch_markup_t);
          mrkup_t=parseFloat(basefare)*parseFloat(markup_percent_t)/100+parseFloat(branch_markup_t);
          setExpoMarkup(mrkup_t);
         }
         else if(agent_type=="main")
         {
          //txpo and main                
          const markup_type_m = response.data[0].markup_type;
          const markup_percent_m = response.data[0].markup_percent;
          const branch_markup_m = response.data[0].branch_markup;
          
          const markup_type_t = response.data[1][0].markup_type;
          const markup_percent_t = response.data[1][0].markup_percent;
          const branch_markup_t = response.data[1][0].branch_markup;
          //markup_percent=parseFloat(markup_percent_m)+parseFloat(markup_percent_t);
          //branch_markup=parseInt(branch_markup_m)+parseInt(branch_markup_t);
          mrkup_t=parseFloat(basefare)*parseFloat(markup_percent_t)/100+parseFloat(branch_markup_t);
          setExpoMarkup(mrkup_t);
          mrkup_m=parseFloat(basefare)*parseFloat(markup_percent_m)/100+parseFloat(branch_markup_m);
          setAgentMarkup(mrkup_m);
          
         }
         else if(agent_type=="sub")
         {
          const markup_type_s = response.data[0].markup_type;
          const markup_percent_s = response.data[0].markup_percent;
          const branch_markup_s = response.data[0].branch_markup;

          const markup_type_m = response.data[1][0].markup_type;
          const markup_percent_m = response.data[1][0].markup_percent;
          const branch_markup_m = response.data[1][0].branch_markup;

          const markup_type_t = response.data[1][1][0].markup_type;
          const markup_percent_t = response.data[1][1][0].markup_percent;
          const branch_markup_t = response.data[1][1][0].branch_markup;
         // markup_percent=parseFloat(markup_percent_s)+parseFloat(markup_percent_m)+parseFloat(markup_percent_t);
          //branch_markup=parseInt(branch_markup_s)+parseInt(branch_markup_m)+parseInt(branch_markup_t);
          mrkup_t=parseFloat(basefare)*parseFloat(markup_percent_t)/100+parseFloat(branch_markup_t);
          setExpoMarkup(mrkup_t);
          mrkup_m=parseFloat(basefare)*parseFloat(markup_percent_m)/100+parseFloat(branch_markup_m);
          setAgentMarkup(mrkup_m);
          mrkup_s=parseFloat(basefare)*parseFloat(markup_percent_s)/100+parseFloat(branch_markup_s);
          setSubAgentMarkup(mrkup_s);
        }

         
       //  sessionStorage.setItem('Markup', branch_markup);
       //  sessionStorage.setItem('Markuppercent', markup_percent);
       console.log("price"+parseFloat(basefare));
         console.log("tr..."+mrkup_t);
         console.log("ag..."+mrkup_m);
         console.log("su..."+mrkup_s);
     	
          } catch (error) {
              if (axios.isAxiosError(error)) {
                  console.error('Axios Error:', error.response.data);
                } else {
                  console.error('Non-Axios Error:', error);
                }
              }
            }
         }
         fetchmarkup();   
  },[branchId,basefare]) ;
 
  useEffect(() => {
    const fetchBalance = async () => {
     try {
    
        const response = await axios.post('https://api.travelxpo.in/auth/b2c/get-balance');
       
        if(response.data.Error.ErrorCode==0)
               {                
                const agentBalance1=response.data.CashBalance;
                setAgentBalance(agentBalance1);
               }
        else{
          console.log(response.data.Error.ErrorMessage);
        }
        } catch (error) {
            if (error.isAxiosError) {
                // Handle AxiosError here
                console.error(error.response); // Error response
                console.error(error.request); // Request that caused the error
                console.error(error.message); // Error message
              } else {
                console.error(error);     
              }
            }
        };
        fetchBalance();                
      },[]) ;
      useEffect(() => {
        const gtotal=parseFloat(basefare)+parseFloat(servicefare)+parseFloat(totalBags)+parseFloat(totalMeal)+parseFloat(tboService)-parseFloat(tboDiscount)  ; 
      if(agentBalance>0 && gtotal>0){
       
        setGrandTotal(gtotal);  
       //alert(gtotal);
           if(agentBalance<gtotal) 
            {
              setPrevent(0);
              alert("Error code: 1001 \n Cann`t proceed...\nPlease Contact Support. ");
            } 
            else{
              setPrevent(1); 
            }
          }
      },[totalBags,totalMeal,basefare,servicefare,tboService,tboDiscount,agentBalance]) ;
    useEffect(() => {
        let paass=[];
        setPassengers(paass);
        setBtnhead("Add New");
        const    adultss = localStorage.getItem('adultCount');
        const   childss = localStorage.getItem('childCount');
        const  infants = localStorage.getItem('infantCount'); 
        
        setAdultss1(adultss);
      setChildss1(childss);
     setInfants1(infants); 
  
        const resultindex1 = localStorage.getItem('resultindex');
        const traceId1 = localStorage.getItem('traceId');
        const priceOb1 = localStorage.getItem('price');
        const storedValue = localStorage.getItem('tokenValue');
        const journeyType1 = localStorage.getItem('journeyType');
        if (journeyType1) {
          setJourneyType(journeyType1);
        }
        if (adultss>0) {
          setAdult(adultss);
         // adultss1 = adultss;
      }
      if (childss>0) {
          setChild(childss);
         // childss1 = childss;
      }
      if (infants>0) {
          setInfant(infants);
        //  infants1 = infants;
      }
      if (adultss==0 && childss>0) {
        setMaxDt(twoYearsAgo);
        setMinDt(twelveYearsAgo);
        setDCount(10);
        setDobtext("Between 2-12 years");
       // adultss1 = adultss;
    }
       // console.log(storedValue);
        if (storedValue) {
          setValue(storedValue);
        }
        if (resultindex1) {
            setResultindex(resultindex1);
          }
        if (traceId1) {
            setTraceId(traceId1);
          }
      if(priceOb1)
      {
        setPriceOb(priceOb1);
      }
      
     
   
    const allcust=localStorage.getItem('allss');
    if (allcust) {
        setPassenStr(allcust);
      }
    
    
     
     
     const data=
     { 
        "ResultIndex": resultindex1,
        "TraceId": traceId1
       };
setData(data);
      },[]) ;
         
useEffect(() => {

  if(value){
    const fetchData = async () => {
     try {
        const response = await axios.post('https://api.travelxpo.in/auth/fare-rule', data, {
          headers: {
            Authorization: `Bearer ${value}`,
          },
        });
        console.log("Data----"+JSON.stringify(response.data)) ;
        if(response.data.Response.Error.ErrorCode=="0")
               { 
                setFare(response.data);
                //console.log("tttt:"+response.data.Response?.FareRules[0].Airline);
                 setAirlineCode(response.data.Response?.FareRules[0].Airline);
                 //setAirlineCode('6E');
               }
        else{
          console.log(response.data.Response.Error.ErrorMessage);
           // alert(response.data.Response.Error.ErrorMessage);
        }
        } catch (error) {
            if (error.isAxiosError) {
                // Handle AxiosError here
                console.error(error.response); // Error response
                console.error(error.request); // Request that caused the error
                console.error(error.message); // Error message
              } else {
                console.error(error);     
              }
            }
        };
        const fetchSSR = async () => {
               
               
         // alert("in fetchSSR.."); 
         try {
            const responsessr = await axios.post('https://api.travelxpo.in/auth/ssr-copy', data, {
              headers: {
                Authorization: `Bearer ${value}`, 
              },
            });
           // alert("ssr");
          // alert("Datassr---"+JSON.stringify(responsessr.data)) ;
            if(responsessr.data.Response.Error.ErrorCode=="0")
                   { 
                      //setSSRbag(baggageData[0]);
          //setSSRmeal(mealDynamic[0]);
         
            const meal=responsessr.data.Response.MealDynamic[0];
            meal.forEach(item => {
              item.Price = parseFloat(Number(item.Price));
            });
            setSSRmeal(meal);
          //  alert(JSON.stringify(meal));
            const SSR=responsessr.data.Response.Baggage[0];
            SSR.forEach(item => {
              item.Price = parseFloat(Number(item.Price));
            });
            //const selectedBaggage = SSR.filter((item, index) => selectedItems[index]);
           // alert(JSON.stringify(SSR));
                              setSSRbag(SSR);
                              setSSRseat(responsessr.data.Response.SeatDynamic.SegmentSeat.RowSeats);
                   }
            else{
             console.log(responsessr.data.Response.Error.ErrorMessage);
            }
            } catch (error) {
             if (error.isAxiosError) { 
                 // Handle AxiosError here
                 console.error(error.response); // Error response
                 console.error(error.request); // Request that caused the error
                 console.error(error.message); // Error message
               } else {
                 console.error(error);         
               }
                }

               


            };
        const fetchFareQuoteData = async () => {
           // alert("in fetchFareQuoteData");
            try {
               const responseqt = await axios.post('https://api.travelxpo.in/auth/fare-quote', data, {
                 headers: {
                   Authorization: `Bearer ${value}`,
                 },
               });
          
               if(responseqt.data.Response.Error.ErrorCode=="0")
                      { 
                        setFarequote(responseqt.data);
                        const basef=responseqt.data.Response.Results.Fare.OfferedFare;
                        const tboserice=responseqt.data.Response.Results.Fare.ServiceFee;
                        //setTboService(tboserice);
                        setBasefare(basef);
                        setServicefare(markup);
                        
                      
                          const reff=responseqt.data.Response.Results.IsRefundable;
                          const lcc=responseqt.data.Response.Results.IsLCC;
                          const resultFareType1=responseqt.data.Response.Results.ResultFareType;
                          setResultFareType(resultFareType1);
                          setIsLCC(lcc);
                          if(reff==false)
                          {
                            setRefumdable("Non Refundable"); 
                          }
                          const fareBreakdown=responseqt.data.Response.Results.FareBreakdown ;
                          
                          fareBreakdown.forEach(item => {
                            if (item.PassengerCount > 1) {
                              item.BaseFare = item.BaseFare / item.PassengerCount;
                              item.Tax = item.Tax / item.PassengerCount;
                          
                              if (item.TaxBreakUp && item.TaxBreakUp !== null) {
                                item.TaxBreakUp = item.TaxBreakUp.map(taxItem => ({
                                  ...taxItem,
                                  value: taxItem.value / item.PassengerCount
                                }));
                              }
                          
                              item.PassengerCount = 1;
                            }
                            switch(item.PassengerType) {
                              case 1:
                               // console.log("Dataquote---item"+JSON.stringify(item)) ;
                                setAdultFare(item);
                                break;
                              case 2:
                                setChildFare(item);
                                break;
                              case 3:
                                setInfantFare(item);
                                break;
                              default:
                                break;
                            }
                          });
                          fetchSSR();
                      }
               else{
                console.log(responseqt.data.Response.Error.ErrorMessage);
               }
               } catch (error) {
                if (error.isAxiosError) {
                    // Handle AxiosError here
                    console.error(error.response); // Error response
                    console.error(error.request); // Request that caused the error
                    console.error(error.message); // Error message
                  } else {
                    console.error(error);       
                  }
                   }
               };
              
        fetchData();

      fetchFareQuoteData();
      
                  }
    },[value]) ;
    
    useEffect(() => {
      const initialSelected = ssrbag.findIndex(item => item.Price === 0.00);
      if (initialSelected !== -1) {
        const updatedSelection = Array(ssrbag.length).fill(false);
        updatedSelection[initialSelected] = true;
        const selectedBag = ssrbag[initialSelected];
        const price = parseFloat(selectedBag.Price);
        setSelectedItems(updatedSelection);
        setTotalBags(price);

      }
    }, [ssrbag]);

    useEffect(() => {
      const initialSelected = ssrmeal.findIndex(item => item.Price === 0);
      if (initialSelected !== -1) {
        const updatedSelectionMeal =Array(ssrmeal.length).fill(false);// [...selectedMeals];
          updatedSelectionMeal[initialSelected] = true;//!updatedSelectionMeal[index];
          const selectedMeal = ssrmeal[initialSelected];
          const price = parseFloat(selectedMeal.Price);

        setSelectedMeals(updatedSelectionMeal);
        setTotalMeal(price);
    
      }
    }, [ssrmeal]);

    const [showDiv, setShowDiv] = useState(false);

    const toggleDiv = () => {
      setShowDiv(!showDiv);
    };
    const handleInputChange = (event) => {
      const value = event.target.value;
      // Convert the input value to a float and update the state
      setTboService(value !== '' ? parseFloat(value) : '0.00');
    };
    const handleInputChangeDiscount = (event) => {
      const value = event.target.value;
      // Convert the input value to a float and update the state
      setTboDiscount(value !== '' ? parseFloat(value) : '0.00');
    };
    const validationSchema = yup.object({
        title:yup
          .string()
          .required('Required'),
          customerfName: yup
          .string()
          .max(20, 'Must be 20 characters or less') 
          .required('First Name is required')
          .test('different-from-lastname', 'First Name cannot be the same as Last Name', function(value) {
            return value !== this.parent.customerlName;
          }),
          customerlName: yup
          .string()
          .max(20, 'Must be 20 characters or less') 
          .required('Last Name is required')
          .test('no-spaces', 'Last Name cannot contain spaces', function(value) {
            return !/\s/.test(value);
          }),
        dob: yup
          .date('Invalid date of Birth')
          .required('Required')
          .min(minDate, `Date should be after ${minDate.toLocaleDateString()}`)
          .max(maxDate, `Date should not exceed ${maxDate.toLocaleDateString()}`),
        nationality: yup
          .string()
          .required('Required'),
        ppnumber: yup
          .string()
          .required('Required'),
        expirydate: yup
          .date('Invalid expiry date')
          .required('Required'),
        email: yup
          .string()
          .email('Invalid email')
          .required('Required'),
        ccode: yup
          .string()
          .required('Required'),
        mobile: yup
          .string()
          .min(10, 'Must be at least 10 characters')
          .required('Required'),
        country: yup
          .string()
          .required('Required'),
        city: yup
          .string()
          .required('Required'),
        address1: yup
          .string()
          .required('Required'),
        address2: yup
          .string()
          .required('Required'),
    
      });
    const initialValues = {
        title:'Mr',
        customerfName : '',
        customerlName : '',
        dob:'',
        nationality: 'IN',
        ppnumber:'',
        expirydate:'',
        email:'',
        ccode:'+91',
        mobile : '',
        country:'IN',
        city:'',
        address1:'',
        address2:'',

      };
      
      const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values) => {
        const selectedMealDynamic1=selectedMealDynamic;
        const selectedBagDynamic1=selectedBagDynamic;
         let addc=adult;
         let cdc=child;
         let idc=infant;
         let gent=1;
         if(values.title=='Mr' || values.title=='Mstr')
                {gent=1;}
         else  {gent=2;}     
        setAddress1(values.address1);
        setAddress2(values.address2);
        setEmail(values.email);
        setMobile(values.mobile);
        setCcode(values.ccode);
        setCity(values.city);
        setCountry(values.country);
         if(adult==0 && child==0 && infant==0)
         {
           setHeading("Submit the Passengers Information"); 
           setBtnhead("Submit");
           setEditView("block");
         }
         if(infant>0 && addc==0 && cdc==0)
            {
            
               const dattaI={
               "Title":title,
               "FirstName":values.customerfName,
               "LastName":values.customerlName,
               "PaxType": 3,
               "DateOfBirth":moment(values.dob).format('YYYY-MM-DD')+"T00:00:00",
               "Gender": gent,
               "PassportNo": values.ppnumber,
               "PassportExpiry": moment(values.expirydate).format('YYYY-MM-DD')+"T00:00:00",
               "AddressLine1": values.address1,
               "AddressLine2": values.address2,
                "City": values.city,
                "CountryCode": values.country,
                "CellCountryCode": values.ccode,
                "ContactNo": values.mobile,
                "Nationality": values.nationality,
                "Email": values.email,
                "IsLeadPax": true,
                "FFAirlineCode": null,
                "FFNumber": "",
                "Baggage":selectedBagDynamic1,
                "MealDynamic":selectedMealDynamic1,
                "Fare":infantFare,
                "GSTCompanyAddress": "",
                "GSTCompanyContactNumber": "",
                "GSTCompanyName": "",
                "GSTNumber": "",
                "GSTCompanyEmail": ""
                };
               passeng.push(dattaI);
               setSelectedMealDynamic([]);
               setSelectedBagDynamic([]);
              // setPassengers(passeng);
               idc=infant-1;
               setInfant(idc);
               if(idc==0)
               {setHeading("Please Submit the form");
               setBtnhead("Submit");
               setEditView("block")
                }
                else
                {setHeading("Infant  Passenger");
                mxDate.setFullYear(currentDate.getFullYear() - 0);
              mnDate.setFullYear(currentDate.getFullYear() - 2);
                setDobtext("between 0-2 years");
                setMaxDt(today);
                setMinDt(twoYearsAgo);
                setDCount(2);
                }
            const updatedPassengers = [...passengers, dattaI];
            setPassengers(updatedPassengers);
            }
         if(child>0 && addc==0)
         {
            //const y=childss1-cdc;
            const dattaC={
            "Title":title,
            "FirstName":values.customerfName,
            "LastName":values.customerlName,
            "PaxType": 2,
            "DateOfBirth":moment(values.dob).format('YYYY-MM-DD')+"T00:00:00",
            "Gender": gent,
            "PassportNo": values.ppnumber,
            "PassportExpiry": moment(values.expirydate).format('YYYY-MM-DD')+"T00:00:00",
            "AddressLine1": values.address1,
            "AddressLine2": values.address2,
             "City": values.city,
             "CountryCode": values.country,
             "CellCountryCode": values.ccode,
             "ContactNo": values.mobile,
             "Nationality": values.nationality,
             "Email": values.email,
             "IsLeadPax": true,
             "FFAirlineCode": null,
             "FFNumber": "",
             "Baggage":selectedBagDynamic1,
              "MealDynamic":selectedMealDynamic1,
              "Fare":childFare,
             "GSTCompanyAddress": "",
             "GSTCompanyContactNumber": "",
             "GSTCompanyName": "",
             "GSTNumber": "",
             "GSTCompanyEmail": ""
        };
            passeng.push(dattaC);

          setSelectedMealDynamic([]);
          setSelectedBagDynamic([]);
            cdc=child-1;
            setChild(cdc);
            if(cdc==0 && idc==0)
            {setHeading("Please Submit the form");
            setBtnhead("Submit");
            setEditView("block")
             }
            
            else if(cdc==0)
            {setHeading("Infant  Passenger");
            mxDate.setFullYear(currentDate.getFullYear() - 0);
              mnDate.setFullYear(currentDate.getFullYear() - 2);
              setMinDate(mnDate);
              setMaxDate(mxDate);
              setDobtext("between 0-2 years");
              setMaxDt(today);
              setMinDt(twoYearsAgo);
              setDCount(2);
            }
             else
             {setHeading("Child  Passenger");
             mxDate.setFullYear(currentDate.getFullYear() - 2);
              mnDate.setFullYear(currentDate.getFullYear() - 12);
              setMinDate(mnDate);
              setMaxDate(mxDate);
              setDobtext("between 2-12 years");
              setMaxDt(twoYearsAgo);
              setMinDt(twelveYearsAgo);
              setDCount(10);
              
            }
             const updatedPassengers = [...passengers, dattaC];
          setPassengers(updatedPassengers);
         }
            if(adult>0)
            {
             //   const z=adultss1-addc;
                
                    const dattaA={
                    "Title": title,
                    "FirstName":values.customerfName,
                    "LastName":values.customerlName,
                    "PaxType": 1,
                    "DateOfBirth":moment(values.dob).format('YYYY-MM-DD')+"T00:00:00",
                    "Gender": gent,
                    "PassportNo": values.ppnumber,
                    "PassportExpiry": moment(values.expirydate).format('YYYY-MM-DD')+"T00:00:00",
                    "AddressLine1": values.address1,
                    "AddressLine2": values.address2,
                        "City": values.city,
                        "CountryCode": values.country,
                        "CellCountryCode": values.ccode,
                        "ContactNo": values.mobile,
                        "Nationality": values.nationality,
                        "Email": values.email,
                        "IsLeadPax": true,
                        "FFAirlineCode": null,
                        "FFNumber": "",
                        "Baggage":selectedBagDynamic1,
                        "MealDynamic":selectedMealDynamic1,
                        "DocumentDetails":documentDetails,
                        "Fare":adultFare,
                        "GSTCompanyAddress": "",
                        "GSTCompanyContactNumber": "",
                        "GSTCompanyName": "",
                        "GSTNumber": "",
                        "GSTCompanyEmail": ""
                    };
               passeng.push(dattaA);
               setSelectedMealDynamic([]);
               setSelectedBagDynamic([]);
               addc=adult-1;
               setAdult(addc);
               if(addc==0 && cdc==0 && idc==0)
            {setHeading("Please Submit the form");
            setBtnhead("Submit");
            setEditView("block")
             }
              else  if(addc==0 && cdc>0)
              {setHeading("Child  Passenger");
              mxDate.setFullYear(currentDate.getFullYear() - 2);
              mnDate.setFullYear(currentDate.getFullYear() - 12);
              setMinDate(mnDate);
              setMaxDate(mxDate);
              setDobtext("between 2-12 years");
              setMaxDt(twoYearsAgo);
              setMinDt(twelveYearsAgo);
              setDCount(10);
                }
                else if(addc==0 && cdc==0 && idc>0)
            {setHeading("Infant  Passenger");
            mxDate.setFullYear(currentDate.getFullYear() - 0);
              mnDate.setFullYear(currentDate.getFullYear() - 2);
              setMinDate(mnDate);
              setMaxDate(mxDate);
              setDobtext("between 0-2 years");
              setMaxDt(today);
              setMinDt(twoYearsAgo);
              setDCount(2);
            }
               else
               {setHeading("adult  Passenger");
               
               }
               
               const updatedPassengers = [...passengers, dattaA];
                setPassengers(updatedPassengers);
            }
         
            if(addc>0 || cdc>0 || idc>0)
            {
            formik.setFieldValue('customerfName', '');
            formik.setFieldValue('customerlName', '');
            formik.setFieldValue('dob', '');
            formik.setFieldValue('ppnumber', '');
            formik.setFieldValue('expirydate', '');
            }

            const flightchargeOb=parseFloat(priceOb)-parseFloat(markup); 

          if(btnhead=='Submit')
          {


                        const data=
                        {
                            "ResultIndex": resultindex,
                            "agentId":parseInt(agentId),
                            "branchId":parseInt(branchId),
                            "markup":markup,
                            "journeyType":journeyType,
                            "userId":1,
                            "totalBookingFare":priceOb,
                            "flightcharge":flightchargeOb,
                            "adultCount":parseInt(adultss1),
                            "childCount":parseInt(childss1),
                            "infantCount":parseInt(infants1),
                            "Passengers": passengers,
                            "IsLCC":isLCC,
                            "TraceId": traceId,
                            "additional_service":parseFloat(tboService),
                            "additional_discount":parseFloat(tboDiscount),
                            "tbo_price":flightchargeOb,
                            "expo_price":parseFloat(expoMarkup),
                            "agent_price":parseFloat(agentMarkup),
                            "subagent_price":parseFloat(subAgentMarkup) 
                        };
                   
//console.log("datttttt..."+JSON.stringify(data));
if(prevent){   
                    try {
                        const response = await axios.post('https://api.travelxpo.in/auth/booking', data, {
                            headers: {
                              Authorization: `Bearer ${value}`,
                            },
                          });
                          console.log(response.data);
                          if(response.data.Response.Error.ErrorCode=="0")
                          {
                            setResponsebook(response.data);
                           // console.log(response.data);
                            navigate('/booking', { state: { responsebook: response.data } });
                            }
                            else{
                            alert("Error"+response.data.Response.Error.ErrorMessage);
                            }
                        } catch (error) {
                        // Handle errors
                        console.error(error);
                        }
           
                      }
                      else{
                        alert("Error code: 1001 \n Cann`t proceed...\nPlease Contact Support. ");
                      }
            }

            

        },
      });
	  const [title, setTitle] = useState('Mr');
      const [customerfName, setCustomerfName] = useState('');
      const [customerlName, setCustomerlName] = useState('');
      const [dob, setDob] = useState('');
      const [nationality, setNationality] = useState('IN');
      const [ppnumber, setPpnumber] =useState('');
      const [expirydate, setExpirydate] = useState('');
					
      const [showModal, setShowModal] = useState(false);
      const [selectedPassenger, setSelectedPassenger] = useState(null);
      const [selectedIndex, setSelectedIndex] = useState(0);
      const handleChange = (event) => {
        // alert(event.target.value);
         setTitle(event.target.value);
       };
    const [showBaggage, setShowBaggage] = useState(false);
    const [showMeals, setShowMeals] = useState(false);
    const [showBaggageFirst, setShowBaggageFirst] = useState(false);
    const [showMealsFirst, setShowMealsFirst] = useState(false); 
    const handleBaggageClick = () => {

      setShowBaggage(prevShowBaggage => !prevShowBaggage);
      setShowMeals(false);
    };
  
    const handleMealsClick = () => {
      setShowBaggage(false);
      setShowMeals(prevShowMeals => !prevShowMeals);
      
    };
    const handleMealsClickFirst = (event) => {
      event.preventDefault();
      event.stopPropagation();
      setShowBaggageFirst(false);
      setShowMealsFirst(prevShowMealsFirst => !prevShowMealsFirst);
      
    };
    const handleBaggageClickFirst = (event) => {
      event.preventDefault();
      event.stopPropagation();
      setShowBaggageFirst(prevShowBaggageFirst => !prevShowBaggageFirst);
      setShowMealsFirst(false);
      
    };
      const openModalR = (passenger,index) => { 
        setSelectedIndex(index);
        setSelectedPassenger(passenger);
        setEditedTitle(passenger.Title);
        setEditedFirstName(passenger.FirstName);
        setEditedLastName(passenger.LastName);
        setEditedDateOfBirth(passenger.DateOfBirth.replace(/T00:00:00$/, ""));
        setEditedPPNumber(passenger.PassportNo);
        setEditedPPExpireDate(passenger.PassportExpiry.replace(/T00:00:00$/, ""));
        setEditedPaxType(passenger.PaxType);
        setEditedMealDynamic(passenger.MealDynamic);
        setEditedBagDynamic(passenger.Baggage);
        setEditedFare(passenger.Fare);
        if(passenger.PaxType==1)
        {
          setEditedPassType(" Adult Passenger Age Above 12 Years");
          setMinDt(hundredBack);
          setMaxDt(twelveYearsAgo);
          setDCount(100);
        }
        else if(passenger.PaxType==2)
        {
          setEditedPassType(" Child  Passenger Age Between 2 and 12 Years");
          setMinDt(twelveYearsAgo);
          setMaxDt(twoYearsAgo);
          setDCount(10);
        }
        else{
          setEditedPassType(" Infant  Passenger Age below 2 Years");
          setMinDt(twoYearsAgo);
          setMaxDt(today);
          setDCount(2);
        }
        setShowModal(true);
      };
      const closeModal = () => {
        setShowModal(false);
        setSelectedPassenger(null);
      };
    
      const saveEditedPassenger = (editedPassenger) => {
        // Update the passenger in your data
        const updatedPassengers = passengers.map((passenger) =>
          passenger === selectedPassenger ? editedPassenger : passenger
        );

        setPassengers(updatedPassengers);
        closeModal();
      };

  const handleSave = () => {
    let g=1;
    let gent=1;
    if(editedTitle=='Mr'|| editedTitle=='Mstr')
        {gent=1;}
         else  {gent=2;}  
    const updatedPassenger = {
      Title:editedTitle,
      FirstName: editedFirstName,
      LastName: editedLastName,
      PaxType: editedPaxType,
      DateOfBirth: editedDateOfBirth+"T00:00:00",
      PassportNo: editedPPNumber,
      PassportExpiry: editedPPExpireDate+"T00:00:00",
      Gender:gent,
      AddressLine1: address1,
      AddressLine2 : address2,
      City: city,
      CountryCode:country,
      CellCountryCode:ccode,
      ContactNo:mobile,
      Nationality:"IN",
      Email:email,
      IsLeadPax:true,
      FFAirlineCode:null,
      FFNumber:"",
      MealDynamic:editedMealDynamic,
      Baggage:editedBagDynamic,
      Fare:editedFare,
      GSTCompanyAddress:"",
      GSTCompanyContactNumber:"",
      GSTCompanyName:"",
      GSTNumber:"",
      GSTCompanyEmail:"",

    };
    onSave(updatedPassenger);
    onClose();
  };
  const onSave = (updatedPassenger) => {
   // console.log('Saving updated passenger:', updatedPassenger);
    //setPassengers(updatedPassenger);

    const indexToUpdate = selectedIndex;//passengers.findIndex((passenger) => passenger.id === updatedPassenger.id);
    const updatedPassengers = [...passengers];
   
    updatedPassengers[indexToUpdate] = updatedPassenger;

    setPassengers(updatedPassengers);
  };
  const onClose = () => {
    setShowModal(false);
  };
  function formatDateString(dateString) {
    const dateParts = dateString.split('T')[0].split('-');
    return `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
  }
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedMeals, setSelectedMeals] = useState([]);
  // Function to handle item selection
  
  const handleItemSelect = (index) => {
    const updatedSelection = Array(ssrbag.length).fill(false);
    updatedSelection[index] = true;
    const selectedBag = ssrbag[index];
    const price = parseFloat(selectedBag.Price);
    setSelectedItems(updatedSelection);
    setTotalBags(price);  
  };
  const submitSelectedItems = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const selectedBagDynamic = ssrbag.filter((item, index) => selectedItems[index]);
    const selectedBaggageWithFloatPrice = selectedBagDynamic.map(item => ({
      ...item,
      Price: parseFloat(Number(item.Price)) // Convert the price to float using parseFloat()
  }));
  setSelectedBagDynamic(selectedBaggageWithFloatPrice);
  //alert(JSON.stringify(selectedBagDynamic));
  };
  const handleMealSelect = (index) => {
    const updatedSelectionMeal =Array(ssrmeal.length).fill(false);// [...selectedMeals];
    updatedSelectionMeal[index] = true;//!updatedSelectionMeal[index]; 
    const selectedMeal = ssrmeal[index];
    const price = parseFloat(selectedMeal.Price);
    /*if (!updatedSelectionMeal[index]) {
      setTotalMeal(price);} 
      else {setTotalMeal( price);}*/
    setSelectedMeals(updatedSelectionMeal);
    setTotalMeal(price);
  };
  const handleChangeNumber = (index, quantity) => {
    const selectedMeal = ssrmeal[index];
    const price = parseFloat(Number(selectedMeal.Price * quantity));
    let updatedTotalMeal = totalMeal;
    if (selectedMeals[index]) {
      updatedTotalMeal = parseFloat(Number(totalMeal - (selectedMeal.Quantity * parseFloat(selectedMeal.Price)) + price));
      }
    selectedMeal.Quantity=quantity;
    setTotalMeal(updatedTotalMeal);
    selectedMeal.Quantity = quantity;
    const updatedSelectionMeal = [...selectedMeals];
    setSelectedMeals(updatedSelectionMeal);
    const dynamicSelection = ssrmeal.filter((item, index) => updatedSelectionMeal[index]);
    setSelectedMealDynamic(dynamicSelection);
  };
  
  
  
  const submitSelectedMeals= (event) => {
    event.preventDefault();
    event.stopPropagation();
    const selectedMealDynamic = ssrmeal.filter((item, index) => selectedMeals[index]);
    const selectedMealDynamicWithFloatPrice = selectedMealDynamic.map(item => ({
      ...item,
      Price: parseFloat(Number(item.Price)) // Convert the price to float using parseFloat()
  }));
    setSelectedMealDynamic(selectedMealDynamicWithFloatPrice);
   //alert(JSON.stringify(selectedMealDynamic));
  };
  const [selectedMealIndex, setSelectedMealIndex] = useState(null);
  
  const handleMealSelectEdit = (index) => {
    const selectedMeal = ssrmeal[index];
    
    // Replace the first meal with the selected meal
    const updatedMeals = [...editedMealDynamic];
    updatedMeals[0] = selectedMeal;
    
    setEditedMealDynamic(updatedMeals);
  };
  const handleMealCancel = () => {
    setEditedMealDynamic([]);
  };
  const [selectedBagIndex, setSelectedBagIndex] = useState(null);
  const handleItemSelectEdit = (index) => {
    const selectedBag = ssrbag[index];
    
    // Replace the first meal with the selected meal
    const updatedBags = [...editedBagDynamic];
    updatedBags[0] = selectedBag;
    
    setEditedBagDynamic(updatedBags);
  
  };
  const handleBagCancel = () => {
    setEditedBagDynamic([]);
  };
  useEffect(() => {
    
    if (!airlineCode) return;  // Ensure candidateId is available
    const postData = {
      "branchid":branchId,
      "airlineCode": airlineCode,  // Adjust the payload as needed
    };
    
    axios.post('https://b2b.travelxpo.in/api/getAirlineMarkup', postData)
      .then(response => {
        
      
        const data = response.data;  // Access the data part of the response

        // Ensure the response contains the expected array
        if (Array.isArray(data)) {
          data.forEach(item => {
            const branchId = item.branch_id;
            const markupType = item.markup_type;
            const markupValue = item.markup_value;
            const markupAmount = item.markup_amount;

            const airlinemarkup = (parseFloat(basefare) * parseFloat(markupValue)) / 100 + parseFloat(markupAmount);

            setTboService(airlinemarkup);
           // console.log(`Branch ID: ${branchId}`);
          //  console.log(`Markup Type: ${markupType}`);
           // console.log(`Markup Value: ${markupValue}`);
           // console.log(`Markup Amount: ${markupAmount}`);
          });
        } else {
          console.error('Unexpected response format:', data);
        }
        //'branch_id', 'markup_type', 'markup_value', 'markup_amount'
       // setCount(response.data.count); // Update the state with the count
      })
      .catch(error => {
        console.error('There was an error fetching the job application count:', error);
      });
  }, [airlineCode,branchId,basefare]);

  useEffect(() => {
    // Find the index of the previously selected meal
    const selectedIndex = ssrmeal.findIndex(item => item.Code === editedMealDynamic.Code);
    if (selectedIndex !== -1) {
      setSelectedMealIndex(selectedIndex);
    } else {
      setSelectedMealIndex(null); // If the previously selected meal is not found, reset the selected meal
    }
  }, [editedMealDynamic, ssrmeal]);
  useEffect(() => {
    // Find the index of the previously selected meal
    const selectedIndex = ssrbag.findIndex(item => item.Code === editedBagDynamic.Code);
    if (selectedIndex !== -1) {
      setSelectedBagIndex(selectedIndex);
    } else {
      setSelectedBagIndex(null); // If the previously selected meal is not found, reset the selected meal
    }
  }, [editedBagDynamic, ssrbag]);
  useEffect(() => {
    let totalMealPrice = 0;
    let totalBagPrice = 0;
    passengers.forEach(passenger => {
      // Check if the passenger has MealDynamic
      if (passenger.MealDynamic && passenger.MealDynamic.length > 0) {
        // Iterate through MealDynamic of the passenger and sum up the prices
        passenger.MealDynamic.forEach(meal => {
          totalMealPrice += meal.Price;
        });
      }
      if (passenger.Baggage && passenger.Baggage.length > 0) {
        // Iterate through MealDynamic of the passenger and sum up the prices
        passenger.Baggage.forEach(bag => {
          totalBagPrice += bag.Price;
        });
      }
    });
    setTotalMeal(totalMealPrice);
    setTotalBags(totalBagPrice);
    setPriceOb(parseFloat(basefare)+parseFloat(totalMealPrice)+parseFloat(totalBagPrice)+parseFloat(servicefare));
   // setFlightcharge(flightcharge+totalMealPrice+totalBagPrice);
  }, [passengers]);
const [documentId, setDocumentId] = useState("");
const handleDocumentIdChange = (e) => {
  setDocumentId(e.target.value);
  const docid=e.target.value;
  let typeid='';
  if(resultFareType==3)
  {typeid='StudentId';}
  else if(resultFareType==4)
    {typeid='MilitaryId';}
  else if(resultFareType==5)
    {typeid='SeniorCitizenId';}
  setDocumentDetails([
    {
      "DocumentTypeId": typeid,
      "DocumentNumber": docid
    }
  ]);

};
const renderDocumentIdInput = () => {
  if (resultFareType !== "RegularFare") {
    return (
      <div>
        <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5 form-group">
        <label htmlFor="documentId">{resultFareType} Document ID:</label>
        <div className="input_icon">
        <TextField
          type="text"
          className='form-control'
          id="documentId"
          value={documentId}
          onChange={handleDocumentIdChange}
          inputProps={{ style: { width: '250px' } }}
          required
        />
        </div>
        </div>
      </div>
    );
  }
  return null;
};
  
  return (
    <div>
        <Navbar />
         {/* <Sidebar /> */}
         <div className="main-content">

<div className="page-content"   style={{backgroundColor:"#fff"}}>
    <div className="container passengersinfo">

        <div className="row">
            <div className="col-8">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                 <strong><p className="mb-sm-0">Passengers: {passenStr} </p></strong>   
                </div>
                <div className="col-lg-12 detailsview">
                        <div className="card">
                            <div className="card-body">
                              <h4>FLIGHT DETAILS</h4>
                            </div>
                            <div className="cardsection">
                              <div className="row p-3">
                                <div className="col-lg-6 col-4">
                                  <h3 class="pt-2"></h3>
                                </div>
                                <div className="col-lg-3 col-6 text-end linkssec">
                                  <p class="pt-2">Baggage and fare rules</p>
                                </div>
                                <div className="col-lg-3 text-end">
                                   <button className="btn btn-dark" > {refundable}</button>
                                </div>
                              </div>
                              <div className="card">
                                <div className="card-body p-0">
                                  <div className="table-responsive mt-4">
                                    <table className="table dt-responsive tableflights bg-white table-borderless">
                                      <tbody>
                                      {farequote && farequote.Response.Results.Segments.map((segment, segmentIndex) => (
                                      <React.Fragment key={segmentIndex}>
                                        {segment.map((seggm, index) => (
                                          
                                          <tr key={index} style={{ border: '1px solid #b7bcc1' }}>
                                            
                                          <th style={{width:"15%",paddingLeft: "1rem"}}>
                                          {/* {segmentIndex === 1 && <h4>RETURN</h4>} */}
                                          {/* <p>{seggm?.Destination?.Airport?.AirportCode}{seggm?.FlightStatus}{seggm?.StopPointArrivalTime}cc</p> */} 
                                            {/* <i className="fa fa-square onemenu" aria-hidden="true"></i>  */}
                                            <img className="flight-info-airline__logo airline-logo" src={`assets/images/AirlineLogo_25x25/${seggm?.Airline?.AirlineCode}.gif`} style={{height:"50px",width:"auto"}} alt="" />
                                            <div className="filghtsdetails">
                                             
                                              <p>{seggm?.Airline?.AirlineName}<br />  {seggm?.Airline?.AirlineCode}- {seggm?.Airline?.FlightNumber}</p>
                                            </div>
                                          </th>
                                          <th style={{width: "25%"}}> 
                                            <div className="filghtsdetails">
                                            <h3 style={{fontSize:"15px"}}>Origin</h3>	
                                            <h4>{new Date(seggm?.Origin?.DepTime).toLocaleTimeString([], { year: 'numeric', month: 'long', day: 'numeric' })}</h4>	
                                               <h2 style={{fontSize:"15px"}}>{seggm?.Origin?.Airport?.AirportCode}</h2>
                                              <p>{seggm?.Origin?.Airport?.AirportName}<br /> 
                                              {seggm?.Origin?.Airport?.CityName},{seggm?.Origin?.Airport?.CountryName}</p>
                                            </div>
                                          </th>
                                          
                                          <th style={{width: "35%"}}> 
                                            <div className="filghtsdetails mt-3">	
                                              <h2  style={{fontSize:"15px"}}>{Math.floor(seggm?.Duration / 60)} h {Math.floor(seggm?.Duration % 60)} m</h2>
                                              <p>Flight Duration</p>
                                              <br />
                                              <h2  style={{fontSize:"15px"}}>Baggage Info:</h2>
                                            
                                              <p>
                                              Check-in-{seggm?.Baggage} (1 piece only) , <br /> Cabin Baggage-{seggm?.CabinBaggage} - (1 piece only) 
                                               </p>
                                            </div>
                                          </th>
                                          <th style={{width: "25%"}}> 
                                            <div className="filghtsdetails">
                                            <h3 style={{fontSize:"15px"}}>Destination</h3>	
                                            <h4>{new Date(seggm?.Destination?.ArrTime).toLocaleTimeString([], { year: 'numeric', month: 'long', day: 'numeric' })}</h4>	
                                           
                                              <h2 style={{fontSize:"15px"}}>{seggm?.Destination?.Airport?.AirportCode}</h2>
                                              <p>{seggm?.Destination?.Airport?.AirportName}<br /> 
                                              {seggm?.Destination?.Airport?.CityName},{seggm?.Origin?.Airport?.CountryName}</p>
                                             
                                            </div>
         
                                          </th>

                                        </tr>
                                        
                                        ))}
                                        </React.Fragment>
                                      ))}
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                      </div>
                <div className="col-lg-12 detailsview">
                  <div className="card">
                    <div className="card-body infobox">
                      <h4>IMPORTANT IMFORMATION</h4>
                    </div>
                    <div className="cardsection">
                      <div className="row">
                      <h5>Fare Rules</h5>
                        <div className="col-lg-12 nbtext"  style={{ maxHeight: '300px', overflowY: 'auto' }}>
                          
                          {fare && fare.Response.FareRules.map((resu, index) => (
                          <p key={index}>{parseHTMLString(resu?.FareRuleDetail)}</p>
                          ))} 
                          {/* <p>Quarantine rules:ravellers undergoing test on arrival shall remain under home/institutional quarantine till the test result is declared.</p>
                          <p>Pre-registration or e-pass rules: The transportation from airport to facility/home quarantine shall be in double chambered vehicles.</p>
                          
                          <p>Check the detailed list of travel guidelines issued by Indian States and UTs here KNOW MORE</p>
                          <p>If you have arrived on any international flight and are taking a connecting domestic flight, please check the 'Travelling to India' tab HERE.</p>
                          
                          <h5 className="mt-4 mb-4">Pre-Flight Checklist</h5>
                          <p>Remember to web check-in before arriving at the airport; carry a printed or soft copy of the boarding pass.</p>
                          <p>Wearing masks/face covers is no longer mandatory. However, all travellers are advised to wear them, in view of the threat posed by COVID-19.</p>
                          <p>One hand bag up to 7 kgs and 55x35x25cm, is allowed per traveller as cabin baggage. Certain personal articles like a lady's purse, laptop bags, etc. can be carried additionally.</p>
                          
                          <p className="mt-3"><b>DISCLAIMER:</b>The information provided above is only for ready reference and convenience of customers, and may not be exhaustive. We strongly recommend that you check the full text of the guidelines issued by the State Governments and Airlines before travelling to ensure smooth travel. We accept no liability in this regard. In case you do not meet the required guidelines, the airline or state authorities can stop you from travelling.</p> */}

                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
				
				   
            </div>
            <div className="col-lg-4">

              <div className="asidesection bg-white" style={{position: "fixed",top: "100px",width:"33.33%"}}>
                <div className="card">
                  
        <h7 style={{ textAlign: "center", display: "block" }}>
 FARE SUMMARY ({passenStr})
</h7>
                      <div className="pricedetails">
                        <div className="price">
                          <table className="table pricelisttable bg-white table-borderless">
                          <tbody>
                          <tr>
                        <td>Base fare + Tax</td>
                        <td className="text-right">{(parseFloat(basefare)+parseFloat(servicefare)).toLocaleString('en-IN', {style: 'currency',currency: 'INR'})}</td>
                      </tr>
                            
                           
                      <tr>
                                                <td></td>
                                                <td></td>
                                              </tr> <tr>
                                              <td>Meals Charge</td>
                                          <td className="text-right">{parseFloat(totalMeal).toLocaleString('en-IN', {style: 'currency',currency: 'INR'})}</td>
                                        </tr>
                                        <tr>
                                                <td></td>
                                                <td></td>
                                              </tr> <tr>
                                              <td>Baggage Charge</td>
                                          <td className="text-right">{parseFloat(totalBags).toLocaleString('en-IN', {style: 'currency',currency: 'INR'})}</td>
                                        </tr>
                                        <tr>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                        <td>Fuel & Surcharges</td>
                        <td className="text-right">{parseFloat(tboService).toLocaleString('en-IN', {style: 'currency',currency: 'INR'})}</td>
                      </tr>
                      <tr>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                        <td>Discount Offered</td>
                        <td className="text-right">{parseFloat(tboDiscount).toLocaleString('en-IN', {style: 'currency',currency: 'INR'})}</td>
                      </tr>
                                        <tr>
                                                <td></td>
                                                <td></td>
                                              </tr>   
                                              <tr>
                                                <td><h5>Grand Total</h5></td>
                                                <td  className="text-right"><h5>{(parseFloat(basefare)+parseFloat(servicefare)+parseFloat(totalBags)+parseFloat(totalMeal)+parseFloat(tboService)-parseFloat(tboDiscount)).toLocaleString('en-IN', {style: 'currency',currency: 'INR'})}</h5></td>
                                              </tr>
                          </tbody>
                          </table>
                        </div>
                      </div>
                </div>  
              </div>
            </div>             




            
        </div>
<form  onSubmit={formik.handleSubmit}>
                <div className="col-lg-8 detailsview">
                  <div className="card">
                    <div className="card-body infobox">
                      <div className="row">
                          <div className="col-lg-10">
                              {/* <h4 className="pt-3">{heading}</h4> */}
                              <h5 className="pt-3">Passengers Information</h5>
                              <i className="fa fa-phone" aria-hidden="true"></i> <span>Contact details</span>
                          </div>
                          <div className="col-lg-2">
                          <Link to="/dashboard">
                            <a href="javaScript:void(0);"> <h5> ◄◄ <i className="fa fa-home pt-4" aria-hidden="true"style={{color: "#333",size:"50px"}}></i> </h5></a>
                            </Link>
                          </div>
                      </div>
                    </div>
                    <div className="cardsection">
                        <div className="editProfileForm">
                            
                            <div className="clearDiv row">
                           
                            <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5 form-group">
                                <label>Email</label>
                                    <div className="input_icon"  >
                                    <TextField
                                        id="email"
                                        name="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        type="email"
                                        className="form-control"
                                        error={formik.touched.email && Boolean(formik.errors.email)}
                                        helperText={formik.touched.email && formik.errors.email}
                                        inputProps={{ style: { width: '250px' } }}
                                    /> 
                               
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 form-group">
                                <label>country</label>
                                    <div className="input_icon">
                                    <TextField
                                        id="country"
                                        name="country"
                                        className="form-control"
                                        value={formik.values.country}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.country && Boolean(formik.errors.country)}
                                        helperText={formik.touched.country && formik.errors.country}
                                    /> 
                               
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 form-group">
                                <label>Ccode</label>
                                    <div className="input_icon">
                                    <TextField
                                        id="ccode"
                                        name="ccode"
                                        className="form-control"
                                        value={formik.values.ccode}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.ccode && Boolean(formik.errors.ccode)}
                                        helperText={formik.touched.ccode && formik.errors.ccode}
                                    /> 
                               
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                <label>mobile</label>
                                    <div className="input_icon">
                                    <TextField
                                        id="mobile"
                                        name="mobile"
                                        value={formik.values.mobile}
                                        onChange={formik.handleChange}
                                        type="number"
                                        className="form-control"
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                                        helperText={formik.touched.mobile && formik.errors.mobile}
                                    /> 
                               
                                    </div>
                                </div>

                                
                               
                                
                                
                               
                                
                            </div>
                            <div className="clearDiv row">
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                <label>City</label>
                                    <div className="input_icon">
                                    <TextField
                                        id="city"
                                        name="city"
                                        className="form-control"
                                        value={formik.values.city}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.city && Boolean(formik.errors.city)}
                                        helperText={formik.touched.city && formik.errors.city}
                                    /> 
                               
                                    </div>
                                </div>

                              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                <label>Address1</label>
                                    <div className="input_icon">
                                    <TextField
                                        id="address1"
                                        name="address1"
                                        className="form-control"
                                        value={formik.values.address1}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.address1 && Boolean(formik.errors.address1)}
                                        helperText={formik.touched.address1 && formik.errors.address1}
                                        inputProps={{ style: { width: '200px' } }}
                                    /> 
                               
                                    </div>
                                </div>

                              <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5 form-group">
                                <label>Address2</label>
                                    <div className="input_icon">
                                    <TextField
                                        id="address2"
                                        name="address2"
                                        className="form-control"
                                        value={formik.values.address2}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.address2 && Boolean(formik.errors.address2)}
                                        helperText={formik.touched.address2 && formik.errors.address2}
                                        inputProps={{ style: { width: '250px' } }}
                                    /> 
                               
                                    </div>
                                </div>
                               
                                
                                
                                
                               
                                
                            </div>
                            <div className="clearDiv row">
                            {renderDocumentIdInput()}
                            </div>
                            <br /><i className="fa fa-user" aria-hidden="true"></i> <span> {heading} </span>
                            <div class="row">
                           
                                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 form-group">      
                                <label>Title</label>
                                    <div className="input_icon">
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="title"
                                        value={title}
                                        className="form-control"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value="Mr">Mr&nbsp;&nbsp;&nbsp;</MenuItem>
                                        <MenuItem value="Mrs">Mrs&nbsp;&nbsp;&nbsp;</MenuItem>
                                        <MenuItem value="Miss">Miss&nbsp;&nbsp;&nbsp;</MenuItem>
                                        <MenuItem value="Mstr">Mstr&nbsp;&nbsp;&nbsp;</MenuItem>
                                    </Select> 
                                    {/* <TextField
                                            id="title"
                                            name="title"
                                            label="Title"
                                            value={formik.values.title}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.title && Boolean(formik.errors.title)}
                                            helperText={formik.touched.title && formik.errors.title}
                                        /> */}
                                    </div>
                                </div> 

                                <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5 form-group">
                                    <label>First Name</label>
                                    <div className="input_icon">
                                        <TextField
                                            id="customerfName"
                                            name="customerfName"
                                            className="form-control"
                                            value={formik.values.customerfName}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.customerfName && Boolean(formik.errors.customerfName)}
                                            helperText={formik.touched.customerfName && formik.errors.customerfName}
                                            inputProps={{ style: { width: '250px' } }}
                                      />
                                        {/* <input type="text" className="form-control" name="txt_current_password_text" id="txt_current_password_text"  autocomplete="none" /> */}
                                    </div>
                                </div>
                               
                                <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5 form-group">
                                    <label>Last Name</label>
                                    <div className="input_icon">
                                        <TextField
                                            id="customerlName"
                                            name="customerlName"
                                            className="form-control"
                                            value={formik.values.customerlName}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.customerlName && Boolean(formik.errors.customerlName)}
                                            helperText={formik.touched.customerlName && formik.errors.customerlName}
                                            inputProps={{ style: { width: '250px' } }}
                                        />
                                        {/* <input type="text" className="form-control" name="txt_current_password_text" id="txt_current_password_text"  autocomplete="none" /> */}
                                    </div>
                                </div>
                                
                                
                            </div>
                            
                            <div class="row">  
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 form-group">
                                <label>nationality</label>
                                    <div className="input_icon">
                                    <TextField
                                        id="nationality"
                                        name="nationality"
                                        className="form-control"
                                        value={formik.values.nationality}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.nationality && Boolean(formik.errors.nationality)}
                                        helperText={formik.touched.nationality && formik.errors.nationality}
                                    /> 
                                  
                                    </div>
                                </div>                 
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                <label>Passport Number/ID proof</label>
                                    <div className="input_icon">
                                        <TextField
                                            id="ppnumber"
                                            name="ppnumber"
                                            className="form-control"
                                            value={formik.values.ppnumber}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.ppnumber && Boolean(formik.errors.ppnumber)}
                                            helperText={formik.touched.ppnumber && formik.errors.ppnumber}
                                        />
                                        {/* <input type="text" className="form-control" name="txt_current_password_text" id="txt_current_password_text"  autocomplete="none" /> */}
                                    </div>
                                </div>

                                
                               
                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                <label>Passport Expiry Date</label>
                                    <div className="input_icon">
                                    {/* <TextField
                                        id="expirydate"
                                        name="expirydate"
                                        className="form-control"
                                        value={formik.values.expirydate}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        type="date"
                                        error={formik.touched.expirydate && Boolean(formik.errors.expirydate)}
                                        helperText={formik.touched.expirydate && formik.errors.expirydate}
                                    />  */}
                                      <DatePicker
                                          id="expirydate"
                                          name="expirydate"
                                          selected={formik.values.expirydate} // Set the selected date
                                          onChange={(date) => formik.setFieldValue('expirydate', date)} // Set the formik field value
                                          onBlur={formik.handleBlur}
                                          dateFormat="dd/MM/yyyy" // Set the desired date format
                                          maxDate={tenYearsAfter}
                                          minDate={today}
                                          showYearDropdown
                                          yearDropdownItemNumber={10} // Set the number of years to show in the dropdown
                                          placeholderText="Expiry date"
                                          inputProps={{ autoComplete: 'off' }}
                                          wrapperClassName="date-picker-wrapper" 
                                          style={{ height: '100px', border: '1px solid #3498db', borderRadius: '5px' }}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                <label>Dob</label>
                                    <div className="input_icon">
                                    {/* <TextField
                                        id="dob"
                                        name="dob"
                                        className="form-control"
                                        value={formik.values.dob}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        type="date"
                                        error={formik.touched.dob && Boolean(formik.errors.dob)}
                                        helperText={formik.touched.dob && formik.errors.dob}
                                    />  */}
                                     <DatePicker
                                        id="dob"
                                        name="dob"
                                        selected={formik.values.dob}
                                        onChange={(date) => formik.setFieldValue('dob', date)}
                                        onBlur={formik.handleBlur}
                                        dateFormat="dd/MM/yyyy"
                                        maxDate={maxDt}
                                        minDate={minDt}
                                        showYearDropdown
                                        yearDropdownItemNumber={dCount} // Set the number of years to show in the dropdown
                                        placeholderText="Date of Birth"
                                        inputProps={{ autoComplete: 'off' }}
                                        wrapperClassName="date-picker-wrapper" 
                                        style={{ height: '100px', border: '1px solid #3498db', borderRadius: '5px' }}
                                      />
                                      {formik.touched.dob && formik.errors.dob && (
                                        <div className="error-message">{formik.errors.dob}</div>
                                      )}
                                    </div>
                                    <span style={{fontSize:"10px",color:"red"}}>{dobtext}</span>
                                </div>
                                {isLCC && (
                <div className="col-lg-12 mt-5 detailsview">
                  <div className="card">
                    <div className="col-md-4">
                      <a href="javasript:void(0);"  onClick={handleBaggageClickFirst} className="btn btn-info" >Choose Additional Baggage</a>
                    </div>
                    {showBaggageFirst && (
                    <div className="cardsection">
                      <div className="row">
                        <div className="col-lg-12 nbtext"></div>
                                  

{ssrbag && ssrbag.map((item, index) => (
 // item.Weight > 0 && (
    <div key={index} className="col-md-4">
      <div className="row">
        
        <div className="col-md-12">
        <div style={{ display: 'flex', alignItems: 'center' }}> 
        <img src="assets/images/bag.png" alt="" style={{ width: "30px", height: "auto" }} />
          {/* <div style={{ marginTop: "5px" }}> */}
            <input
               type="radio"
               id={`radio-${index}`}
               name="selectedBag"
              checked={selectedItems[index] || false}
              onChange={() => handleItemSelect(index)}
            /> &nbsp;&nbsp;&nbsp;
            <label htmlFor={`checkbox-${index}`}>
              {item.Weight} kg  ₹ {parseFloat(item.Price)}<br />
  <span style={{fontSize:"8px"}}>{item.Text && ` ${item.Text}`}</span>
            </label>
            {/* </div> */}
          </div>
        </div>
      </div>
      <br />
    </div>
  //)
))}
                                 
                      </div>

                      <div className="row">
                      <div className="col-lg-4">
                      
                                  <label style={{marginLeft: '15px'}}>BAGGAGE PRICE TOTAL(INR)</label>
                                  <input
                                        type="text"
                                        id="bagtotal" 
                                        readonly
                                        value={parseFloat(Number(totalBags))}
                                        style={{marginLeft: '15px',width:"100px",textAlign:"right",border: '1px solid #ddc8c8'}}
                                        
                                      />
                        </div>
                        <div className="col-lg-4">
                                      <button  className="btn btn-primary" 
                                      style={{marginLeft: '15px'}}
                                      onClick={submitSelectedItems}>Apply Baggage</button>
                       </div>
                    </div>


                    </div>

                    )}

                    
                  </div>
                </div>
  )}
{isLCC && (
                <div className="col-lg-12 mt-5 detailsview">
                  <div className="card">
                    <div className="col-md-4">
                     <a href="javasript:void(0);"  onClick={handleMealsClickFirst} className="btn btn-info" >Choose Meals</a>
                    </div>
                    {showMealsFirst && (
                    <div className="cardsection">
                      <div className="row"> 
                        <div className="col-lg-12 nbtext"></div> 
                        {ssrmeal && ssrmeal.map((items, index) => (
 // items.Code !== 'NoMeal' && (
    <div key={index} className="col-md-4">
      <div className="row">
        
        <div className="col-md-12">
        <div style={{ display: 'flex', alignItems: 'center' }}> 
        <img src="assets/images/meals.jpg" style={{ width: "30px", height: "auto" }} alt="" />
        <label htmlFor={`checkbox-${index}`} style={{ marginLeft: '7px' }}>
            <span style={{ fontSize: '18px', color: "red" }}> ₹ {parseFloat(items.Price)}</span>
          </label>
          <label htmlFor={`checkbox-${index}`} style={{ marginLeft: '15px' }}>Qty: 1</label>
          </div>
     
          <div style={{ display: 'flex', alignItems: 'flex-start' }}> 
          <input
            type="radio"
            id={`radio-${index}`}
            name="mealcheck"
            checked={selectedMeals[index]}
            onChange={() => handleMealSelect(index)}
            style={{ marginTop: '5px' }}
          /> &nbsp;
          <label htmlFor={`checkbox-${index}`} style={{ marginLeft: '7px' }}>
            {items.AirlineDescription}({items.Code})
          </label>
          </div>
          <input
            type="hidden"
            id={`text-${index}`}
            value={ssrmeal[index].Quantity || 1} readonly="true"
            onChange={(e) => handleChangeNumber(index, parseInt(e.target.value, 10))}
            style={{ marginLeft: '15px', width: "20px", textAlign: "left", border: '1px solid #ddc8c8' }}
          />
        </div>
      </div>
      <br />
    </div>
  //)
))}
                                 
                      </div>
                      <div className="row">
                      <div className="col-lg-4">
                      
                                  <label style={{marginLeft: '15px'}}>MEALS TOTAL(INR)</label>
                                  <input
                                        type="text"
                                        id="mealtotal"
                                        value={parseFloat(Number(totalMeal))}
                                        style={{marginLeft: '15px',width:"100px",textAlign:"right",border: '1px solid #ddc8c8'}}
                                        readonly
                                      />
                        </div>
                        <div className="col-lg-4">
                                      <button  className="btn btn-primary" 
                                      style={{marginLeft: '15px'}}
                                      onClick={submitSelectedMeals}>Apply Meals</button>
                       </div>
                    </div>



                      </div>
)}


                     
                    <br />
                  </div>
                </div>
)}
 <div className="clearDiv row">
 <div className="col-lg-4">
                      
                      <label style={{marginLeft: '15px'}}>FUEL & SURCHARGES  (INR):</label>
                     </div>
                      <div className="col-lg-4">             
                      <input
                            type="text"
                            id="service"
                            value={tboService}
                            onChange={handleInputChange}
                            style={{marginLeft: '15px',width:"200px",height:"35px", textAlign:"right",border: '1px solid #ddc8c8'}}
                            
                          />
            </div>
 </div>
 <div className="clearDiv row">&nbsp;</div>
 <div className="clearDiv row">
 <div className="col-lg-4">
                      
                      <label style={{marginLeft: '15px'}}>DISCOUNT OFFERED (INR):</label>
                     </div>
                      <div className="col-lg-4">             
                      <input
                            type="text"
                            id="discount"
                            value={tboDiscount}
                            onChange={handleInputChangeDiscount}
                            style={{marginLeft: '15px',width:"200px",height:"35px", textAlign:"right",border: '1px solid #ddc8c8'}}
                            
                          />
            </div>
 </div>
                    <div className="edit_profileSec" style={{display: editView}}>
                        <div className="editProfileForm">
                            <div className="clearDiv row">
                               <table id="datatable" className="table dt-responsive table-bordered nowrap airlisttable" style={{borderCollapse: "collapse", borderSpacing: "0", width: "100%",textAlign:"center"}}>
                                    <thead  style={{color:"rgb(62 86 112)"}}>
                                       <th>Title</th>
                                       <th>First Name</th>
                                       <th>Last Name</th>
                                       <th>Date of Birth</th>
                                       <th>Passport Number</th>
                                       <th>Expiry Date</th>
                                       <th>Action</th>
                                    </thead>
                                    <tbody>
                                    {passengers.map((passenger, index) => (
                                        <tr key={index}>
                                        <td>{passenger.Title}</td>
                                        <td>{passenger.FirstName}</td>
                                        <td>{passenger.LastName}</td>
                                        <td>{moment(passenger.DateOfBirth).format('DD/MM/YYYY')}</td>
                                        <td>{passenger.PassportNo}</td>
                                        <td>{moment(passenger.PassportExpiry).format('DD/MM/YYYY')}</td>
                                        <td><a  href="javasript:void(0);" onClick={() => openModalR(passenger,index)}>Edit</a></td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>          



                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                
                                <div className="editProfileSubmitBtn">
                                    <br></br>
                                <Button type="submit"  className="submitebtn"  variant="contained" color="primary">
                                    {btnhead}{formik.isSubmitting ? <CircularProgress size={24} /> : ' >>' }
                                </Button>

                            
                                </div>
                            </div>
                                
                                </div>  
                    </div>

                                     
{/* 
                    <h5>Fare Rule</h5>

<table id="datatable" className="table dt-responsive table-bordered nowrap airlisttable" style={{borderCollapse: "collapse", borderSpacing: "0", width: "100%",textAlign:"center"}}>
     <thead  style={{backgroundColor: "#184265",color:"#fff"}}>
            <th>AirLine</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Fare Rule</th>
    </thead> 
    {fare && fare.Response.FareRules.map((resu, index) => (
    <tbody> 
      <tr key={index}>
   
        <th>{resu?.Airline}</th>
        <th>{resu?.Origin}</th>
        <th>{resu?.Destination}</th>
        <th className="editProfileSubmitBtn"><button className="submitebtn" onClick={toggleDiv}>View Fare Rule</button></th>

        {showDiv && (
              <div className="clearDiv row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                  <h5>Fare Rule</h5> 
                  
              {parseHTMLString(resu?.FareRuleDetail)}
              </div>
              </div>  
          )}
      </tr> 
    </tbody>
     ))}  
  </table>            
                  
           
  <h5>Fare Quote</h5>

  <table id="datatable" className="table dt-responsive table-bordered nowrap airlisttable" style={{borderCollapse: "collapse", borderSpacing: "0", width: "100%",textAlign:"center"}}>
     <thead  style={{backgroundColor: "#184265",color:"#fff"}}>
            <th>Origin</th>
            <th>Destination</th>
            <th>Baggage</th>
            <th>Cabin Baggage</th>
    </thead> 
    {farequote && farequote.Response.Results.Segments[0].map((seggm, index) => (
    <tbody > 
      <tr key={index}>
        <th> {seggm?.Duration}  </th>
        <th> {seggm?.FlightStatus}</th>
        <th> {seggm?.CabinBaggage}</th>
        <th></th>
       </tr> 
    </tbody>
     ))}  
  </table>       

  <h5>Extra Baggage </h5>

  <table id="datatable" className="table dt-responsive table-bordered nowrap airlisttable" style={{borderCollapse: "collapse", borderSpacing: "0", width: "100%",textAlign:"center"}}>
     <thead  style={{backgroundColor: "#184265",color:"#fff"}}>
            <th>Origin</th>
            <th>Destination</th>
            <th>Weight in Kg</th>
            <th>Price in INR</th>
    </thead> 
    {ssrbag && ssrbag.map((bag, index) => (
    <tbody > 
      <tr key={index}>
        <th>  {bag?.Origin} </th>
        <th>  {bag?.Destination}</th>
        <th>  {bag?.Weight}</th>
        <th>  {bag?.Price}</th>
       </tr> 
    </tbody>
     ))}  
  </table>            
               
  <h5>Meals  of Choice</h5>

  <table id="datatable" className="table dt-responsive table-bordered nowrap airlisttable" style={{borderCollapse: "collapse", borderSpacing: "0", width: "100%",textAlign:"center"}}>
     <thead  style={{backgroundColor: "#184265",color:"#fff"}}>
            <th>Origin</th>
            <th>Destination</th>
            <th>Meals</th>
            <th>Price in INR</th>
    </thead> 
    {ssrmeal && ssrmeal.map((meal, index) => (
    <tbody > 
      <tr key={index}>
        <th>  {meal?.Origin} </th>
        <th>  {meal?.Destination}</th>
        <th>  {meal?.AirlineDescription}</th>
        <th>  {meal?.Price}</th>
       </tr> 
    </tbody>
     ))}  
  </table>   */}
            
                    






                    </div> 
                    
                    </div>
                    <div className="col-md-4 p-0">
                      
                    </div>
                
                </div>
                
               </form>                         
        </div>
    </div>
            
</div>

<Footer />

{showModal && (
        <div  className="modal"
        style={{
          display: 'flex',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div  className="modal-content" 
          style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '5px', 
          }}
        >
         <div className="modal-header">
        <h5 className="modal-title">Edit Passenger Information-{editedPassType}</h5>
        <button type="button"  onClick={onClose}  className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
         <div className="modal-body">
        
        <div className="row">
            <div className="col-lg-6 form-group" >
            <label>Title : 
            <input type="hidden" id="pxtype" value={editedPaxType} />
            </label>
            </div>
            
            <div className="col-lg-4 form-group" >
            <select type="text" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} >
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
            <option value="Mstr">Mstr</option>
            </select>
            </div>
         </div>   
         <div className="row">
            <div className="col-lg-6 form-group" >
            <label>First Name : 
            </label>
            </div>
            <div className="col-lg-4 form-group" >
            <input type="text" value={editedFirstName} onChange={(e) => setEditedFirstName(e.target.value)} />
       
            </div>
         </div>
         <div className="row">
            <div className="col-lg-6 form-group" >
            <label>Last Name : 
            </label>
            </div>
            <div className="col-lg-4 form-group" >
            <input type="text" value={editedLastName} onChange={(e) => setEditedLastName(e.target.value)} />
            </div>
         </div>
         <div className="row">
            <div className="col-lg-6 form-group" >
            <label>Date of Birth: 
            </label>
            </div>
            <div className="col-lg-4 form-group" >
            {/* <input type="date" value={editedDateOfBirth} onChange={(e) => setEditedDateOfBirth(e.target.value)} /> */}
            <DatePicker
              value={moment(editedDateOfBirth).format('DD/MM/YYYY')}
              onChange={setEditedDateOfBirthFun}
              dateFormat="dd/MM/yyyy"
              maxDate={maxDt}
              minDate={minDt}
              showYearDropdown
              yearDropdownItemNumber={dCount} // Set the number of years to show in the dropdown
              placeholderText="Date of Birth"
              inputProps={{ autoComplete: 'off' }}
              wrapperClassName="date-picker-wrapper" 
            />
         </div>
         </div>
         <div className="row">
            <div className="col-lg-6 form-group" >
            <label>Passport/ID Proof Number:
            </label>
            </div>
            <div className="col-lg-4 form-group" >
            <input type="text" value={editedPPNumber} onChange={(e) => setEditedPPNumber(e.target.value)} />
         </div>
         </div>
         <div className="row">
            <div className="col-lg-6 form-group" >
            <label>Passport Exopire Date : 
            </label>
            </div>
            <div className="col-lg-4 form-group" >
            <DatePicker
              value={moment(editedPPExpireDate).format('DD/MM/YYYY')}
              onChange={setEditedPPExpireDateFun}
              dateFormat="dd/MM/yyyy"
              maxDate={tenYearsAfter}
              minDate={today}
              showYearDropdown
              yearDropdownItemNumber={10} // Set the number of years to show in the dropdown
              placeholderText="Expire Date"
              inputProps={{ autoComplete: 'off' }}
              wrapperClassName="date-picker-wrapper" 
            />
            {/* <input type="date" value={editedPPExpireDate} onChange={(e) => setEditedPPExpireDate(e.target.value)} /> */}
         </div>
         </div>
         {/* {editedMealDynamic.map((meal, index) => (
  <p key={index}>{meal.AirlineDescription}</p>
))} */}
        
{isLCC && (
                <div className="col-lg-12 mt-5 detailsview">
                  <div className="card">
                    <div className="col-md-4">
                    <button onClick={handleMealsClick} className="btn btn-secondary">Choose Meals</button>
                    </div>
                  
                    {showMeals && (
                    <div className="cardsection">
                      <div className="row"> 
                        <div className="col-lg-12 nbtext"></div> 
                        {ssrmeal && ssrmeal.map((items, indexmeal) => (
  items.Code !== 'NoMeal' && (
    <div key={indexmeal} className="col-md-4">
      <div className="row">
        
        <div className="col-md-12">
        <div style={{ display: 'flex', alignItems: 'center' }}> 
        <img src="assets/images/meals.jpg" style={{ width: "30px", height: "auto" }} alt="" />
        <label htmlFor={`checkbox-${indexmeal}`} style={{ marginLeft: '7px' }}>
            <span style={{ fontSize: '18px', color: "red" }}> ₹ {parseFloat(items.Price)}</span>
          </label>
          <label htmlFor={`checkbox-${indexmeal}`} style={{ marginLeft: '15px' }}>Qty: 1</label>
          </div>
     
          <div style={{ display: 'flex', alignItems: 'flex-start' }}> 
          <input
            type="radio"
            id={`radio1-${indexmeal}`}
            name="mealcheck"
            checked={editedMealDynamic.some(meal => meal.AirlineDescription === items.AirlineDescription)}
            onChange={() => handleMealSelectEdit(indexmeal)}
            style={{ marginTop: '5px' }}
          /> &nbsp;
          <label htmlFor={`checkbox-${indexmeal}`} style={{ marginLeft: '7px' }}>
            {items.AirlineDescription}({items.Code})
          </label>
          </div>
          <input
            type="hidden"
            id={`text-${indexmeal}`}
            value={ssrmeal[indexmeal].Quantity || 1} readonly="true"
            onChange={(e) => handleChangeNumber(indexmeal, parseInt(e.target.value, 10))}
            style={{ marginLeft: '15px', width: "20px", textAlign: "left", border: '1px solid #ddc8c8' }}
          />
        </div>
      </div>
      <br />
    </div>
  )
))}
                    <div className="row">
                      <div className="col-lg-8">
                      </div>
                      <div className="col-lg-4 justify-content-end">
                                      <button  className="btn btn-danger" 
                                      style={{marginLeft: '15px'}}
                                      onClick={handleMealCancel}>Cancel Meal</button>
                       </div>
                    </div>  
                                 
                      </div>
                      </div>
                      )}
                
                  </div>
                </div>
)}
 
 {isLCC && (
                <div className="col-lg-12 mt-5 detailsview">
                  <div className="card">
                    <div className="col-md-4">
                    <button onClick={handleBaggageClick}  className="btn btn-secondary">Choose Additional Baggage</button>
                    </div>
                    {showBaggage && (
                    <div className="cardsection">
                      <div className="row">
                        <div className="col-lg-12 nbtext"></div>
                                  

{ssrbag && ssrbag.map((item, indexbag) => (
  item.Weight > 0 && (
    <div key={indexbag} className="col-md-4">
      <div className="row">
        
        <div className="col-md-12">
        <div style={{ display: 'flex', alignItems: 'center' }}> 
        <img src="assets/images/bag.png" alt="" style={{ width: "30px", height: "auto" }} /><br />
          <div style={{ marginTop: "5px" }}>
            <input
               type="radio"
               id={`radio-${indexbag}`}
               name="selectedBag"
              checked={editedBagDynamic.some(bag => bag.Weight === item.Weight)}
              onChange={() => handleItemSelectEdit(indexbag)}
            /> &nbsp;&nbsp;&nbsp;
            <label htmlFor={`checkbox-${indexbag}`}>
              {item.Weight} kg  ₹ {parseFloat(item.Price)}<br />
  <span style={{fontSize:"8px"}}>{item.Text && ` ${item.Text}`}</span>
            </label>
            
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  )
))}
      
                  <div className="row">
                        <div className="col-lg-8">
                         
                       </div>
                      <div className="col-lg-4 justify-content-end">
                                      <button  className="btn btn-danger" 
                                      style={{marginLeft: '15px'}}
                                      onClick={handleBagCancel}>Cancel Baggage</button>
                       </div>
                    </div>                          
                      </div>
                    </div>
         )}
                
                  </div>
                </div>
  )}   
      <div className="row">
            <div className="col-lg-8 form-group" >
            </div>
            <div className="col-lg-2 form-group" >
            <button onClick={handleSave} className="btn w-100 btn-success">Save</button>
            </div>
            <div className="col-lg-2 form-group" >
            <button onClick={onClose} className="btn w-100 btn-secondary">Close</button>
          </div>
      </div>
      <br /><br />
          </div>
        </div></div></div>
      )}

    </div>
  )
}

export default CustomerInfo