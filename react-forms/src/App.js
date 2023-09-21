import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hooks from "./Hooks";
import Forms from "./Forms";
import FunctionalComponent from "./FunctionalComponent";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Hooks />} />
                    <Route path="/forms" element={<Forms />} />
                    <Route path="/forms" element={<Forms />} />
                    <Route path="/func" element={<FunctionalComponent />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
