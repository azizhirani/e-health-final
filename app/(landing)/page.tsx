import React from 'react'
import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import Contact from '@/components/landing/contact/contact';
import Footer from '@/components/landing/footer';
import Header from '@/components/landing/Header/header';
import Features from '@/components/landing/Features/features';
// import ScrollToTop from '@/components/landing/ScrollToTop';

const LandingPage = () => {
  return (
  <>

      <Header/>
      <Hero/>
      <Features/>
    
      <Contact/>
      <Footer/>
      </>  
  )
};

export default LandingPage;