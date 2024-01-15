import React from "react";
import './proj4.css';
import VideoPlayer3 from "../VideoPlayer3/VideoPlayer3";
const Proj4 = () => {
    return(
        
        <section id="proj4" className="proj4">
            <span>Name: <span id="texx2" className="texx2">Mortgage Loan Analyzer</span> </span>
            <div className="container3" id="container3"> 
            <VideoPlayer3 width ={650} height = {350}/>
            </div>
            <br></br>
            <div>
            
            <br/>
            <span>Skills: <span id="texx" className="texx">Java, JavaFx</span> </span>
           <p>
           • Programmed a user interactive mortgage loan advisor program
           <br/>
           • Developed this program so that it gets the necessary inputs from the user and calculates their payments for the future using the  <span id="texx" className="texx">numpy</span> financial library
           <br/>
           • Displays tables and graphs using <span id="texx" className="texx"> matplotlib.pyplot  </span>library to help users make financial decisions for the future
           <br/>
           • Helps the user make decisions about getting a mortgage and shows the interest growth with graphs.
            <br/>
           • Also it shows how increasing or decreasing payment can change future payments.
            <br/>
           • It gives the user the option to input a certain time period and gives an idea on how much they have to pay in order to finish paying the mortgage in that time frame.
            <br/>
           </p>
           </div>

        </section>
    )
}
export default Proj4;