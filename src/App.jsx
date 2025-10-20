import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="bg-green-700">
        <Navbar />
        <About />
      </div>
    </>
  );
}

export default App;
