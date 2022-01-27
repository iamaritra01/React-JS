import logo from "./logo.svg";
// import "./App.css";
import * as cal from "./Calculator/Calc";
import Card from "./Netflix/Card";
import Hook from "./Hooks/StateChange";
import FetchCurrTime from "./FetchTime/FetchCurrTime";
// import DigitalClock from "./DigitalClock";
// import Form from './Forms/Forms';
import Accordian from "./Accordian";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Accordian />
       
    {/* <Form /> */}
    
    {/* <FetchCurrTime /> */
}
      {/* <h1 className='style__heading'>List of Top 5 Netflix Series</h1>
       <Card img="https://m.media-amazon.com/images/M/MV5BNGZkYWUwZTctNGEwNS00YWRiLTkwNzItODJmZDIxYWUxM2VmXkEyXkFqcGdeQWpnYW1i._V1_QL75_UY281_CR0,0,500,281_.jpg" title="The Original Netflix Series" sName="Dark" />
       <Card img="https://m.media-amazon.com/images/M/MV5BNGZkYWUwZTctNGEwNS00YWRiLTkwNzItODJmZDIxYWUxM2VmXkEyXkFqcGdeQWpnYW1i._V1_QL75_UY281_CR0,0,500,281_.jpg" title="The Original Netflix Series" sName="lasr"/>
       <Card img="https://m.media-amazon.com/images/M/MV5BNGZkYWUwZTctNGEwNS00YWRiLTkwNzItODJmZDIxYWUxM2VmXkEyXkFqcGdeQWpnYW1i._V1_QL75_UY281_CR0,0,500,281_.jpg" title="The Original Netflix Series" sName="Mutar"/>
 */}
      {/* <ul>
          <li>Sum : {cal.add(40,6)}</li>
          <li>Multiplication : {cal.mult(20,7)}</li>
          <li>Substraction: {cal.sub(20,6)}</li>
          <li>Division : {cal.div(30,5)}</li>
       </ul> */}
    </div>
  );
}

export default App;
