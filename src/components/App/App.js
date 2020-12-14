import { BrowserRouter as Router } from 'react-router-dom';
import PageHeader from '../PageHeader/PageHeader';
import Login from '../Login/Login';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <PageHeader />
      </Router>
    </div>
  );
};

export default App;
