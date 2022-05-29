import './App.css';
import {Switch,Route} from 'react-router-dom';
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';

function App() {
  return (
    <div className="App">
     <h1>React Redux CRUD Operation</h1>
     <Switch>
       <Route path="/" component={Home} exact></Route>
       <Route path='/Add' component={Add} exact={true}></Route>
       <Route path={'/Edit/:id'} component={Edit}></Route>
     </Switch>
    </div>
  );
}

export default App;
