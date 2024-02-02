import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button,Container,Navbar,Nav,Carousel } from 'react-bootstrap';
import { FaCar,FaOilCan, FaCheck , FaCog ,FaArrowRight,FaCarAlt,FaUsers,FaCertificate,FaUserCog,FaTools,FaMapMarkerAlt,FaFacebookSquare,FaInstagram,FaLinkedin,FaTwitter, FaYoutube ,FaEnvelope,FaPhoneAlt} from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { PiToggleRightFill } from "react-icons/pi";

import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="App">  


<Container>

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
        <button type="button" class="navbar-toggler me-4 collapsed" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse">
            <div class="navbar-nav ms-auto p-4 p-lg-0">
                <Nav.Link class="nav-item nav-link active"><Link to='/#home'>Home</Link></Nav.Link>
                <Nav.Link class="nav-item nav-link"><Link to='/about'>About</Link></Nav.Link>
                <Nav.Link class="nav-item nav-link"><Link to='/services'>Services</Link></Nav.Link>
                <Nav.Link class="nav-item nav-link"><Link to='/Booking'>Booking</Link></Nav.Link>
                <Nav.Link  class="nav-item nav-link"><Link to='/contact'>Contact</Link></Nav.Link>
            </div>
            <a  class="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Get A Quote
            <i class= 'ms-3'><FaArrowRight></FaArrowRight> </i>
            </a>
        </div>
    </nav> 

     {/* naver Ends */}

    {/* image website start */}

    <div class="container-fluid p-0 mb-5">
        <div id="header-carousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item">
                    <img className='w-100' src={require(`./img/slider1.jpeg`)}></img>
                    <div class="carousel-caption d-flex align-items-center">
                        <div class="container">
                            <div class="row align-items-center justify-content-center justify-content-lg-start">
                                <div class="col-10 col-lg-7 text-center text-lg-start">
                                    <h6 class="text-white text-uppercase mb-3 animated slideInDown">// Car Servicing //</h6>
                                    <h1 class="display-3 text-white mb-4 pb-3 animated slideInDown">Qualified Car Repair Service Center</h1>
                                    <a href="" class="btn btn-primary py-3 px-5 animated slideInDown">Learn More<i class="fa fa-arrow-right ms-3"></i></a>
                                </div>
                                <div class="col-lg-5 d-none d-lg-flex animated zoomIn">
                                    <img className='w-100' src={require(`./img/cal-1.png`)}></img>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
                <div class="carousel-item active">
                <img className='w-100' src={require(`./img/slider2.jpeg`)}></img>
                    <div class="carousel-caption d-flex align-items-center">
                        <div class="container">
                            <div class="row align-items-center justify-content-center justify-content-lg-start">
                                <div class="col-10 col-lg-7 text-center text-lg-start">
                                    <h6 class="text-white text-uppercase mb-3 animated slideInDown">// Car Servicing //</h6>
                                    <h1 class="display-3 text-white mb-4 pb-3 animated slideInDown">Qualified Car Wash Service Center</h1>
                                    <a href="" class="btn btn-primary py-3 px-5 animated slideInDown">Learn More<i class="fa fa-arrow-right ms-3"></i></a>
                                </div>
                                <div class="col-lg-5 d-none d-lg-flex animated zoomIn">
                                <img className='w-100' src={require(`./img/cal-2.png`)}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    {/* image website Ends */}

    {/* serivce start */}
  
      <div className='container-xxl py-5'>
        <div className='container'>
        <div className='row g-4'>
          <div className='col-lg-4 col-md-6 '>
            <div className='d-flex py-5 px-4'>
              <i><a className='text-primay'> <FaCertificate></FaCertificate> </a></i>
                <div className='ps-4'>
                  <h5 className='mb-3'>Quality Servicing</h5>
                  <p className='mb-0'>Diam dolor diam ipsum sit amet diam et eos erat ipsum </p>
                  <a className='text-secondary border-bottem'>Read more</a>
                </div>
            </div>
          </div>
              <div className='col-lg-4 col-md-6'>
                <div className='d-flex bg-light py-5 px-4'>
                <i><a className='text-primay'> <FaUserCog></FaUserCog> </a></i>
                <div className='ps-4'>
                  <h5 className='mb-3'>Expert Workers</h5>
                  <p className='mb-0'>Diam dolor diam ipsum sit amet diam et eos erat ipsum </p>
                  <a className='text-secondary border-bottem'>Read more</a>
                </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='d-flex  py-5 px-4'>
                <i><a className='text-primay'> <FaTools></FaTools> </a></i>
                <div className='ps-4'>
                  <h5 className='mb-3'>Modern Equipment</h5>
                  <p className='mb-0'>Diam dolor diam ipsum sit amet diam et eos erat ipsum </p>
                  <a className='text-secondary border-bottem'>Read more</a>
                </div>
                </div>
              </div>
              
        </div>
        </div>
        </div>   
    {/* serivce Ends */}


   
    {/* About Start */}

          <div className='container xxl py-5'>
            <div className='container'>
              <div className='row g-5'>
                <div className='col-lg-6 pt-4'>
                  <div className='postion-relative  h-100'>
                  <img src={require(`./img/About.jpeg`)}></img>
                    <div className='position-relative top-0 end-0 mt-n4 me-n4 py-4 px-5'>
                      <h1 className='dispay-4 text-white mb-0'>"15"
                      <span className='fs-4'>Years</span>
                      </h1>
                        <h4 className='text-white'>Experience</h4>
                    </div>
                  </div>
                </div>
                    <div className='col-lg-6'>
                      <h6 className='text-primay text-uppercase'>//About US//</h6>
                      <h1 className='mb-4'>
                        <span className='text-primary'>CarSrev</span>
                        "IS the best place for your atuo care"
                      </h1>
                      <p className='mb-4'>
                      Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. 
                      Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                      </p>
                        <div className='row g-4 mb-3 pb-3'>
                          <div className='col-12'>
                            <div className='d-flex'>
                              <div className='bg-light d-flex flex-shrink-0 align-item-center justify-content-center mt-1'>
                                <span className='fw-bold text-secondary' >01</span>
                              </div>
                              <div className='ps-3'>
                                <h6>Professional & Expert</h6>
                                <span>Diam dolor diam ipsum sit amet diam et eos</span>
                              </div>
                            </div>
                          </div>
                            <div className='col-12'>
                              <div className='d-flex'>
                                <div className='bg-light d-flex-shrink-0 align-item-center justify-content-center mt-1'>
                                    <span className='fw-bold text-secondary'>02</span>
                                </div>
                                      <div className='ps-3'>
                                        <h6>Quality Servicing Center</h6>
                                        <span>Diam dolor diam ipsum sit amet diam et eos</span>
                                      </div>
                              </div>
                            </div>
                                <div className='col-12'>
                                  <div className='d-flex'>
                                    <div className='bg-light d-flex-shrink-0 align-item-center justify-content-center mt-1'>
                                        <span className='fw-bold text-secondary'>03</span>
                                    </div>
                                          <div className='ps-3'>
                                            <h6>Expert Workers</h6>
                                            <span>Diam dolor diam ipsum sit amet diam et eos</span>
                                          </div>
                                  </div>          
                                </div>
                        </div>
                              <a className='btn btn-primary py-3 px-5'>
                                 Read more 
                                <i className= 'ms-3'><FaArrowRight></FaArrowRight> </i>
                              </a>
                    </div>
              </div>
            </div>
          </div> 
    {/* About Ends  */}

    {/* fact start */}

   <div className='container-fluid fact bg-dark my-5 py-5'>
      <div className='container'>
        <div className='row g-4 '>
          <div className='col-md-6 col-lg-3 text-center'>
            <i className='fa-2x text-white mb-3'> <FaCheck></FaCheck> </i>
              <h2 className='text-white mb-2' data-Toggle="counter-up">1234</h2>
              <p className='text-white mb-0'>Year Exprience</p>
          </div>
            <div className='col-md-6 col-lg-3 text-center'>
            <i className='fa-2x text-white mb-3'> <FaUserCog></FaUserCog></i>
            <h2 className='text-white mb-2' data-Toggle="counter-up">1234</h2>
            <p className='text-white mb-0'>Expert Workers</p>
            </div>
            <div className='col-md-6 col-lg-3 text-center'>
              <i className='fa-2x text-white mb-3'> <FaUsers></FaUsers></i>
              <h2 className='text-white mb-2' data-Toggle="counter-up">1234</h2>
              <p className='text-white mb-0'>Satisfied clients</p>
            </div>
            <div className='col-md-6 col-lg-3 text-center'>
              <i className='fa-2x text-white mb-3'> <FaCar ></FaCar ></i>
              <h2 className='text-white mb-2' data-Toggle="counter-up">1234</h2>
              <p className='text-white mb-0'>Compleate projects</p>
            </div>
        </div>
      </div>
    </div> 
    {/* fact Ends */}

    {/* service start */}

      <div className='container-xxl service py-5'>
        <div className='container'>
          <div className='text-center'>
            <h6 className='text-primary text-uppercase'>//Our Service //</h6>
             <h1 className='mb-5'>Explore our Servie</h1>
          </div>
            <div className='row g-4 fadinup'>
              <div className='col-lg-4'>
                <div className='nav w-100 nav-pills  me-4'>
                  <button className='nav-link w-100 d-flex align-items-center text-start p-4 mb-4 active' type='button'>
                    <i className='fa-2x me-3'> <FaCarAlt></FaCarAlt> </i>
                    <h4 className='m-0'>Diagnostic test</h4>
                  </button>
                  <button className='nav-link w-100 d-flex align-items-center text-start p-4 mb-4 active' type='button'>
                    <i className='fa-2x me-3'> <FaCar></FaCar> </i>
                    <h4 className='m-0'>Engine servicing</h4>
                  </button>
                  <button className='nav-link w-100 d-flex align-items-center text-start p-4 mb-4 active' type='button'>
                    <i className='fa-2x me-3'> < FaCog></ FaCog> </i>
                    <h4 className='m-0'>Tires Replacement</h4>
                  </button>
                  <button className='nav-link w-100 d-flex align-items-center text-start p-4 mb-4 active' type='button'>
                    <i className='fa-2x me-3'> < FaOilCan></ FaOilCan> </i>
                    <h4 className='m-0'>Oil Changing</h4>
                  </button>
                </div>
              </div>
              <div className='col-lg-8'>
                <div className='tab-content w-100'>
                  <div className='tab-pane  fade show active' id='tab-pane1'>
                    <div className='row g-4'>
                      <div className='col-md-6'>
                        <div className='position-relative h-100'>
                          <img src={require(`./img/1.jpeg`)}></img>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div> 

    {/* service Ends */}


    {/* Booking satrt */}
 
    <div class="container-fluid bg-secondary booking my-5">
        <div class="container">
            <div class="row gx-5">
                <div class="col-lg-6 py-5">
                    <div class="py-5">
                        <h1 class="text-white mb-4">Certified and Award Winning Car Repair Service Provider</h1>
                        <p class="text-white mb-0">Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.</p>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="bg-primary h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn" data-wow-delay="0.6s">
                        <h1 class="text-white mb-4">Book For A Service</h1>
                        <form>
                            <div class="row g-3">
                                <div class="col-12 col-sm-6">
                                    <input type="text" class="form-control border-0" placeholder="Your Name" ></input>
                                </div>
                                <div class="col-12 col-sm-6">
                                    <input type="email" class="form-control border-0" placeholder="Your Email" ></input>
                                </div>
                                <div class="col-12 col-sm-6">
                                    <select class="form-select border-0" >
                                        <option selected="">Select A Service</option>
                                        <option value="1">Service 1</option>
                                        <option value="2">Service 2</option>
                                        <option value="3">Service 3</option>
                                    </select>
                                </div>
                                <div class="col-12 col-sm-6">
                                    <div class="date" id="date1" data-target-input="nearest">
                                        <input type="text" class="form-control border-0 datetimepicker-input" placeholder="Service Date" data-target="#date1" data-toggle="datetimepicker"></input>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <textarea class="form-control border-0" placeholder="Special Request"></textarea>
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-secondary w-100 py-3" type="submit">Book Now</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    {/* Booking Ends  */}


{/* team start */}
 <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center wow fadeInUp" >
                <h6 class="text-primary text-uppercase">// Our Technicians //</h6>
                <h1 class="mb-5">Our Expert Technicians</h1>
            </div>
            <div class="row g-4">
                <div class="col-lg-3 col-md-6 wow fadeInUp">
                    <div class="team-item">
                        <div class="position-relative overflow-hidden">
                            <img src={require(`./img/team1.jpeg`)}></img>
                            <div class="team-overlay position-absolute start-0 top-0 w-100 h-100">
                                <a class="btn btn-square mx-1">
                                  <i> <FaFacebookSquare></FaFacebookSquare> </i></a>
                                <a class="btn btn-square mx-1">
                                  <i> <FaFacebookSquare></FaFacebookSquare> </i></a>
                                <a class="btn btn-square mx-1">
                                  <i> <FaFacebookSquare></FaFacebookSquare> </i></a>
                            </div>
                        </div>
                        <div class="bg-light text-center p-4">
                            <h5 class="fw-bold mb-0">Full Name</h5>
                            <small>Designation</small>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6" >
                    <div class="team-item">
                        <div class="position-relative overflow-hidden">
                        <img src={require(`./img/team2.jpeg`)}></img>
                            <div class="team-overlay position-absolute start-0 top-0 w-100 h-100">
                                <a class="btn btn-square mx-1" href=""><i> <FaInstagram></FaInstagram> </i></a>
                                <a class="btn btn-square mx-1" href=""><i> <FaInstagram></FaInstagram> </i></a>
                                <a class="btn btn-square mx-1" href=""><i><FaInstagram></FaInstagram> </i></a>
                            </div>
                        </div>
                        <div class="bg-light text-center p-4">
                            <h5 class="fw-bold mb-0">Full Name</h5>
                            <small>Designation</small>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6" >
                    <div class="team-item">
                        <div class="position-relative overflow-hidden">
                        <img src={require(`./img/team3.jpeg`)}></img>
                            <div class="team-overlay position-absolute start-0 top-0 w-100 h-100">
                            <a class="btn btn-square mx-1" href=""><i> <FaInstagram></FaInstagram> </i></a>
                                <a class="btn btn-square mx-1" href=""><i> <FaInstagram></FaInstagram> </i></a>
                                <a class="btn btn-square mx-1" href=""><i><FaInstagram></FaInstagram> </i></a>
                            </div>
                        </div>
                        <div class="bg-light text-center p-4">
                            <h5 class="fw-bold mb-0">Full Name</h5>
                            <small>Designation</small>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 ">
                    <div class="team-item">
                        <div class="position-relative overflow-hidden">
                        <img src={require(`./img/team4.jpeg`)}></img>
                            <div class="team-overlay position-absolute start-0 top-0 w-100 h-100">
                            <a class="btn btn-square mx-1" href=""><i> <FaInstagram></FaInstagram> </i></a>
                                <a class="btn btn-square mx-1" href=""><i> <FaInstagram></FaInstagram> </i></a>
                                <a class="btn btn-square mx-1" href=""><i><FaInstagram></FaInstagram> </i></a>
                        </div>
                        <div class="bg-light text-center p-4">
                            <h5 class="fw-bold mb-0">Full Name</h5>
                            <small>Designation</small>
                        </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </div> 
{/* team Ends */}


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



      </Container>
     



    </div>
  );
}

export default Home;












