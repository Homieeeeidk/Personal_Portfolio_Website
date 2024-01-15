import React from "react";
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';
const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I am a skilled and passionate asdfasf asdfasfdasd asdfasdfa asdfasdhfasfdhaishfipsoifauoisafhaispiousafoaisfhfsapfsdu</span>
            <div className="skillsBars">
                <div className="skillBar">
                    <img src={UIDesign} alt= "UIDesign"className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>UI/ux design</h2>
                        <p>this test introContenasdfaskdjfhaslkhflkjasfkhjsdfakjasfkjasklhfhfast</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt= "WebDesign"className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Webdiesg</h2>
                        <p>asdfasdfsaf</p>
                    </div>
                </div> 
                <div className="skillBar">
                    <img src={AppDesign} alt= "AppDesign"className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>apdesadf</h2>
                        <p>sadfsaf</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Skills