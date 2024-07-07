import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import "bootstrap/dist/css/bootstrap.min.css";
import "flowbite/dist/flowbite.css";

function App() {
  return (
    <>
      <div style={{ backgroundColor: "#101010" }}>
        <Home />
      </div>
      <About />
    </>
  );
}

export default App;
