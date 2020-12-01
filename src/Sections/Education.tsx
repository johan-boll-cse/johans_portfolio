import React, {Component} from "react";

class Education extends Component<{}, {}> {
    render() {
        return (
            <div>
                <div className="Indent">
                    <p id="title-text">
                        University of Washington - Bachelor of Science - Computer Science (2017-2021)
                    </p>
                        Completed Course Work:
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

export default Education