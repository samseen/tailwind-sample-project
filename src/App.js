import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Home from './pages';
import About from './pages/about';
import Menu from './pages/menu';
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/menu" exact component={Menu} />
        <Route path="/about" exact component={About} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
