import React from 'react'

export default function Box(props){
    const name = 'Sanaul';
    const age = '25';
    const details = {name:'Muslim',age:'25'}
    const details1 = {name:'Sanaul',age:'25'}

    const des = props;
    

    return (
        <div>
            <div style={ {width:'200px', height:'100px','display':'inline-block',margin:'10px',border:'1px solid #000',padding:'5px',textAlign:'center'} }>
                <h4> Name: {des.name} </h4>
                <h4> Age: {des.age} </h4>
            </div>
        </div>
    )
}