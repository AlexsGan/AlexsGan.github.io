import "./contact.css"
import LinkedinIcon from "../../img/linkedin_icon.png"
import React, { Component } from "react"
import { SocialIcon } from 'react-social-icons';

class Contact extends Component {
    render() {
        return (
            <div className="c">
                <h1 className="c-title">Contact Me!</h1>
                <div className="c-icons-container">
                    <div className="c-img-wrapper">
                        <SocialIcon url="https://www.linkedin.com/in/alex-rui-gan/"
                            bgColor="black"
                            fgColor="white"
                        />
                    </div>
                    <div className="c-img-wrapper">
                        <SocialIcon
                            url="mailto:alex.g32523@gmail.com"
                            network="mailto"
                            bgColor="black"
                            fgColor="white"
                        />
                    </div>
                    <div className="c-img-wrapper">
                        <SocialIcon
                            url="https://github.com/AlexsGan"
                            network="github"
                            bgColor="black"
                            fgColor="white"
                        />
                    </div>
                </div>
                <div className="c-footer"><p>Copyright © 2022 Alex Gan.</p></div>
            </div>
        )
    }
}

export default Contact