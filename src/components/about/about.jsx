import "./about.css"
import Me from "../../img/me.jpg"
import React, { Component } from "react"

class About extends Component {
    render() {
        return (
            <div className="a">
                <div className="a-left">
                    <div className="a-card bg"></div>
                    <div className="a-card">
                        <img src={Me} alt="" className="a-img" />
                    </div>
                </div>
                <div className="a-right">
                    <h1 className="a-title">About Me</h1>
                    <p className="a-sub">
                    {/* It is a long established fact that a reader will be distracted by the readable content when looking at its layout. */}
                    </p>
                    <p className="i-desc">
                    I am a passionate student enrolled in the Computer Science Specialist program at the University of Toronto. I love working in fast-paced environments and I constantly seek opportunities that help me become a better software engineer.
                    </p>
    
                </div>
            </div>
        )
    }
}



// const About = () => {
//     return (
//         <div className="a">
//             <div className="a-left">
//                 <div className="a-card bg"></div>
//                 <div className="a-card">
//                     <img src={Me} alt="" className="a-img" />
//                 </div>
//             </div>
//             <div className="a-right">
//                 <h1 className="a-title">About Me</h1>
//                 <p className="a-sub">
//                 {/* It is a long established fact that a reader will be distracted by the readable content when looking at its layout. */}
//                 </p>
//                 <p className="i-desc">
//                 I am a passionate student enrolled in the Computer Science Specialist program at the University of Toronto. I love working in fast-paced environments and I constantly seek opportunities that help me become a better software engineer.
//                 </p>

//             </div>
//         </div>
//     )
// }

export default About