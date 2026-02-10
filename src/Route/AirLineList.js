import React,{ useState,useEffect} from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
//import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Slider from '@mui/material/Slider';
import moment from 'moment/moment';

const AirLineList = () => {
    const location = useLocation(); 
    const responseget1 = location.state?.responsee;
    const [response,setResponse] = useState(responseget1);
    const [responseget,setResponseget]= useState(location.state?.responsee);
    const [jsonResponse,setJsonResponse]= useState(location.state?.responsee);
    const [data, setData] = useState(response?.Response?.Results?.[0] || []);
    const [result, setResult] = useState(response);
    const [value, setValue] = useState('');
    const [passenStr, setPassenStr] = useState('');
    const [balance, setBalance] = useState(sessionStorage.getItem('Balance'));
    //const [progressPr, setProgressPr] = useState(4000);
    const navigate = useNavigate();
    let markup = sessionStorage.getItem('Markup');
    let markuppercent = sessionStorage.getItem('Markuppercent');

    const [flights, setFlights] = useState([]);
  const [showModalMessage, setShowModalMessage] = useState(false);
  useEffect(() => {  
    //  alert(2);
      if (jsonResponse && jsonResponse.Response && jsonResponse.Response.Results) {
        const processedFlights = processFlights(jsonResponse.Response.Results[0]);
    //    console.log(JSON.stringify(processedFlights));
        setFlights(processedFlights);
        setResponse(prevState => ({
          ...prevState,
          Response: {
            ...prevState.Response,
            Results: [processedFlights]
          }
        }));
        setResponseget(prevState => ({
          ...prevState,
          Response: {
            ...prevState.Response,
            Results: [processedFlights]
          }
        }));
      }
    }, [jsonResponse]);

    useEffect(() => {
      setData(response.Response.Results[0]);
      setResult(response);
      //alert(9);
      //setResponseget(response);
    }, [response]);
  
  
    const processFlights = (results) => {
      const flightMap = new Map();
    
      results.forEach(result => {
        const segments = result.Segments[0];
        const firstSegment = segments[0];
        const flightNumber = `${firstSegment.Airline.AirlineCode}${firstSegment.Airline.FlightNumber}`;
        if (!flightMap.has(flightNumber)) {
          flightMap.set(flightNumber, {
            ...result,
            Options: []
          });
        }
    
        // Add this result as an option
        flightMap.get(flightNumber).Options.push({
          ResultIndex: result.ResultIndex,
          Fare: result.Fare,
          FareBreakdown: result.FareBreakdown,
          LastTicketDate: result.LastTicketDate,
          TicketAdvisory: result.TicketAdvisory,
          FareRules: result.FareRules,
          AirlineCode: result.AirlineCode,
          ValidatingAirline: result.ValidatingAirline,
          FareClassification: result.FareClassification,
          PenaltyCharges:result.PenaltyCharges,
          Cab:result.Segments[0][0].CabinBaggage,
          Bag:result.Segments[0][0].Baggage
        });
      });
    
      return Array.from(flightMap.values());
    };
    const [isVisible, setIsVisible] = useState(true);

    // Step 2: Create toggle function
    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };

	const [trigger, setTrigger] = useState(0);
  const openModalMessage = () => { 
    setShowModalMessage(true);  
    };
    const closeModalMessage = () => { 
    
    setShowModalMessage(false);  
    };
    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const [distinctAirlineCodes,setDistinctAirlineCodes]=useState();
    useEffect(() => {
      if (responseget && responseget.Response && responseget.Response.Results) {
        const uniqueAirlines = [];

  responseget.Response.Results.forEach((innerArray) => {
    innerArray.forEach((item) => {
      const airlineCode = item.Segments[0][0].Airline.AirlineCode;
      const airlineName = item.Segments[0][0].Airline.AirlineName;
      const handbaggage=item.Segments[0][0].CabinBaggage;
      const baggage=item.Segments[0][0].Baggage;
      // Check if the airline code is not already in the uniqueAirlines array
      const existingAirline = uniqueAirlines.find(
        (airline) => airline.code === airlineCode
      );

      if (!existingAirline) {
        uniqueAirlines.push({ code: airlineCode, name: airlineName });
      }
    });
  });


     
        setDistinctAirlineCodes(uniqueAirlines);
      }
  
  },[]) ;
    useEffect(() => {
        const allcust=localStorage.getItem('allss');
        if (allcust) {
            setPassenStr(allcust); 
          }
        const storedValue = localStorage.getItem('tokenValue');
        if (storedValue) {
        setValue(storedValue);
        }
    
    },[]) ;
    useEffect(() => {

        async function fetchData() {
          const branchId = sessionStorage.getItem('branchId');
      const response = await fetch(`https://api.travelxpo.in/auth/balance/${branchId}`);
      const data = await response.json();
      console.log(data);
      if(data.status==200){
        const bal1=data.cash.balance;
        setBalance(bal1);
        sessionStorage.setItem('Balance', bal1);
      }
     
          }
          fetchData();
    },[]) ;
   // console.log(typeof response)
  //  console.log("My data");
  // console.log(response); 
  //  const data = JSON.stringify(response.Response.Results);
  
 // const [data,setData] = useState(response.Response.Results[0]);
   // const [result,setResult]=useState(response);

    const lowestPublishedFare = data.reduce((min, result) => {
      const publishedFare = result.Fare.PublishedFare;
      return publishedFare < min ? publishedFare : min;
    }, Infinity);
    
    const [leastPrice, setLeastPrice] = useState(lowestPublishedFare);

    const highestPublishedFare = data.reduce((max, result) => {
      const publishedFare1 = result.Fare.PublishedFare;
      return publishedFare1 > max ? publishedFare1 : max;
    }, -Infinity);
    
    const [highPrice, setHighPrice] = useState(highestPublishedFare);

    const earliestDepTime = data.reduce((minTime, result) => {
      const depTime = result.Segments[0][0].Origin.DepTime;
      return depTime < minTime ? depTime : minTime;
    },  data[0].Segments[0][0].Origin.DepTime);

    const [datePart, timePart] = earliestDepTime.split('T');
    const [year, month, day] = datePart.split('-');
    const formattedDate = [day, month, year].join('-');
    const [miniTime, setMiniTime] = useState(formattedDate +" :: "+timePart);

    const shortDuration = data.reduce((minTime, result) => {

      const shortTime = result.Segments[0][0].Duration;
      
      return shortTime < minTime ? shortTime : minTime; 
    },  data[0].Segments[0][0].Duration);


    const [shortDur, setShortDur] = useState(shortDuration);

    const [timeFilt,setTimeFilt]=useState("");
    const [timeFiltArr,setTimeFiltArr]=useState("");
    const [numStops,setnumStops]=useState("");
    
    //console.log("result",result);

    
    const [traceid,setTraceid]=useState(result.Response.TraceId);
    const [progress, setProgress] = useState(0);
    const handleButtonClick = async (vl,trid,lcc,price1) => {
    //alert("price1 "+markup);
     //alert("price1 "+markuppercent);
      const price11= parseFloat(price1) + parseFloat(price1) * parseFloat(markuppercent) + parseFloat(markup);
	
     //alert("Balance "+balance);
   //alert("Price "+price11);
     if(parseFloat(price11)<parseFloat(balance))
         { 
          localStorage.setItem('resultindex', vl);
          localStorage.setItem('traceId', trid);
          localStorage.setItem('price', price11);
          localStorage.setItem('journeyType', 1);
             navigate('/customerInfo'); 
 }
    else{
    //  alert(parseFloat(balance)-parseFloat(price));
      alert("Your Balance for booking is too low, so can not book, Please Update");
    }
   
      };
      const priceReset=() =>{
        setResponse(responseget);
          setData(response.Response.Results[0]);
          setResult(responseget); 
      };
      
      const timefilterDepart=(x) =>{
        if (x === 1) {
          setTimeFilt("Before 6 AM");
        
          if (responseget && responseget.Response && responseget.Response.Results) {
            const filteredResults = responseget.Response.Results.map((innerArray) =>
              innerArray.filter((item) => {
                const depTime = new Date(item.Segments[0][0].Origin.DepTime);
                const depHour = depTime.getHours();
                return depHour >= 0 && depHour < 6;
              })
            );
        
            if (filteredResults.every((innerArray) => innerArray.length === 0)) {
              openModalMessage();
            
              setResponse(responseget);
              setData(responseget.Response.Results[0]);
              setResult(responseget);
            } else {
              const updatedResponse = {
                ...responseget,
                Response: {
                  ...responseget.Response,
                  Results: filteredResults,
                },
              };
        
              setResponse(updatedResponse);
              setData(updatedResponse.Response.Results[0]);
              setResult(updatedResponse);
            }
          }
        }
        
       else if (x === 2) {
          setTimeFilt(" Between 12PM and 6 PM");
        
          if (responseget && responseget.Response && responseget.Response.Results) {
            const filteredResults = responseget.Response.Results.map((innerArray) =>
              innerArray.filter((item) => {
                const depTime = new Date(item.Segments[0][0].Origin.DepTime);
				const startHour = 12;
				const endHour = 18;
                const depHour = depTime.getHours();
                return depHour >= startHour && depHour < endHour;
              })
            );
        
            if (filteredResults.every((innerArray) => innerArray.length === 0)) {
              openModalMessage();
            
              setResponse(responseget);
              setData(responseget.Response.Results[0]);
              setResult(responseget);
            } else {
              const updatedResponse = {
                ...responseget,
                Response: {
                  ...responseget.Response,
                  Results: filteredResults,
                },
              };
        
              setResponse(updatedResponse);
              setData(updatedResponse.Response.Results[0]);
              setResult(updatedResponse);
            }
          }
        }
		else if (x === 3) {
          setTimeFilt(" Between 6AM and 12 PM");
        
          if (responseget && responseget.Response && responseget.Response.Results) {
            const filteredResults = responseget.Response.Results.map((innerArray) =>
              innerArray.filter((item) => {
                const depTime = new Date(item.Segments[0][0].Origin.DepTime);
				const startHour = 6;
				const endHour = 12;
                const depHour = depTime.getHours();
                return depHour >= startHour && depHour < endHour;
              })
            );
        
            if (filteredResults.every((innerArray) => innerArray.length === 0)) {
              openModalMessage();
            
              setResponse(responseget);
              setData(responseget.Response.Results[0]);
              setResult(responseget);
            } else {
              const updatedResponse = {
                ...responseget,
                Response: {
                  ...responseget.Response,
                  Results: filteredResults,
                },
              };
        
              setResponse(updatedResponse);
              setData(updatedResponse.Response.Results[0]);
              setResult(updatedResponse);
            }
          }
        }
       else if (x === 4) {
          setTimeFilt(" After 6 PM");
        
          if (responseget && responseget.Response && responseget.Response.Results) {
            const filteredResults = responseget.Response.Results.map((innerArray) =>
              innerArray.filter((item) => {
                const depTime = new Date(item.Segments[0][0].Origin.DepTime);
				const startHour = 18;
				const endHour = 24;
                const depHour = depTime.getHours();
                return depHour >= startHour && depHour < endHour;
              })
            );
        
            if (filteredResults.every((innerArray) => innerArray.length === 0)) {
              openModalMessage();
            
              setResponse(responseget);
              setData(responseget.Response.Results[0]);
              setResult(responseget);
            } else {
              const updatedResponse = {
                ...responseget,
                Response: {
                  ...responseget.Response,
                  Results: filteredResults,
                },
              };
        
              setResponse(updatedResponse);
              setData(updatedResponse.Response.Results[0]);
              setResult(updatedResponse);
            }
          }
        }
      };
      const timefilterLayover=(x)=>{ 
      
        if (x === 1) {
          
        
          if (responseget && responseget.Response && responseget.Response.Results) {
            const filteredResults = responseget.Response.Results.map((innerArray) =>
              innerArray.filter((item) => {
				          const totTime = item.Segments[0][0].Duration;
                  const startTime = 0; // Start hour (in 24-hour format)
                  const endTime = 300; // End hour (in 24-hour format)
    
                  return totTime >= startTime && totTime < endTime;
              })
            );
        
            if (filteredResults.every((innerArray) => innerArray.length === 0)) {
              openModalMessage();
            
              setResponse(responseget);
              setData(responseget.Response.Results[0]);
              setResult(responseget);
            } else {
              const updatedResponse = {
                ...responseget,
                Response: {
                  ...responseget.Response,
                  Results: filteredResults,
                },
              };
        
              setResponse(updatedResponse);
              setData(updatedResponse.Response.Results[0]);
              setResult(updatedResponse);
            }
          }
        }
        else if (x === 2) {
          
        
          if (responseget && responseget.Response && responseget.Response.Results) {
            const filteredResults = responseget.Response.Results.map((innerArray) =>
              innerArray.filter((item) => {
				  const totTime = item.Segments[0][0].Duration;
                  const startTime = 300; // Start hour (in 24-hour format)
                  const endTime = 600; // End hour (in 24-hour format)
    
                  return totTime >= startTime && totTime < endTime;
              })
            );
        
            if (filteredResults.every((innerArray) => innerArray.length === 0)) {
              openModalMessage();
            
              setResponse(responseget);
              setData(responseget.Response.Results[0]);
              setResult(responseget);
            } else {
              const updatedResponse = {
                ...responseget,
                Response: {
                  ...responseget.Response,
                  Results: filteredResults,
                },
              };
        
              setResponse(updatedResponse);
              setData(updatedResponse.Response.Results[0]);
              setResult(updatedResponse);
            }
          }
        }
		else if (x === 3) {
          
        
          if (responseget && responseget.Response && responseget.Response.Results) {
            const filteredResults = responseget.Response.Results.map((innerArray) =>
              innerArray.filter((item) => {
				  const totTime = item.Segments[0][0].Duration;
                  const startTime =600; // Start hour (in 24-hour format)
                  const endTime = 900; // End hour (in 24-hour format)
    
                  return totTime >= startTime && totTime < endTime;
              })
            );
        
            if (filteredResults.every((innerArray) => innerArray.length === 0)) {
              openModalMessage();
            
              setResponse(responseget);
              setData(responseget.Response.Results[0]);
              setResult(responseget);
            } else {
              const updatedResponse = {
                ...responseget,
                Response: {
                  ...responseget.Response,
                  Results: filteredResults,
                },
              };
        
              setResponse(updatedResponse);
              setData(updatedResponse.Response.Results[0]);
              setResult(updatedResponse);
            }
          }
        }
       else if (x === 4) {
          
        
          if (responseget && responseget.Response && responseget.Response.Results) {
            const filteredResults = responseget.Response.Results.map((innerArray) =>
              innerArray.filter((item) => {
				  const totTime = item.Segments[0][0].Duration;
                  const startTime = 900; // Start hour (in 24-hour format)
                  //const endTime = 300; // End hour (in 24-hour format)
    
                  return totTime >= startTime;
              })
            );
        
            if (filteredResults.every((innerArray) => innerArray.length === 0)) {
              openModalMessage();
            
              setResponse(responseget);
              setData(responseget.Response.Results[0]);
              setResult(responseget);
            } else {
              const updatedResponse = {
                ...responseget,
                Response: {
                  ...responseget.Response,
                  Results: filteredResults,
                },
              };
        
              setResponse(updatedResponse);
              setData(updatedResponse.Response.Results[0]);
              setResult(updatedResponse);
            }
          }
        }
      };
      const airlineFilter = (x) => {
      
        if (x !== '0') {
          if (responseget && responseget.Response && responseget.Response.Results) {
            const filteredData = responseget.Response.Results.map((innerArray) =>
              innerArray.filter((item) => item.Segments[0][0].Airline.AirlineCode === x)
            );
            if (filteredData.every((innerArray) => innerArray.length === 0)) {
          
              openModalMessage();
              // wait(3000);
              setResponse(responseget);
              setData(responseget.Response.Results[0]);
              setResult(responseget);
            } else {
            const filteredData1 = {
              ...responseget,
              Response: {
                ...responseget.Response,
                Results: filteredData,
              },
            };
      
            setResponse(filteredData1);
            setData(filteredData1.Response.Results[0]);
            setResult(filteredData1);
          }
          }
        } else {
          setResponse(responseget);
          setData(responseget.Response.Results[0]);
          setResult(responseget);
        }
      };
      const timefilterArrive=(x) =>{
        if (x === 1) {
          setTimeFiltArr("Before 6 AM");
        
          if (responseget && responseget.Response && responseget.Response.Results) {
            const filteredResults = responseget.Response.Results.map((innerArray) =>
              innerArray.filter((item) => {
                const arrTime = new Date(item.Segments[0][0].Destination.ArrTime);
                const arrHour = arrTime.getHours();
                return arrHour >= 0 && arrHour < 6;
              })
            );
        
            if (filteredResults.every((innerArray) => innerArray.length === 0)) {
              openModalMessage();
            
              setResponse(responseget);
              setData(responseget.Response.Results[0]);
              setResult(responseget);
            } else {
              const updatedResponse = {
                ...responseget,
                Response: {
                  ...responseget.Response,
                  Results: filteredResults,
                },
              };
        
              setResponse(updatedResponse);
              setData(updatedResponse.Response.Results[0]);
              setResult(updatedResponse);
            }
          }
        }
        else if (x === 2) {
          setTimeFiltArr(" Between 12PM and 6 PM");
        
          if (responseget && responseget.Response && responseget.Response.Results) {
            const filteredResults = responseget.Response.Results.map((innerArray) =>
              innerArray.filter((item) => {
                const arrTime = new Date(item.Segments[0][0].Destination.ArrTime);
				const startHour = 12;
				const endHour = 18;
                const arrHour = arrTime.getHours();
                return arrHour >= startHour && arrHour < endHour;
              })
            );
        
            if (filteredResults.every((innerArray) => innerArray.length === 0)) {
              openModalMessage();
            
              setResponse(responseget);
              setData(responseget.Response.Results[0]);
              setResult(responseget);
            } else {
              const updatedResponse = {
                ...responseget,
                Response: {
                  ...responseget.Response,
                  Results: filteredResults,
                },
              };
        
              setResponse(updatedResponse);
              setData(updatedResponse.Response.Results[0]);
              setResult(updatedResponse);
            }
          }
        }
       else if (x === 3) {
          setTimeFiltArr(" Between 6AM and 12 PM");
        
          if (responseget && responseget.Response && responseget.Response.Results) {
            const filteredResults = responseget.Response.Results.map((innerArray) =>
              innerArray.filter((item) => {
                const arrTime = new Date(item.Segments[0][0].Destination.ArrTime);
				const startHour = 6;
				const endHour = 12;
                const arrHour = arrTime.getHours();
                return arrHour >= startHour && arrHour < endHour;
              })
            );
        
            if (filteredResults.every((innerArray) => innerArray.length === 0)) {
              openModalMessage();
            
              setResponse(responseget);
              setData(responseget.Response.Results[0]);
              setResult(responseget);
            } else {
              const updatedResponse = {
                ...responseget,
                Response: {
                  ...responseget.Response,
                  Results: filteredResults,
                },
              };
        
              setResponse(updatedResponse);
              setData(updatedResponse.Response.Results[0]);
              setResult(updatedResponse);
            }
          }
        }
         else if (x === 4) {
          setTimeFiltArr(" After 6 PM");
        
          if (responseget && responseget.Response && responseget.Response.Results) {
            const filteredResults = responseget.Response.Results.map((innerArray) =>
              innerArray.filter((item) => {
                const arrTime = new Date(item.Segments[0][0].Destination.ArrTime);
				const startHour = 18;
				const endHour = 24;
                const arrHour = arrTime.getHours();
                return arrHour >= startHour && arrHour < endHour;
              })
            );
        
            if (filteredResults.every((innerArray) => innerArray.length === 0)) {
              openModalMessage();
            
              setResponse(responseget);
              setData(responseget.Response.Results[0]);
              setResult(responseget);
            } else {
              const updatedResponse = {
                ...responseget,
                Response: {
                  ...responseget.Response,
                  Results: filteredResults,
                },
              };
        
              setResponse(updatedResponse);
              setData(updatedResponse.Response.Results[0]);
              setResult(updatedResponse);
            }
          }
        
        }
      };
      const stopCount=(x) =>{
       
        if (x === 1) {
          
          setnumStops(" Direct");
            if (responseget && responseget.Response && responseget.Response.Results) {
              const filteredResults = responseget.Response.Results.map((innerArray) =>
                innerArray.filter((item) => {
               const stopCount = item.Segments.reduce((total, segment) => total + segment.length - 1, 0);
                         // const desiredStopCount = 1; // Replace with the desired number of stops
                        //  alert(stopCount);
                        console.log("Stop1-"+stopCount);
                          return stopCount === 0;
                })
              );
          
              if (filteredResults.every((innerArray) => innerArray.length === 0)) {
                openModalMessage();
              
                setResponse(responseget);
                setData(responseget.Response.Results[0]);
                setResult(responseget);
              } else {
                const updatedResponse = {
                  ...responseget,
                  Response: {
                    ...responseget.Response,
                    Results: filteredResults,
                  },
                };
          
                setResponse(updatedResponse);
                setData(updatedResponse.Response.Results[0]);
                setResult(updatedResponse);
              }
            }
          }
          else if (x === 2) {
          
            setnumStops(" 1 Stop");
              if (responseget && responseget.Response && responseget.Response.Results) {
                const filteredResults = responseget.Response.Results.map((innerArray) =>
                  innerArray.filter((item) => {
                 // const segmentCount = item.Segments.length;
                            const stopCount = item.Segments.reduce((total, segment) => total + segment.length - 1, 0);
                            console.log("Stop2-"+stopCount);
                            return stopCount === 1;
                  })
                );
            
                if (filteredResults.every((innerArray) => innerArray.length === 0)) {
                  openModalMessage();
                
                  setResponse(responseget);
                  setData(responseget.Response.Results[0]);
                  setResult(responseget);
                } else {
                  const updatedResponse = {
                    ...responseget,
                    Response: {
                      ...responseget.Response,
                      Results: filteredResults,
                    },
                  };
            
                  setResponse(updatedResponse);
                  setData(updatedResponse.Response.Results[0]);
                  setResult(updatedResponse);
                }
              }
            }
         else if (x === 3) {
              
            setnumStops(" 2+ Stops");
              if (responseget && responseget.Response && responseget.Response.Results) {
                const filteredResults = responseget.Response.Results.map((innerArray) =>
                  innerArray.filter((item) => {
                 
                           const stopCount = item.Segments.reduce((total, segment) => total + segment.length - 1, 0);
                          // const desiredStopCount = 2; // Replace with the desired number of stops
                           // alert(stopCount);
                           console.log("Stop2+-"+stopCount);
                            return stopCount > 1;
                  })
                );
            
                if (filteredResults.every((innerArray) => innerArray.length === 0)) {
                  openModalMessage();
                
                  setResponse(responseget);
                  setData(responseget.Response.Results[0]);
                  setResult(responseget);
                } else {
                  const updatedResponse = {
                    ...responseget,
                    Response: {
                      ...responseget.Response,
                      Results: filteredResults,
                    },
                  };
            
                  setResponse(updatedResponse);
                  setData(updatedResponse.Response.Results[0]);
                  setResult(updatedResponse);
                }
              }
            }
      };
      const handleProgressChange = (value) => {
        setProgress(value);
        if (responseget && responseget.Response && responseget.Response.Results) {
            const filteredData = responseget.Response.Results.map((innerArray) =>
              innerArray.filter((item) => (item.Fare.PublishedFare+parseFloat(item.Fare.PublishedFare*markuppercent+markup)) >= value)	  
            );
        const filteredData1={
            ...responseget,
            Response: {
              ...responseget.Response,
              Results: filteredData,
            },
          };
      //  console.log(JSON.stringify(filteredData1));
 
          setResponse(filteredData1);
          setData(response.Response.Results[0]);
          setResult(filteredData1);

        }
      };

      const setSelectedOption = (value) => {
        if (responseget && responseget.Response && responseget.Response.Results) {
                  const filteredResults = responseget.Response.Results.map((innerArray) =>
                    innerArray.filter((item) => item.IsRefundable == value)
                  );
      
                 if (filteredResults.every((innerArray) => innerArray.length === 0)) {
                    openModalMessage();
                  
                    setResponse(responseget);
                    setData(responseget.Response.Results[0]);
                    setResult(responseget);
                  } else {
                    const updatedResponse = {
                      ...responseget,
                      Response: {
                        ...responseget.Response,
                        Results: filteredResults,
                      },
                    };
              
                    setResponse(updatedResponse);
                    setData(updatedResponse.Response.Results[0]);
                    setResult(updatedResponse);
                  }
              }
            };

      const options = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      };
console.log(markup);
let reissueCharge='';
let cancellationCharge='';
    let handbagwt='';
    let bagwt='';
    let seats='';
    let originairport='';
    let destinationairport='';
    let airlineCode='';
    let connectionflightString='';
    let airlineName='';
    let j=0;
    let flightNumber='';
    let deptime="";
    let arrtime='';
    let duration='';
    let rindex='';
    let basefare='';
    let btax='';
    let serv='';
    let other='';
    let dur=0;
    let hrs=0;
    let mnts=0;
    let timeStringarr='';
    let timeStringdep='';
    let startpoint='';
    let endpoint='';
    let refund='';
    let refund1='';
    let lcc='';
    let lcc1='';
    let PublishedFare='';
    console.log("end"); 
    const [showModal, setShowModal] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
  

    const openModalR = (x) => { 
      console.log(JSON.stringify(x));
     // alert("dd");
      setSelectedRow(x);
      setShowModal(true); 
    };
    
  return (
        <div>  
         
               <Navbar />
            {/* <Sidebar /> */}
                <div className="main-content"> 

                    <div className="page-content">
                        <div className="container-fluid">
                            
                                <div className="row">
                                       
                                        <div className="col-md-3">
                                            <div className="edit_profileSec">
                                                <div className="editProfileFormlistview" style={{backgroundColor:"#fbfbfbd4"}}>
                                                    <h5 className="mb-2">Price Range</h5>
                                                    <div className="row asidesec">
                                                        <div className="col-lg-12">
                                                            <div className="row">
                                                                <div className="col-lg-8 col-6">
                                                                    <h4>Price Less Than :{progress}</h4>
                                                                </div>
                                                                <div className="col-lg-4 col-6 text-end">
                                                                <a href="javascript:void(0);"  onClick={() => priceReset()} > Reset <i className="fa fa-refresh" aria-hidden="true"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div  className="row" style={{marginLeft:"10px",marginTop:"10px",width:"95%"}}>
                                                        {/* <input
                                                                type="range"
                                                                min="1000"
                                                                max="50000"
                                                                value={progress}
                                                                onChange={(e) => handleProgressChange(Number(e.target.value))}
                                                            /> */}
                                                        <Slider
                                                            aria-label="Price"
                                                            defaultValue={3000}
                                                            getAriaValueText={valuetext}
                                                            valueLabelDisplay="auto"
                                                            step={100}
                                                            marks
                                                            min={leastPrice+parseFloat(leastPrice*markuppercent+markup)}
                                                            max={highPrice+parseFloat(highPrice*markuppercent+markup)}
                                                            onChange={(e) => handleProgressChange(Number(e.target.value))} 
                                                          />
                                                        </div>
                                                        <div className="col-lg-12 mt-0">
                                                            <div className="row progesbar">
                                                                <div className="col-lg-9  col-6">
                                                                    <p>{leastPrice+parseFloat(leastPrice*markuppercent+markup)}</p> 
                                                                </div>
                                                            
                                                                <div className="col-lg-3 col-6 last text-right">
                                                                    <p>{highPrice+parseFloat(highPrice*markuppercent+markup)}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    
                                                    <hr />
                                                    
                                                        <div className="row">
                                                            <div className="col-lg-8  col-6">
                                                                <h4>Fare Type</h4>
                                                                
                                                            </div>
                                                            
                                                        </div>
                                                        <div className="col-lg-12 checkhidebox">
                                                            <div className="d-flex">
                                                            <input
                                                            type="radio"
                                                            id="Refundable"
                                                            name="fav_trips"
                                                            value="Refundable"
                                                            onChange={() => setSelectedOption(true)}
                                                            
                                                            />
                                                            <label for="Extra" className="mt-1"> &nbsp;Refundable</label>
                                                            </div>
                                                            <div className="d-flex">
                                                            <input
                                                                type="radio"
                                                                id="NonRefundable"
                                                                name="fav_trips"
                                                                value="Non-Refundable"
                                                                onChange={() => setSelectedOption(false)}
                                                               
                                                                />
                                                                <label for="Extra" className="mt-1"> Non-Refundable</label>
                                                            </div>
                                                        </div>
                                                    <hr />	
                                                        <div className="row">
                                                            <div className="col-lg-12 numberlist">
                                                                <h4>Number of Stops - {numStops}</h4>
                                                                <a href="javascript:void(0);" classname="active"><span  onChange={() => stopCount(1)}  style={{padding: "5px"}}> <input type="radio" name="stops" /> Direct/Non-Stop</span></a> <br />
                                                                <a href="javascript:void(0);"><span   onChange={() => stopCount(2)}   style={{padding: "5px"}}> <input type="radio" name="stops" /> One Stop</span></a> <br />
                                                                <a href="javascript:void(0);"><span   onChange={() => stopCount(3)}   style={{padding: "5px"}}> <input type="radio"  name="stops"/> Two Plus Stops</span></a>
                                                                <p></p>
                                                            </div>
                                                            
                                                        </div>
                                                    <hr />	
                                                       
                                                    <br />
                                                        <div className="row">
                                                            <div className="col-lg-12  col-12">
                                                                <h4>Departure - {timeFilt}</h4>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-12 numberlist">
                                                                <div className="col-lg-12  col-6">
                                                                   
                                                                <a href="javascript:void(0);"><span onChange={() => timefilterDepart(1)} style={{padding: "5px"}}> <input type="radio" name="Departure" /> Before 6AM</span></a> <br />
                                                                <a href="javascript:void(0);"><span  onChange={() => timefilterDepart(2)}  style={{padding: "5px"}}> <input type="radio"  name="Departure"/> Between 12PM,6PM</span></a> <br />
                                                            <a href="javascript:void(0);"><span onChange={() => timefilterDepart(3)}  style={{padding: "5px"}}> <input type="radio" name="Departure" /> Between 6AM,12PM</span></a> <br />
                                                            <a href="javascript:void(0);"><span onChange={() => timefilterDepart(4)}  style={{padding: "5px"}}> <input type="radio" name="Departure"/> After 6PM</span></a>
                                                               
                                                                </div>
                                                            </div>
                                                            
                                                        </div>	
                                                        <hr />	
                                                       
                                                        <br />
                                                        <div className="row">
                                                            <div className="col-lg-12 pt-2 col-12">
                                                                <h4>Arrival - {timeFiltArr}</h4>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-12 numberlist">
                                                                <div className="col-lg-12  col-6">
                                                                 
                                                                <a href="javascript:void(0);"><span  onChange={() => timefilterArrive(1)} style={{padding: "5px"}}> <input type="radio"  name="Arrival"/> Before 6AM</span></a> <br />
                                                                <a href="javascript:void(0);"><span  onChange={() => timefilterArrive(2)}  style={{padding: "5px"}}> <input type="radio" name="Arrival"/> Between 12PM,6PM</span></a> <br />
                                                            <a href="javascript:void(0);"><span  onChange={() => timefilterArrive(3)}  style={{padding: "5px"}}> <input type="radio" name="Arrival"/> Between 6AM,12PM</span></a> <br />
                                                            <a href="javascript:void(0);"><span  onChange={() => timefilterArrive(4)}  style={{padding: "5px"}}> <input type="radio" name="Arrival"/> After 6PM</span></a>
                                                                
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <hr />	
                                                        <br />
                                                        <div className="row">
                                                            <div className="col-lg-12 pt-2 col-12">
                                                                <h4>Airline</h4>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-12 numberlist">
                                                                <div className="col-lg-12  col-6">
                                                                <div>
                                                                    <a href="javascript:void(0);">
                                                                      <span style={{ padding: "5px" }}>
                                                                        <input
                                                                          type="radio"
                                                                          name="airline"
                                                                          value="0"
                                                                          onChange={() => airlineFilter("0")}
                                                                        /> All
                                                                      </span>
                                                                    </a>
                                                                  </div>
                                                                {distinctAirlineCodes && distinctAirlineCodes.map((airline) => (
                                                                    <div key={airline.code}>
                                                                    <a href="javascript:void(0);">
                                                                      <span style={{ padding: "5px" }}>
                                                                        <input
                                                                          type="radio"
                                                                          name="airline"
                                                                          value={airline.code}
                                                                          onChange={() => airlineFilter(airline.code)}
                                                                        /> {airline.name}
                                                                      </span>
                                                                    </a>
                                                                  </div>
                                                                  ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                       <br />
                                                       <div className="row">
                                                           <div className="col-lg-12 pt-2 col-12">
                                                        <div class="filter-section">
                                                        <div className="row">
                                                            <div className="col-lg-12 pt-2 col-12">
                                                                <h4>Layover Time</h4>
                                                            </div>
                                                        </div>  
                                                        <div className="row">
                                                            <div className="col-lg-12 numberlist">
                                                                <div className="col-lg-12  col-6">
                                                                 
                                                                <a href="javascript:void(0);"><span  onChange={() => timefilterLayover(1)} style={{padding: "5px"}}> <input type="radio"  name="Layover"/> 0-5 h</span></a> <br />
                                                                <a href="javascript:void(0);"><span  onChange={() => timefilterLayover(2)}  style={{padding: "5px"}}> <input type="radio" name="Layover"/> 5-10 h</span></a> <br />
                                                                <a href="javascript:void(0);"><span  onChange={() => timefilterLayover(3)}  style={{padding: "5px"}}> <input type="radio" name="Layover"/> 10-15 h</span></a> <br />
                                                                <a href="javascript:void(0);"><span  onChange={() => timefilterLayover(4)}  style={{padding: "5px"}}> <input type="radio" name="Layover"/> 15 + h</span></a>
                                                                
                                                                </div>
                                                            </div>
                                                        </div>  

                                                              <hr />
                                                            	
        
        
        {/* <dd className="filter-list filter-padding c-filter-common" data-testid="filter_airline">
          <dl className="filter filter-spaced">
            <dt className="filter-header">
              <h3 className="c-filter-common__subtit">Airline</h3>
            </dt>
            {/* <dd className="mt-16-im">
              <dl>
                
                  <dd className="filter-item" data-code="6E"><div>
                  <input
                    type="checkbox"
                    checked={selectAllChecked}
                    onChange={handleSelectAllChange}
                  /> Select All </div></dd>
                 
                  </dl></dd> 
            
           <dd className="mt-8-im">
              <dl>
                  <dd className="filter-item" data-code="6E"><div>
                  <input
                    type="checkbox"
                    name="6E"
                    checked={checkboxStates['6E']}
                    onChange={() => handleCheckboxChange('6E')}
                  /> Indego </div></dd>
                  <dd className="filter-item" data-code="6E"><div>
                  <input
                    type="checkbox"
                    name="AI"
                    checked={checkboxStates['AI']}
                    onChange={() => handleCheckboxChange('AI')}
                  /> Air India </div></dd>
                  <dd className="filter-item" data-code="6E"><div>
                  <input
                    type="checkbox"
                    name="UK"
                    checked={checkboxStates['UK']}
                    onChange={() => handleCheckboxChange('UK')}
                  /> Vistara </div></dd>
                  <dd className="filter-item" data-code="6E"><div>
                  <input
                    type="checkbox"
                    checked={checkboxStates['SG']}
                    name="SG"
                    onChange={() => handleCheckboxChange('SG')}
                  /> SpiceJet </div></dd>
                  
              </dl>
            </dd> 
          </dl>
        </dd> */}
  </div>
	

                                                        </div>
                                                </div> 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-9">
                                        
                                        <div className="clearDiv row">
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                <p className="headlines  bg-success"><span className="bg-success text text-white p-1 mb-1">Best Price :: </span> <b class="text-white">{leastPrice+parseFloat(leastPrice*markuppercent+markup)}  </b> </p>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                                <p className="headlines bg-danger"><span className="bg-danger text text-white p-1 mb-1">Early Departure :: </span><b class="text-white">{miniTime}  </b></p>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group ">
                                                <p className="headlines bg-warning"><span className="bg-warning text text-white p-1 mb-1">Shortest Duration :: </span><b class="text-white">{shortDur} </b></p>
                                            </div> 
                                        </div>
                                        
                                   
                                        <div className="edit_profileSec">
                                            <div className="editProfileFormlistview">
                                                
                                                <div class="row">
                                                <div class="col-lg-5">
                                                    <h5>{result.Response.Origin}  <i className="fa fa-plane" aria-hidden="true"> </i>  {result.Response.Destination} | <span style={{color:"red"}}>{passenStr} </span> </h5>
                                                    </div>
                                                    <div class="col-lg-4">
                                                    {/* <h5> Available Balance <span style={{color:"red"}}>{balance} </span> </h5> */}
                                                    </div>
                                                    <div class="col-lg-3">
                                                    <Link to="/dashboard">
                                                    <a href="javaScript:void(0);"> <h5> ◄◄ <i className="fa fa-home pt-4" aria-hidden="true"style={{color: "#333",size:"50px"}}></i> </h5></a>
                                                    </Link>
                                                    </div>
                                                </div>
                                            <br></br>                    

                                            <table id="datatable" className="table dt-responsive table-bordered nowrap airlisttable" style={{borderCollapse: "collapse", borderSpacing: "0", width: "100%",textAlign:"center"}}>
                                            <thead  style={{backgroundColor: "#184265",color:"#fff"}}>
                                                        
                                                        <th>Airline </th>
                                                        <th>Departure</th>
                                                        <th>Arrival</th>
                                                        <th>Duration</th>
                                                        <th>Price</th>
                                                       
                                                 </thead> 
                                                   <tbody>   
                                                    {data.map((resu, index) => (
                                                    
                                                    <tr key={index}>
                                                    {/* <h1>{resu?.ResultIndex}**</h1> <i>{resu?.ResultFareType}</i> */}
                                                  
                                                    {/* <h1>Hello,-- {index}  </h1> */}
                                                
                                                    {
                                                    
                                                        resu?.Segments[0] && resu.Segments[0].map((data, k) => (
                                                           
                                                            <>
                                                            {k === 0 && (
                                                                <>
                                                                <td style={{display:"none"}}>
                                                                {dur=0}
                                                                {reissueCharge = resu?.PenaltyCharges?.ReissueCharge ?? '0.00'}
            {cancellationCharge = resu?.PenaltyCharges?.CancellationCharge ?? '0.00'}
            {handbagwt=data?.CabinBaggage}
              {bagwt=data?.Baggage}
              {seats=data?.NoOfSeatAvailable}
                                                                    {basefare=resu?.Fare.BaseFare}
                                                                    {refund=resu?.IsRefundable}
                                                                    {refund===true&&(refund1='Refundable')}
                                                                    {refund===false&&(refund1='Non Refundable')}
                                                                    {lcc=resu?.IsLCC}
                                                                    {lcc===true&&(lcc1='LCC')}
                                                                    {lcc===false&&(lcc1='Non LCC')}
                                                                    {btax=resu?.Fare.Tax}
                                                                    {serv=resu?.Fare.ServiceFee}
                                                                    {other=resu?.Fare.OtherCharges}
                                                                    {PublishedFare=resu?.Fare.PublishedFare}
                                                                {airlineCode = data?.Airline.AirlineCode}
                                                                {airlineName = data?.Airline.AirlineName}
                                                                {flightNumber = data?.Airline.FlightNumber}
                                                                {originairport=data?.Origin.Airport.AirportCode}
                                                               
                                                             {destinationairport=data?.Destination.Airport.AirportCode}
                                                             {startpoint=data?.Origin.Airport.AirportName+', '+data?.Origin.Airport.CityName}
                                                             {endpoint=data?.Destination.Airport.AirportName+', '+data?.Destination.Airport.CityName}
                                                             { connectionflightString = originairport + ' → ' + destinationairport}
                                                             {deptime=new Date(data?.Origin.DepTime).toLocaleTimeString([], options)}
                                                             { arrtime=new Date(data?.Destination.ArrTime).toLocaleTimeString([], options)}
                                                             {timeStringarr = new Date(data?.Destination.ArrTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                             {timeStringdep = new Date(data?.Origin.DepTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                             
                                                             { duration=data?.Duration}
                                                             {dur=dur+duration}
                                                             {hrs=Math.floor(dur / 60)}
                                                             {mnts=dur % 60}
                                                             </td>
                                                                </>
                                                            )}
                                                             {k >= 1 && (
                                                                <>
                                                                <td style={{display:"none"}}>
                                                                {airlineCode = data?.Airline.AirlineCode}
                                                                {airlineName = data?.Airline.AirlineName}
                                                                {flightNumber = data?.Airline.FlightNumber}
                                                                {destinationairport=data?.Destination.Airport.AirportCode}
                                                                {connectionflightString = connectionflightString + ' → ' + destinationairport}
                                                              
                                                             {endpoint=data?.Destination.Airport.AirportName+', '+data?.Destination.Airport.CityName}
                                                             
                                                             { arrtime=new Date(data?.Destination.ArrTime).toLocaleTimeString([], options)}
                                                                { duration=data?.Duration}
                                                                {timeStringarr = new Date(data?.Destination.ArrTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                            
                                                                {dur=dur+duration}
                                                                {hrs=Math.floor(dur / 60)}
                                                                {mnts=dur % 60}
                                                                </td>
                                                                </>
                                                            )}
                                                           
                                                            </>
                                                         
                                                        ))
                                                    }

                                                    <th style={{ width: "20%", paddingLeft: "1rem", textAlign: "center" }}>
                                                            <img src={`assets/images/AirlineLogo_25x25/${airlineCode}.gif`} style={{height:"80",width:"20%",border: '0px solid black' }} alt=""/>
                                                              <div className="filghtsdetails pt-2">
                                                              <p>{airlineName}</p>
                                                               <h5>{airlineCode}-{flightNumber}</h5>
                                                               <p>{connectionflightString}</p>
                                                               {/* <p style={{fontSize:"9px"}}>{`Cabin Baggage: ${handbagwt}`}</p>
                                                               <p style={{fontSize:"9px"}}>{`Baggage: ${bagwt}`}</p> */}
                                                               <p style={{fontSize:"9px"}}>{` ${seats} Seats Avilable`}</p>
                                                             {/*   {rindex=nestedItem.ResultIndex}
                                                                Flight Number: {flightNumber}
                                                                <br />
                                                                */}
                                                              </div>
                                                            </th>
                                                            <th style={{ width: "20%" }}>
                                                              <div className="filghtsdetails">
                                                                
                                                                 <h4>{timeStringdep}</h4>
                                                                <p>{moment(deptime).format('DD/MM/YYYY HH:mm:ss')}</p> 
                                                                <p>{startpoint}</p>
                                                              </div>
                                                              
                                                            
                                                            </th>
                                                            <th style={{ width: "20%" }}>
                                                              <div className="filghtsdetails">
                                                                 <h4>{timeStringarr}</h4>
                                                                <p>{moment(arrtime).format('DD/MM/YYYY HH:mm:ss')}</p> 
                                                                <p>{endpoint}</p>
                                                              </div>
                                                             
                                                            </th>
                                                            <th style={{ width: "20%" }}>
                                                              <div className="filghtsdetails">
                                                                 <h4>{hrs} h {mnts} m</h4>
                                                                <p>Flight Duration</p> 
                                                              </div>
                                                              
                                                            </th>
                                                            <th style={{ width: "20%" }}>
                                                              <div className="filghtsdetails editProfileSubmitBtns">
                                                              {/* <span className="text-info" >Reissue Chargee </span>
                                                                  <span className="f-recommend__label-v2">{`${reissueCharge}`}</span><br />
                                                                  <span className="text-info" >Cancellation Chargee </span>
                                                                  <span className="f-recommend__label-v2">{`${cancellationCharge}`}</span><br /> */}
                                                               <a className="btn" href="javasript:void(0);" onClick={() => openModalR({resu})} >Direct Ticket</a><br />
                                                            <span className="text-danger">{refund1}-{lcc1}</span> <br /> 
                                                            <a className="bg-danger btn text-white"  style={{ padding: "2px 5px", marginTop: "0.41rem" }}   href="javasript:void(0);" onClick={() => openModalR({resu})}>View Fare</a><br /> 
                                                                
                                                                {/* 
                                                                <br />
                                                               
                                                                <a className="btn" style={{ border: "1px dotted  #333", marginTop: "0.41rem", borderRadius: "0%", padding: "2px 5px" }} href="">Add To Quote</a><br />
                                                                <a className="btn" style={{ border: "1px dotted  green", marginTop: "0.41rem", borderRadius: "0%", padding: "2px 5px" }} href="">ERAN 1015 POINTS</a> */}
                                                              </div>
                                                              
                                                            </th>  

                                                                

                                                  </tr>
                                                    
                                                ))}
                                                </tbody> 
                                                </table>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                   
                                
                    </div>
                </div>
            </div>
            {showModal && (
        <div  className="modal"
        style={{
          position: 'fixed',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden', // Prevents content from overflowing the modal
        }}
      >
        <div  className="modal-content" 
            style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '5px',
              maxWidth: '900px', 
              maxHeight: '80vh', // Use viewport height to make sure the modal content fits well on the screen
              overflowY: 'auto', // Enables vertical scrolling if content exceeds modal height
              boxSizing: 'border-box', // Ensures padding is included in the element's height and width
            }}
        >
          <div className="row">
            <div className="col-lg-10 form-group" >
            </div>
            <div className="col-lg-2 form-group" >
      <button onClick={() => setShowModal(false)} style={{color:"red"}} >
      CLOSE <i className="fa fa-window-close" aria-hidden="true"></i>
        </button> 
      </div>
      </div>
            <h2>Fare Type Details</h2>
            <div className="row">
            <div className="col-lg-12 form-group" >  
            <p>{selectedRow.resu.IsRefundable ? 'Refundable' : 'Non Refundable'} | {selectedRow.resu.IsLCC ? 'LCC' : 'Non LCC'}
            </p> 
      
            <div className="row">
            <div className="col-lg-3 form-group" >
            <img src={`assets/images/AirlineLogo_25x25/${selectedRow.resu.AirlineCode}.gif`} style={{border: '1px solid black' ,height:"100px",width:"auto"}} alt=""/>

            </div>
            
             </div>
{/* ........................ */}
<div data-testid="u_policy_wrapper_2-0" className="policy-wrapper is-v2" style={{ display: isVisible ? "block" : "none" }}>
  <div className="policy-wrapper_content-wrapper">
    {selectedRow.resu?.Options ? (
      <table  style={{width:"100%"}}>
        <thead>
          <tr>
            <th>Fare Classification</th>
            <th>Offered Fare</th>
            <th>Published Fare</th>
            <th>Cabin Baggages </th> 
            <th> Baggages </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {selectedRow.resu.Options.map((option, index) => (
            <tr key={index}>
              <td>
                <span 
                  className="f-recommend__label-v2 btn" 
                  style={{
                    color: "black",
                    backgroundColor: option.FareClassification?.Color || '#ffff' 
                  }}
                >
                  {option.FareClassification?.Type || 'Default'}
                </span>
              </td>
              <td style={{ textAlign: "center" }}>
                ₹ {parseFloat(option.Fare.OfferedFare) + parseFloat(option.Fare.OfferedFare * markuppercent + markup)}
              </td>
              <td style={{ textAlign: "center" }}>
                ₹ {parseFloat(option.Fare.PublishedFare) + parseFloat(option.Fare.PublishedFare * markuppercent + markup)}
              </td>
               <td style={{ textAlign: "center" }}>
                {option.Cab}
              </td> 
              <td style={{ textAlign: "center" }}>
                {option.Bag}
              </td> 
              <td>
                <div className="flex item-con-policy-loading__btn-wrapper">
                  &nbsp;&nbsp;<div className="c-result-operate">
                    
                    <span onClick={() => handleButtonClick(option.ResultIndex, result.Response.TraceId, selectedRow.resu?.IsLCC, parseFloat(option.Fare.PublishedFare))} className="c-result-operate__btn is-v2 flex-column-center user-select closeDropDowns f-14">
                      <span className="btn btn-info">Book</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <p>No results found.</p>
    )}
  </div>
</div>

{/* ........................... */}
            <p>Bagage info:<br />
            </p>
            <table style={{width:"100%"}}> 
              <thead> 
              <th>AirLine</th><th>Origin</th><th>Destination</th><th>Duration</th> 
              </thead>
             <tbody>
             {
                        selectedRow.resu?.Segments[0].map((data,k) => ( 

                                <>
                                <tr  key={k}>
                                  <td><br />{data?.Airline.AirlineName}<br />(Airline Code:{data?.Airline.AirlineCode})</td>
                                  <td><br />{data?.Origin.Airport.AirportName}<br />{moment(new Date(data?.Origin.DepTime)).format('DD/MM/YYYY HH:mm:ss')}</td>
                                  <td><br />{data?.Destination.Airport.AirportName}<br />{moment(new Date(data?.Destination.ArrTime)).format('DD/MM/YYYY HH:mm:ss')}</td>
                                  <td><br />{Math.floor(data?.Duration/60)}h  {data?.Duration % 60}m</td>
                                  {/* <td><br />{data?.Baggage}</td>  
                                  <td><br />{data?.CabinBaggage}</td> */}
                                </tr>
                                </>
                                ))};
              </tbody> 
            </table>
{/* ..................... */}



{/* .................... */}
      </div>
      </div>
      <div className="row">
            <div className="col-lg-10 form-group" >
            </div>
            <div className="col-lg-2 form-group" >
      <button onClick={() => setShowModal(false)} style={{color:"red"}} >
      CLOSE <i className="fa fa-window-close" aria-hidden="true"></i>
        </button> 
      </div>
      </div>
          </div>
        </div>
      )}  

{showModalMessage && (
        <div  className="modal"
        style={{
          position: 'fixed',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div  className="modal-content" 
          style={{
            backgroundColor: 'white',
            padding: '5px',
            borderRadius: '5px',
            maxWidth: '450px', 
            maxHeight: '1000px', 
          }}
        >
          <div className="bg-white shadow-md rounded px-2 pt-2 pb-2 mb-2 w-full max-w-md">
		  <div className="row">
            <div className="col-lg-11" >
            </div>
            <div className="col-lg-1" >
      <button onClick={() => closeModalMessage()} style={{color:"white",padding:"7px",fontSize:"20px",backgroundColor:"red",marginLeft:"-25px"}}><i className="fas fa-times"></i></button> 
      </div>
      </div>
		<h2 className="text-3xl font-bold mb-6 text-center text-white">
		  <span className="bg-gradient-to-r text-transparent from-blue-500 to-purple-500 bg-clip-text">
			<h4 style={{fontSize:"15px",color:"grey"}}>No Result for this Filter</h4>
		  </span>
		  <img src="assets/images/airimg.jpg" alt="" style={{width:"300px",height:"auto"}}/>
		  <h5 style={{fontSize:"12px",color:"grey"}}>Please Choose Another Option</h5>
		  
		</h2>
		</div>
		
		</div>
		</div>
		</div>
	)}      

     </div>
        
    )
}

export default AirLineList



export function List({list,index}) {
    const newdata = list;
    return (
        <>
       
        <h1>Hello,-- {index}  </h1>
        {/* <i>{JSON.stringify(newdata)}</i> */}
        {
            list[0].map((data,k) => (
                <>
               
                <InnerList data={data} />
                </>
            ))
        }
      
        </>
    )
}

export function InnerList({data}) {

    return (
        <>
        <h1>{data?.Baggage}yyyyyy</h1>
        </>
    );
 }
 function valuetext(value) {
  return `${value}°C`; 
}