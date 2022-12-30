import './App.css';

function Football(){
  const shoot = (a,b) => {
    alert(b.type);
  }

  return (
    <button onClick={(event) => shoot("Goal!",event)}> Take The shoot</button>
  );
}

function App() {
  return (
    <div className="App">
      <Football></Football>
    </div>
  );
}

export default App;
