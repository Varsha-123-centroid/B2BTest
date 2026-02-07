import React,{ useState,useEffect , useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '@mui/styled-engine';
import DynamicMultycity from './Route/DynamicMultycity';
import {
    Grid,
    InputLabel,
    FormControl,
    MenuItem,
    Select,
    Stack,
    Button,
    FormHelperText,
    Autocomplete,
    CircularProgress 
  } from "@mui/material";
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { useLocation,useNavigate } from 'react-router-dom';
import axios from 'axios';
import CryptoJS from 'crypto-js';
import { toast } from 'react-toastify';
import moment from 'moment/moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const validationSchema = yup.object({
    password: yup
      .string()
      .min(6, 'Must be at least 6 characters')
      .required('Required'),
  });

  
  
const Home = () => {
    const initialValues = {
        password : 'aaaaaaaaaaa',
      };
    const [inputValue, setInputValue] = useState("");
	const [options, setOptions] = useState([]);
	const [loading, setLoading] = useState(false);

      const [totPassengers,setTotPassengers]	=useState(1);
      const radioButtonRef = useRef(null);
      const navigate = useNavigate();
      const location = useLocation();
      const token = new URLSearchParams(location.search).get('tokenid');
      const [responsee, setResponsee] = useState(null);
      const [cabinClass, setCabinClass] = useState("1");
      const [directFlight,setDirectFlight]=useState("false");
      const [oneStopFlight,setOneStopFlight]=useState("false");
      const [markuppercent,setMarkuppercent]=useState(0);
      const [uname_1, setUname_1] = useState('');
      const [username_1, setUsername_1] = useState('');
      const [password_1, setPassword_1] = useState('');
      const [branch_id, setBranch_id] = useState('');
      const today = new Date();
      const [minimDate, setMinimDate] = useState(today);
      const [minimDate2, setMinimDate2] = useState(today);
      const [minimDate3, setMinimDate3] = useState(today);
      const [minimDate4, setMinimDate4] = useState(today);
      const [minimDate5, setMinimDate5] = useState(today);
      const [fType, setFType] = useState('block');
      const [selectedFareType, setSelectedFareType] = useState(null);
	  const [resultFareType, setResultFareType] = useState(0);

      useEffect(() => {
        let params;
        if (sessionStorage.getItem('prm')) {
          params = new URLSearchParams(sessionStorage.getItem('prm'));
        } else {
          params = new URLSearchParams(location.search);
          sessionStorage.setItem('prm', location.search);
        }
        const uname_11    = params.get('xxun');
        const username_11 = atob(params.get('xxun'));
        const password_11 = params.get('pwxx');
        const branch_id1  = params.get('bbr');
        console.log(":::::::::::::::::::"+branch_id1);
        setUname_1(uname_11);
        setUsername_1(username_11);
        setPassword_1(password_11);
        setBranch_id(branch_id1);
        const uc = params.get('uc');
        sessionStorage.setItem('uss', uc.replace('-', '/'));
      }, [location.search]);
	  
		useEffect(() => {
        let params;
        if (sessionStorage.getItem('prm')) {
          params = new URLSearchParams(sessionStorage.getItem('prm'));
        } else {
          params = new URLSearchParams(location.search);
          sessionStorage.setItem('prm', location.search);
        }
        const uname_11    = params.get('xxun');
        const username_11 = atob(params.get('xxun'));
        const password_11 = params.get('pwxx');
        const branch_id1  = params.get('bbr');
        console.log(":::::::::::::::::::"+branch_id1);
        setUname_1(uname_11);
        setUsername_1(username_11);
        setPassword_1(password_11);
        setBranch_id(branch_id1);
        const uc = params.get('uc');
        sessionStorage.setItem('uss', uc.replace('-', '/'));
      }, [sessionStorage.getItem('prm')]);


      const [markup,setMarkup] =useState("0");
   
      let trsegm =[];
      let multicount=2;
      const [multisegm,setMultisegm] =useState(trsegm);
      const [showDiv, setShowDiv] = useState(false);
      const [balance, setBalance] = useState(0);
      const toggleDiv = () => {
        setShowDiv(!showDiv);
      };
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values) => {
     let segm=[];
             // if(journeyType==1){
                localStorage.setItem('adultCount', adultss); 
                localStorage.setItem('childCount', childss); 
                localStorage.setItem('infantCount', infantss);  
           
                if(totPassengers>9)
                    {
                       alert("Total Passengers should not Exceed 9..");
                       return;
                    } 
                    if(depart==='' && journeyType < 3)
                        {
                           alert("Departure And Arrival Should be Enter..");
                           return;	
                        }
                        if(arrive==='' && journeyType < 3)
                           {
                              alert("Departure And Arrival Should be Enter..");
                              return;	
                           }
                if(journeyType==1) 
                {
                    segm=[
                        {
                            "Origin": depart,
                            "Destination": arrive,
                            "FlightCabinClass": cabinClass,
                            "PreferredDepartureTime": fromdt+"T00: 00: 00",
                            "PreferredArrivalTime": fromdt+"T00: 00: 00"
                        }
                    ];
                }
                if(journeyType==2) 
                {
                    segm=[
                        {
                            "Origin": depart,
                            "Destination": arrive,
                            "FlightCabinClass": cabinClass,
                            "PreferredDepartureTime": fromdt+"T00: 00: 00",
                            "PreferredArrivalTime": fromdt+"T00: 00: 00"
                        },
                        {
                            "Origin": arrive,
                            "Destination": depart,
                            "FlightCabinClass": cabinClass,
                            "PreferredDepartureTime": returndt+"T00: 00: 00",
                            "PreferredArrivalTime": returndt+"T00: 00: 00"
                        }
                    ];
                }
                if(journeyType==3) 
                {
                    segm=[
                        {
                        "Origin": from1,
                        "Destination": to1,
                        "FlightCabinClass": cabinClass,
                        "PreferredDepartureTime": traveldt1+"T00: 00: 00",
                        "PreferredArrivalTime": traveldt1+"T00: 00: 00"
                        },
                        {
                          "Origin": from2,
                          "Destination": to2,
                          "FlightCabinClass": cabinClass,
                          "PreferredDepartureTime": traveldt2+"T00: 00: 00",
                          "PreferredArrivalTime": traveldt2+"T00: 00: 00"
                        }
                    ];
                    if(from5){
                        multicount=5;
                        segm=[
                            {
                            "Origin": from1,
                            "Destination": to1,
                            "FlightCabinClass": cabinClass,
                            "PreferredDepartureTime": traveldt1+"T00: 00: 00",
                            "PreferredArrivalTime": traveldt1+"T00: 00: 00"
                            },
                            {
                              "Origin": from2,
                              "Destination": to2,
                              "FlightCabinClass": cabinClass,
                              "PreferredDepartureTime": traveldt2+"T00: 00: 00",
                              "PreferredArrivalTime": traveldt2+"T00: 00: 00"
                            },
                            {
                              "Origin": from3,
                              "Destination": to3,
                              "FlightCabinClass": cabinClass,
                              "PreferredDepartureTime": traveldt3+"T00: 00: 00",
                              "PreferredArrivalTime": traveldt3+"T00: 00: 00"
                            },
                            {
                                "Origin": from4,
                                "Destination": to4,
                                "FlightCabinClass": cabinClass,
                                "PreferredDepartureTime": traveldt4+"T00: 00: 00",
                                "PreferredArrivalTime": traveldt4+"T00: 00: 00"
                              },
                              {
                                "Origin": from5,
                                "Destination": to5,
                                "FlightCabinClass": cabinClass,
                                "PreferredDepartureTime": traveldt5+"T00: 00: 00",
                                "PreferredArrivalTime": traveldt5+"T00: 00: 00"
                              }
                        ];
                    }
                    else if(from4){
                        multicount=4;
                        segm=[
                            {
                            "Origin": from1,
                            "Destination": to1,
                            "FlightCabinClass": cabinClass,
                            "PreferredDepartureTime": traveldt1+"T00: 00: 00",
                            "PreferredArrivalTime": traveldt1+"T00: 00: 00"
                            },
                            {
                              "Origin": from2,
                              "Destination": to2,
                              "FlightCabinClass": cabinClass,
                              "PreferredDepartureTime": traveldt2+"T00: 00: 00",
                              "PreferredArrivalTime": traveldt2+"T00: 00: 00"
                            },
                            {
                              "Origin": from3,
                              "Destination": to3,
                              "FlightCabinClass": cabinClass,
                              "PreferredDepartureTime": traveldt3+"T00: 00: 00",
                              "PreferredArrivalTime": traveldt3+"T00: 00: 00"
                            },
                            {
                                "Origin": from4,
                                "Destination": to4,
                                "FlightCabinClass": cabinClass,
                                "PreferredDepartureTime": traveldt4+"T00: 00: 00",
                                "PreferredArrivalTime": traveldt4+"T00: 00: 00"
                              }
                        ];
                    }
                    else if(from3){
                        multicount=3;
                    segm=[
                        {
                        "Origin": from1,
                        "Destination": to1,
                        "FlightCabinClass": cabinClass,
                        "PreferredDepartureTime": traveldt1+"T00: 00: 00",
                        "PreferredArrivalTime": traveldt1+"T00: 00: 00"
                        },
                        {
                          "Origin": from2,
                          "Destination": to2,
                          "FlightCabinClass": cabinClass,
                          "PreferredDepartureTime": traveldt2+"T00: 00: 00",
                          "PreferredArrivalTime": traveldt2+"T00: 00: 00"
                        },
                        {
                          "Origin": from3,
                          "Destination": to3,
                          "FlightCabinClass": cabinClass,
                          "PreferredDepartureTime": traveldt3+"T00: 00: 00",
                          "PreferredArrivalTime": traveldt3+"T00: 00: 00"
                        }
                    ];
                    }
                
                }
              const data=
              { 
                    "AdultCount": adultss, 
                    "ChildCount": childss,
                    "InfantCount": infantss,
                    "DirectFlight": directFlight,
                    "OneStopFlight": oneStopFlight,
                    "JourneyType": journeyType,
                    "ResultFareType":resultFareType,
                    "Segments": segm,
                    "Sources": null
                };
              //}
          //  console.log(value);
          console.log(JSON.stringify(data));
          localStorage.setItem('allss', allss);
             try {
                const response = await axios.post('https://api.travelxpo.in/auth/search', data, {
                  headers: {
                    Authorization: `Bearer ${value}`,
                  },
                });

                // Handle the response
             console.log(response.data);
               if(response.data.Response.Error.ErrorCode=="0" && journeyType==1)
               { setResponsee(response.data);
                //localStorage.setItem('IbOb', 'ob'); 
                //const markuppass=markup*(parseInt(adultss)+parseInt(childss)+parseInt(infantss));
                //sessionStorage.setItem('Markup', markuppass);
                
                 navigate('/fightlist', { state: { responsee: response.data } });
               }
               else if(response.data.Response.Error.ErrorCode=="0" && journeyType==3)
               { setResponsee(response.data);
                //localStorage.setItem('IbOb', 'ob'); 
                //const markuppass=markup*(parseInt(adultss)+parseInt(childss)+parseInt(infantss));
                //sessionStorage.setItem('Markup', markuppass);
                localStorage.setItem('multicount', multicount); 
                 navigate('/fightlistmulticity', { state: { responsee: response.data } });
               }
               else if(response.data.Response.Error.ErrorCode=="0" && journeyType==2)
               { 
                
                if(response.data.Response.Results.length==2)
                {
                    setResponsee(response.data);
                    localStorage.setItem('IbOb', 'ibob'); 
                    //const markuppass=markup*(parseInt(adultss)+parseInt(childss)+parseInt(infantss));
               // sessionStorage.setItem('Markup', markuppass);
                    navigate('/fightlistround', { state: { responsee: response.data } });
                    
                }
                else{
                    //const markuppass=markup*(parseInt(adultss)+parseInt(childss)+parseInt(infantss));
                //sessionStorage.setItem('Markup', markuppass);
                    navigate('/fightlistcombo', { state: { responsee: response.data } });
                }
               }
               else{
                alert("No result found due to some technical reason, Please try again..");
                
               }
              } catch (error) {
                // Handle errors
                console.error(error);
              }
            

          },
      });
      const handleClick = () => {
        const element = document.getElementById('traveller_flight_box');
        if (element) {
          element.style.display = 'none';
        }
      };
    const [adultss,setAdultss] = useState("1");
    const [childss,setChildss] = useState("0");
    const [infantss,setInfantss] = useState("0");
    const [allss,setAllss] = useState("1 Adult.");
    const [journeyType,setJourneyType] = useState("1");
    const [rtnview,setRtnview] = useState("block");
    const [rtnview1,setRtnview1] = useState("block");
    const [rtnview2,setRtnview2] = useState("block");
    const [rtnview3,setRtnview3] = useState("none");

    const currentDate = new Date().toISOString().split('T')[0];
    const [fromdt,setFromdt]=useState(currentDate);
    const [returndt,setReturndt]=useState(currentDate);
    const [heightfrm,setHeightfrm]=useState("650");


    const [depart,setDepart] = useState("");
    const [arrive,setArrive] = useState("");
    const [departLabel,setDepartLabel] = useState("");
	const [arriveLabel,setArriveLabel] = useState("");

    const [value, setValue] = useState(''); 

       
    let [divv3,setDivv3] = useState("none");
    let [divv4,setDivv4] = useState("none");
    let [divv5,setDivv5] = useState("none");
    let [ctt,setCtt] = useState("2");
    let [divs, setDivs] = useState([{ fromcity: '', tocity: '' ,depatdt:''}]);

    const [from1,setFrom1]=useState("");
    const [to1,setTo1]=useState("");
    const [from1Label,setFrom1Label]=useState("");
    const [to1Label,setTo1Label]=useState("");
    const [traveldt1,setTraveldt1]=useState(currentDate);

    const [from2,setFrom2]=useState("");
    const [to2,setTo2]=useState("");
    const [from2Label,setFrom2Label]=useState("");
    const [to2Label,setTo2Label]=useState("");
    const [traveldt2,setTraveldt2]=useState(currentDate);

    const [from3,setFrom3]=useState("");
    const [to3,setTo3]=useState("");
    const [from3Label,setFrom3Label]=useState("");
    const [to3Label,setTo3Label]=useState("");
    const [traveldt3,setTraveldt3]=useState(currentDate);

    const [from4,setFrom4]=useState("");
    const [to4,setTo4]=useState("");
    const [from4Label,setFrom4Label]=useState("");
    const [to4Label,setTo4Label]=useState("");
    const [traveldt4,setTraveldt4]=useState(currentDate);
    
    const [from5,setFrom5]=useState("");
    const [to5,setTo5]=useState("");
    const [from5Label,setFrom5Label]=useState("");
    const [to5Label,setTo5Label]=useState("");
    const [traveldt5,setTraveldt5]=useState(currentDate);
    const [tokenid, setTokenid] = useState('');

    const handleDateChange = (date, fieldName) => {
        const formattedDate = moment(date).format('YYYY-MM-DD');
      
        if (fieldName === 'fromdt') {
            setFromdt(moment(formattedDate).format('YYYY-MM-DD'));
            setReturndt(moment(formattedDate).format('YYYY-MM-DD'));
            setMinimDate(new Date(moment(formattedDate).format('YYYY-MM-DD')));
            
          }
          else if (fieldName === 'returndt') {
            setReturndt(moment(formattedDate).format('YYYY-MM-DD'));
            setMinimDate(new Date(moment(formattedDate).format('YYYY-MM-DD')));
           
        }else if (fieldName === 'traveldt1') {  
            setTraveldt1(moment(formattedDate).format('YYYY-MM-DD'));
            setTraveldt2(moment(formattedDate).format('YYYY-MM-DD'));
            setMinimDate2(new Date(moment(formattedDate).format('YYYY-MM-DD')));

        }else if (fieldName === 'traveldt2') {
            setTraveldt2(moment(formattedDate).format('YYYY-MM-DD'));
            setTraveldt3(moment(formattedDate).format('YYYY-MM-DD'));
            setMinimDate3(new Date(moment(formattedDate).format('YYYY-MM-DD')));
        }else if (fieldName === 'traveldt3') {
            setTraveldt3(moment(formattedDate).format('YYYY-MM-DD'));
            setTraveldt4(moment(formattedDate).format('YYYY-MM-DD'));
           setMinimDate4(new Date(moment(formattedDate).format('YYYY-MM-DD')));
        }else if (fieldName === 'traveldt4') {
            setTraveldt4(moment(formattedDate).format('YYYY-MM-DD'));
            setTraveldt5(moment(formattedDate).format('YYYY-MM-DD'));
          setMinimDate5(new Date(moment(formattedDate).format('YYYY-MM-DD')));
        }else if (fieldName === 'traveldt5') {
            setTraveldt5(moment(formattedDate).format('YYYY-MM-DD'));
            setMinimDate5(new Date(moment(formattedDate).format('YYYY-MM-DD')));
        }

        };


    const handleDateChange1 = (event) => {
    
       //setFromdt(event.target.value);

        const { name, value } = event.target;
 
        if (name === 'fromdt') {
          setFromdt(value);
        } else if (name === 'returndt') {
          setReturndt(value);
        }else if (name === 'traveldt1') {
            setTraveldt1(value);
        }else if (name === 'traveldt2') {
            setTraveldt2(value);
        }else if (name === 'traveldt3') {
            setTraveldt3(value);
        }else if (name === 'traveldt4') {
            setTraveldt4(value);
        }else if (name === 'traveldt5') {
            setTraveldt5(value);
        }

      };

    const handleChange = event => {

        setDepart(event.target.value);
    };
    const handleOptionChange = event => {
        setRtnview3("block");
        if(event.target.value == "1")
        {setRtnview1("block");
            setRtnview("none");
            setRtnview2("none");
            setJourneyType("1");
        }
        if(event.target.value == "2")
        {setRtnview1("block");
            setRtnview("block");
            setRtnview2("none");
            setJourneyType("2");}
        if(event.target.value == "3")
        {setRtnview1("none");
        setRtnview2("block");
        setJourneyType("3");
        }
    };
    const setadlt = event => {
        setAdultss(event.target.value);
        let ad=event.target.value+" Adults, ";
        if(event.target.value===1)
        ad=event.target.value+" Adult, ";
        if(event.target.value===0)
        ad="";
        let ch=childss+" Children, ";
        if(childss===1)
        ch=childss+" Child, ";
        if(childss===0)
        ch="";
        let inf=infantss+" Infants, ";
        if(infantss===1)
        inf=infantss+" Infant, ";
        if(infantss===0)
        inf="";
        setAllss(ad+ch+inf);
       
        const passcount = parseInt(event.target.value, 10) + parseInt(childss, 10) + parseInt(infantss, 10);
		if(passcount>9)
		{
alert("Total Passengers can not exceed than 9. ")

		}
      
        setTotPassengers(passcount);
    };
    const setchild = event => {
        setChildss(event.target.value);
        let ad=adultss+" Adults, ";
        if(adultss===1)
        ad=adultss+" Adult, ";
        if(adultss===0)
        ad="";
        let ch=event.target.value+" Children, ";
        if(event.target.value===1)
        ch=event.target.value+" Child, ";
        if(event.target.value===0)
        ch="";
        let inf=infantss+" Infants. ";
        if(infantss===1)
        inf=infantss+" Infant. ";
        if(infantss===0)
        inf="";
        setAllss(ad+ch+inf);
        const passcount = parseInt(adultss, 10)+ parseInt(event.target.value, 10) +  parseInt(infantss, 10);
        
		if(passcount>9)
		{
alert("Total Passengers can not exceed than 9. ")

		}
       
        setTotPassengers(passcount);
    };

    const setinfant = event => {
        setInfantss(event.target.value);
        let ad=adultss+" Adults, ";
        if(adultss===1)
        ad=adultss+" Adult, ";
        if(adultss===0)
        ad="";
        let ch=childss+" Children, ";
        if(childss===1)
        ch=childss+" Child, ";
        if(childss===0)
        ch="";
        let inf=event.target.value+" Infants, ";
        if(event.target.value===1)
        inf=event.target.value+" Infant, ";
        if(event.target.value===0)
        inf="";
        setAllss(ad+ch+inf);
        const passcount = parseInt(adultss, 10)+  parseInt(childss, 10)+ parseInt(event.target.value, 10) ;
      
		if(passcount>9)
		{
alert("Total Passengers can not exceed than 9. ")

		}
        setTotPassengers(passcount);
       
    };
    const setCabin = event => {
       // alert(event.target.value);
        setCabinClass(event.target.value);
    }
    const [data, setData] = useState([]);
    const getList = (list) =>
    list.map((item) => ({
      value: item.code,
      label: item.code + " -- "+item.name + " -- "+ item.country,
    }));
    useEffect(() => {
        // Simulate a click on the radio button when the component mounts
        if (radioButtonRef.current) {
          radioButtonRef.current.click();
        }
      }, []);
  useEffect(() => {
    
      if(adultss==1 && totPassengers==1){
     
        setFType("block");
    }
    else{
        setResultFareType(0);
        setSelectedFareType(parseInt(null)); 
        setFType("none");
    }
}, [adultss,totPassengers]);

      useEffect(() => {
        localStorage.removeItem('tokenValue');
        }, []);
    /*    
     useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch("https://b2b.travelxpo.in/api/get-airport", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                // You can add other headers if required
              },
            });
      
            if (response.ok) {
              const json = await response.json();
              setData(getList(json));
            } else {
              // Handle the response when it's not OK (e.g., error handling)
              console.error("Error fetching data:", response.status, response.statusText);
            }
          } catch (error) {
            // Handle network or other errors
            console.error("Network error:", error);
          }
        }
      
        fetchData();
      }, []);
    */
useEffect(() => {
		if (inputValue.length < 2) {
			setOptions([]); // clear options if less than 2 chars
			return;
		}

		const fetchAirports = async () => {
			setLoading(true);
			try {
				const response = await fetch("https://b2b.travelxpo.in/api/get-airport", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ searchTerm: inputValue }),
				});
				if (response.ok) {
					const json = await response.json();
					const list = json.map((item) => ({
						value: item.code,
						label: `${item.code} -- ${item.name} -- ${item.country}`,
					}));
					setOptions(list);
				} else {
					console.error("Fetch failed:", response.statusText);
				}
			} catch (error) {
				console.error("Error fetching airports:", error);
			}
			setLoading(false);
		};

		const delayDebounceFn = setTimeout(() => {
			fetchAirports();
		}, 500); // debounce delay

		return () => clearTimeout(delayDebounceFn); // cancel timeout if input changes
	}, [inputValue]);

    useEffect(() => {
      
         
             
                     const fetchuser = async () => {
                      console.log("in token genrate"+uname_1); 
                      if(uname_1){
                      try {
                    
                        console.log(username_1);
                        console.log(password_1);
                        const response = await axios.get('https://api.travelxpo.in/auth/login', {
                            params: {
                              username: username_1,
                              password: password_1
                            }
                          });
                      //alert(JSON.stringify(response.data));
                         const token = response.data.accessToken;
                       
                          if(response?.data?.status === 200) {
                             
                             setTokenid(token);
                            // console.log(tokenid);
                            // toast.success("Successfully Logged In");
                             localStorage.setItem('tokenValue', token);
                             setValue(token);
                             sessionStorage.setItem('myTocken', token);

                             const markup1=response.data.freshData.markupAmt ;
                             //sessionStorage.setItem('Markup', markup1);

                             sessionStorage.setItem('BaseMarkup', markup1);
                             //setMarkup(markup1);
                             const branchid=response.data.freshData.branchId;
                             sessionStorage.setItem('branchId', branchid);
                             
                             const agentId=response.data.freshData.agentid;
                             sessionStorage.setItem('agentId', agentId);

                             const balance1=response.data.freshData.balance ;
                             sessionStorage.setItem('Balance', balance1);
                             setBalance(balance1);
                             //navigate('/dashboard');
                          }
                          else {
                             toast.error("Sorry Some Technichal Error..");
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
      
                            }
                           

                        }
                        let mytocken=localStorage.getItem('tokenValue')
                        console.log("..........."+uname_1);
                        if(uname_1){
                            console.log("......user.....");
                            fetchuser();
                         }
                     else if (mytocken ==null) {
                        console.log(".....null......"); 
                        fetchuser();
                     }
                     else{
                        console.log(".....else......");
                      mytocken= sessionStorage.getItem('myTocken');
                      console.log("..........."+mytocken);
                        //const markup2 = sessionStorage.getItem('BaseMarkup');
                        //setMarkup(markup2);
                        localStorage.setItem('tokenValue', mytocken);
                             setValue(mytocken);
                             const mybal=sessionStorage.getItem('Balance');
                             setBalance(mybal);
                     }
                     
                        
          },[uname_1]) ;
          useEffect(() => {   
            const fetchmarkup = async () => {
             try {
                const datt={
                    "branchid": branch_id
                    }
               const response = await axios.post('https://b2b.travelxpo.in/api/get-markup-data',datt);	 
              // console.log("mmmmmmmm..."+JSON.stringify(response.data));
               const agent_type=response.data[0].agent_type;
                let markup_percent= 0.00;
                let branch_markup = 0;
               if(agent_type=="txpo")
               {
                //only travelxpo
                const markup_type_t = response.data[0].markup_type;
                const markup_percent_t = response.data[0].markup_percent;
                const branch_markup_t = response.data[0].branch_markup;
                markup_percent=parseFloat(markup_percent_t);
                branch_markup=parseInt(branch_markup_t);
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
                markup_percent=parseFloat(markup_percent_m)+parseFloat(markup_percent_t);
                branch_markup=parseInt(branch_markup_m)+parseInt(branch_markup_t);
                
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
                markup_percent=parseFloat(markup_percent_s)+parseFloat(markup_percent_m)+parseFloat(markup_percent_t);
                branch_markup=parseInt(branch_markup_s)+parseInt(branch_markup_m)+parseInt(branch_markup_t);
               }
               markup_percent=markup_percent/100;
               setMarkup(branch_markup);
               setMarkuppercent(markup_percent);
               
               sessionStorage.setItem('Markup', branch_markup);
               sessionStorage.setItem('Markuppercent', markup_percent);
               console.log("mmmmmmmm..."+branch_markup);
               console.log("mmmmmmmm..."+markup_percent);
                /*const markup_type_m = response.data[0].markup_type;
                const markup_percent_m = response.data[0].markup_percent;
                const branch_markup_m = response.data[0].branch_markup;
                console.log("mmmmmmmm..."+response.data[1][0]["branchid"]);
                console.log("1111111111..."+response.data[1][1][0]["branchid"]);
                if(markup_type_m=='Amount')
                {
                    setMarkup(branch_markup_m);
                    setMarkuppercent(0);
                }
                else if(markup_type_m=='Percent')
                {
                    setMarkup(0);
                    const percen=markup_percent_m/100;
                    setMarkuppercent(percen);
                }*/		
                } catch (error) {
                    if (axios.isAxiosError(error)) {
                        console.error('Axios Error:', error.response.data);
                      } else {
                        console.error('Non-Axios Error:', error);
                      }
                    }
               }
               fetchmarkup();   
        },[branch_id]) ;
      
       const handleAddDiv = () => {
       // const newDivs = [...divs, { fromcity: '', tocity: '' , departdt:''}];
       // setDivs(newDivs);
       let x=ctt;
  
       ++x;

       if(x <= 5)
       {
        
        if(x==3)
        {
            setHeightfrm("750");   
            setDivv3("flex"); 

        }
        if(x==4)
        {
            setHeightfrm("850");  
            setDivv4("flex"); 
            
        }
        if(x==5)
        {
            setHeightfrm("950");    
            setDivv5("flex"); 
            
        }
        setCtt(x);
        }

      }
      const handleDropDiv = () => {
        // const newDivs = [...divs, { fromcity: '', tocity: '' , departdt:''}];
        // setDivs(newDivs);
        let x=ctt;
        
        
       
        if(x >= 3)
        {
         if(x==3)
         {
            setHeightfrm("650"); 
             setDivv3("none"); 
             setFrom3("");
             setTo3("");
         }
         if(x==4)
         {
            setHeightfrm("750");   
             setDivv4("none"); 
             setFrom4("");
                setTo4("");
         }
         if(x==5)
         {
            setHeightfrm("850");   
             setDivv5("none"); 
             setFrom5("");
            setTo5("");
         }
         --x;
         setCtt(x);
         }
 
       } 
       const handleSwap = () => {
        const temp=depart;
        const tempLabel = departLabel;
        setDepart(prevDepart => arrive);
        setArrive(temp => depart);
        setDepartLabel(prevDepartLabel => arriveLabel);
        setArriveLabel(tempLabel => departLabel);
      };
      const handleSwapMulty1 =() =>{
        const temp=from1;
        const tempLabel = from1Label;
        setFrom1(prevFrom1 => to1);
        setTo1(temp => from1);
        setFrom1Label(prevFrom1Label => to1Label);
        setTo1Label(tempLabel => from1Label);
      }
      const handleSwapMulty2 =() =>{
        const temp=from2;
        const tempLabel = from2Label;
        setFrom2(prevFrom2 => to2);
        setTo2(temp => from2);
        setFrom2Label(prevFrom2Label => to2Label);
        setTo2Label(tempLabel => from2Label);
      }
      const handleSwapMulty3 =() =>{
        const temp=from3;
        const tempLabel = from3Label;
        setFrom3(prevFrom3 => to3);
        setTo3(temp => from3);
        setFrom3Label(prevFrom3Label => to3Label);
        setTo3Label(tempLabel => from3Label);
      }
      const handleSwapMulty4 =() =>{
        const temp=from4;
        const tempLabel = from4Label;
        setFrom4(prevFrom4 => to4);
        setTo4(temp => from4);
        setFrom4Label(prevFrom4Label => to4Label);
        setTo4Label(tempLabel => from4Label);
      }
      const handleSwapMulty5 =() =>{
        const temp=from5;
        const tempLabel = from5Label;
        setFrom5(prevFrom5 => to5);
        setTo5(temp => from5);
        setFrom5Label(prevFrom5Label => to5Label);
        setTo5Label(tempLabel => from5Label);
      }

	  const handleOptionChangeFare = (event) => {
		const { value } = event.target;
		setSelectedFareType(parseInt(value)); 
		setResultFareType(parseInt(value));
	  };
  return (
    <div>
        <div className="main-contents">

            <div className="page-content">
                <div className="container-fluid">

                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-7 p-0">
                            <h3 className="text-center text-white">Book Flights, Hotels, Transfers, Activities & More</h3>
                                <div className="edit_profileSec">
                                    <div className="editProfileForm" style={{height:heightfrm+"px"}}>
                                        <div className="clearDiv row">
                                            <div className="bookingFrom homepagebooking">
                                    <form onSubmit={formik.handleSubmit}>
 
  


                                                    <div className="panel with-nav-tabs homeSearchCont product-desc">
                                                        <ul className="nav nav-tabs nav-tabs-custom" role="tablist">
                                                            <li className="nav-item">
                                                            <a className="nav-link active" id="booking2-tab" data-bs-toggle="tab" href="#" role="tab"><i className="fa fa-plane" aria-hidden="true"> </i> Flights</a>
                                                            </li>
                                                            <li className="nav-item">
                                                            <a className="nav-link" id="booking3-tab" data-bs-toggle="tab" href="#" role="tab"><i className="fa fa-bed" aria-hidden="true"> </i> Hotels</a>
                                                            </li>
                                                            <li className="nav-item">
                                                            <a className="nav-link" id="booking4-tab" data-bs-toggle="tab" href="#" role="tab"><i className="fa fa-car" aria-hidden="true"> </i> Transfers</a>
                                                            </li>
                                                            <li className="nav-item">
                                                            <a className="nav-link" id="booking5-tab" data-bs-toggle="tab" href="#" role="tab"><i className="fa fa-pagelines" aria-hidden="true"> </i> Activities</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="tab-content">

                                                        <div className="tab-pane fade show active" id="booking2" role="tabpanel">
                                                            <div className="row">
                                                                <div className="edit_Profile d-flex">
                                                                   
                                                                    <div className="radio-inline iataStatus">
                                                                        <input type="radio" id="one_way" ref={radioButtonRef} name="rad_iata_status" value="1"  onChange={handleOptionChange} />
                                                                        <label for="not_approve_iata" className=" pl-1">  &nbsp;<strong>One Way</strong> </label>
                                                                    </div>
                                                                    <div className="radio-inline iataStatus">
                                                                        <input type="radio" id="round_trip" name="rad_iata_status" value="2"  onChange={handleOptionChange}  />
                                                                        <label for="approve_iata" className=" pl-1">  &nbsp;<strong>Round Trip</strong></label>
                                                                    </div>
                                                                    <div className="radio-inline iataStatus">
                                                                        <input type="radio" id="multy_city" name="rad_iata_status" value="3" onChange={handleOptionChange}  />
                                                                        <label for="not_approve_iata" className=" pl-1">  &nbsp;<strong>Multy City</strong> </label>
                                                                    </div>
                                                                </div>
                                                                

                                                            </div>
 <div className="row" style={{ display: fType }}>
	<div className="edit_Profile d-flex">
		<div className="radio-inline iataStatus">
			<input type="checkbox" name="fareOption" value="3" checked={selectedFareType === 3}onChange={handleOptionChangeFare}/>
			<label for="not_approve_iata" className=" pl-1"> &nbsp;Student Fare</label>
		</div>
		<div className="radio-inline iataStatus">
			<input type="checkbox" name="fareOption" value="4" checked={selectedFareType === 4} onChange={handleOptionChangeFare}/>
			<label for="approve_iata" className=" pl-1">  &nbsp;Armed Force</label>
		</div>
		<div className="radio-inline iataStatus">
			<input type="checkbox" name="fareOption" value="5" checked={selectedFareType === 5} onChange={handleOptionChangeFare}/>
			<label for="not_approve_iata" className=" pl-1">  &nbsp;Senior Citizen </label>
		</div>
	</div>
</div>
                                                            <div style={{display:rtnview3}}>
                                                            <div style={{display:rtnview1}}>
                                                                <div className="row">
                                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group" >
                                                                       
                                                                       <Autocomplete
			disablePortal
			id="airport-autocomplete"
			className="form-control w-100"
			options={options}
			loading={loading}
			value={departLabel ? { label: departLabel } : null}
			onInputChange={(e, value) => setInputValue(value)}
			onChange={(e, newValue) => {
				if (newValue !== null) {
					setDepart(newValue.value);
					setDepartLabel(newValue.label);
				} else {
					setDepart("");
					setDepartLabel("");
				}
			}}
			sx={{ width: 350 }}
			filterOptions={(x) => x} // disable built-in filtering
			renderInput={(params) => (
				<TextField
					{...params}
					// label={depart || "Choose..."}
					variant="outlined"
					InputLabelProps={{ shrink: true }}
					InputProps={{
						...params.InputProps,
						endAdornment: (
							<>
								{loading ? <CircularProgress color="inherit" size={20} /> : null}
								{params.InputProps.endAdornment}
							</>
						),
					}}
				/>
			)}
			renderOption={(props, option) => (
				<li {...props} style={{ color: 'grey', fontWeight: '500', fontSize: '0.8rem' }}>
					{option.label}
				</li>
			)}
		/>


                                                                        <div className="text-center form-group"  onClick={handleSwap}>
                                                                            <a href="javascript:void(0);" className="exchangeicom"><i className="fa fa-exchange" aria-hidden="true"></i></a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group">
                                                                     
                                                                       <Autocomplete
																		disablePortal
																		id="combo-box-demo"
																		className="form-control w-100"
																		options={options}
																		loading={loading}
																		value={arriveLabel ? { label: arriveLabel } : null}
																		onInputChange={(e, value) => setInputValue(value)}
																		onChange={(e, newValue) => {
																			if (newValue !== null) {
																				setArrive(newValue.value);
																				setArriveLabel(newValue.label); // Update state with label
																			} else {
																				setArrive('');
																				setArriveLabel('');
																			}
																		}}
																		sx={{ width: 350 }}
																		filterOptions={(x) => x} // disable built-in filtering
																			renderInput={(params) => (
																				<TextField
																					{...params}
																					// label={arrive || "Choose..."}
																					variant="outlined"
																					InputLabelProps={{ shrink: true }}
																					InputProps={{
																						...params.InputProps,
																						endAdornment: (
																							<>
																								{loading ? <CircularProgress color="inherit" size={20} /> : null}
																								{params.InputProps.endAdornment}
																							</>
																						),
																					}}
																				/>
																			)}
																		renderOption={(props, option) => (
																			<li {...props} style={{ color: 'grey', fontWeight: '500', fontSize: '0.8rem' }}>{option.label}</li>
																		)}
																	/>
                                                                       {/* <Autocomplete suggestions={data} name="toAir" id="toAir" />*/}
                                                                       
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group" >
                                                                        <label>Depart On</label>
                                                                        <div id="datepicker1">
                                                                        <DatePicker
                                                                            name="fromdt"
                                                                            value={moment(fromdt).format('DD/MM/YYYY')}
                                                                            onChange={(date) => handleDateChange(date, 'fromdt')}
                                                                            dateFormat="dd/MM/yyyy"
                                                                            minDate={today}
                                                                            showYearDropdown
                                                                            yearDropdownItemNumber={2} // Set the number of years to show in the dropdown
                                                                            placeholderText="Depart On"
                                                                            inputProps={{ autoComplete: 'off' }}
                                                                            wrapperClassName="date-picker-wrapper" 
                                                                            style={{ width: '200px'}}
                                                                            />
                                                                            {/* <input type="date" name="fromdt" value={fromdt}  onChange={handleDateChange1}   min={currentDate}  className="form-control w-100 " placeholder="dd-mm-yyyy"    style={{backgroundColor:"#fff"}} /> */}
                                                                        </div>
                                                                    </div> 
                                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group" style={{display:rtnview}}>
                                                                        <label>Return On</label>
                                                                        <div id="datepicker1">
                                                                        {/* <input type="date" name="returndt" value={returndt}  onChange={handleDateChange}   min={currentDate}  className="form-control w-100 " placeholder="dd-mm-yyyy"    style={{backgroundColor:"#fff"}} /> */}
                                                                        <DatePicker
                                                                            name="returndt"
                                                                            value={moment(returndt).format('DD/MM/YYYY')}
                                                                            onChange={(date) => handleDateChange(date, 'returndt')}
                                                                            dateFormat="dd/MM/yyyy" 
                                                                            minDate={minimDate}
                                                                            showYearDropdown
                                                                            yearDropdownItemNumber={2} // Set the number of years to show in the dropdown
                                                                            placeholderText="Depart On"
                                                                            inputProps={{ autoComplete: 'off' }}
                                                                            wrapperClassName="date-picker-wrapper" 
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    
                                                                </div>
                                                            </div>
                                                           
                                                            <div className="multiciti" style={{display:rtnview2}}>
                                                                <div className="row">
                                                                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group" >
                                                                        <label>From: </label>
                                                                            <Autocomplete
																		disablePortal
																		id="combo-box-demo"
																		className="form-control w-100"
																		options={options}
																		loading={loading}
																		value={from1Label ? { label: from1Label } : null}
																		onInputChange={(e, value) => setInputValue(value)}
																		onChange={(e, newValue) => {
																			if (newValue !== null) {
																				setFrom1(newValue.value);
																				setFrom1Label(newValue.label); // Update state with label
																			} else {
																				setFrom1('');
																				setFrom1Label('');
																			}
																		}}
																		sx={{ width: 350 }}
																		filterOptions={(x) => x}
																		renderInput={(params) => (
																			<TextField
																					{...params}
																					// label={from1 || "Choose..."}
																					variant="outlined"
																					InputLabelProps={{ shrink: true }}
																					InputProps={{
																						...params.InputProps,
																						endAdornment: (
																							<>
																								{loading ? <CircularProgress color="inherit" size={20} /> : null}
																								{params.InputProps.endAdornment}
																							</>
																						),
																					}}
																				/>
																		)}
																		renderOption={(props, option) => (
																			<li {...props} style={{ color: 'grey', fontWeight: '500', fontSize: '0.8rem' }}>{option.label}</li>
																		)}
																	/>
                                                                            <div className="text-center form-group" onClick={handleSwapMulty1}>
                                                                                <a href="javascript:void(0);" className="exchangeicom"><i className="fa fa-exchange" aria-hidden="true"></i></a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                                        <label>To: </label>
                                                                           <Autocomplete
																		disablePortal
																		id="combo-box-demo1"
																		className="form-control w-100"
																		value={to1Label ? { label: to1Label } : null}
																		options={options}
																		loading={loading}
																		onInputChange={(e, value) => setInputValue(value)}
																		onChange={(e, newValue) => {
																			if (newValue !== null) {
																				setTo1(newValue.value);
																				setTo1Label(newValue.label); // Update state with label
																			} else {
																				setTo1('');
																				setTo1Label('');
																			}
																		}}
																		sx={{ width: 350 }}
																		filterOptions={(x) => x}
																		renderInput={(params) => (
																			<TextField
																					{...params}
																					// label={to1 || "Choose..."}
																					variant="outlined"
																					InputLabelProps={{ shrink: true }}
																					InputProps={{
																						...params.InputProps,
																						endAdornment: (
																							<>
																								{loading ? <CircularProgress color="inherit" size={20} /> : null}
																								{params.InputProps.endAdornment}
																							</>
																						),
																					}}
																				/>
																		)}
																		renderOption={(props, option) => (
																			<li {...props} style={{ color: 'grey', fontWeight: '500', fontSize: '0.8rem' }}>{option.label}</li>
																		)}
																	/>
                                                                        </div>
                                                                    
                                                                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group" >
                                                                            <label>Depart On</label>
                                                                            <div id="datepicker">
                                                                            <DatePicker
                                                                            name="traveldt1"
                                                                            value={moment(traveldt1).format('DD/MM/YYYY')}
                                                                            onChange={(date) => handleDateChange(date, 'traveldt1')}
                                                                            dateFormat="dd/MM/yyyy"
                                                                            minDate={today}
                                                                            showYearDropdown
                                                                            yearDropdownItemNumber={2} // Set the number of years to show in the dropdown
                                                                            placeholderText="Depart On"
                                                                            inputProps={{ autoComplete: 'off' }}
                                                                            wrapperClassName="date-picker-wrapper" 
                                                                            style={{ width: '200px'}}
                                                                            />
                                                                            {/* <input type="date" name="traveldt1" value={traveldt1}  onChange={handleDateChange}   min={currentDate}  className="form-control w-100 " placeholder="dd-mm-yyyy"    style={{backgroundColor:"#fff"}} />
                                                                         */}
                                                                            </div>
                                                                        </div>
                                                                    </div>    
                                                                    <div className="row">
                                                                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group" >
                                                                        <label>From :</label> 
                                                                           <Autocomplete
																		disablePortal
																		id="combo-box-demo"
																		className="form-control w-100"
																		value={from2Label ? { label: from2Label } : null}
																		options={options}
																		loading={loading}
																		onInputChange={(e, value) => setInputValue(value)}
																		onChange={(e, newValue) => {
																			if (newValue !== null) {
																				setFrom2(newValue.value);
																				setFrom2Label(newValue.label); // Update state with label
																			} else {
																				setFrom2('');
																				setFrom2Label('');
																			}
																		}}
																		sx={{ width: 350 }}
																		filterOptions={(x) => x}
																		renderInput={(params) => (
																			<TextField
																					{...params}
																					// label={from2 || "Choose..."}
																					variant="outlined"
																					InputLabelProps={{ shrink: true }}
																					InputProps={{
																						...params.InputProps,
																						endAdornment: (
																							<>
																								{loading ? <CircularProgress color="inherit" size={20} /> : null}
																								{params.InputProps.endAdornment}
																							</>
																						),
																					}}
																				/>
																		)}
																		renderOption={(props, option) => (
																			<li {...props} style={{ color: 'grey', fontWeight: '500', fontSize: '0.8rem' }}>{option.label}</li>
																		)}
																	/>
                                                                            <div className="text-center form-group" onClick={handleSwapMulty2}>
                                                                                <a href="javascript:void(0);" className="exchangeicom"><i className="fa fa-exchange" aria-hidden="true"></i></a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                                        <label>To : </label>
                                                                            <Autocomplete
																		disablePortal
																		id="combo-box-demo"
																		className="form-control w-100"
																		value={to2Label ? { label: to2Label } : null}
																		options={options}
																		loading={loading}
																		onInputChange={(e, value) => setInputValue(value)}
																		onChange={(e, newValue) => {
																			if (newValue !== null) {
																				setTo2(newValue.value);
																				setTo2Label(newValue.label); // Update state with label
																			} else {
																				setTo2('');
																				setTo2Label('');
																			}
																		}}
																		sx={{ width: 350 }}
																		filterOptions={(x) => x}
																		renderInput={(params) => (
																			<TextField
																					{...params}
																					// label={to2 || "Choose..."}
																					variant="outlined"
																					InputLabelProps={{ shrink: true }}
																					InputProps={{
																						...params.InputProps,
																						endAdornment: (
																							<>
																								{loading ? <CircularProgress color="inherit" size={20} /> : null}
																								{params.InputProps.endAdornment}
																							</>
																						),
																					}}
																				/>
																		)}
																		renderOption={(props, option) => (
																			<li {...props} style={{ color: 'grey', fontWeight: '500', fontSize: '0.8rem' }}>{option.label}</li>
																		)}
																	/>
                                                                        </div>
                                                                    
                                                                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group" >
                                                                            <label>Depart On</label>
                                                                            <div id="datepicker">
                                                                            <DatePicker
                                                                            name="traveldt2"
                                                                            value={moment(traveldt2).format('DD/MM/YYYY')}
                                                                            onChange={(date) => handleDateChange(date, 'traveldt2')}
                                                                            dateFormat="dd/MM/yyyy" 
                                                                            minDate={minimDate2}
                                                                            showYearDropdown
                                                                            yearDropdownItemNumber={2} // Set the number of years to show in the dropdown
                                                                            placeholderText="Depart On"
                                                                            inputProps={{ autoComplete: 'off' }}
                                                                            wrapperClassName="date-picker-wrapper" 
                                                                            />
                                                                            {/* <input type="date" name="traveldt2" value={traveldt2}  onChange={handleDateChange}   min={currentDate}  className="form-control w-100 " placeholder="dd-mm-yyyy"    style={{backgroundColor:"#fff"}} />
                                                                         */}
                                                                               
                                                                            </div>
                                                                        </div>
                                                                    </div> 
                                                                    <div className="row"  style={{display:divv3}}>
                                                                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group" >
                                                                        <label>From: </label>
                                                                           <Autocomplete
																		disablePortal
																		id="combo-box-demo"
																		className="form-control w-100"
																		options={options}
																		loading={loading}
																		value={from3Label ? { label: from3Label } : null}
																		onInputChange={(e, value) => setInputValue(value)}
																		onChange={(e, newValue) => {
																			if (newValue !== null) {
																				setFrom3(newValue.value);
																				setFrom3Label(newValue.label); // Update state with label
																			} else {
																				setFrom3('');
																				setFrom3Label('');
																			}
																		}}
																		sx={{ width: 350 }}
																		filterOptions={(x) => x}
																		renderInput={(params) => (
																			<TextField
																					{...params}
																					// label={from3 || "Choose..."}
																					variant="outlined"
																					InputLabelProps={{ shrink: true }}
																					InputProps={{
																						...params.InputProps,
																						endAdornment: (
																							<>
																								{loading ? <CircularProgress color="inherit" size={20} /> : null}
																								{params.InputProps.endAdornment}
																							</>
																						),
																					}}
																				/>
																		)}
																		renderOption={(props, option) => (
																			<li {...props} style={{ color: 'grey', fontWeight: '500', fontSize: '0.8rem' }}>{option.label}</li>
																		)}
																	/>
                                                                            <div className="text-center form-group" onClick={handleSwapMulty3} >
                                                                                <a href="javascript:void(0);" className="exchangeicom"><i className="fa fa-exchange" aria-hidden="true"></i></a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                                        <label>To: </label>
                                                                            <Autocomplete
																		disablePortal
																		id="combo-box-demo"
																		className="form-control w-100"
																		options={options}
																		loading={loading}
																		value={to3Label ? { label: to3Label } : null}
																		onInputChange={(e, value) => setInputValue(value)}
																		onChange={(e, newValue) => {
																			if (newValue !== null) {
																				setTo3(newValue.value);
																				setTo3Label(newValue.label); // Update state with label
																			} else {
																				setTo3('');
																				setTo3Label('');
																			}
																		}}
																		sx={{ width: 350 }}
																		filterOptions={(x) => x}
																		renderInput={(params) => (
																			<TextField
																					{...params}
																					// label={to3 || "Choose..."}
																					variant="outlined"
																					InputLabelProps={{ shrink: true }}
																					InputProps={{
																						...params.InputProps,
																						endAdornment: (
																							<>
																								{loading ? <CircularProgress color="inherit" size={20} /> : null}
																								{params.InputProps.endAdornment}
																							</>
																						),
																					}}
																				/>
																		)}
																		renderOption={(props, option) => (
																			<li {...props} style={{ color: 'grey', fontWeight: '500', fontSize: '0.8rem' }}>{option.label}</li>
																		)}
																	/>
                                                                        </div>
                                                                    
                                                                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group" >
                                                                            <label>Depart On</label>
                                                                            <div id="datepicker">
                                                                            <DatePicker
                                                                            name="traveldt3"
                                                                            value={moment(traveldt3).format('DD/MM/YYYY')}
                                                                            onChange={(date) => handleDateChange(date, 'traveldt3')}
                                                                            dateFormat="dd/MM/yyyy" 
                                                                            minDate={minimDate3}
                                                                            showYearDropdown
                                                                            yearDropdownItemNumber={2} // Set the number of years to show in the dropdown
                                                                            placeholderText="Depart On"
                                                                            inputProps={{ autoComplete: 'off' }}
                                                                            wrapperClassName="date-picker-wrapper" 
                                                                            />
                                                                            {/* <input type="date" name="traveldt3" value={traveldt3}  onChange={handleDateChange}   min={currentDate}  className="form-control w-100 " placeholder="dd-mm-yyyy"    style={{backgroundColor:"#fff"}} /> */}
                                                                        
                                                                            </div>
                                                                        </div>
                                                                    </div> 
                                                                    <div className="row"  style={{display:divv4}}>
                                                                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group" >
                                                                        <label>From: </label>   
                                                                            <Autocomplete
																		disablePortal
																		id="combo-box-demo"
																		className="form-control w-100"
																		options={options}
																		loading={loading}
																		value={from4Label ? { label: from4Label } : null}
																		onInputChange={(e, value) => setInputValue(value)}
																		onChange={(e, newValue) => {
																			if (newValue !== null) {
																				setFrom4(newValue.value);
																				setFrom4Label(newValue.label); // Update state with label
																			} else {
																				setFrom4Label('');
																			}
																		}}
																		sx={{ width: 350 }}
																		filterOptions={(x) => x}
																		renderInput={(params) => (
																			<TextField
																					{...params}
																					// label={from4 || "Choose..."}
																					variant="outlined"
																					InputLabelProps={{ shrink: true }}
																					InputProps={{
																						...params.InputProps,
																						endAdornment: (
																							<>
																								{loading ? <CircularProgress color="inherit" size={20} /> : null}
																								{params.InputProps.endAdornment}
																							</>
																						),
																					}}
																				/>
																		)}
																		renderOption={(props, option) => (
																			<li {...props} style={{ color: 'grey', fontWeight: '500', fontSize: '0.8rem' }}>{option.label}</li>
																		)}
																	/> 
                                                                            <div className="text-center form-group" onClick={handleSwapMulty4}>
                                                                                <a href="javascript:void(0);" className="exchangeicom"><i className="fa fa-exchange" aria-hidden="true"></i></a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                                        <label>To: </label> 
                                                                            <Autocomplete
																		disablePortal
																		id="combo-box-demo"
																		className="form-control w-100"
																		options={options}
																		loading={loading}
																		value={to4Label ? { label: to4Label } : null}
																		onInputChange={(e, value) => setInputValue(value)}
																		onChange={(e, newValue) => {
																			if (newValue !== null) {
																				setTo4(newValue.value);
																				setTo4Label(newValue.label); // Update state with label
																			} else {
																				setTo4Label('');
																			}
																		}}
																		sx={{ width: 350 }}
																		filterOptions={(x) => x}
																		renderInput={(params) => (
																			<TextField
																					{...params}
																					// label={to4 || "Choose..."}
																					variant="outlined"
																					InputLabelProps={{ shrink: true }}
																					InputProps={{
																						...params.InputProps,
																						endAdornment: (
																							<>
																								{loading ? <CircularProgress color="inherit" size={20} /> : null}
																								{params.InputProps.endAdornment}
																							</>
																						),
																					}}
																				/>
																		)}
																		renderOption={(props, option) => (
																			<li {...props} style={{ color: 'grey', fontWeight: '500', fontSize: '0.8rem' }}>{option.label}</li>
																		)}
																	/>
                                                                        </div>
                                                                    
                                                                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group" >
                                                                            <label>Depart On</label>
                                                                            <div id="datepicker">
                                                                            {/* <input type="date" name="traveldt4" value={traveldt4}  onChange={handleDateChange}   min={currentDate}  className="form-control w-100 " placeholder="dd-mm-yyyy"    style={{backgroundColor:"#fff"}} />
                                                                         */}
                                                                            <DatePicker
                                                                            name="traveldt4"
                                                                            value={moment(traveldt4).format('DD/MM/YYYY')}
                                                                            onChange={(date) => handleDateChange(date, 'traveldt4')}
                                                                            dateFormat="dd/MM/yyyy" 
                                                                            minDate={minimDate4}
                                                                            showYearDropdown
                                                                            yearDropdownItemNumber={2} // Set the number of years to show in the dropdown
                                                                            placeholderText="Depart On"
                                                                            inputProps={{ autoComplete: 'off' }}
                                                                            wrapperClassName="date-picker-wrapper" 
                                                                            />  
                                                                            </div>
                                                                        </div>
                                                                    </div> 
                                                                    <div className="row" style={{display:divv5}}>
                                                                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group" >
                                                                        <label>From: </label> 
                                                                            <Autocomplete
																		disablePortal
																		id="combo-box-demo"
																		className="form-control w-100"
																		options={options}
																		loading={loading}
																		value={from5Label ? { label: from5Label } : null}
																		onInputChange={(e, value) => setInputValue(value)}
																		onChange={(e, newValue) => {
																			if (newValue !== null) {
																				setFrom5(newValue.value);
																				setFrom5Label(newValue.label); // Update state with label
																			} else {
																				setFrom5('');
																				setFrom5Label('');
																			}
																		}}
																		filterOptions={(x) => x}
																		sx={{ width: 350 }}
																		renderInput={(params) => (
																			<TextField
																					{...params}
																					// label={from5 || "Choose..."}
																					variant="outlined"
																					InputLabelProps={{ shrink: true }}
																					InputProps={{
																						...params.InputProps,
																						endAdornment: (
																							<>
																								{loading ? <CircularProgress color="inherit" size={20} /> : null}
																								{params.InputProps.endAdornment}
																							</>
																						),
																					}}
																				/>
																		)}
																		renderOption={(props, option) => (
																			<li {...props} style={{ color: 'grey', fontWeight: '500', fontSize: '0.8rem' }}>{option.label}</li>
																		)}
																	/>
                                                                            <div className="text-center form-group" onClick={handleSwapMulty5}>
                                                                                <a href="javascript:void(0);" className="exchangeicom"><i className="fa fa-exchange" aria-hidden="true"></i></a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                                        <label>To: </label>
                                                                           <Autocomplete
																		disablePortal
																		id="combo-box-demo"
																		className="form-control w-100"
																		options={options}
																		loading={loading}
																		value={to5Label ? { label: to5Label } : null}
																		onInputChange={(e, value) => setInputValue(value)}
																		onChange={(e, newValue) => {
																			if (newValue !== null) {
																				setTo5(newValue.value);
																				setTo5Label(newValue.label); // Update state with label
																			} else {
																				setTo5('');
																				setTo5Label('');
																			}
																		}}
																		filterOptions={(x) => x}
																		sx={{ width: 350 }}
																		renderInput={(params) => (
																			<TextField
																					{...params}
																					// label={to5 || "Choose..."}
																					variant="outlined"
																					InputLabelProps={{ shrink: true }}
																					InputProps={{
																						...params.InputProps,
																						endAdornment: (
																							<>
																								{loading ? <CircularProgress color="inherit" size={20} /> : null}
																								{params.InputProps.endAdornment}
																							</>
																						),
																					}}
																				/>
																		)}
																		renderOption={(props, option) => (
																			<li {...props} style={{ color: 'grey', fontWeight: '500', fontSize: '0.8rem' }}>{option.label}</li>
																		)}
																	/>
                                                                        </div>
                                                                    
                                                                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group" >
                                                                            <label>Depart On</label>
                                                                            <div id="datepicker">
                                                                            <DatePicker
                                                                            name="traveldt5"
                                                                            value={moment(traveldt5).format('DD/MM/YYYY')}
                                                                            onChange={(date) => handleDateChange(date, 'traveldt5')}
                                                                            dateFormat="dd/MM/yyyy" 
                                                                            minDate={minimDate5}
                                                                            showYearDropdown
                                                                            yearDropdownItemNumber={2} // Set the number of years to show in the dropdown
                                                                            placeholderText="Depart On"
                                                                            inputProps={{ autoComplete: 'off' }}
                                                                            wrapperClassName="date-picker-wrapper" 
                                                                            />
                                                                            {/* <input type="date" name="traveldt5" value={traveldt5}  onChange={handleDateChange}   min={currentDate}  className="form-control w-100 " placeholder="dd-mm-yyyy"    style={{backgroundColor:"#fff"}} />
                                                                         */}
                                                                            </div>
                                                                        </div>
                                                                    </div> 
                                                                   {/* <DynamicMultycity />*/}  
                                                                   <div className="row" >
                                                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 form-group" >
                                                                            </div> 
                                                                            <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 form-group" >
                                                                            <label>&nbsp;</label>
                                                                                    <button type="button" className="form-control" onClick={handleAddDiv}  style={{backgroundColor:"fff"}} ><FontAwesomeIcon icon={faPlus} /></button>
                                                                                
                                                                            </div> 
                                                                            <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 form-group" >
                                                                            <label>&nbsp;</label>
                                                                                    <button  type="button"  className="form-control" onClick={handleDropDiv}  style={{backgroundColor:"fff"}} ><FontAwesomeIcon icon={faMinus} /></button>
                                                                                
                                                                            </div> 
                                                                        </div>  
                                                                    
                                                                    
                                                                   
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group">
                                                                    <label>Travellers</label>
                                                                    <div className="extraview">
                                                                    <div className="select_box cmn_InputArrow " type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <input type="hidden" value={adultss} name="ad"  id="ad" />
                                                                    <input type="hidden" value={childss} name="ch"  id="ch" />
                                                                    <input type="hidden" value={infantss} name="in"  id="in" />
                                                                    <input type="hidden" value={allss} name="in"  id="in" />
                                                                        <input type="text" name="travellersText"  id="selectTravellerFlt" value={allss}  className="travell_input e_input" readonly="readonly" placeholder="1  " autocomplete="none" /> 
                                                                        
                                                                    </div>
                                                                    <div className="dropdown-menu"  style={{marginTop:"-20px"}} aria-labelledby="dropdownMenu2">
                                                                        <div className="trvlrInfoDv" >
                                                                            <div className="col-md-12 col-md-12 col-sm-12 col-xs-12">
                                                                                <div className="form-group flt_travlrFld">
                                                                                    <label className="e_label">Adults</label>
                                                                                    <select id="flight_Adults" size="1" name="adults" className="form-control"  onChange={setadlt}  title="Adults Count">
                                                                                        <option value="0">0</option>
                                                                                        <option value="1" selected>1</option>
                                                                                        <option value="2">2</option>
                                                                                        <option value="3">3</option>
                                                                                        <option value="4">4</option>
                                                                                        <option value="5">5</option>
                                                                                        <option value="6">6</option>
                                                                                        <option value="7">7</option>
                                                                                        <option value="8">8</option>
                                                                                        <option value="9">9</option>									
                                                                                    </select>
                                                                                   
                                                                                </div>
                                                                                <div className="form-group flt_travlrFld">
                                                                                    <label className="e_label">Children</label> 
                                                                                    <select className="form-control" id="flight_Childrens" name="childs"    onChange={setchild}   title="Children Count">
                                                                                        <option value="0" selected>0</option>
                                                                                        <option value="1">1</option>
                                                                                        <option value="2">2</option>
                                                                                        <option value="3">3</option>
                                                                                        <option value="4">4</option>
                                                                                    </select> 
                                                                                   
                                                                                    <p className="yearTxt">2-12 yrs</p>
                                                                                </div>
                                                                                <div className="form-group flt_travlrFld">
                                                                                    <label className="e_label">Infants</label>															
                                                                                    <select id="flight_Infants" name="infants" className="form-control"    onChange={setinfant}    title="Infants Count">
                                                                                        <option value="0" selected>0</option>
                                                                                        <option value="1">1</option>
                                                                                        <option value="2">2</option>
                                                                                        <option value="3">3</option>
                                                                                        <option value="4">4</option>
                                                                                        <option value="5">5</option>
                                                                                    </select>
                                                                                    <p className="belowTxt">Below 2 Yrs</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="pax-bottom-box">
                                                                            <div className="cmn_btn">
                                                                                <a className="pull-right" onClick={handleClick}>Done</a>
                                                                            </div>
                                                                        </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group" style={{marginLeft:"-20px"}}>
                                                                    <div className="checkbox  pt-4  d-flex">
                                                                        <input type="checkbox" name="all_bookings" id="all_bookings" autocomplete="none" />
                                                                        <label for="all_bookings" className=" "> Non Stop Flights</label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group"  style={{marginLeft:"-20px",width:"200px"}}>
                                                                    <div className="checkbox pt-4 d-flex">
                                                                        <input type="checkbox" name="all_bookings" id="all_bookings" autocomplete="none" />
                                                                        <label for="all_bookings" className=" "> Flexible dates ± 3 days</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div id="gen-question-accordion" className="custom-accordion-arrow">
                                                                    <div className="card" style={{border:"none"}}>
                                                                        <a href="#" className="text-dark" onClick={toggleDiv}>
                                                                            <div className="card-headers" id="gen-question-headingOne" style={{paddingLeft:"5px"}}>
                                                                                <h5 className="font-size-14 m-0">
                                                                                    <i className="fa fa-caret-right"></i> More options : class Name of travel, Airline preference & more
                                                                                </h5>
                                                                            </div>
                                                                        </a>
                                                                        {showDiv && (
                                                                        <div id="gen-question-collapseTwo" >
                                                                            <div className="card-body">
                                                                                <div className="row">
                                                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                                                        <label>class Name</label>	
                                                                                        <div className="input_icon">
                                                                                            <select id="className_of_travel" name="classNameOfTravel" onChange={setCabin} className="form-control" title="Economy">
                                                                                                <option value="1">All</option>
                                                                                                <option value="2">Economy</option>
                                                                                                <option value="3">Premium Economy</option>
                                                                                                <option value="4">Business</option>
                                                                                                <option value="5">Premium Business</option>
                                                                                                <option value="6">First</option>
                                                                                            </select>
                                                                                            <span className="icon_bg"><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                                                                                        </div>	
                                                                                    </div>
                                                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                                                        <label>Currency</label>	
                                                                                        <div className="input_icon">
                                                                                            <select id="className_of_travel" name="classNameOfTravel" className="form-control" title="Economy">
                                                                                                <option value="INR">INR</option>
                                                                                            </select>
                                                                                            <span className="icon_bg"><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                                                                                        </div>	
                                                                                    </div>
                                                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                                                        <label>Preferred Airline</label>	
                                                                                        <div className="input_icon">
                                                                                            <select id="className_of_travel" name="classNameOfTravel" className="form-control" title="Economy">
                                                                                                <option value="">Nothing selected</option>
                                                                                                <option value="9W">Jet Airways</option>
                                                                                                <option value="AI">Air India</option>
                                                                                                <option value="SG">Spice Jet</option>
                                                                                            </select>
                                                                                            <span className="icon_bg"><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                                                                                        </div>	
                                                                                    </div>
                                                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-group">
                                                                                        <label>Markup(%):{markup}</label>
                                                                                        <input type="text" name="txt_first_name" style={{height:"38px"}} value="" title="First Name" className="form-control" placeholder=""autocomplete="none" />
                                                                                    </div>
                                                                                            
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        )}
                                                                        </div>
                                                                    </div> 
                                                                </div> 
                                                                <div className="editProfileSubmitBtn text-end">
                                                                <Button type="submit" className="submitebtn" variant="contained" color="primary">
                                                                {formik.isSubmitting ? <CircularProgress size={24} /> : 'Search flight' }
                                                                   </Button>
                                                                    
                                                                </div>



                                                            </div>















                                                        </div> 
                                                     </div>
                                                    </form>  
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
  )
}

export default Home