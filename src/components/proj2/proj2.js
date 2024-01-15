import React from "react";
import './proj2.css';
import VideoPlayer2 from "../VideoPlayer2/VideoPlayer2";
const Proj2 = () => {
    return(
        
        <section id="proj2" className="proj2">
            <span>Name: <span id="texx2" className="texx2">Tetris</span> </span>
            <div className="container2" id="container2"> 
            <VideoPlayer2 width ={650} height = {350}/>
            </div>
            <br></br>
            <div>
            
            <br/>
            <span>Skills: <span id="texx" className="texx">Java, JavaFx</span> </span>
           <p>
           • Programmed the game of Tetris using Java, Javafx and Object Oriented programming
           <br/>
           • Made use of abstract and concrete interfaces and classes to design the connection between model and view classes
           <br/>
           • Refactored the code in accordance with SOLID design principles for efficient and maintainable code
           <br/>
           • Used Javafx to develop the GUI and add saving and loading features to the game
            <br/>
           
           </p>
           </div>

        </section>
        

    )


}
export default Proj2;