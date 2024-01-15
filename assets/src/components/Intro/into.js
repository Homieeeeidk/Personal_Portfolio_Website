import React from "react";
import './intro.css';
// import bg from '../../assets/image.png'
import {Link} from 'react-scroll'
import btnImg from '../../assets/hireme.png'
const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm  <span className="introName">Homayoun Elyasi</span> <br/> Second Year Computer Science and Economics Student at U of T</span>
                <span className="introText">Welcome to my Portfolio website . . . <span className="introName"></span> <br/> </span>
                <a className="resume" href={require('../Resume.pdf')} target="_blank">Click to view <span className="res">my resume</span>.</a>               
                <p className="introPara"> </p>
                {/* <Link> <button className="btn"> <img src={btnImg} alt="Hire " className="btnImg"/>Hire me</button></Link> */}
            </div>
            {/* <img src={bg} alt="Profile" className="bg"/> */}

        </section>
    )
}
export default Intro;
