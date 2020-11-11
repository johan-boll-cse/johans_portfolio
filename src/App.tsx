import React, {Component} from 'react';
import './App.css';

import HeaderBar from "./HeaderBar";

import personalPhoto from './Pictures/JohanPicture.jpeg';
import huskyMapsPhoto from './Pictures/CampusMaps.png';
import seamCarvingPhoto from './Pictures/SeamCarving.png';
import searchEnginePhoto from './Pictures/SearchEngine.png';
import unbored from './Pictures/unbored.png';

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
                    buttonPressed={(index : number) => this.buttonPressed(index)}
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
                                    Hello, and welcome to my portfolio website. My name is Johan Boll, and I am a Senior at the University of Washington pursuing a degree in Computer Science. I am seeking a summer 2021 internship or other software related opportunities.
                                </p>
                                <div className="Logo-Container">
                                    <div className="Logo-Item">
                                        <form action={require("./Pictures/Resume.pdf")} target="_new">
                                            <button id="resume" type="submit"/>
                                        </form>
                                    </div>
                                    <div className="Logo-Item">
                                        <form action="https://www.linkedin.com/in/johan-boll-10101/" target="_new">
                                            <button id="linkedIn" type="submit"/>
                                        </form>
                                    </div>
                                    <div className="Logo-Item">
                                        <form action="https://github.com/johan-boll-cse/" target="_new">
                                            <button id="github" type="submit"/>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Section-Header">
                            <p id="section-title" ref={this.state.headerRefs[1]}>
                                Projects
                            </p>
                            <div className="Section-Body">
                                <p>Below are descriptions my projects. Linked projects are hosted online through a free service called Netlify.</p>
                                <div className="Grey-Background">
                                    <p id="body-title">un.bored</p>
                                    <div className="Body-Item">
                                        <img id="app-photo" src={unbored} alt= "Johan Boll">
                                        </img>
                                        <p id="body-text"> un.bored is a web app and group project coded in React using Javascript that allows users to search for activities to do. This project was coded in under 24 hours by myself, Sam Wheelock and Chris Warmuth as a submission in Dubhacks 2020. It pulls the site data from a Firestore database and allows users to upload their own activities to the database.</p>
                                    </div>
                                </div>
                                <div className="Grey-Background">
                                    <p id="body-title">AFL Fantasy App</p>
                                    <div className="Body-Item">
                                        <form action="https://afl-fantasy-app.netlify.app/" target="_new">
                                            <button id="app-photo-linked" type="submit"/>
                                        </form>
                                        <p id="body-text"> AFL Fantasy is a web app and personal project coded in React using Typescript that allows users to create a simple account with their name and play fantasy Australian Football. Much like American Fantasy Football, users pick players for their team each week and are awarded points based on their players' performance. Click the photo on the left to view.</p>
                                    </div>
                                </div>
                                <div className="Grey-Background">
                                    <p id="body-title">Husky Maps</p>
                                    <div className="Body-Item">
                                        <img id="app-photo" src={huskyMapsPhoto} alt= "Johan Boll">
                                        </img>
                                        <p id="body-text"> Husky Maps is a school project coded in React using Typescript that allows users to map between locations on the UW campus. This was a full-stack project, and I created back-end functionality in Java by implementing my own Graph ADT and Dijkstra’s graph path-finding algorithm. I then built a GUI in React using Typescript. This app transfers data between Java and React through a server created using Spark.</p>
                                    </div>
                                </div>
                                <div className="Grey-Background">
                                    <p id="body-title">Seam Carving</p>
                                    <div className="Body-Item">
                                        <img id="app-photo" src={seamCarvingPhoto} alt= "Johan Boll">
                                        </img>
                                        <p id="body-text"> Seam Carving is a school project coded in Java that allows users to use content-aware resizing on images. It first creates a weighted, directed graph with vertices of pixels and edge weights of energy (importance) from a given picture. Then the content-aware resizing algorithm is run on the graph using an A* shortest path algorithm to find and then remove the seam of least importance. </p>
                                    </div>
                                </div>
                                <div className="Grey-Background">
                                    <p id="body-title">Search Engine</p>
                                    <div className="Body-Item">
                                        <img id="app-photo" src={searchEnginePhoto} alt= "Johan Boll">
                                        </img>
                                        <p id="body-text"> Search Engine is a school project coded in C++. This project has the same functionality as a web search engine with a limited data set. It is built from scratch and lightly guided by the UW Teaching Staff. I created my own LinkedList and HashMap implementations. This search engine parses documents, stores an inverted search index on disc, creates a server which accepts client connections, and produces search results from search queries.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Section-Header">
                            <p id="section-title" ref={this.state.headerRefs[2]}>
                                Skills
                            </p>
                            <div className="Section-Body">
                                <p id="title-text">
                                    Computer Languages:
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
                        <div className="Section-Header">
                            <p id="section-title" ref={this.state.headerRefs[3]}>
                                About
                            </p>
                            <div className="Section-Body">
                                <p>I grew up in Moscow, a small town in Northern Idaho. My freshman year at the University of Washington I was directly admitted into the UW Material Science program. After 2 years of pursuing a Material Science degree, I applied and was admitted into the Paul Allen School of Computer Science and Engineering. My hobbies include running, chess, golf and soccer.</p>
                                <div className="Photo-Container">
                                    <img id="photo" src={personalPhoto} alt= "Johan Boll">
                                    </img>
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
