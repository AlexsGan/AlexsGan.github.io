import "./about.css"
import Me from "../../img/me.jpg"
import ResumePdf from "../../pdfs/AlexGanResume2022.pdf"
import React, { Component } from "react"
import Button from '@mui/material/Button';

class About extends Component {
    render() {
        return (
            <div className="a">
                {/* <div className="a-container"> */}
                <div className="a-left">
                    <div className="a-card bg"></div>
                    <div className="a-card">
                        <img src={Me} alt="" className="a-img" />
                    </div>
                </div>
                <div className="a-right">
                    <h1 className="a-title">About Me</h1>
                    <p className="a-desc">
                        I am a passionate student enrolled in the Computer Science Specialist program at the University of Toronto. I love working in fast-paced environments and I constantly seek opportunities that help me become a better software engineer.
                    </p>
                    <div className="a-resume">
                        <Button
                            variant="contained"
                            // href="https://drive.google.com/file/d/10lzAmH2ayPKe9qvliDhPGBFcmvGHRRlK/view?usp=sharing"
                            href={ResumePdf}
                            target="_blank"
                        >
                            <p>Resume</p>
                        </Button>
                    </div>
                </div>
                {/* </div> */}
            </div>
        )
    }
}

export default About