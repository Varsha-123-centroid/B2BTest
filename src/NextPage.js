import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Navbar from './components/Navbar'; 
import Dashbord from './Route/Dashbord';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import AdminLogin from './AdminLogin';
library.add(faStroopwafel)
const NextPage = () => {
  return (
    <div  data-sidebar="dark">
      <Navbar />
      <Home />
    {/* <h2>Dashboard</h2>
    <div id="layout-wrapper">
    


    </div>  */}

  </div> 
  )
}

export default NextPage