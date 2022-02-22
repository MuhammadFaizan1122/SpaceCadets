import React from 'react'
import About from './About'
import Collabs from './Collabs'
import Comunity from './Comunity'
import Footer from './Footer'
import Header from './Header'
import MintSpaceCadet from './MintSpaceCadet'
import Slider from './Slider'
import Story from './Story'
import Team1 from './Team1'
import Team2 from './Team2'

export default function Home() {
       return (
              <div>
                     <Header />
                     <Slider />
                     <MintSpaceCadet />
                     <About />
                     <Story />
                     <Collabs />
                     <Team1 />
                     <Team2 />
                     <Comunity />
                     <Footer />
              </div>
       )
}