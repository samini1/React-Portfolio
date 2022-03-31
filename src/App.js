import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactForm from './components/Contact'
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import './App.css';

function App() {
  return (
    <div>
      <Nav></Nav>
      <Header></Header>
      <main>
        <Portfolio></Portfolio>
        <ContactForm></ContactForm>
        <About></About>
        <Resume></Resume>
      </main>
      <Footer></Footer>     
    </div>
  );
}

export default App;
