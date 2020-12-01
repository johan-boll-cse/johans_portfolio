import React, {Component} from 'react';
import './Top.css'

class Top extends Component<{}, {}> {
    render() {
        return (
            <div className="Picture">
                <p>
                    Welcome to my Computer Science Portfolio
                </p>
                <div className="Logo-Container">
                    <div className="Logo-Item">
                        <form action={require("../Pictures/Resume.pdf")} target="_new">
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
        )
    }
}

export default Top;