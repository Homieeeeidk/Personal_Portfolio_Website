import React from "react";
import Pdf from "../src/components/Resume.pdf";

onResumeClick = () => {
    window.open(Pdf);
}
render = () => {
    return (
        <a onClick={this.onResumeClick}> Resume</a>
    )
}
