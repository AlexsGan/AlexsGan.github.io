import "./intro.css"
import Me from "../../img/me_transparent_1.png"
import React, { Component } from "react"
// import Particles from "react-tsparticles";
// import ParticlesBg from 'particles-bg'

class Intro extends Component {

    iOS() {
        return [
            'iPad Simulator',
            'iPhone Simulator',
            'iPod Simulator',
            'iPad',
            'iPhone',
            'iPod'
        ].includes(navigator)
            || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
    }

    i_css() {
        if (this.iOS()) {
            return (
                "i-iOS"
            )
        } else {
            return (
                "i"
            )
        }
    }

    render() {
        return (
            <div className={this.i_css()}>
                <div className="i-left">
                    <div className="i-left-wrapper">
                        <h2 className="i-intro">Hello, My name is</h2>
                        <h1 className="i-name">Alex Gan</h1>
                        {/* <h1 className="i-name">{this.i_css()}</h1> */}
                        <div className="i-title">
                            <div className="i-title-wrapper">
                                <div className="i-title-item">Software Engineer</div>
                                <div className="i-title-item">Gamer</div>
                                <div className="i-title-item">Pianist </div>
                                <div className="i-title-item">Swimmer</div>
                            </div>
                        </div>
                        <p className="i-desc">
                        </p>
                    </div>
                </div>
                {/* <div className="i-right"> */}
                {/* <div className="i-bg"></div>
                    <img src={Me} alt="" className="i-img" /> */}
                {/* </div> */}
            </div>
        )
    }
}

export default Intro