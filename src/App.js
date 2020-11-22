import { Provider } from 'react-redux';
import './App.css';
import CardValidation from './components/CardValidation';
import store from './redux/store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StolenDataScreen from './components/StolenDataScreen';

function App() {

  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route exact path='/' component={CardValidation} />
          <Route path='/stolen' component={StolenDataScreen} />
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
