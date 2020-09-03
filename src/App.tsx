import React, {Component} from 'react';
import './App.css';

import HeaderBar from "./HeaderBar";

import photo from './Pictures/JohanPicture.jpeg';

interface AppState {
  text: string;
  headerRefs: any[];
}

class App extends Component<{}, AppState> {

    constructor(props: any) {
        super(props);
        let tmpRefs : any[] = [];
        for (let i = 0; i < 5; i++) {
            let ref = React.createRef();
            tmpRefs.push(ref)
        }
        this.state = {
            text: "text",
            headerRefs : tmpRefs,
        }
        document.title = "Johan's Portfolio";
    }

    buttonPressed(index : number): void {
        window.scrollTo(0, this.state.headerRefs[index].current.offsetTop - 30);
    }

    render() {
        return (
            <div className="Overall-App">
                <HeaderBar
                    buttonPressed={(button : any) => this.buttonPressed(button)}
                >
                </HeaderBar>
                <div className="App-Container">
                    <div className="Name">
                        <p id="name-text">
                            Johan Boll's Computer Science Portfolio Website
                        </p>
                    </div>
                    <div className="Sections">
                        <div className="Section-Header">
                            <p id="section-title" ref = {this.state.headerRefs[0]}>
                                Home
                            </p>
                            <div className="Section-Body">
                                <p>
                                    Hello, and welcome to my portfolio website. My name is Johan Boll and I am a Senior at the University of Washington pursuing a degree in Computer Science.
                                    This summer, I am seeking a summer internship to expand my Computer Science knowledge and build professional work skills.
                                </p>
                                <div className="Logo-Container">
                                    <div className="Logo-Item">
                                        <form action="https://www.linkedin.com/in/johan-boll-10101/" target="_new">
                                            <button id="linkedIn" type="submit"/>
                                        </form>
                                        <p>
                                            LinkedIn
                                        </p>
                                    </div>
                                    <div className="Logo-Item">
                                        <form action={require("./Pictures/Resume.pdf")} target="_new">
                                            <button id="resume" type="submit"/>
                                        </form>
                                        <p>
                                            Resume
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Section-Header">
                            <p id="section-title" ref={this.state.headerRefs[1]}>
                                Portfolio
                            </p>
                            <div className="Section-Body">
                                <p>Below are links to some projects I have worked on. These are all hosted online through a free service called Netlify.</p>
                                <div className="Grey-Background">
                                    <p id="body-title">AFL Fantasy App</p>
                                    <div className="Body-Item">
                                        <form action="https://afl-fantasy-app.netlify.app/" target="_new">
                                            <button id="afl-app" type="submit"/>
                                        </form>
                                        <p id="body-text"> AFL Fantasy is a web app that allows users to create a simple account with their name and play fantasy Australian Football. Much like American Fantasy Football, users pick players for their team each week and are awarded points based on their players' performance.</p>
                                    </div>
                                </div>
                                <div className="Grey-Background">
                                    <p id="body-title">Husky Maps</p>
                                    <div className="Body-Item">
                                        <p id="body-text"> Husky Maps is a web app that allows users to map between locations on the UW campus.</p>
                                    </div>
                                </div>
                                <div className="Grey-Background">
                                    <p id="body-title">Seam Carving</p>
                                    <div className="Body-Item">
                                        <p id="body-text"> Seam Carving is a web app that allows users to content-aware resize images.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Section-Header">
                            <p id="section-title" ref={this.state.headerRefs[2]}>
                                Skills
                            </p>
                            <div className="Section-Body">
                                <p>
                                    Computer Languages:
                                </p>
                                <ul>
                                    <li>Java : 2 Years</li>
                                    <li>C : 1 Year</li>
                                    <li>Javascript : 6 Months</li>
                                    <li>C++ : 6 Months</li>
                                    <li>Python : 3 Months</li>
                                </ul>
                                <p>
                                    Completed Course Work:3
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
                        <div className="Section-Header">
                            <p id="section-title" ref={this.state.headerRefs[3]}>
                                About
                            </p>
                            <div className="Section-Body">
                                <p>I grew up in Moscow, a small town in Northern Idaho. My freshman year I was directly admitted into the UW Material Science program. After 2 years of pursuing a Material Science degree I applied and was admitted into the Paul Allen School of Computer Science and Engineering at UW. This summer I am working at the Priest Lake Golf Course.</p>
                                <div className="Photo-Container">
                                    <img id="photo" src={photo} alt= "Johan Boll">
                                    </img>
                                </div>
                            </div>
                        </div>
                        <div className="Section-Header">
                            <p id="section-title" ref={this.state.headerRefs[4]}>
                                Contact
                            </p>
                            <div className="Section-Body">
                                <div className="Grey-Background">
                                    <p>Email: bollj@uw.edu</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
