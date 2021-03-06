import React, {Component} from 'react';
import './App.css';

import Header from "./Header";
import personalPhoto from './Pictures/JohanPicture.jpeg';
import Top from "./Sections/Top";
import Projects from "./Sections/Projects";
import Skills from "./Sections/Skills";
import Education from "./Sections/Education";

interface AppState {
  headerRefs: any[];
}

class App extends Component<{}, AppState> {

    constructor(props: any) {
        super(props);
        let tmpRefs : any[] = [];
        for (let i = 0; i < 6; i++) {
            let ref = React.createRef();
            tmpRefs.push(ref)
        }
        this.state = {
            headerRefs : tmpRefs,
        }
        document.title = "Johan's Portfolio";
    }

    buttonPressed(index : number): void {
        window.scrollTo(0, this.state.headerRefs[index].current.offsetTop - 60);
    }

    render() {
        return (
            <div className="Overall-App">
                <Header
                    buttonPressed={(index : number) => this.buttonPressed(index)}
                >
                </Header>
                <div className="App-Container">
                    <div className="Top" ref = {this.state.headerRefs[5]}>
                        <Top/>
                    </div>
                    <div className="Sections">
                        <div className="Skills">
                            <div className="Section-Title" ref = {this.state.headerRefs[0]}>
                                Skills
                                <hr/>
                            </div>
                            <Skills/>
                        </div>
                        <div className="Projects">
                            <div className="Section-Title" ref={this.state.headerRefs[1]}>
                                Projects
                                <hr/>
                            </div>
                            <Projects/>
                        </div>
                        <div className="Education">
                            <div className="Section-Title" ref={this.state.headerRefs[2]}>
                                Education
                                <hr/>
                            </div>
                            <Education/>
                        </div>
                        <div className="About">
                            <div className="Section-Title" ref={this.state.headerRefs[3]}>
                                About
                                <hr/>
                            </div>
                            <div className="Section-Body">
                                <div className="Flex">
                                    <div className="About-Text">
                                        <p>
                                            I grew up in Moscow, a small town in Northern Idaho. My freshman year at the University of Washington I was directly admitted into the UW Material Science program. After two years of pursuing a Material Science degree, I applied and was admitted into the Paul Allen School of Computer Science and Engineering. My hobbies include running, chess, golf and soccer.
                                        </p>
                                    </div>
                                    <div className="Photo-Container">
                                        <img id="photo" src={personalPhoto} alt= "Johan Boll">
                                        </img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Contact">
                            <p className="Section-Title" ref={this.state.headerRefs[4]}>
                                Contact
                            </p>
                            <hr/>
                            <p id="contact-text">
                                Feel free to reach out to me on LinkedIn, or contact me directly at bollj@uw.edu
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
