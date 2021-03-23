import React, {Component} from "react";
import './Education.css';

import UWLogo from "../Pictures/UWLogo.png";

class Education extends Component<{}, {}> {
    render() {
        return (
            <div>
                <div className="Indent">
                    <div className="Education-Header">
                        <div className="Beside">
                            <img className="UW-Logo" src={UWLogo} alt="UW"/>
                            <div className="Stacked">
                                <p id="title-text">
                                    University of Washington
                                </p>
                                <p id="subtitle-text">
                                    Bachelor of Science - Computer Science
                                </p>
                            </div>
                        </div>
                        <div className="Stacked-Left">
                            <p id = "left">
                                2017 - 2021
                            </p>
                            <p id = "left">
                                Seattle, WA
                            </p>
                        </div>
                    </div>
                    <p>
                        Computer Science:
                    </p>
                    <ul>
                        <li>Computer Programming I, II</li>
                        <li>Foundations of Computing I - Logic</li>
                        <li>Foundations of Computer II - Probability and Statistics</li>
                        <li>Hardware/Software Interface</li>
                        <li>Software Tools</li>
                        <li>Data Structures and Parallelism</li>
                        <li>Software Design and Implementation</li>
                        <li>Systems Programming</li>
                        <li>Data Visualization</li>
                        <li>Computer Graphics</li>
                        <li>Database Management</li>
                        <li>Algorithms</li>
                        <li>Machine Learning</li>
                    </ul>
                    <p>
                        Mathematics:
                    </p>
                    <ul>
                        <li>Calculus I, II, III</li>
                        <li>Differential Equations</li>
                        <li>Matrix Algebra</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Education