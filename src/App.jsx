import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import { Cards, Card } from './components/cards/Cards';
import Footer from './components/footer/Footer';
import ContactForm from './components/contactform/ContactForm';

function App() {
  return (
      <>
          <Header />
          <Hero />
          <Cards />
          <ContactForm />
          <Footer />
      </>
  );
}

export default App
