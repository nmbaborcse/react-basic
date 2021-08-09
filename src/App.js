import React from 'react'

import Box from './components/Box'
import ClassComponent from './components/ClassComponent'
import './asstes/style.css'
import generate from '@babel/generator'

function App(){
    let internalCss = {
        color:'yellow',
        background:'green'
    }
    return (
        <div>
            <h1 style={ {color:'red', fontSize:'20px' } }>From App Component</h1> 
            <h2 className="title">From App Component h2</h2> 
            <h3 style={internalCss} > Title Example </h3>

            {/* <!-- --> */}
            <Box name="sanaul" age="27" />

            
            <ClassComponent />
            
       </div>
    )

}

export default App

