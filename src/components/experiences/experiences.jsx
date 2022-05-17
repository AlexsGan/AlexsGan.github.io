import "./experiences.css"
import amazon_logo from "../../img/amazon_logo.jpg"
import tccsa_logo from "../../img/tccsa_logo.jpg"
import { Component } from "react"

import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import ExperienceTimeline from "./experience_timeline";

class Experiences extends Component {

    render() {
        const amazon_dict = {
            company: "Amazon",
            position: "Software Development Engineer Intern",
            date: "May 2021 - Jul 2021",
            logo: amazon_logo,
            details: "Developed a tool using Typescript and React that reduces the time teams need to build software quickly and reliably, resulting in a better customer experience.",
        }

        const tccsa_dict = {
            company: "U of T TCCSA",
            position: "Web Devleoper",
            date: "May 2020 - Apr 2021",
            logo: tccsa_logo,
            details: "Built and maintained the club website to help promote Chinese culture as well as diversity to U of T students.",
        }

        return (
            <div className="e">
                <div className="e-title-wrapper">
                    <h1 className="title-text">Experiences</h1>
                </div>

                <div className="e-timeline-wrapper">
                <Timeline>
                    <ExperienceTimeline dict={amazon_dict}/>
                    <ExperienceTimeline dict={tccsa_dict}/>
                </Timeline>
                </div>
            </div>
        );
    }
}

export default Experiences