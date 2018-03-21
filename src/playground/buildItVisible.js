// JSX - JavaScript XML
    // JSX is a language extension for JavaScript brought to us by React

// if statements
// ternary operators (eg: true ? "something" : "something else")
// logical and operator (eg: true && "print this")


const appRoot = document.getElementById("app");

class VisibilityToggle extends React.Component{
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            title: "Visibility Toggle",
            message: "WoW is for SLACKERS! You're better than that.",
            visibility: false
        }
    }
    handleToggleVisibility() {
        this.setState( (prevState) => {
            return {
                visibility: !(prevState.visibility)
            }
        });
    }
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <button onClick={this.handleToggleVisibility}>
                    {!this.state.visibility ? "You like WoW?" : "Less games, more hacks"}
                </button>
                {this.state.visibility && <p>{this.state.message}</p>}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, appRoot);

// const app = {
//     title: "Visibility Toggle",
//     message: "WoW is for slackers. You're better than that!",
//     toggle: false
// };

// const toggleMessage = () => {
//     // app.toggle = !app.toggle;
//     (!app.toggle === true) ? (app.toggle = true) : (app.toggle = false);
//     render();
// };

// const render = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={toggleMessage}>
//                 {!app.toggle ? "You like WoW?" : "Nah, idk that game"}
//             </button>
//             {app.toggle && <p>{app.message}</p>}
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// };

// render();