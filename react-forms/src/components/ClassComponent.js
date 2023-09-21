import React, { Component } from "react";

class ClassComponent extends Component {
    //props
    constructor(props) {
        super(props);
        this.state = {
            date: this.props.initialDate,
            time: new Date().toLocaleTimeString(),
            isStyled: false,
        };
    }

    handleButtonClick = () => {
        this.setState((prevState) => ({
            isStyled: !prevState.isStyled,
        }));
    };

    render() {
        const { date, time, isStyled } = this.state;
        const styles = isStyled
            ? { fontFamily: "Arial, sans-serif", color: "green" }
            : { fontFamily: "Cursive, fantasy", color: "black" };

        const containerStyles = {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#f0f0f0",
        };

        const buttonStyles = {
            backgroundColor: isStyled ? "green" : "white",
            color: isStyled ? "white" : "green",
            border: "1px solid #ccc",
            padding: "10px 20px",
            cursor: "pointer",
        };

        return (
            <div style={containerStyles}>
                <div style={{ border: "1px solid #ccc", padding: "20px" }}>
                    <h2>Today's Date and Time</h2>
                    <p style={styles}>Date: {date}</p>
                    <p style={styles}>Time: {time}</p>
                    <button
                        style={buttonStyles}
                        onClick={this.handleButtonClick}
                    >
                        {isStyled ? "Original style" : "Change Style"}
                    </button>
                </div>
            </div>
        );
    }
}

export default ClassComponent;
