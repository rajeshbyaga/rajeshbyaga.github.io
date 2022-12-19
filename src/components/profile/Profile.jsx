import "./about.css";
import  Image from './Image.jpg'
const About = () => {
  return (
    <div className="a" id="about">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Image}
            alt=""
            className="a-img"
          />
        </div>
      </div>
     
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        HEY,I'M Rajesh Byagalwar
        </p>
        <p className="a-desc">
          A Full stack web Developer building the most interactive Websites and Web Application that leads to the success of the overall product
        </p>
        
      
    </div>
    </div>
  );
};

export default About;