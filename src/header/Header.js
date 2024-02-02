import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button,Container,Navbar,Nav,Carousel } from 'react-bootstrap';
import { FaCar,FaOilCan, FaCheck , FaCog ,FaArrowRight,FaCarAlt,FaUsers,FaCertificate,FaUserCog,FaTools,FaMapMarkerAlt,FaFacebookSquare,FaInstagram,FaLinkedin,FaTwitter, FaYoutube ,FaEnvelope,FaPhoneAlt} from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";

import { Link } from 'react-router-dom';

function Header() {
    return(
        <>
            {/* -- topbar start  */}

     <div class="container-fluid bg-light p-0">
     <div class="row gx-0 d-none d-lg-flex">
         <div class="col-lg-7 px-5 text-start">
             <div class="h-100 d-inline-flex align-items-center py-3 me-4">
                 <small class="text-primary me-2"><FaMapMarkerAlt></FaMapMarkerAlt></small>
                 <small>123 Street, New York, USA</small>
             </div>
             <div class="h-100 d-inline-flex align-items-center py-3">
                 <small class="text-primary me-2">< MdOutlineWatchLater></ MdOutlineWatchLater></small>
                 <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
             </div>
         </div>
         <div class="col-lg-5 px-5 text-end">
             <div class="h-100 d-inline-flex align-items-center py-3 me-4">
                 <small class="text-primary me-2"> <IoCallSharp ></IoCallSharp > </small>
                 <small>+012 345 6789</small>
             </div>
             <div class="h-100 d-inline-flex align-items-center">
                 <a class="btn btn-sm-square bg-white text-primary me-1" href=""><i> <FaFacebookSquare></FaFacebookSquare> </i></a>
                 <a class="btn btn-sm-square bg-white text-primary me-1" href=""><i> <FaInstagram></FaInstagram> </i></a>
                 <a class="btn btn-sm-square bg-white text-primary me-1" href=""><i> <FaLinkedin></FaLinkedin> </i></a>
                 <a class="btn btn-sm-square bg-white text-primary me-0" href=""><i> <FaTwitter></FaTwitter> </i></a>
             </div>
         </div>
     </div>
 </div>

 {/* -- topbar Ends */}

     {/* naver start */}

     <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <a  class="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <h2 class="m-0 text-primary"><i class=" me-3"><FaCar></FaCar> </i>CarServ</h2>
        </a>
        <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto p-4 p-lg-0">
                <Nav.Link class="nav-item nav-link active"><Link to='/#home'>Home</Link></Nav.Link>
                <Nav.Link class="nav-item nav-link"><Link to='/about'>About</Link></Nav.Link>
                <Nav.Link class="nav-item nav-link"><Link to='/services'>Services</Link></Nav.Link>
                <Nav.Link class="nav-item nav-link"><Link to='/Booking'>Booking</Link></Nav.Link>

                {/* <div class="nav-item dropdown">
                    <a Link="" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div class="dropdown-menu fade-up m-0">
                        <a class="dropdown-item">Booking</a>
                        <a  class="dropdown-item">Technicians</a>
                        <a  class="dropdown-item">Testimonial</a>
                        <a  class="dropdown-item">404 Page</a>
                    </div>
                </div> */}
                <Nav.Link  class="nav-item nav-link"><Link to='/contact'>Contact</Link></Nav.Link>
            </div>
            <a  class="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Get A Quote<i class= 'ms-3'><FaArrowRight></FaArrowRight> </i></a>
        </div>
    </nav> 

     {/* naver Ends */}
        </>
    );
}
export default Header;