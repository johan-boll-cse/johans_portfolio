import React, {Component} from "react";
import './Skills.css'

class Skills extends Component<{}, {}> {
    render() {
        return (
            <div className="Section-Body">
                <div className="Outer-Skills-Container">
                    <div className="Inner-Skills-Container">
                        <p id="skills-title">
                            Languages
                        </p>
                    </div>
                    <div className="Inner-Skills-Container">
                        <div className="Skill-Boxes">
                            <p id="skill-box">Java</p>
                            <p id="skill-box">Javascript</p>
                            <p id="skill-box">Python</p>
                            <p id="skill-box">HTML</p>
                            <p id="skill-box">Typescript</p>
                            <p id="skill-box">C++</p>
                            <p id="skill-box">C</p>
                        </div>
                    </div>
                    <div className="Inner-Skills-Container-Center">
                        <p id="skills-title">
                            Tools/Frameworks
                        </p>
                    </div>
                    <div className="Inner-Skills-Container">
                        <div className="Skill-Boxes">
                            <p id="skill-box">React</p>
                            <p id="skill-box">CSS</p>
                            <p id="skill-box">SQL</p>
                            <p id="skill-box">Git</p>
                            <p id="skill-box">OpenGL</p>
                            <p id="skill-box">D3</p>
                            <p id="skill-box">PyTorch</p>
                            <p id="skill-box">Numpy</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;