import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactForm from './components/Contact'
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import './App.css';
import { Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
        <div>      
        <Header></Header>
        <main>
          <Switch>
            <Route exact path="/" component={About}></Route>
            <Route exact path="/portfolio" component={Portfolio}></Route>
            <Route exact path="/contact" component={ContactForm}></Route>
            <Route exact path="/resume" component={Resume}></Route>
          </Switch>
          
        </main>
            
      </div>
      <Footer></Footer> 
    </Router>
    
  );
}

export default App;
