
import React, { Component } from 'react'

export default class Form extends Component {
    state = {
        input:{},
        users:[]
    }
    
    changeInput = (e)=>{
        this.setState({
            input:{
                ...this.state.input,
                [e.target.name]:e.target.value
            }
            
        })
    
    }
    users = [];
    submitForm = event =>{
        event.preventDefault();
        
        this.users.push(this.state.input);
        this.setState({
            users:this.users
        })
    }


    render() {
        return (
            <>
            <form>

                <h2> Registration Form </h2>

            <label>Name:</label>
            <input type="text" name="name" onChange={this.changeInput}  />
            <br />
            <br />
            
            <label>Email:</label>
            <input type="email" name="email" onChange={this.changeInput} />
            <br />
            <br />

            <label>Mobile number:</label>
            <input type="number" name="mobile" min="0" onChange={this.changeInput} />
            <br />
            <br />
            
            <label>Password:</label>
            <input type="password" name="password" onChange={this.changeInput} />
            <br />
            <br />

            <button onClick={this.submitForm}> Submit </button>

            </form>

            <h3> Users List </h3>
                 <ul>
                {

                    this.state.users.map(item=>{
                    return <li key={item.name}> Name: {item.name}, <br /> Email: {item.email}, <br /> Mobile: {item.mobile} <br /> </li>
                    })

                    }
                </ul>
        </>
        )
    }
}
