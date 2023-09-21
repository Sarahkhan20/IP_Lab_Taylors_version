import React from "react";
import ClassComponent from "./components/ClassComponent";

function FunctionalComponent() {
    const currentDate = new Date().toDateString();

    return (
        <div>
            {/* props  */}
            <ClassComponent initialDate={currentDate} />
        </div>
    );
}

export default FunctionalComponent;
