import './App.css';
import React,{ useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar'; 
import Dashbord from './Route/Dashbord';
import NextPage from './NextPage';
import AirlineSearch from './Route/AirLineList';
import AirlineListRound from './Route/AirlineListRound';
import AirLineRoundCombo from './Route/AirLineRoundCombo';
import AirlineListReturn from './Route/AirlineListReturn';
import AirlineListMulticity from './Route/AirlineListMulticity';
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import AdminLogin from './AdminLogin';
import CustomerInfo from './Route/CustomerInfo';
import CustomerInfoRound from './Route/CustomerInfoRound';
import BookingOneway from './Route/BookingOneway';
import BookingDomesticRound from './Route/BookingDomesticRound';

import Editprofile from './Route/Editprofile';
import SetDefaultMarkup from './Route/SetDefaultMarkup';
import ChangePassword from './Route/ChangePassword';
import Receipts from './Route/Receipts';
import ManageStaff from './Route/ManageStaff';
import ManageSubAgent from './Route/ManageSubAgent';
import SubscribeReminderPro from './Route/SubscribeReminderPro';
import AgentRegistration from './Route/AgentRegistration';
import BookingDetails from './Route/BookingDetails';
import FlightRules from './Route/FlightRules';
import SupplierPayment from './Route/SupplierPayment';
import SeoMeta from './Route/SeoMeta';
import MarkupDetails from './Route/MarkupDetails';
import AgentBookingPortal from './Route/AgentBookingPortal';
import AgentCreation from './Route/AgentCreation';
import Testpdf from './Route/Testpdf';

library.add(faStroopwafel)

function App() {
 // const [response, setResponse] = useState(null);
  return (

    <Router>
    <Routes>
      <Route path="/" element={<AdminLogin />} />
      <Route path="/dashboard" element={<NextPage />} /> 
      <Route path="/fightlist" element={<AirlineSearch />} />
      <Route path="/fightlistround" element={<AirlineListRound />} />
      <Route path="/fightlistreturn" element={<AirlineListReturn />} />
      <Route path="/fightlistcombo" element={<AirLineRoundCombo />} />
      <Route path="/fightlistmulticity" element={<AirlineListMulticity />} />
      <Route path="/customerInfo/*" element={<CustomerInfo />} />
      <Route path="/customerInfoRound/*" element={<CustomerInfoRound />} />
      <Route path="/booking" element={<BookingOneway />} />
      <Route path="/bookingRound" element={<BookingDomesticRound />} />
      <Route path="/mydashboard" element={<Dashbord />} />

      <Route path="/editprofile" element={<Editprofile />} />
      <Route path="/setmarkup" element={ <SetDefaultMarkup />} />
            <Route path="/changepassword" element={ <ChangePassword />} />
            <Route path="/recipts" element={ <Receipts />} />
            <Route path="/managestaff" element={ <ManageStaff />} />
            <Route path="/managesubagent" element={ <ManageSubAgent />} />
            <Route path="/subscribetoreminder" element={ <SubscribeReminderPro />} /> 
            <Route path="/agentcreation" element={ <AgentCreation />} />
            <Route path="/agentregistration" element={ <AgentRegistration />} />
            <Route path="/bookingdetails" element={ <BookingDetails />} />
            <Route path="/flightrule" element={ <FlightRules />} />
            <Route path="/supplierpayment" element={ <SupplierPayment />} />
            <Route path="/seometatag" element={ <SeoMeta />} />
            <Route path="/markupdetails" element={ <MarkupDetails />} />
            <Route path="/agentbookingportal" element={ <AgentBookingPortal />} />
            <Route path="/pdf" element={ <Testpdf />} />
    </Routes>
  </Router>
 
  );
}

export default App;
