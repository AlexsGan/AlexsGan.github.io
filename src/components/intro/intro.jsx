import "./intro.css"
import Me from "../../img/me_transparent_1.png"

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Alex Gan</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Software Engineer</div>
                            <div className="i-title-item">Gamer</div>
                            <div className="i-title-item">Pianist </div>
                            <div className="i-title-item">Swimmer</div>
                        </div>
                    </div>
                    {/* <svg></svg> */}
                    <p className="i-desc">
                    I am a passionate student enrolled in the Computer Science Specialist program at the University of Toronto. I love working in fast-paced environments and I constantly seek opportunities that help me become a better software engineer.
                    </p>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                {/* <div className="i-right-wrapper"> */}
                    <img src={Me} alt="" className="i-img" />
                {/* </div> */}
            </div>
        </div>
    )
}

export default Intro