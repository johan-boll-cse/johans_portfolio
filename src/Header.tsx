import './Header.css';
import React, {Component} from "react";

const sections : string[] = ["Skills", "Projects", "Education", "About", "Contact"];

interface HeaderProps {
    buttonPressed(button: any): void;
}

interface HeaderState {
    scrollY: number;
}


class Header extends Component<HeaderProps, HeaderState> {

    canvas: React.RefObject<HTMLCanvasElement>;

    constructor(props: HeaderProps) {
        super(props);
        this.state = {
            scrollY: window.scrollY,
        }
        this.canvas = React.createRef();
    }

    componentDidMount(): void {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        this.setState({
            scrollY: window.scrollY,
        })
    }

    handleButtonClick = (index : number) => {
        this.props.buttonPressed(index);
    }

    render() {
        let buttons : any[] = [];
        for (let i = 0; i < sections.length; i++) {
            buttons.push(
                <button id="button" onClick={() => this.handleButtonClick(i)}>
                    {sections[i]}
                </button>
            );
        }
        return (
            <div className="Header-Container">
                <div className="Header-Name">
                    <div className="Header-Title">
                        Johan Boll
                    </div>
                </div>
                <div className="Header-Buttons">
                    {buttons}
                </div>
            </div>
        )
    }
}

export default Header;