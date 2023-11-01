import React, { createRef, forwardRef } from "react";

class App extends React.Component {
    constructor() {
        super();
        this.backRef = null;
        this.setBackRef = (element) => {
            this.backRef = element;
        };
    }
    componentDidMount() {
        if (this.backRef) {
            this.backRef.focus();
        }
    }
    render() {
        return (
            <div>
                <h1>Callback ref</h1>
                Name
                <input type="text"></input>
                password
                <input type="password" ref={this.setBackRef} />
            </div>
        );
    }
}
export default App;
