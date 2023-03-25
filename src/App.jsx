import './App.css';
import PorductsContainer from './containers/ProductsContainer';
import { EcommerceProvider } from './context/EcommerceContext';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeComtainer from './containers/HomeContainer';


const App=()=> {
  return (
    <div className="App">
      <BrowserRouter>
        <EcommerceProvider>
          <Switch>
            <Route exact path="/"> 
              <PorductsContainer/>
            </Route>
            <Route exact path="/home"> 
              <HomeComtainer/>
            </Route>
            <Route path="/productos/:busqueda"> 
              <PorductsContainer/>
            </Route>
          </Switch>
        </EcommerceProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
