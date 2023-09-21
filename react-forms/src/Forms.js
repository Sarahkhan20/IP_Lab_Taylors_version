import React, { useState } from "react";
import "./App.css";
function Forms() {
    const [formData, setFormData] = useState({
        house: "",
        name: "",
        wandWood: "",
        wandCore: "",
        bio: "",
        acceptTerms: false,
        gender: "",
        password: "",
    });

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        const newValue = type === "checkbox" ? checked : value;

        setFormData({
            ...formData,
            [name]: newValue,
        });
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            console.log("Enter key pressed");
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // You can handle form submission here
        console.log("Form data submitted:", formData);
        window.alert("Congratulations! You are admitted to Hogwarts!");
    };

    const handleReset = () => {
        setFormData({
            house: "",
            name: "",
            wandWood: "",
            wandCore: "",
            bio: "",
            acceptTerms: false,
            gender: "",
            password: "",
        });
    };

    // Define inline styles
    const inputStyle = {
        marginBottom: "10px",
        padding: "5px",
        width: "100%",
    };

    const buttonStyle = {
        marginRight: "10px",
        padding: "5px 15px",
        backgroundColor: "#333",
        color: "#fff",
        border: "none",
        cursor: "pointer",
    };

    return (
        <div className="center-container">
            <form onSubmit={handleSubmit}>
                <h1>Hogwarts Admission Form</h1>
                <div>
                    <label htmlFor="house">Select Your House:</label>
                    <select
                        id="house"
                        name="house"
                        value={formData.house}
                        onChange={handleInputChange}
                        style={inputStyle}
                    >
                        <option value="">Select Your House</option>
                        <option value="gryffindor">Gryffindor</option>
                        <option value="hufflepuff">Hufflepuff</option>
                        <option value="ravenclaw">Ravenclaw</option>
                        <option value="slytherin">Slytherin</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="name">Full Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        style={inputStyle}
                    />
                </div>

                <div>
                    <label htmlFor="wandWood">Wand Wood:</label>
                    <input
                        type="text"
                        id="wandWood"
                        name="wandWood"
                        placeholder="Enter your wand wood"
                        value={formData.wandWood}
                        onChange={handleInputChange}
                        style={inputStyle}
                    />
                </div>

                <div>
                    <label htmlFor="wandCore">Wand Core:</label>
                    <input
                        type="text"
                        id="wandCore"
                        name="wandCore"
                        placeholder="Enter your wand core"
                        value={formData.wandCore}
                        onChange={handleInputChange}
                        style={inputStyle}
                    />
                </div>

                <div>
                    <label htmlFor="bio">Bio:</label>
                    <textarea
                        id="bio"
                        name="bio"
                        placeholder="Tell us about yourself"
                        value={formData.bio}
                        onChange={handleInputChange}
                        style={inputStyle}
                    />
                </div>

                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="acceptTerms"
                            checked={formData.acceptTerms}
                            onChange={handleInputChange}
                        />
                        Accept Terms and Conditions
                    </label>
                </div>

                <div>
                    <label>Choose your gender:</label>
                    <div>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                checked={formData.gender === "male"}
                                onChange={handleInputChange}
                            />
                            Male
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                checked={formData.gender === "female"}
                                onChange={handleInputChange}
                            />
                            Female
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="other"
                                checked={formData.gender === "other"}
                                onChange={handleInputChange}
                            />
                            Other
                        </label>
                    </div>
                </div>

                <button type="submit" style={buttonStyle}>
                    Submit
                </button>
                <button type="button" onClick={handleReset} style={buttonStyle}>
                    Reset
                </button>
            </form>
        </div>
    );
}

export default Forms;
