import Users from "./components/Users";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
    return (
        <div className="w-[80%] p-10 m-auto">
            <Nav />
            {/* <Route path="/users/:id" element={<Users  />} /> */}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<Users />} />
            </Routes>
        </div>
    );
};

export default App;
