import React, { useState } from "react";

function Hooks() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };
    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    return (
        <div>
            <div>
                <label htmlFor="firstName">First Name:</label>
                <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={handleFirstNameChange}
                />
            </div>
            <div>
                <label htmlFor="lastName">Last Name:</label>
                <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={handleLastNameChange}
                />
            </div>
            <p>
                Full Name: {firstName} {lastName}
            </p>
        </div>
    );
}

export default Hooks;
