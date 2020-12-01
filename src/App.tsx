import React, {Component} from 'react';
import './App.css';

import HeaderBar from "./HeaderBar";

import personalPhoto from './Pictures/JohanPicture.jpeg';
import Projects from "./Sections/Projects";
import Skills from "./Sections/Skills";

interface AppState {
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
                        <p id="section-title" ref = {this.state.headerRefs[0]}>
                            Introduction
                        </p>
                        <div className="Section-Body">
                            <p>
                                Hello, and welcome to my portfolio website. My name is Johan Boll, and I am a Senior at the University of Washington pursuing a degree in Computer Science.
                                This website was created using <b>React</b> using <b>Typescript</b> and is hosted online through Netlify.
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
                        <p id="section-title" ref={this.state.headerRefs[1]}>
                            Skills
                        </p>
                        <Skills/>
                        <p id="section-title" ref={this.state.headerRefs[2]}>
                            Projects
                        </p>
                        <Projects/>
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
        );
    }
}

export default App;
