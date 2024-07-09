import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import "bootstrap/dist/css/bootstrap.min.css";
import "flowbite/dist/flowbite.css";
import ProjectsMy from "./pages/Projects";

function App() {
  return (
    <>
      <div style={{ backgroundColor: "#101010" }}>
        <Home />
      </div>
      <About />
      <ProjectsMy />
    </>
  );
}

export default App;
