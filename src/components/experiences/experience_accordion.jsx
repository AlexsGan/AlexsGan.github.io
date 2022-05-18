import * as React from 'react';
import { Component } from "react"

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import "./experiences.css"

class ExperienceAccordion extends Component {

  render() {
    const dict = this.props.dict;

    return (
      <div>
      <Accordion className="experience-accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            // backgroundColor: "#ff7f50"
            // background: "linear-gradient(to right, rgba(255,100,100), rgba(255,200,80))"
            background: "linear-gradient(to right, rgb(100,99,237), rgb(100,189,237))"
          }}
        >
          <div className="e-img-wrapper">
            <img src={dict.logo} alt="" className="e-img" />
          </div>
          <div>
            <h2>{dict.company}</h2>
            <h>{dict.position}</h>
          </div>
        </AccordionSummary>
        <AccordionDetails
        sx={{
          background: "linear-gradient(to right, rgb(100,99,237), rgb(100,189,237))"
        }}
        >
          <p>
            {dict.details}
          </p>
        </AccordionDetails>
      </Accordion>
      </div>
    );
  }
}

export default ExperienceAccordion