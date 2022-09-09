import job1 from "../assets/img/job1.png";
import job2 from "../assets/img/job2.png";
import job3 from "../assets/img/tec.png";
import job4 from "../assets/img/GM.jpg";
import job5 from "../assets/img/blank.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Experience = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="Experience" id="Experience">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="Experience-bx wow zoomIn">
                        <h2>Experience</h2>
                        <p>Throughout my academic career, I have been fortunate enough to apply and learn new skills in a variety of different job environments. During the summer of 2021, I had my first introduction to 
                          database maintanance and organization as well as being selected to participate in a virtual fellowship with Stryker, aiding with digital and analog circuit design. The fall semester 
                          thereafter, I worked with a startup in embedded and power system solutions. Currently, I am working at General Motors under XR and AI Development.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme experience-slider">
                            <div className="item">
                                <img src={job1} alt="Image" />
                                <h5>PHY Teaching Assistant
                                </h5>
                                <h5a>Aug 2020 - May 2022</h5a>
                            </div>
                            <div className="item">
                                <img src={job5} alt="Image" />
                                <h5>Summer Database Internship</h5>
                                <h5a>May 2021 - August 2021</h5a>
                            </div>
                            <div className="item">
                                <img src={job2} alt="Image" />
                                <h5>MSU: EGR Fellowship</h5>
                                <h5a>June 2021 - August 2021</h5a>
                            </div>
                            
                            <div className="item">
                                <img src={job3} alt="Image" />
                                <h5> Embedded Systems Design</h5>
                                <h5a>September 2021 - December 2021</h5a>
                            </div>
                            <div className="item">
                                <img src={job4} alt="Image" />
                                <h5>Software Development </h5>
                                <h5a>July 2022 - Present</h5a>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}