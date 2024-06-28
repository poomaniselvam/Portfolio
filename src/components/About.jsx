import html from '../assets/html.png';
import css from '../assets/css.png';
import Profile from '../assets/img1.jpeg';
import js from '../assets/js.png';
import Portfolio from '../assets/portfolio-project.png';
import Project3 from '../assets/project3.png';
import Project2 from '../assets/Project2.png';
import boots from '../assets/bootstrap.png';
import php from '../assets/php.png';
import mysql from '../assets/mysql.png';
import wp from '../assets/wordpress.png';
import rea from '../assets/react.png';
import '../App.css';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const About = () => {
    const handleDownload = () => {
        const fileUrl = './assets/html.png';
        const link = document.createElement('a');
        link.download = 'poomani-selvam-resume.pdf';
        link.href = fileUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    const MahaClinic = () => {
      window.location.href = 'https://github.com/poomaniselvam/demo-project';
  };
  const PortfolioReact = () => {
    window.location.href = 'https://github.com/poomaniselvam/Portfolio';

};

  return (
    <>

<nav className="navbar navbar-expand-lg">
  <a className="navbar-brand" href="#"></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a className="nav-link" href="#home">HOME</a>
      </li>
      <li className="nav-item">
      
        <a className="nav-link" href="#aboutme">ABOUT ME</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#experience">EXPERIENCE</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#portfolio">PORTFOLIO</a>
      </li>
      <li className="nav-item">
      <button type="button" className="btn btn-primary btn-lg" id="btn-pix">CONTACT</button>
      </li>
    </ul>
  </div>
</nav>
    
         <div className="background-layer">
        <div className="home-banner">
        <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p className='role'><span className='role-text'>I am a </span><br /> FULL STACK <br /> WEB DEVELOPER</p>

<button type="button" className="btn btn-primary btn-lg" id="btn-size" >Contact Us</button>
              </div>
            </div>
          </div>
        </div>
          </div>     


          <div className="background-layer" >
          <div className="home-banner">
          <div className="container" id="aboutme">
            <div className="row">
              <div className="col-md-4">
              <img src={Profile} alt="profile" style={{ width: '85%', height: '440px', objectFit: 'cover', borderRadius: '8px' }} />
              </div>
              <div className='col-md-6' id='abt-col'>
                <h1>About me</h1>
<p>

Hello! I am poomaniselvam, a passionate and creative  web developer based in chennai. im fresher for this job, I specialize in developing user-friendly websites .

I thrive on challenges and am driven by a commitment to excellence and a love for innovation. My journey in [your field/industry] began with a deep fascination for [related interest, e.g., technology, storytelling, visual arts], which has evolved into a fulfilling career where I get to turn ideas into reality.

Throughout my career, I have had the privilege to work with a diverse range of clients, from startups to established companies, helping them achieve their goals through bespoke solutions and strategic insights. My approach is collaborative and client-focused, ensuring that every project not only meets but exceeds expectations.

When I am not immersed in my work.</p>
               
               <div className="row">
                <div className="col-md-4">
                <button type="button" className="btn btn-primary btn-lg hireBtn">HIRE ME</button>
                </div>
                <div className="col-md-4">
                <button type="button" onClick={handleDownload} className="btn btn-outline-primary btn-lg hireBtn">RESUME</button>
                </div>
               </div>
               
             
              </div>
            </div>
          </div>
          </div>  
          </div>     
          
          <div className="background-layer" id='portfolio'>
          <div className="home-banner">
            <div className="container portfolio-div">
            <h1 className="text-model"> PORTFOLIO</h1>
            <div className="row">
             <div className="col-md-4">
              <h1 className='project-title'>PROJECT 1</h1>
              <h1>Sri Maha Clinic</h1>
                 <p> The Sri Maha Clinic website aims to provide a comprehensive online presence for the clinic, offering information about services, doctors, appointments, and patient resources. The site will be user-friendly, mobile-responsive, and easy to navigate.</p>
</div>
<div className="col-md-6">
  <div className="portfolio-image-box">
<img src={Project2} alt="moss" onClick={MahaClinic} style={{ width: '456px', height: '220px', objectFit: 'cover', borderRadius: '8px',border:'2px solid #fff', cursor:'pointer' }} />
</div>
  
</div>
</div>
</div>
<div className="container portfolio-div">

<div className="row">
  <div className="col-md-6">
  <div className="portfolio-image-boxes">
  <img src={Portfolio}  onClick={PortfolioReact}  alt="mass" style={{ width: '80%', height: '220px', objectFit: 'cover', borderRadius: '8px',border:'2px solid #fff' ,cursor:'pointer' }} />
  </div>
  </div>
             <div className="col-md-4">
              <h1>PROJECT 2</h1>
              <h1 className='project-title'>PORTFOLIA IN REACT </h1>
                 <p> The Sri Maha Clinic website aims to provide a comprehensive online presence for the clinic, offering information about services, doctors, appointments, and patient resources. The site will be user-friendly, mobile-responsive, and easy to navigate.</p>
</div>




            </div>

          </div>
          <div className="container portfolio-div">
          <div className="row">
            <div className="col-md-4">
<h1 className='project-title'>PROJECT 3</h1>
<h1> Eccommerce webstite using wordpress</h1>
<p>the website used for a small scale insdustries.and improve bussiness for futhers beacuse internet very specific in a world wide incase of detail agast tha web world. </p>
            </div>
            
          
  <div className="col-md-6">
  <div className="portfolio-image-box">

  <img src={Project3} alt="mess" style={{ width: '80%', height: '220px', objectFit: 'cover', borderRadius: '8px',border:'2px solid #fff'  }} />
  </div>
  </div>

</div>
</div>





          


</div> 

          </div>

         <div className="background-layer">
         <div className="container" id='experience'>
          <h1 className='text-center'>EXPERIENCE</h1>
          <div className="container" id="icon-row">
          <div className="row">
          <div className="col-md-3">
          <img src={html} alt="profile" style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '8px' }} />

            <h1>HTML</h1>
          </div>

          <div className="col-md-3">
          <img src={css} alt="profile" style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '8px' }} />
            <h1>mysql</h1>
          </div>
          <div className="col-md-3">
          <img src={js} alt="profile" style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '8px' }} />
            <h1>php</h1>
          </div>
          <div className="col-md-3">
          <img src={boots} alt="profile" style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '8px' }} />
            <h1>css</h1>
          </div>
          </div>



          <div className="row " id="text-row">
          <div className="col-md-3">
          <img src={php} alt="profile" style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '8px' }} />
            <h1>HTML</h1>
          </div>

          <div className="col-md-3">
          <img src={mysql} alt="profile" style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '8px' }} />
            <h1>mysql</h1>
          </div>
          <div className="col-md-3">
          <img src={wp} alt="profile" style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '8px' }} />
            <h1>php</h1>
          </div>
          <div className="col-md-3">
          <img src={rea} alt="profile" style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '8px' }} />
            <h1>css</h1>
          </div>
          </div>

</div>

         </div>
          </div> 
          <div className="background-contact">
          <div className="Background-layer">
            <div className="container">
              <h1 className='con-text'>CONTACT</h1>
              <div className='row' id='contact-row'>
              <div className="col-md-6">
              <h1>DROP ME A MESSAGE</h1>
              <h2>Lorem ipsum, dolor sit amet consectetur adipisicdfd</h2>

              <h2>+91 8680800512</h2>
              <h2>poomaniselvam@gmail.com</h2>
<h2>No.72 perumal koil streer arani 601101</h2>

</div>
<div className="col-md-4">
<div className="container" id="col-bg">
  <div className="poo">
 <input type='text'className="form-control InputStyle" placeholder='Name'></input>
 </div>
 <div className="poo">
 <input type="text" className="form-control InputStyle" placeholder="Email" required></input>
 </div>
 <div className="poo">
 <textarea className="form-control InputStyle" id="message" rows="0" placeholder="Message" required></textarea>
 </div>
 <div className="poo">
 <button type="button" className="btn btn-primary btn-lg sentBtn" id="btn-pix">SENT</button>
 </div>

</div>

</div>
    </div>

          </div>
          </div>
          </div>
          
    </>
  );
}
export default About;