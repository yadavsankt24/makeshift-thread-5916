import './App.css';
import Navbar from './Components/Homepage/Navbar';
import AllRoutes from './Pages/AllRoutes';
function App() {
  return (
    <div className="App">
      <Navbar />
     {/* <h1>Let's Play with Nordstorm</h1> */}
     <AllRoutes />
    </div>
  );
}

export default App;
