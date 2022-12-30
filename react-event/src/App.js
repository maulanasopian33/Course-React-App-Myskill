import './App.css';

function Football(){
  const shoot = (a,b) => {
    alert(b.type);
  }
  return (
        <button onClick={(event) => shoot("Goal!",event)}> Take The shoot</button>
      );
}
function MissedGoal(){
  return (<h1>Tidak Goals!</h1>);
}
function MadeGoal(){
  return (<h1>Goals!</h1>);
}
function Goals(props){
  const isGoals = props.IsGoals;
  if(isGoals){
    return (<MadeGoal />);
  }
  return (<MissedGoal />);
}

// Ternary Operation
function Goals2(props){
  const IsGoals = props.IsGoals
  return(
    <div>
      { IsGoals ? <MadeGoal></MadeGoal> : <MissedGoal></MissedGoal>}
    </div>
  );
}

function Garage(props){
  const car = props.car
  return (
    <div>
      <h1>Mobil</h1>
      {car.length > 0 &&
        <h2>Kamu memiliki {car.length} dalam garasi</h2>}
    </div>
  );
}
const Cars = ["mobil A"]; 

function App() {
  return (
    <div className="App">
      <Football></Football>
      <Goals IsGoals={false}></Goals>
      <h2>Ternary Operation</h2>
      <Goals2 IsGoals={true}></Goals2>
      <Garage car={Cars}></Garage>
    </div>
  );
}

export default App;
