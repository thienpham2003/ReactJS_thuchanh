// import logo from "./logo.svg";
// import "./App.css";
import Hello from "./compoment/hello";
import HelloPerson from "./compoment/HelloPerson";
import Item from "./compoment/Item";
// import Menu from "./compoment/Menu";
import { Header } from './compoment/Header'; 
import Xinchao from "./compoment/Xinchao";  
import Car from "./compoment/Car";
import Login from "./compoment/Login";

function App() {


  return (
    <div className="App">
      <Hello />
      <HelloPerson />
      <ul>
        <Item content="facebook" link="https://facebook.com" />
        <Item content="youtube" link="https://www.youtube.com/watch?v=vWu_pOZyjos&list=RDvWu_pOZyjos&start_radio=1" />
      </ul>
    
      <div>
      <Header /> 
      <Xinchao />
      <Car />
      <Login />
    </div>   
    </div>
  );
}

export default App;
