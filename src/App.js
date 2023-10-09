import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Lab from "./routes/Lab";
import Research from "./routes/Research";
import Publications from "./routes/Publications";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lab" element={<Lab />} />
        <Route path="/research" element={<Research />} />
        <Route path="/publications" element={<Publications />} />
      </Routes>
    </div>
  );
}
