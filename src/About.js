import Footer from "./footer/Footer";
import Header from "./header/Header";
import './App.css';
import {FaCertificate,FaUserCog,FaTools,FaArrowRight,FaCheck,FaUsers,FaCar,FaInstagram,FaFacebookSquare} from "react-icons/fa";


function About() {
    return(
        <>
            <Header/>

{/* page header start  */}

<div class="container-fluid page-header mb-5 p-0">
{/* <img src={require(`./img/slider1.jpeg`)}></img> */}
        <div class="container-fluid page-header-inner py-5">
            <div class="container text-center">
                <h1 class="display-3 text-black mb-3 animated slideInDown">About Us</h1>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb justify-content-center text-uppercase">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">Pages</a></li>
                        <li class="breadcrumb-item text-black active" aria-current="page">About</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
    
{/* page header Ends  */}

{/* services start */}

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

{/* services Ends */}

  
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

  




        
            <Footer/>
        </>
    );
}
export default About;