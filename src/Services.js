import Header from "./header/Header";
import Footer from "./footer/Footer";
import {FaOilCan,FaCarAlt,FaCar,FaCog}  from "react-icons/fa";


function Services() {
    return(
        <>
            <Header/>

{/* page header start  */}

<div class="container-fluid page-header mb-5 p-0">
{/* <img src={require(`./img/slider2.jpeg`)}></img> */}
        <div class="container-fluid page-header-inner py-5">
            <div class="container text-center">
                <h1 class="display-3 text-black mb-3 animated slideInDown">Services</h1>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb justify-content-center text-uppercase">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">Pages</a></li>
                        <li class="breadcrumb-item text-black active" aria-current="page">Services</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
{/* page header Ends  */}
            
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



            <Footer/>

        </>
    );
}
export default Services;