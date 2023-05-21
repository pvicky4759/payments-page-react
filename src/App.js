import "./App.css";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Payment from "./components/Payment";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="page-content">
        <div>
          <LandingPage />
        </div>
        <div>
          <Payment />
        </div>
      </div>
    </div>
  );
}

export default App;
