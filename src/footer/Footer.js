import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button,Container,Navbar,Nav,Carousel } from 'react-bootstrap';
import { FaCar,FaOilCan, FaCheck , FaCog ,FaArrowRight,FaCarAlt,FaUsers,FaCertificate,FaUserCog,FaTools,FaMapMarkerAlt,FaFacebookSquare,FaInstagram,FaLinkedin,FaTwitter, FaYoutube ,FaEnvelope,FaPhoneAlt} from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";

function Footer(){
    return(
        <>
            {/* Footer start */}

 <div class="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"  >
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-light mb-4">Address</h4>
                    <p class="mb-2"><i class="me-3"> <FaMapMarkerAlt></FaMapMarkerAlt>  </i>123 Street, New York, USA</p>
                    <p class="mb-2"><i class="me-3"> <FaPhoneAlt></FaPhoneAlt> </i>+012 345 67890</p>
                    <p class="mb-2"><i class="me-3"> <FaEnvelope></FaEnvelope> </i>info@example.com</p>
                    <div class="d-flex pt-2">
                        <a class="btn btn-outline-light btn-social" href=""><i> <FaTwitter></FaTwitter> </i></a>
                        <a class="btn btn-outline-light btn-social" href=""><i> < FaFacebookSquare></ FaFacebookSquare> </i></a>
                        <a class="btn btn-outline-light btn-social" href=""><i> < FaYoutube ></ FaYoutube > </i></a>
                        <a class="btn btn-outline-light btn-social" href=""><i> <FaLinkedin></FaLinkedin> </i></a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-light mb-4">Opening Hours</h4>
                    <h6 class="text-light">Monday - Friday:</h6>
                    <p class="mb-4">09.00 AM - 09.00 PM</p>
                    <h6 class="text-light">Saturday - Sunday:</h6>
                    <p class="mb-0">09.00 AM - 12.00 PM</p>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-light mb-4">Services</h4>
                    <a class="btn btn-link" href="">Diagnostic Test</a>
                    <a class="btn btn-link" href="">Engine Servicing</a>
                    <a class="btn btn-link" href="">Tires Replacement</a>
                    <a class="btn btn-link" href="">Oil Changing</a>
                    <a class="btn btn-link" href="">Vacuam Cleaning</a>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-light mb-4">Newsletter</h4>
                    <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                    <div class="position-relative mx-auto">
                        <input class="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"></input>
                        <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                    </div>
                </div>
            </div>
        </div>
    </div> 
{/* footer Ends */}
        </>
    );
}
export default Footer;