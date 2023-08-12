
import './App.css';
import Header from './components/Header'
import CalculatorIMC from './components/IMC'
import Form from './components/Form/Forms'
import Login from './components/Login/LoginControl'


function App() {
  return (
    <div className="App">
      {/* <Header title="Titulo do APP"/>
      <CalculatorIMC /> */}

      <Form title="props"/>

      <Login name={'Lucas'}/>
    </div>
  );
}

export default App;
