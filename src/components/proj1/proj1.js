import React from "react";
import './proj1.css';
import bg from '../../assets/image.png'
import {Link} from 'react-scroll'
import btnImg from '../../assets/hireme.png'
import '../VideoPlayer1/VideoPlayer.css';
import VideoPlayer1 from "../VideoPlayer1/VideoPlayer";
import img1 from "../../assets/UML_1.png"
import img2 from "../../assets/UML_2.png"
import img3 from "../../assets/UML_3.png"
import img4 from "../../assets/UML_4.png"
const Proj1 = () => {


    return (
        <section id="proj1" className="proj1">
            <span>Name: <span id="texx" className="texx">DonkeyType</span> </span>
            <div className="container" id="container"> 
            <VideoPlayer1 width ={650} height = {350}/>
            </div>
            <br></br>
            <div>
            
            <br/>
            <span>Skills: <span id="texx" className="texx">Java, JavaFx, Github</span> </span>
           <p>
           • Developed a typing speed and accuracy tester application with focus on accessibility features in a team of 4 people
           <br/>
           • Applied several design patterns such as Decorator, Iterator, and Observer to help shape the structure of the application
           <br/>
           • Contributed to the project by coding all the UI panels and GUI elements of the program using javafx
           <br/>
           • Leveraged Github to give and receive code reviews from teammates as well as merge my contributions to the final
            product
            <br/>
           • Designed UML diagrams to help elaborate on the relationships between different interfaces and models of the
            project
           </p>
           
           </div>
           <div className="proj1imgs" id="proj1imgs">
              <img className="imgg" id ="imgg" src={img1}/>
              <img className="imgg" id ="imgg" src={img2}/>
              <br/>
              <img className="imgg2" id ="imgg2" src={img3}/>
              <img className="imgg2" id ="imgg2" src={img4}/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
                

           </div>

        </section>
    )
}
export default Proj1;