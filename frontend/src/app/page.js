import Image from 'next/image'
import Header from './components/Header/header'
import Hero from './components/Hero/Hero'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function Home() {
  return (
    <>
   <Header />
   <Hero/>
   </>
  )
}
