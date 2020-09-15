import React, {Component} from 'react';
import './HeaderBar.css';

const titles : string[] = ["Home", "Projects", "Skills", "About"];

interface HeaderBarProps {
    buttonPressed(button: any): void;
}

interface HeaderBarState {
    scrollY: number;
}

class HeaderBar extends Component<HeaderBarProps, HeaderBarState> {

    canvas: React.RefObject<HTMLCanvasElement>;

    constructor(props: HeaderBarProps) {
        super(props);
        this.state = {
            scrollY: window.scrollY,
        }
        this.canvas = React.createRef();
    }

    componentDidMount(): void {
        window.addEventListener('scroll', this.handleScroll);
        this.drawBars();
    }

    componentDidUpdate(): void {
        this.drawBars();
    }

    handleScroll = () => {
        this.setState({
            scrollY: window.scrollY,
        })
    }

    drawBars = () => {
        let canvas = this.canvas.current;
        if (canvas === null) throw Error("Unable to draw, no canvas ref.");
        let ctx = canvas.getContext("2d");
        if (ctx === null) throw Error("Unable to draw, no valid graphics context.");
        let scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, Math.round(canvas.width), Math.round(canvas.height));
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, (this.state.scrollY / (scrollHeight - window.innerHeight) * canvas.width), (canvas.height));
    }

    handleButtonClick = (index : number) => {
        this.props.buttonPressed(index);
    }

    render() {
        let buttons : any[] = [];
        for (let i = 0; i < 4; i++) {
            buttons.push(
                <button id="header-button" onClick={() => this.handleButtonClick(i)}>
                    {titles[i]}
                </button>
            );
        }
        return (
            <div className="Overall-Header">
                <div className="Header-Space">
                    <div className="Button-Container">
                        {buttons}
                    </div>
                </div>
                <canvas id="progress-bar"
                    ref={this.canvas}>
                </canvas>
            </div>
        );
    }
}

export default HeaderBar;
