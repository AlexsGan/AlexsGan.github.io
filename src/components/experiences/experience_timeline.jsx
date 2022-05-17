import "./experiences.css"
import { Component } from "react"

import * as React from 'react';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceAccordion from "./experience_accordion";

class ExperienceTimeline extends Component {

    render() {
        const dict = this.props.dict;

        return (
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                >
                    {dict.date}
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <div className="timeline-content">
                    <ExperienceAccordion dict={dict} />
                </div>
            </TimelineItem>
        );
    }
}

export default ExperienceTimeline