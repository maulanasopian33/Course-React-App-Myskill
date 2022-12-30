
import './App.css';


function Car(props){
  return <li>I am a {props.brand}</li>
}
function Garage(){
  // const cars = ["bmw", "audi", "Ford"]
  const cars = [
    { id: 1, brand:"Bmw"},
    { id: 2, brand:"Bmw2"},
    { id: 3, brand:"Bmw3"},
  ]
  return(
    <div>
      <h1> Who lives in my garage</h1>
      <ul>
        {cars.map((car) => <Car key={car.id} brand={car.brand}></Car>)}
      </ul>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <Garage></Garage>
    </div>
  );
}

export default App;
