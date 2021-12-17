import './App.css';
import { Header } from './baseParts/header/header';
import { Servises } from './baseParts/servises/servises';
import { FC } from 'react';
import { Slider } from './baseParts/slider/slider';
import { OurTeam } from './baseParts/team/team';
import { ContactForm } from './baseParts/form/form';
import { Footer } from './baseParts/footer/footer';

const App: FC<{}> = () => {
  return <>
    <Header />
    <Servises />
    <Slider />
    <OurTeam />
    <ContactForm />
    <Footer />
  </>
}

export default App

