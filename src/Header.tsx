import './Header.css';
import React, {Component} from "react";

const sections : string[] = ["Skills", "Projects", "Education", "About", "Contact"];

interface HeaderProps {
    buttonPressed(button: any): void;
}

interface HeaderState {
    scrollY: number;
    barLeft: number;
    barWidth: number;
}


class Header extends Component<HeaderProps, HeaderState> {

    canvas: React.RefObject<HTMLCanvasElement>;

    constructor(props: HeaderProps) {
        super(props);
        this.state = {
            scrollY: window.scrollY,
            barLeft: 0,
            barWidth: 100,
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
        let test = document.getElementById("button" + index);
        if (test) {
            let rect = test.getBoundingClientRect();
            this.setState( {
                barLeft: rect.x,
                barWidth: rect.width,
            })
        }
    }

    getBarLeft = (): number => {
        return this.state.scrollY / 10;
    }

    render() {
        let buttons : any[] = [];
        for (let i = 0; i < sections.length; i++) {
            buttons.push(
                <button className="Subject-Button" key={i} id={"button" + i} onClick={() => this.handleButtonClick(i)}>
                    {sections[i]}
                </button>
            );
        }
        return (
            <div>
                <div className="Header-Container">
                    <div className="Header-Name">
                        <button className="Name-Button" key={5} id={"button" + 5} onClick={() => this.handleButtonClick(5)}>
                            Johan Boll
                        </button>
                    </div>
                    <div className="Header-Buttons">
                        {buttons}
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;