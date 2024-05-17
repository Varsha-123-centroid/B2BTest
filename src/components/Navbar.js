import React,{ useState,useEffect} from 'react';
import { Link ,Routes,Route,Router,Switch, useNavigate, useLocation } from 'react-router-dom';


function Navbar() {
    const location = useLocation();
    const [balance, setBalance] = useState(sessionStorage.getItem('Balance'));
    const params = new URLSearchParams(location.search);
    const [userName, setUserName] = useState("Admin");
    const [userCode, setUserCode] = useState("");
    useEffect(() => {

        async function fetchData() {
            let branchId =1;
            const branch_id = params.get('bbr');
            if(branch_id!== null)
          {branchId =branch_id;}
          else
         { branchId =sessionStorage.getItem('branchId');}
      const response = await fetch(`https://api.travelxpo.in/auth/balance/${branchId}`);
      const data = await response.json();
      console.log(data);
      if(data.status==200){
        const bal1=data.cash.balance;
        setBalance(bal1);
        sessionStorage.setItem('Balance', bal1);
        setUserName(sessionStorage.getItem('uss'));
        setUserCode(sessionStorage.getItem('uss'));
      }
          }
          fetchData();
    },[]) ;

    const closeWin = () => {
        window.close();   
    };

    
  return (
    <div>
        <header id="page-topbar">
                <div className="navbar-header">
                    <div className="d-flex">
                        <div className="navbar-brand-box">
                            <Link to="/dashboard"> 
                           <a href="javascript:void(0);" className="logo logo-dark">
                                <span className="logo-sm">
                                    <img src="assets/images/logo.png" alt="logo-sm-dark" height="22" />
                                </span>
                                <span className="logo-lg">
                                    <img src="assets/images/logo.png" alt="logo-dark" height="70" />
                                </span>
                            </a>
                            </Link>
                            <Link to="/dashboard"> 
                            <a href="javascript:void(0);" className="logo logo-light">
                                <span className="logo-sm">
                                    <img src="assets/images/logo.png" alt="logo-sm-light" height="22" />
                                </span>
                                <span className="logo-lg">
                                    <img src="assets/images/logo.png" alt="logo-light" height="70" />
                                </span>
                            </a>
                            </Link>
                        </div>

                        <button type="button" className="btn  d-none btn-sm px-3 font-size-24 header-item waves-effect" id="vertical-menu-btn">
                            <i className="ri-menu-2-line align-middle"></i>
                        </button>
						<div className="dropdown dropdown-mega d-none ms-2">
                            <button type="button" className="btn header-item waves-effect" data-bs-toggle="dropdown" aria-haspopup="false" aria-expanded="false">Flights</button>
							<button type="button" className="btn header-item waves-effect" data-bs-toggle="dropdown" aria-haspopup="false" aria-expanded="false">Hotels</button>
							<button type="button" className="btn header-item waves-effect" data-bs-toggle="dropdown" aria-haspopup="false" aria-expanded="false">Transfers</button>
							<button type="button" className="btn header-item waves-effect" data-bs-toggle="dropdown" aria-haspopup="false" aria-expanded="false">Activities</button>
                        </div>
                        </div>

                    <div className="d-flex">

                        <div className="dropdown d-inline-block px-2 user-dropdown">
							<div className="userName">
                              <span className="userTxt" id="myaccnt_btn_name">
                                <span className="avlCreditTxt">Logged in as :</span>
                                <span className="login_Txt"><b>{userName}</b></span>
                              </span>
                              <div className="avlCreditTxt">
                                 <span className="avalpointsTxt">
                                    <span className="avlCreditTxt">Loyalty Tier :</span>
                                    <span className="currencyTxt">Prime</span>
                                 </span>
								 <br />
                                 <span className="avalpointsTxt">
                                    <span className="avlCreditTxt">Available Balance :</span>
                                    <span className="currencyTxt"> ₹ {balance}</span>
                                </span>
                              </div>
							</div>
						</div>
                        <div className="dropdown d-inline-block px-2 user-dropdown">
                        <Link to="/dashboard">
                            <a href="javaScript:void(0);" type="" >
                                <i className="fa fa-home pt-4" aria-hidden="true"style={{color: "#333"}}></i>
                            </a>
                        </Link>
                        </div>
                        <div className="dropdown d-inline-block px-2 user-dropdown">
                            <button type="button" className=" header-item waves-effect" id="page-header-user-dropdown"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{background: "transparent"}}>
                              <span className="d-none d-xl-inline-block ms-1">{userName}</span>
                                <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-end">
                                 {/* <a className="dropdown-item" href="#"><i className="ri-file-list-3-line align-middle me-1"></i> My Bookings</a>
                                <a className="dropdown-item" href="#"><i className="ri-user-line align-middle me-1"></i> My Account</a>
                                <a className="dropdown-item" href="#"><i className="ri-plane-line align-middle me-1"></i>Travellers</a>
                                <a className="dropdown-item" href="#"><i className="ri-chat-quote-line align-middle me-1"></i>Quotation</a>
								<a className="dropdown-item" href="#"><i className="mdi mdi-handshake align-middle me-1"></i> Loyalty</a>
                                <div className="dropdown-divider"></div> */}
                                <a className="dropdown-item text-danger" href="javasript:void(0);" onClick={() => closeWin()} ><i className="ri-shut-down-line align-middle me-1 text-danger"></i>Window Close</a>
                                 
                            </div>
                        </div>

            
                    </div>
                </div>
            </header>
    </div>
  )
}

export default Navbar