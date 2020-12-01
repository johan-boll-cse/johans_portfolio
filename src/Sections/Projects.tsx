import React, {Component} from 'react';
import './Projects.css'

import unbored from "../Pictures/unbored.png";
import huskyMapsPhoto from "../Pictures/CampusMaps.png";
import seamCarvingPhoto from "../Pictures/SeamCarving.png";
import searchEnginePhoto from "../Pictures/SearchEngine.png";
import rayTracePhoto from "../Pictures/RayTrace.png";

class Projects extends Component<{}, {}> {

    render() {
        return (
            <div className="Section-Body">
                <p id="project-title">React Projects</p>
                <div className="Project-Container">
                    <p id="body-title">un.bored</p>
                    <div className="Project-Item">
                        <img id="app-photo" src={unbored} alt="Johan Boll">
                        </img>
                        <p id="body-text"> un.bored is a web app and group project coded in React using Javascript that allows
                            users to search for activities to do. This project was coded in under 24 hours by my team as a submission in Dubhacks 2020. It pulls the site data from a Firestore
                            database and allows users to upload their own activities to the database.</p>
                    </div>
                </div>
                <div className="Project-Container">
                    <p id="body-title">AFL Fantasy App</p>
                    <div className="Project-Item">
                        <form action="https://afl-fantasy-app.netlify.app/" target="_new">
                            <button id="app-photo-linked" type="submit"/>
                        </form>
                        <p id="body-text"> AFL Fantasy is a web app and personal project coded in React using Typescript that
                            allows users to create a simple account with their name and play fantasy Australian Football. Much
                            like American Fantasy Football, users pick players for their team each week and are awarded points
                            based on their players' performance. Click the photo on the left to view.</p>
                    </div>
                </div>
                <div className="Project-Container">
                    <p id="body-title">Husky Maps</p>
                    <div className="Project-Item">
                        <img id="app-photo" src={huskyMapsPhoto} alt="Johan Boll">
                        </img>
                        <p id="body-text"> Husky Maps is a school project coded in React using Typescript that allows users to
                            map between locations on the UW campus. This was a full-stack project, and I created back-end
                            functionality in Java by implementing my own Graph ADT and Dijkstra’s graph path-finding algorithm.
                            I then built a GUI in React using Typescript. This app transfers data between Java and React through
                            a server created using Spark.</p>
                    </div>
                </div>
                <p id="project-title">Java Projects</p>
                <div className="Project-Container">
                    <p id="body-title">Seam Carving</p>
                    <div className="Project-Item">
                        <img id="app-photo" src={seamCarvingPhoto} alt="Johan Boll">
                        </img>
                        <p id="body-text"> Seam Carving is a school project coded in Java that allows users to use content-aware
                            resizing on images. It first creates a weighted, directed graph with vertices of pixels and edge
                            weights of energy (importance) from a given picture. Then the content-aware resizing algorithm is
                            run on the graph using an A* shortest path algorithm to find and then remove the seam of least
                            importance. </p>
                    </div>
                </div>
                <p id="project-title">C++ Projects</p>
                <div className="Project-Container">
                    <p id="body-title">Ray Tracer</p>
                    <div className="Project-Item">
                        <img id="app-photo" src={rayTracePhoto} alt="Johan Boll">
                        </img>
                        <p id="body-text"> Ray Tracer is a school project coded in C++ using the OpenGL API. Ray tracing is accomplished by sending
                        a ray out from a render camera for each pixel in the viewing box. It implements reflection, refraction, and shadow attenuation.</p>
                    </div>
                </div>
                <div className="Project-Container">
                    <p id="body-title">Search Engine</p>
                    <div className="Project-Item">
                        <img id="app-photo" src={searchEnginePhoto} alt="Johan Boll">
                        </img>
                        <p id="body-text"> Search Engine is a school project coded in C++. This project has the same
                            functionality as a web search engine with a limited data set. It is built from scratch. I created my own LinkedList and HashMap implementations. This
                            search engine parses documents, stores an inverted search index on disc, creates a server which
                            accepts client connections, and produces search results from search queries.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;