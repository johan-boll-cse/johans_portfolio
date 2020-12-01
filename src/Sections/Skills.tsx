import React, {Component} from "react";

class Skills extends Component<{}, {}> {
    render() {
        return (
            <div className="Section-Body">
                <div className="Software-Tools-Container">
                    <div className="Inner-Skills-Container">
                        <p id="title-text">
                            Languages:
                        </p>
                        <table id="table">
                            <tr>
                                <th>Language</th>
                                <th>Experience</th>
                            </tr>
                            <tr>
                                <td>Java</td>
                                <td>2.5 Years</td>
                            </tr>
                            <tr>
                                <td>C</td>
                                <td>1.5 Years</td>
                            </tr>
                            <tr>
                                <td>C++</td>
                                <td>1.5 Years</td>
                            </tr>
                            <tr>
                                <td>Typescript / Javascript</td>
                                <td>1.5 Years</td>
                            </tr>
                            <tr>
                                <td>Python</td>
                                <td>3 Months</td>
                            </tr>
                        </table>
                    </div>
                    <div className="Inner-Skills-Container">
                        <p id="title-text">
                            Tools/Frameworks:
                        </p>
                        <table id="table">
                            <tr>
                                <th>Tool</th>
                                <th>Experience</th>
                            </tr>
                            <tr>
                                <td>React</td>
                                <td>1.5 Years</td>
                            </tr>
                            <tr>
                                <td>Git</td>
                                <td>2 Years</td>
                            </tr>
                            <tr>
                                <td>OpenGL</td>
                                <td>3 Months</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="Coursework">
                    <p id="title-text">
                        Completed Course Work:
                    </p>
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

export default Skills;