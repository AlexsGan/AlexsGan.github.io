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
            backgroundColor: "#ff7f50"
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
          backgroundColor: "#ff7f50"
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