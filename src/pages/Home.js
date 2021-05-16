import React from 'react'
import InterOne from '../components/InterOne.js/InterOne'
import InterTwo from '../components/InterTwo.js/InterTwo'
import ModernDesign from '../components/ModernDesign/ModernDesign'
import NewHomes from '../components/NewHomes/NewHomes'
import Hero from './../components/Hero/Hero'
import { slidesDataOne } from './../data/SlideData'

const Home = () => {
    return (
        <div>
            <Hero slides={slidesDataOne}/>
            <InterOne />
            <NewHomes />
            <InterTwo />
            <ModernDesign />            
        </div>
    )
}

export default Home
