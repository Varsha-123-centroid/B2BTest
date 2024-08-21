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
const CustomerInfoRound = () => {
    const navigate = useNavigate();
    const [adult,setAdult]=useState(0);
    const [child,setChild]=useState(0);
    const [infant,setInfant]=useState(0);
    const [btnhead,setBtnhead]=useState("Add New");
   const [dobtext,setDobtext]=useState("Age above 12");
   const [responsebook, setResponsebook] = useState(null);
   const [responsebookreturn, setResponsebookreturn] = useState(null);
   const [value, setValue] = useState('');
   const currentDate = new Date();
   let mxDate = new Date();
   mxDate.setFullYear(currentDate.getFullYear() - 12);
   let mnDate = new Date();
   mnDate.setFullYear(currentDate.getFullYear() - 112);
   const [minDate, setMinDate] = useState(mnDate);
   const [maxDate, setMaxDate] = useState(mxDate);
   let passeng =[];
   const [data,setData]=useState();
   const [dataIb,setDataIb]=useState();
   const [refundable, setRefumdable] = useState("Refundable");
   const [refundableIb, setRefumdableIb] = useState("Refundable");
   const [editedFirstName, setEditedFirstName] = useState("");
   const [editedLastName, setEditedLastName] = useState("");
   const [editedDateOfBirth, setEditedDateOfBirth] = useState("");
   const [editedTitle, setEditedTitle] = useState("");
   const [editedPPNumber, setEditedPPNumber] = useState("");
   const [editedPPExpireDate, setEditedPPExpireDate] = useState("");
   const [editedPaxType, setEditedPaxType] = useState(0);
   const [editedPassType, setEditedPassType] = useState(" Adult ");
   const [editView, setEditView] = useState("none");
   const [isLCC, setIsLCC] = useState(true);
   const [isLCCIb, setIsLCCIb] = useState(true);
   const [totalMeal, setTotalMeal] = useState(0.00);
   const [totalBags, setTotalBags] = useState(0.00);
   const [totalMealIb, setTotalMealIb] = useState(0.00);
   const [totalBagsIb, setTotalBagsIb] = useState(0.00);
   const [selectedMealDynamic, setSelectedMealDynamic] = useState([]);
   const [selectedBagDynamic, setSelectedBagDynamic] = useState([]);
   const [selectedMealDynamicIb, setSelectedMealDynamicIb] = useState([]);
   const [selectedBagDynamicIb, setSelectedBagDynamicIb] = useState([]);
   const [editedMealDynamic, setEditedMealDynamic] = useState([]);
   const [editedBagDynamic, setEditedBagDynamic] = useState([]);
   const [editedMealDynamicIb, setEditedMealDynamicIb] = useState([]);
   const [editedBagDynamicIb, setEditedBagDynamicIb] = useState([]);
   const [editedFare, setEditedFare] = useState([]);
   const [editedFareIb, setEditedFareIb] = useState([]);
   const [tboService, setTboService] = useState(0.00);
   const [tboDiscount, setTboDiscount] = useState(0.00);
   const [passengers,setPassengers] =useState(passeng);
   const [heading,setHeading]=useState("Adult Passenger");
   const [resultindex,setResultindex]=useState('');
   const [resultindexIb,setResultindexIb]=useState('');
   const [traceId,setTraceId]=useState('');
   const [priceOb,setPriceOb]=useState(0);
   const [priceIb,setPriceIb]=useState(0);
   const [passenStr, setPassenStr] = useState('');
   const [ibob, setIbob] = useState('');

   const [fare, setFare] = useState();
   const [farequote, setFarequote] = useState();
   const [fareIb, setFareIb] = useState();
   const [farequoteIb, setFarequoteIb] = useState();
   const [ssrmeal, setSSRmeal] = useState();
   const [ssrbag, setSSRbag] = useState();
   const [ssrseat, setSSRseat] = useState();
   const [ssrmealIb, setSSRmealIb] = useState();
  const [ssrbagIb, setSSRbagIb] = useState();
  const [ssrseatIb, setSSRseatIb] = useState();
   let balance=sessionStorage.getItem('Balance');
   let markup = sessionStorage.getItem('Markup');
   let agentId=sessionStorage.getItem('agentId');
   let branchId=sessionStorage.getItem('branchId');
   const [adultss1, setAdultss1] = useState(0);
   const [childss1, setChildss1] = useState(0);
   const [infants1, setInfants1] = useState(0);
   const [journeyType, setJourneyType] = useState(2);
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
   const [basefareIb, setBasefareIb] = useState(0.00);
   const [totalfareIb, setTotalfareIb] = useState(0.00);
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
   const [adultFareIb, setAdultFareIb] = useState(null);
   const [childFareIb, setChildFareIb] = useState(null);
   const [infantFareIb, setInfantFareIb] = useState(null);
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
        const storedValue = localStorage.getItem('tokenValue');
        const resultindex2 = localStorage.getItem('resultindex_r');
        const priceOb1 = localStorage.getItem('price');
        const priceIb1 = localStorage.getItem('priceIb');

        const ibob1 = localStorage.getItem('ibob');
        const journeyType1 = localStorage.getItem('journeyType');
        if (journeyType1) {
          setJourneyType(journeyType1);
        }
        if (priceOb1) {
            setPriceOb(priceOb1);
          }
          if (priceIb1) {
            setPriceIb(priceIb1);
          }
        if (ibob1) {
            setIbob(ibob1);
          }
        if (storedValue) {
          setValue(storedValue);
        }
        if (resultindex1) {
            setResultindex(resultindex1);
          }
          if (resultindex2) {
            setResultindexIb(resultindex2);
          }
        if (traceId1) {
            setTraceId(traceId1);
          }
      
        
    if (adultss>0) {
        setAdult(adultss);
        setAdultss1(adultss);
        //adultss1 = adultss;
    }
    if (childss>0) {
        setChild(childss);
        setChildss1(childss);
        //childss1 = childss;
    }
    if (infants>0) {
        setInfant(infants);
        setInfants1(infants);
       // infants1 = infants;
    }
    if (adultss==0 && childss>0) {
      setMaxDt(twoYearsAgo);
      setMinDt(twelveYearsAgo);
      setDCount(10);
      setDobtext("Between 2-12 years");
     // adultss1 = adultss;
  }
    const allcust=localStorage.getItem('allss');
    if (allcust) {
        setPassenStr(allcust);
      }
      const data1=
      { 
         "ResultIndex": resultindex1,
         "TraceId": traceId1
        };
        const dataIb1=
        { 
           "ResultIndex": resultindex2,
           "TraceId": traceId1
          };
 setData(data1);
 setDataIb(dataIb1);
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
              //console.log("Data----"+JSON.stringify(response.data)) ;
              if(response.data.Response.Error.ErrorCode=="0")
                     { setFare(response.data);
                     }
              else{
                  console.log(response.data.Response.Error.ErrorMessage);
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
                console.log("in fetchSSR"); 
                
                try {
                   const responsessr = await axios.post('https://api.travelxpo.in/auth/ssr-copy', data, {
                     headers: {
                       Authorization: `Bearer ${value}`, 
                     },
                   });
                  // console.log("Datassr---"+JSON.stringify(responsessr.data)) ;
                   if(responsessr.data.Response.Error.ErrorCode=="0")
                          { 
                            const meal=responsessr.data.Response.MealDynamic[0];
                              meal.forEach(item => {
                                item.Price = parseFloat(Number(item.Price));
                              });
                              setSSRmeal(meal);
                              console.log("ssrrrrrrrrrrrrrrrrrrr"+JSON.stringify(meal));
                              const SSR=responsessr.data.Response.Baggage[0];
                              SSR.forEach(item => {
                                item.Price = parseFloat(Number(item.Price));
                              });
                              //const selectedBaggage = SSR.filter((item, index) => selectedItems[index]);
                              console.log(JSON.stringify(SSR));
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
                  console.log("in fetchFareQuoteData"+JSON.stringify(data));
                  try {
                     const responseqt = await axios.post('https://api.travelxpo.in/auth/fare-quote', data, {
                       headers: {
                         Authorization: `Bearer ${value}`,
                       },
                     });
                     //console.log("Dataquote---"+JSON.stringify(responseqt.data)) ;
                     if(responseqt.data.Response.Error.ErrorCode=="0")
                            { 
                              const reff=responseqt.data.Response.Results.IsRefundable;
                              const tboserice=responseqt.data.Response.Results.Fare.ServiceFee;
                              const basef=responseqt.data.Response.Results.Fare.PublishedFare;
                              //setTboService(tboserice);
                              setBasefare(basef);
                              setServicefare(markup);

                              setTotalfare(parseFloat(basef)+parseFloat(markup));
                                if(reff==false)
                                {
                                  setRefumdable("Non Refundable");
                                }
                              setFarequote(responseqt.data);
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
          },[value,data]) ;

          useEffect(() => {
            if(value){
              const fetchDataIb = async () => {
               try {
                  const responseIb = await axios.post('https://api.travelxpo.in/auth/fare-rule', dataIb, {
                    headers: {
                      Authorization: `Bearer ${value}`,
                    },
                  });
                 // console.log("Data----"+JSON.stringify(responseIb.data)) ;
                  if(responseIb.data.Response.Error.ErrorCode=="0")
                         { setFareIb(responseIb.data);
                         }
                  else{
                      console.log(responseIb.data.Response.Error.ErrorMessage);
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
                  const fetchSSRIb = async () => {
                    // alert("in fetchSSRIb"); 
                    // if(farequote){
                     try {
                        const responsessrIb = await axios.post('https://api.travelxpo.in/auth/ssr-copy', dataIb, {
                          headers: {
                            Authorization: `Bearer ${value}`,
                          },
                        });
                        console.log("DatassrIb---"+JSON.stringify(responsessrIb.data)) ;
                        if(responsessrIb.data.Response.Error.ErrorCode=="0")
                               { 
                                 const meal=responsessrIb.data.Response.MealDynamic[0];
                                 meal.forEach(item => {
                                   item.Price = parseFloat(Number(item.Price));
                                 });
                                 setSSRmealIb(meal);
                                 console.log(JSON.stringify(meal));
                                 const SSR=responsessrIb.data.Response.Baggage[0];
                                 SSR.forEach(item => {
                                   item.Price = parseFloat(Number(item.Price));
                                 });
                                 //const selectedBaggage = SSR.filter((item, index) => selectedItems[index]);
                                // alert(JSON.stringify(SSR));
                                                   setSSRbagIb(SSR);
                                                   setSSRseatIb(responsessrIb.data.Response.SeatDynamic.SegmentSeat.RowSeats);
                               }
                        else{
                         console.log(responsessrIb.data.Response.Error.ErrorMessage);
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
     
                         //  }
     
     
                        };
                         const fetchFareQuoteDataIb = async () => {
                          console.log("in fetchFareQuoteDataIb"+JSON.stringify(dataIb));
                         
                                 try {
                                  const responseqtIb = await axios.post('https://api.travelxpo.in/auth/fare-quote', dataIb, {
                                    headers: {
                                      Authorization: `Bearer ${value}`,
                                    },
                                  });
                                  //console.log("Dataquote---"+JSON.stringify(responseqtIb.data)) ;
                                  if(responseqtIb.data.Response.Error.ErrorCode=="0")
                                         { 
                                          const reffIb=responseqtIb.data.Response.Results.IsRefundable;
                                          const basefIb=responseqtIb.data.Response.Results.Fare.PublishedFare;
                                         
                                          setBasefareIb(basefIb);
                                          setServicefare(markup);
                                          setTotalfareIb(parseFloat(basefIb)+parseFloat(markup));
                                             if(reffIb==false)
                                             {
                                               setRefumdableIb("Non Refundable");
                                             }
                                           setFarequoteIb(responseqtIb.data);
                                           //console.log("Dataquote---"+JSON.stringify(responseqt.data.Response.Results.Segments)) ;
                                           const fareBreakdown=responseqtIb.data.Response.Results.FareBreakdown ;
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
                                                 setAdultFareIb(item);
                                                 break;
                                               case 2:
                                                 setChildFareIb(item);
                                                 break;
                                               case 3:
                                                 setInfantFareIb(item);
                                                 break;
                                               default:
                                                 break;
                                             }
                                           });
                                           fetchSSRIb();
                                          }
                                  else{
                                   console.log(responseqtIb.data.Response.Error.ErrorMessage);
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
                      
                  fetchDataIb();

                fetchFareQuoteDataIb();
                            }
              },[value,dataIb]) ;
    //mxDate.setFullYear(currentDate.getFullYear() - 12);
    //mnDate.setFullYear(currentDate.getFullYear() - 112);
    // setMinDate(mnDate);
    // setMaxDate(mxDate);
    useEffect(() => {
      if (Array.isArray(ssrbag) && ssrbag.length > 0) {
      const initialSelected = ssrbag.findIndex(item => item.Price === 0.00);
      if (initialSelected !== -1) {
        const updatedSelection = Array(ssrbag.length).fill(false);
        updatedSelection[initialSelected] = true;
        const selectedBag = ssrbag[initialSelected];
        const price = parseFloat(selectedBag.Price);
        setSelectedItems(updatedSelection);
        setTotalBags(price);

      }
    }
    }, [ssrbag]);

    useEffect(() => {
      if (Array.isArray(ssrbagIb) && ssrbagIb.length > 0) {
      const initialSelected = ssrbagIb.findIndex(item => item.Price === 0.00);
      if (initialSelected !== -1) {
        const updatedSelection = Array(ssrbagIb.length).fill(false);
        updatedSelection[initialSelected] = true;
        const selectedBag = ssrbagIb[initialSelected];
        const price = parseFloat(selectedBag.Price);
        setSelectedItemsIb(updatedSelection);
        setTotalBagsIb(price);

      }
    }
    }, [ssrbagIb]);

    useEffect(() => {
      if (Array.isArray(ssrmeal) && ssrmeal.length > 0) {
      const initialSelected = ssrmeal.findIndex(item => item.Price === 0);
      if (initialSelected !== -1) {
        const updatedSelectionMeal =Array(ssrmeal.length).fill(false);// [...selectedMeals];
          updatedSelectionMeal[initialSelected] = true;//!updatedSelectionMeal[index];
          const selectedMeal = ssrmeal[initialSelected];
          const price = parseFloat(selectedMeal.Price);

        setSelectedMeals(updatedSelectionMeal);
        setTotalMeal(price);
      }
      }
    }, [ssrmeal]);
    useEffect(() => {
      if (Array.isArray(ssrmealIb) && ssrmealIb.length > 0) {
      const initialSelected = ssrmealIb.findIndex(item => item.Price === 0);
      if (initialSelected !== -1) {
        const updatedSelectionMeal =Array(ssrmealIb.length).fill(false);// [...selectedMeals];
          updatedSelectionMeal[initialSelected] = true;//!updatedSelectionMeal[index];
          const selectedMeal = ssrmealIb[initialSelected];
          const price = parseFloat(selectedMeal.Price);

        setSelectedMealsIb(updatedSelectionMeal);
        setTotalMealIb(price);
      }
      }
    }, [ssrmealIb]);
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
            const selectedMealDynamic1Ib=selectedMealDynamicIb;
            const selectedBagDynamic1Ib=selectedBagDynamicIb;
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
                  "BaggageIb":selectedBagDynamic1Ib,
                  "MealDynamic":selectedMealDynamic1,
                  "MealDynamicIb":selectedMealDynamic1Ib,
                  "Fare":infantFare,
                  "FareIb":infantFareIb,
                "GSTCompanyAddress": "",
                "GSTCompanyContactNumber": "",
                "GSTCompanyName": "",
                "GSTNumber": "",
                "GSTCompanyEmail": ""
                };
               passeng.push(dattaI);
               setSelectedMealDynamic([]);
                  setSelectedBagDynamic([]);
                  setSelectedMealDynamicIb([]);
                  setSelectedBagDynamicIb([]);
               idc=infant-1;
               setInfant(idc);
               if(idc==0)
               {setHeading("Please Submit the form");
               setBtnhead("Submit");
               setEditView("block");
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
             "BaggageIb":selectedBagDynamic1Ib,
             "MealDynamic":selectedMealDynamic1,
               "MealDynamicIb":selectedMealDynamic1Ib,
               "Fare":childFare,
               "FareIb":childFareIb,
             "GSTCompanyAddress": "",
             "GSTCompanyContactNumber": "",
             "GSTCompanyName": "",
             "GSTNumber": "",
             "GSTCompanyEmail": ""
                };
            passeng.push(dattaC);
            setSelectedMealDynamic([]);
            setSelectedBagDynamic([]);
            setSelectedMealDynamicIb([]);
            setSelectedBagDynamicIb([]);
            cdc=child-1;
            setChild(cdc);
            if(cdc==0 && idc==0)
            {setHeading("Please Submit the form");
            setBtnhead("Submit");
            setEditView("block");
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
                          "BaggageIb":selectedBagDynamic1Ib,
                          "MealDynamic":selectedMealDynamic1,
                          "MealDynamicIb":selectedMealDynamic1Ib,
                          "Fare":adultFare,
                          "FareIb":adultFareIb,
                        "GSTCompanyAddress": "",
                        "GSTCompanyContactNumber": "",
                        "GSTCompanyName": "",
                        "GSTNumber": "",
                        "GSTCompanyEmail": ""
                    };
               passeng.push(dattaA);
               setSelectedMealDynamic([]);
               setSelectedBagDynamic([]);
               setSelectedMealDynamicIb([]);
               setSelectedBagDynamicIb([]);
               addc=adult-1;
               setAdult(addc);
               if(addc==0 && cdc==0 && idc==0)
            {setHeading("Please Submit the form");
            setBtnhead("Submit");
            setEditView("block");
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
           const flightchargeIb=parseFloat(priceIb)-parseFloat(markup);
          if(btnhead=='Submit')
          {
            const updatedPassengersob = passengers.map(passenger => {
              // Destructure the passenger object and omit the specified properties
              const { FareIb, MealDynamicIb, BaggageIb, ...rest } = passenger;
              return rest;
          });
          
          const updatedPassengersib = passengers.map(passenger => {
            // Remove specified properties
            const { Fare, MealDynamic, Baggage, ...rest } = passenger;
            return rest;
            });
            const finalUpdatedPassengersib = updatedPassengersib.map(updatedPassengerr => ({
              ...updatedPassengerr,
              Fare: updatedPassengerr.FareIb,
              Baggage: updatedPassengerr.BaggageIb,
              MealDynamic: updatedPassengerr.MealDynamicIb,
            }));
            const updatedPassengersibib = finalUpdatedPassengersib.map(finalUpdatedPassenger => {
              // Destructure the passenger object and omit the specified properties
              const { FareIb, MealDynamicIb, BaggageIb, ...rest } = finalUpdatedPassenger;
              return rest;
            });
            const service1 = parseFloat(tboService)/2;
            const discount1 = parseFloat(tboDiscount)/2;
                        const data=
                        {
                            "ResultIndex": resultindex,
                            "agentId":parseInt(agentId),
                            "branchId":parseInt(branchId),
                            "markup":markup,
                            "totalBookingFare":priceOb,
                            "journeyType":journeyType,
                            "userId":1,
                            "flightcharge":flightchargeOb,
                            "adultCount":parseInt(adultss1),
                            "childCount":parseInt(childss1),
                            "infantCount":parseInt(infants1),
                            "Passengers": updatedPassengersob,
                            "IsLCC":isLCC,
                            "TraceId": traceId,
                            "additional_service":parseFloat(service1),
                            "additional_discount":parseFloat(discount1)
                        };
                        const dataobib=
                        {
                            "ResultIndex": resultindexIb,
                            "agentId":parseInt(agentId),
                            "branchId":parseInt(branchId),
                            "markup":markup,
                            "totalBookingFare":priceIb,
                            "journeyType":journeyType,
                            "userId":1,
                            "flightcharge":flightchargeIb,
                            "adultCount":parseInt(adultss1),
                            "childCount":parseInt(childss1),
                            "infantCount":parseInt(infants1),
                            "Passengers": updatedPassengersibib,
                            "IsLCC":isLCCIb,
                            "TraceId": traceId,
                            "additional_service":parseFloat(service1),
                            "additional_discount":parseFloat(discount1)
                        };
//console.log('11111111111111'+JSON.stringify(data));
//console.log('22222222222222'+JSON.stringify(dataobib));
                    
                    try {

                        const response = await axios.post('https://api.travelxpo.in/auth/booking', data, {
                            headers: {
                              Authorization: `Bearer ${value}`,
                            },
                          });
                          
                         // console.log("exit");
                        
                      
                              
                                      if(response.data.Response.Error.ErrorCode=="0")
                                      {
                                        setResponsebook(response.data);
                                       
                                            const responseib = await axios.post('https://api.travelxpo.in/auth/booking', dataobib, {
                                            headers: {
                                            Authorization: `Bearer ${value}`,
                                            },
                                             });
                                            if(responseib.data.Response.Error.ErrorCode=="0")
                                            {
                                            setResponsebookreturn(responseib.data);
                                                navigate('/bookingRound', { state: { 
                                                    responsebook: response.data ,
                                                    responsebookreturn: responseib.data
                                                
                                                } });
                                       
                                            
                                            }
                                            else{
                                                alert("Arrival Booking Failed:"+responseib.data.Response.Error.ErrorMessage);
                                            } 
                      
                                      }
                                      else{
                                        alert("Departure Booking Failed"+response.data.Response.Error.ErrorMessage);
                                        }
                                        
                                       
                                        


                           
                        } catch (error) {
                        // Handle errors
                        console.error(error);
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
      const [showBaggage, setShowBaggage] = useState(false);
    const [showMeals, setShowMeals] = useState(false);
    const [showBaggageIb, setShowBaggageIb] = useState(false);
    const [showMealsIb, setShowMealsIb] = useState(false);

    const handleBaggageClick = () => {

      setShowBaggage(prevShowBaggage => !prevShowBaggage);
      setShowBaggageIb(false);
      setShowMeals(false);
      setShowMealsIb(false);
    };
    const handleBaggageClickIb = () => {

      setShowBaggageIb(prevShowBaggageIb => !prevShowBaggageIb);
      setShowBaggage(false);
      setShowMeals(false);
      setShowMealsIb(false);
      
    };
    const handleMealsClick = () => {
      setShowMeals(prevShowMeals => !prevShowMeals); 
      setShowMealsIb(false);
      setShowBaggage(false);
      setShowBaggageIb(false); 
    };
    const handleMealsClickIb = () => {
      setShowMealsIb(prevShowMealsIb => !prevShowMealsIb); 
      setShowMeals(false);
      setShowBaggage(false);
      setShowBaggageIb(false);
     
       
    };
  const handleChange = (event) => {
   // alert(event.target.value);
    setTitle(event.target.value);
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
    setEditedMealDynamicIb(passenger.MealDynamicIb);
    setEditedBagDynamicIb(passenger.BaggageIb);
    setEditedFareIb(passenger.FareIb);
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
  MealDynamicIb:editedMealDynamicIb,
  Baggage:editedBagDynamic,
  BaggageIb:editedBagDynamicIb,
  Fare:editedFare,
  FareIb:editedFareIb,
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
  return `${dateParts[1]}-${dateParts[2]}-${dateParts[0]}`;
}
const [selectedItems, setSelectedItems] = useState([]);
const [selectedMeals, setSelectedMeals] = useState([]);
const [selectedItemsIb, setSelectedItemsIb] = useState([]);
const [selectedMealsIb, setSelectedMealsIb] = useState([]);
// Function to handle item selection

const handleItemSelect = (index) => {
  const updatedSelection = Array(ssrbag.length).fill(false);
  updatedSelection[index] = true;
  const selectedBag = ssrbag[index];
  const price = parseFloat(selectedBag.Price);
  setSelectedItems(updatedSelection);
  setTotalBags(price);  
};
const handleItemSelectIb = (indexIb) => {
  const updatedSelectionIb = Array(ssrbagIb.length).fill(false);
  updatedSelectionIb[indexIb] = true;
  const selectedBagIb = ssrbagIb[indexIb];
  const price = parseFloat(selectedBagIb.Price);
  setSelectedItemsIb(updatedSelectionIb);
  setTotalBagsIb(price);  
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
const submitSelectedItemsIb = (event) => {
  event.preventDefault();
  event.stopPropagation();
  const selectedBagDynamicIb = ssrbagIb.filter((item, indexIb) => selectedItemsIb[indexIb]);
  const selectedBaggageWithFloatPriceIb = selectedBagDynamicIb.map(item => ({
    ...item,
    Price: parseFloat(Number(item.Price)) // Convert the price to float using parseFloat()
}));
setSelectedBagDynamicIb(selectedBaggageWithFloatPriceIb);
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
const handleMealSelectIb = (indexIb) => {
  const updatedSelectionMealIb =Array(ssrmealIb.length).fill(false);// [...selectedMeals];
  updatedSelectionMealIb[indexIb] = true;//!updatedSelectionMeal[index]; 
  const selectedMealIb = ssrmealIb[indexIb];
  const price = parseFloat(selectedMealIb.Price);
  /*if (!updatedSelectionMeal[index]) {
    setTotalMeal(price);} 
    else {setTotalMeal( price);}*/
  setSelectedMealsIb(updatedSelectionMealIb);
  setTotalMealIb(price);
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
const handleChangeNumberIb = (indexIb, quantity) => {
  const selectedMealIb = ssrmealIb[indexIb];
  const price = parseFloat(Number(selectedMealIb.Price * quantity));
  let updatedTotalMealIb = totalMealIb;
  if (selectedMealsIb[indexIb]) {
    updatedTotalMealIb = parseFloat(Number(totalMealIb - (selectedMealIb.Quantity * parseFloat(selectedMealIb.Price)) + price));
    }
  selectedMealIb.Quantity=quantity;
  setTotalMealIb(updatedTotalMealIb);
  selectedMealIb.Quantity = quantity;
  const updatedSelectionMealIb = [...selectedMealsIb];
  setSelectedMealsIb(updatedSelectionMealIb);
  const dynamicSelectionIb = ssrmealIb.filter((item, indexIb) => updatedSelectionMealIb[indexIb]);
  setSelectedMealDynamicIb(dynamicSelectionIb);
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
const submitSelectedMealsIb= (event) => {
  event.preventDefault();
    event.stopPropagation();
  const selectedMealDynamicIb = ssrmealIb.filter((item, indexIb) => selectedMealsIb[indexIb]);
  const selectedMealDynamicWithFloatPriceIb = selectedMealDynamicIb.map(item => ({
    ...item,
    Price: parseFloat(Number(item.Price)) // Convert the price to float using parseFloat()
}));
  setSelectedMealDynamicIb(selectedMealDynamicWithFloatPriceIb);
 //alert(JSON.stringify(selectedMealDynamic));
};
const [selectedMealIndex, setSelectedMealIndex] = useState(null);
const [selectedMealIndexIb, setSelectedMealIndexIb] = useState(null);
const handleMealSelectEdit = (index) => {
  const selectedMeal = ssrmeal[index];
  
  // Replace the first meal with the selected meal
  const updatedMeals = [...editedMealDynamic];
  updatedMeals[0] = selectedMeal;
  
  setEditedMealDynamic(updatedMeals);
};
const handleMealSelectEditIb = (index) => {
  const selectedMealIb = ssrmealIb[index];
  
  // Replace the first meal with the selected meal
  const updatedMealsIb = [...editedMealDynamicIb];
  updatedMealsIb[0] = selectedMealIb;
  
  setEditedMealDynamicIb(updatedMealsIb);
};
const handleMealCancel = () => {
  setEditedMealDynamic([]);
};
const handleMealCancelIb = () => {
  setEditedMealDynamicIb([]);
};
const [selectedBagIndex, setSelectedBagIndex] = useState(null);
const [selectedBagIndexIb, setSelectedBagIndexIb] = useState(null);
const handleItemSelectEdit = (index) => {
  const selectedBag = ssrbag[index];
  
  // Replace the first meal with the selected meal
  const updatedBags = [...editedBagDynamic];
  updatedBags[0] = selectedBag;
  
  setEditedBagDynamic(updatedBags);

};
const handleItemSelectEditIb = (index) => {
  const selectedBagIb = ssrbagIb[index];
  
  // Replace the first meal with the selected meal
  const updatedBagsIb = [...editedBagDynamicIb];
  updatedBagsIb[0] = selectedBagIb;
  
  setEditedBagDynamicIb(updatedBagsIb);

};
const handleBagCancel = () => {
  setEditedBagDynamic([]);
};
const handleBagCancelIb = () => {
  setEditedBagDynamicIb([]);
};
 useEffect(() => {
   // Find the index of the previously selected meal
   const selectedIndex =1;//ssrmeal.findIndex(item => item.Code === editedMealDynamic.Code);
   if (selectedIndex !== -1) {
     setSelectedMealIndex(selectedIndex);
   } else {
     setSelectedMealIndex(null); // If the previously selected meal is not found, reset the selected meal
   }
 }, [editedMealDynamic, ssrmeal]);
 useEffect(() => {
   // Find the index of the previously selected meal
   const selectedIndex =1;// ssrbag.findIndex(item => item.Code === editedBagDynamic.Code);
   if (selectedIndex !== -1) {
     setSelectedBagIndex(selectedIndex);
   } else {
     setSelectedBagIndex(null); // If the previously selected meal is not found, reset the selected meal
   }
 }, [editedBagDynamic, ssrbag]);
 useEffect(() => {
  // Find the index of the previously selected meal
  const selectedIndexIb =1;// ssrmealIb.findIndex(item => item.Code === editedMealDynamicIb.Code);
  if (selectedIndexIb !== -1) {
    setSelectedMealIndexIb(selectedIndexIb);
  } else {
    setSelectedMealIndexIb(null); // If the previously selected meal is not found, reset the selected meal
  }
}, [editedMealDynamicIb, ssrmealIb]);
useEffect(() => {
  // Find the index of the previously selected meal
  const selectedIndexIb =1;// ssrbagIb.findIndex(item => item.Code === editedBagDynamicIb.Code);
  if (selectedIndexIb !== -1) {
    setSelectedBagIndexIb(selectedIndexIb);
  } else {
    setSelectedBagIndexIb(null); // If the previously selected meal is not found, reset the selected meal
  }
}, [editedBagDynamicIb, ssrbagIb]);
useEffect(() => {
  let totalMealPrice = 0;
  let totalBagPrice = 0;
  let totalMealPriceIb = 0;
  let totalBagPriceIb = 0;
  passengers.forEach(passenger => {
    // Check if the passenger has MealDynamic
    if (passenger.MealDynamic && passenger.MealDynamic.length > 0) {
      // Iterate through MealDynamic of the passenger and sum up the prices
      passenger.MealDynamic.forEach(meal => {
        totalMealPrice += meal.Price;
      });
    }
    if (passenger.MealDynamicIb && passenger.MealDynamicIb.length > 0) {
      // Iterate through MealDynamic of the passenger and sum up the prices
      passenger.MealDynamicIb.forEach(meal => {
        totalMealPriceIb += meal.Price;
      });
    }
    if (passenger.Baggage && passenger.Baggage.length > 0) {
      // Iterate through MealDynamic of the passenger and sum up the prices
      passenger.Baggage.forEach(bag => {
        totalBagPrice += bag.Price;
      });
    }
    if (passenger.BaggageIb && passenger.BaggageIb.length > 0) {
      // Iterate through MealDynamic of the passenger and sum up the prices
      passenger.BaggageIb.forEach(bag => {
        totalBagPriceIb += bag.Price;
      });
    }
  });
  setTotalMeal(totalMealPrice);
  setTotalMealIb(totalMealPriceIb);
  setTotalBags(totalBagPrice);
  setTotalBagsIb(totalBagPriceIb);
  setPriceOb(basefare+totalMealPrice+totalBagPrice+servicefare);
  setPriceIb(basefareIb+totalMealPriceIb+totalBagPriceIb+servicefare);
 // setFlightcharge(flightcharge+totalMealPrice+totalBagPrice);
}, [passengers]);
const [showBaggageFirst, setShowBaggageFirst] = useState(false);
const [showMealsFirst, setShowMealsFirst] = useState(false); 
const [showBaggageFirstIb, setShowBaggageFirstIb] = useState(false);
const [showMealsFirstIb, setShowMealsFirstIb] = useState(false); 

const handleMealsClickFirst = (event) => {
  event.preventDefault();
  event.stopPropagation();
  setShowBaggageFirst(false);
  setShowBaggageFirstIb(false);
  setShowMealsFirstIb(false);
  setShowMealsFirst(prevShowMealsFirst => !prevShowMealsFirst);
  
};
const handleBaggageClickFirst = (event) => {
  event.preventDefault();
  event.stopPropagation();
  setShowBaggageFirst(prevShowBaggageFirst => !prevShowBaggageFirst);
  setShowMealsFirst(false);
  setShowBaggageFirstIb(false);
  setShowMealsFirstIb(false);
};
const handleMealsClickFirstIb = (event) => {
  event.preventDefault();
  event.stopPropagation();
  setShowBaggageFirstIb(false);
  setShowBaggageFirst(false);
  setShowMealsFirst(false);
  setShowMealsFirstIb(prevShowMealsFirstIb => !prevShowMealsFirstIb);
  
};
const handleBaggageClickFirstIb = (event) => {
  event.preventDefault();
  event.stopPropagation();
  setShowBaggageFirstIb(prevShowBaggageFirstIb => !prevShowBaggageFirstIb);
  setShowBaggageFirst(false);
  setShowMealsFirst(false);
  setShowMealsFirstIb(false);
  
};
  return (
    <div>
        <Navbar />
         {/* <Sidebar /> */}
         <div className="main-content">

<div className="page-content"   style={{backgroundColor:"#fff"}}>
    <div className="container">

        <div className="row">
            <div className="col-8">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                 <strong><p className="mb-sm-0">Passengers : {passenStr} </p></strong>   
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
                                      {farequote && farequote.Response.Results.Segments[0].map((seggm, index) => {
                                        return(

                                        <tr  key={index}>
                                          <th style={{width:"15%",paddingLeft: "1rem"}}>
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
                                        
                                      )})}
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                              <h4>FLIGHT RETURN DETAILS</h4>
                              <div className="row p-3">
                                <div className="col-lg-6 col-4">
                                  <h3 class="pt-2"></h3>
                                </div>
                                <div className="col-lg-3 col-6 text-end linkssec">
                                  <p class="pt-2">Baggage and fare rules</p> 
                                </div>
                                <div className="col-lg-3 text-end">
                                   <button className="btn btn-dark" > {refundableIb}</button>
                                </div>
                              </div>

                              <div className="card"><br />
                           

                                <div className="card-body p-0">
                                  
                                  <div className="table-responsive mt-4">
                                    <table className="table dt-responsive tableflights bg-white table-borderless">
                                      <tbody>
                                      {farequoteIb && farequoteIb.Response.Results.Segments[0].map((seggm, index) => {
                                        return(

                                        <tr  key={index}>
                                          <th style={{width:"15%",paddingLeft: "1rem"}}>
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
                                        
                                      )})}
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
                          <h5>Return Fare Rules</h5>
                          {fareIb && fareIb.Response.FareRules.map((resu, index) => (
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
            <div className="row">
            <div className="col-lg-12">
              <div className="asidesection bg-white">
                <div className="card">
                    <div className="card-body">
                      <h4>FARE SUMMARY </h4>
                      <p>{passenStr}	</p>
                    </div>
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
                                                <td><h5>Total</h5></td>
                                                <td  className="text-right"><h5>{(parseFloat(basefare)+parseFloat(servicefare)+parseFloat(totalBags)+parseFloat(totalMeal)).toLocaleString('en-IN', {style: 'currency',currency: 'INR'})}</h5></td>
                                              </tr>
                           
                          </tbody>
                          </table>
                        </div>
                      </div>
                </div>  
              </div>
              </div>
              <div className="col-lg-12">
              <div className="asidesection bg-white">
                <div className="card">
                    <div className="card-body">
                      <h4>RETURN TRIP FARE SUMMARY </h4>
                      <p>{passenStr}	</p>
                    </div>
                      <div className="pricedetails">
                        <div className="price">
                          <table className="table pricelisttable bg-white table-borderless">
                          <tbody>
                          <tr>
                        <td>Base fare + Tax</td>
                        <td className="text-right">{(parseFloat(basefareIb)+parseFloat(servicefare)).toLocaleString('en-IN', {style: 'currency',currency: 'INR'})}</td>
                      </tr>
                            <tr>
                              <td></td>
                              <td></td>
                            </tr>
                         
                      <tr>
                                                <td></td>
                                                <td></td>
                                              </tr> <tr>
                                              <td>Meals Charge</td>
                                          <td className="text-right">{parseFloat(totalMealIb).toLocaleString('en-IN', {style: 'currency',currency: 'INR'})}</td>
                                        </tr>
                                        <tr>
                                                <td></td>
                                                <td></td>
                                              </tr> <tr>
                                              <td>Baggage Charge</td>
                                          <td className="text-right">{parseFloat(totalBagsIb).toLocaleString('en-IN', {style: 'currency',currency: 'INR'})}</td>
                                        </tr>
                                        <tr>
                                                <td></td>
                                                <td></td>
                                              </tr>   
                                              <tr>
                                                <td><h5>Total</h5></td>
                                                <td  className="text-right"><h5>{(parseFloat(basefareIb)+parseFloat(servicefare)+parseFloat(totalBagsIb)+parseFloat(totalMealIb)).toLocaleString('en-IN', {style: 'currency',currency: 'INR'})}</h5></td>
                                              </tr>
                                              <tr>
                                                <td></td>
                                                <td></td>
                                              </tr>
                                              <tr>
                        <td>Service Charge</td>
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
                              <td><h5>Grand Total<span style={{fontSize:"12px"}}>({(parseFloat(basefare)+parseFloat(servicefare)+parseFloat(totalBags)+parseFloat(totalMeal)).toFixed(2)} + {(parseFloat(basefareIb)+parseFloat(servicefare)+parseFloat(totalBagsIb)+parseFloat(totalMealIb)).toFixed(2)}+{(parseFloat(tboService)).toFixed(2)}-{(parseFloat(tboDiscount)).toFixed(2)})</span></h5></td>
                              <td  className="text-right"><h5>{(parseFloat(basefare)+parseFloat(servicefare)+parseFloat(totalBags)+parseFloat(totalMeal)+parseFloat(basefareIb)+parseFloat(servicefare)+parseFloat(totalBagsIb)+parseFloat(totalMealIb)+parseFloat(tboService)-parseFloat(tboDiscount)).toLocaleString('en-IN', {style: 'currency',currency: 'INR'})}</h5></td>
                            </tr>
                          </tbody>
                          </table>
                        </div>
                      </div>
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
                                <a href="javaScript:void(0);"> <h4> ◄◄ <i className="fa fa-home pt-4" aria-hidden="true"style={{color: "#333",size:"50px"}}></i> </h4></a>
                                </Link>
                          </div>
                      </div>
                    </div>
                    <div className="cardsection">
                        <div className="editProfileForm">
                            
                            <div className="clearDiv row">
                           
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                <label>Email</label>
                                    <div className="input_icon">
                                    <TextField
                                        id="email"
                                        name="email"
                                        className="form-control"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        type="email"
                                        error={formik.touched.email && Boolean(formik.errors.email)}
                                        helperText={formik.touched.email && formik.errors.email}
                                        inputProps={{ style: { width: '250px' } }}
                                    /> 
                               
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
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
                                        className="form-control"
                                        value={formik.values.mobile}
                                        onChange={formik.handleChange}
                                        type="number"
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                                        helperText={formik.touched.mobile && formik.errors.mobile}
                                    /> 
                               
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
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

                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
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
                                        inputProps={{ style: { width: '250px' } }}
                                    /> 
                               
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
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

                        <div className="clearDiv"><br />
                        <i className="fa fa-user" aria-hidden="true"></i> <span> {heading} </span>
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

                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
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
                               
                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
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
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                <label>Dob</label>
                                    <div className="input_icon">
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
                           </div>
                         <div class="row">  
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
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
                                    <label>Passport Number</label>
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
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                     <label>Expiry Date</label>
                                    <div className="input_icon">
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
                                {isLCC && (
                <div className="col-lg-12 mt-5 detailsview">
                  <div className="card">
                    <div className="col-md-4">
                      <a href="javasript:void(0);"  onClick={handleBaggageClickFirst} className="btn btn-info" >Choose Baggage</a>
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
              {item.Weight} kg  ₹ {parseFloat(item.Price)}
            </label>
            {/* </div> */}
          </div>
        </div>
      </div>
      <br />
    </div>
 // )
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
                                      onClick={submitSelectedItems}>Apply Additional Baggage</button>
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
  //items.Code !== 'NoMeal' && (
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
 // )
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

{/* ...................... */}
{isLCCIb && (
                <div className="col-lg-12 mt-5 detailsview">
                  <div className="card">
                    <div className="col-md-4">
                      <a href="javasript:void(0);"  onClick={handleBaggageClickFirstIb} className="btn btn-info" >Choose Baggage Return</a>
                    </div>
                    {showBaggageFirstIb && (
                    <div className="cardsection">
                      <div className="row">
                        <div className="col-lg-12 nbtext"></div>
                                  

{ssrbagIb && ssrbagIb.map((item, indexIb) => (
 // item.Weight > 0 && (
    <div key={indexIb} className="col-md-4">
      <div className="row">
        
        <div className="col-md-12">
        <div style={{ display: 'flex', alignItems: 'center' }}> 
        <img src="assets/images/bag.png" alt="" style={{ width: "30px", height: "auto" }} />
          {/* <div style={{ marginTop: "5px" }}> */}
            <input
               type="radio"
               id={`radioIb-${indexIb}`}
               name="selectedBagIb"
              checked={selectedItemsIb[indexIb] || false}
              onChange={() => handleItemSelectIb(indexIb)}
            /> &nbsp;&nbsp;&nbsp;
            <label htmlFor={`checkboxIb-${indexIb}`}>
              {item.Weight} kg  ₹ {parseFloat(item.Price)}
            </label>
            {/* </div> */}
          </div>
        </div>
      </div>
      <br />
    </div>
 // )
))}
                                 
                      </div>

                      <div className="row">
                      <div className="col-lg-4">
                      
                                  <label style={{marginLeft: '15px'}}>BAGGAGE PRICE RETURN(INR)</label>
                                  <input
                                        type="text"
                                        id="bagtotal" 
                                        readonly
                                        value={parseFloat(Number(totalBagsIb))}
                                        style={{marginLeft: '15px',width:"100px",textAlign:"right",border: '1px solid #ddc8c8'}}
                                        
                                      />
                        </div>
                        <div className="col-lg-4">
                                      <button  className="btn btn-primary" 
                                      style={{marginLeft: '15px'}}
                                      onClick={submitSelectedItemsIb}>Apply Return Baggage</button>
                       </div>
                    </div>


                    </div>

                    )}

                    
                  </div>
                </div>
  )}
{isLCCIb && (
                <div className="col-lg-12 mt-5 detailsview">
                  <div className="card">
                    <div className="col-md-4">
                     <a href="javasript:void(0);"  onClick={handleMealsClickFirstIb} className="btn btn-info" >Choose Meals Return</a>
                    </div>
                    {showMealsFirstIb && (
                    <div className="cardsection">
                      <div className="row"> 
                        <div className="col-lg-12 nbtext"></div> 
                        {ssrmealIb && ssrmealIb.map((items, indexIb) => (
 // items.Code !== 'NoMeal' && (
    <div key={indexIb} className="col-md-4">
      <div className="row">
        
        <div className="col-md-12">
        <div style={{ display: 'flex', alignItems: 'center' }}> 
        <img src="assets/images/meals.jpg" style={{ width: "30px", height: "auto" }} alt="" />
        <label htmlFor={`checkboxIb-${indexIb}`} style={{ marginLeft: '7px' }}>
            <span style={{ fontSize: '18px', color: "red" }}> ₹ {parseFloat(items.Price)}</span>
          </label>
          <label htmlFor={`checkboxIb-${indexIb}`} style={{ marginLeft: '15px' }}>Qty: 1</label>
          </div>
     
          <div style={{ display: 'flex', alignItems: 'flex-start' }}> 
          <input
            type="radio"
            id={`radioIb-${indexIb}`}
            name="mealcheckIb"
            checked={selectedMealsIb[indexIb]}
            onChange={() => handleMealSelectIb(indexIb)}
            style={{ marginTop: '5px' }}
          /> &nbsp;
          <label htmlFor={`checkboxIb-${indexIb}`} style={{ marginLeft: '7px' }}>
            {items.AirlineDescription}({items.Code})
          </label>
          </div>
          <input
            type="hidden"
            id={`textIb-${indexIb}`}
            value={ssrmealIb[indexIb].Quantity || 1} readonly="true"
            onChange={(e) => handleChangeNumber(indexIb, parseInt(e.target.value, 10))}
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
                      
                                  <label style={{marginLeft: '15px'}}>MEALS (INR)</label>
                                  <input
                                        type="text"
                                        id="mealtotalIb"
                                        value={parseFloat(Number(totalMealIb))}
                                        style={{marginLeft: '15px',width:"100px",textAlign:"right",border: '1px solid #ddc8c8'}}
                                        readonly
                                      />
                        </div>
                        <div className="col-lg-4">
                                      <button  className="btn btn-primary" 
                                      style={{marginLeft: '15px'}}
                                      onClick={submitSelectedMealsIb}>Apply Return Meals</button>
                       </div>
                    </div>



                      </div>
)}


                     
                    <br />
                  </div>
                </div>
)}
{/* ............................. */}
                                </div>            


                        </div>
                        <div className="clearDiv row">
 <div className="col-lg-4">
                      
                      <label style={{marginLeft: '15px'}}>SERVICE CHARGE (INR):</label>
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
                            <div className="clearDiv row" style={{display: editView}}>
                               <table id="datatable" className="table dt-responsive table-bordered nowrap airlisttable" style={{borderCollapse: "collapse", borderSpacing: "0", width: "100%",textAlign:"center"}}>
                                    <thead  style={{backgroundColor: "rgb(146 150 153)",color:"rgb(62 86 112)"}}>
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
                    </div>








                                     

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
            {/* <input type="date" value={editedDateOfBirth} onChange={(e) => setEditedDateOfBirth(e.target.value)} /> */}
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
                    <button onClick={handleBaggageClick}  className="btn btn-secondary">Choose Baggage</button>
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
              {item.Weight} kg  ₹ {parseFloat(item.Price)}
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
  {/* ................................ */}
          
{isLCCIb && (
                <div className="col-lg-12 mt-5 detailsview">
                  <div className="card">
                    <div className="col-md-4">
                    <button onClick={handleMealsClickIb} className="btn btn-secondary">Choose Meals Return</button>
                    </div>
                  
                    {showMealsIb && (
                    <div className="cardsection">
                      <div className="row"> 
                        <div className="col-lg-12 nbtext"></div> 
                        {ssrmealIb && ssrmealIb.map((items, indexmealIb) => (
  items.Code !== 'NoMeal' && (
    <div key={indexmealIb} className="col-md-4">
      <div className="row">
        
        <div className="col-md-12">
        <div style={{ display: 'flex', alignItems: 'center' }}> 
        <img src="assets/images/meals.jpg" style={{ width: "30px", height: "auto" }} alt="" />
        <label htmlFor={`checkbox-${indexmealIb}`} style={{ marginLeft: '7px' }}>
            <span style={{ fontSize: '18px', color: "red" }}> ₹ {parseFloat(items.Price)}</span>
          </label>
          <label htmlFor={`checkbox-${indexmealIb}`} style={{ marginLeft: '15px' }}>Qty: 1</label>
          </div>
     
          <div style={{ display: 'flex', alignItems: 'flex-start' }}> 
          <input
            type="radio"
            id={`radio1ib-${indexmealIb}`}
            name="mealcheckib"
            checked={editedMealDynamicIb.some(meal => meal.AirlineDescription === items.AirlineDescription)}
            onChange={() => handleMealSelectEditIb(indexmealIb)}
            style={{ marginTop: '5px' }}
          /> &nbsp;
          <label htmlFor={`checkbox-${indexmealIb}`} style={{ marginLeft: '7px' }}>
            {items.AirlineDescription}({items.Code})
          </label>
          </div>
          <input
            type="hidden"
            id={`textib-${indexmealIb}`}
            value={ssrmealIb[indexmealIb].Quantity || 1} readonly="true"
            onChange={(e) => handleChangeNumberIb(indexmealIb, parseInt(e.target.value, 10))}
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
                                      onClick={handleMealCancelIb}>Cancel Meal Return</button>
                       </div>
                    </div>  
                                 
                      </div>
                      </div>
                      )}
                
                  </div>
                </div>
)}
 
 {isLCCIb && (
                <div className="col-lg-12 mt-5 detailsview">
                  <div className="card">
                    <div className="col-md-4">
                    <button onClick={handleBaggageClickIb}  className="btn btn-secondary">Choose Baggage Return</button>
                    </div>
                    {showBaggageIb && (
                    <div className="cardsection">
                      <div className="row">
                        <div className="col-lg-12 nbtext"></div>
                                  

{ssrbagIb && ssrbagIb.map((item, indexbagIb) => (
  item.Weight > 0 && (
    <div key={indexbagIb} className="col-md-4">
      <div className="row">
        
        <div className="col-md-12">
        <div style={{ display: 'flex', alignItems: 'center' }}> 
        <img src="assets/images/bag.png" alt="" style={{ width: "30px", height: "auto" }} /><br />
          <div style={{ marginTop: "5px" }}>
            <input
               type="radio"
               id={`radioib-${indexbagIb}`}
               name="selectedBagib"
              checked={editedBagDynamicIb.some(bag => bag.Weight === item.Weight)}
              onChange={() => handleItemSelectEditIb(indexbagIb)}
            /> &nbsp;&nbsp;&nbsp;
            <label htmlFor={`checkboxib-${indexbagIb}`}>
              {item.Weight} kg  ₹ {parseFloat(item.Price)}
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
                                      onClick={handleBagCancelIb}>Cancel Baggage</button>
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
      </div>
          </div>
        </div>
        </div>
      )}
    </div>
  )
}
export default CustomerInfoRound