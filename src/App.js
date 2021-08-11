import React from 'react'

import Box from './components/Box'
import ClassComponent from './components/ClassComponent'
import Form from './components/Form'
import './asstes/style.css'

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
            
            <Form />
            <Box name="sanaul" age="27" />

            
            <ClassComponent title="This is props"/>
            <br />
            <br />
            <br />
            
       </div>
    )

}

export default App

