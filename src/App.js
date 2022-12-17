
import React from 'react'
import Footer from './components/Footer'
import Menubar from './components/Menubar'
import Section from './components/Section'
import "./App.css"
import Add from './Add'

function App() {
    return (
        <div>
             <Add />
            <Menubar />
            <Section />
            <Footer />
           
        </div>
    )
}

export default App