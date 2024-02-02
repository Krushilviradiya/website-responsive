import Header from "./header/Header";
import Footer from "./footer/Footer";
import {FaCertificate, FaUserCog,FaTools,FaPhoneAlt,FaArrowRight } from "react-icons/fa";


function Contact() {
    return(
        <>
            <Header/>

{/* page header start  */}

<div class="container-fluid page-header mb-5 p-0">
{/* <img src={require(`./img/slider2.jpeg`)}></img> */}
        <div class="container-fluid page-header-inner py-5">
            <div class="container text-center">
                <h1 class="display-3 text-black mb-3 animated slideInDown">Booking</h1>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb justify-content-center text-uppercase">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">Pages</a></li>
                        <li class="breadcrumb-item text-black active" aria-current="page">Booking</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
{/* page header Ends  */}


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

{/* call to action start */}

<div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container">
            <div class="row g-4">
                <div class="col-lg-8 col-md-6">
                    <h6 class="text-primary text-uppercase">// Call To Action //</h6>
                    <h1 class="mb-4">Have Any Pre Booking Question?</h1>
                    <p class="mb-0">Lorem diam ea sit dolor labore. Clita et dolor erat sed est lorem sed et sit. Diam sed duo magna erat et stet clita ea magna ea sed, sit labore magna lorem tempor justo rebum dolores. Eos dolor sea erat amet et, lorem labore lorem at dolores. Stet ea ut justo et, clita et et ipsum diam.</p>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="bg-primary d-flex flex-column justify-content-center text-center h-100 p-4">
                        <h3 class="text-white mb-4"><i class="me-3"><FaPhoneAlt ></FaPhoneAlt ></i>+012 345 6789</h3>
                        <a href="" class="btn btn-secondary py-3 px-5">Contact Us<i class="ms-3"><FaArrowRight></FaArrowRight></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
{/* call to action Ends */}

            <Footer/>
   
            </>
    );
}
export default Contact
            