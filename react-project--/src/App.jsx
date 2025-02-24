import { useState } from 'react';
import './App.css'

function Header(props){
  console.log(props);
  return (
    <header>
      <h1> {props.name}  React Project</h1>
    </header>
  );
}
function Footer(prop){
  return (
    <footer>
      
      <p>This is a footer
      <span>Copyright {prop.year}</span>
      </p>
    </footer>
  )
}

function App() {
  const [status, setstatus]= useState(true);
  
  return (
    <div>
      <h1>
        The website is currently{" "} 
        {status ? "Opened" : "Closed"}
      </h1>
      <button onClick={() => setstatus(!status)}>
        {status ? "Close" : "Open"} Restaurant
      </button>
      <Header name="Prasim" />
      <Footer year={new Date().getFullYear()} />
    </div>
    );
  

}

export default App

