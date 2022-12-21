
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textfrom from './components/Textfrom';
function App() {
  return (
    <div className="App">
     <div>
     
      <Navbar title="TextUtils23" hometext="Home" abouttext="About us"/>
      <div className="container my-3">
      <Textfrom heading= "Enter the text to analyse"/>
      </div>
      <About/>
       </div>
    </div>
  );
}

export default App;
