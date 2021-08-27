import "./App.css";
import data from "./normative-data.json";
import Input from "./components/input";

function App() {
  console.log(data["2MWT"].Men);
  return (
    <div className='App'>
      <h1> Parmin is cool</h1>
      <Input />
    </div>
  );
}

export default App;
