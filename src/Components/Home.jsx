import React from 'react'
import About from './About'
import Header from './Header'
import MintSpaceCadet from './MintSpaceCadet'
import Slider from './Slider'

export default function Home() {
       return (
              <div>
                     <Header />
                     <Slider />
                     <MintSpaceCadet />
                     <About />
              </div>
       )
}