import React,{Component} from 'react'

class ClassComponent extends Component {

    //  Data Part 
    state = {
        name:'',
        mobile:'',
        email:'',
        logged:false
    }

    changeInut = (event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    loginEvent = ()=>{
       this.setState({
           logged:true
       })
    }
    
    logoutEvent = ()=>{
       this.setState({
           logged:false
       })
    }
    

    //  Presentaion
    render(){


        if(this.state.logged==false){
            return (
                <div>
                    <h1> You are not logged in! </h1>

                    <button onClick={this.loginEvent}> Login </button>
                </div>
            
            
            )
        }
        return (
            <div>
                <h1> This is class component  </h1>

                <input name="name" type="text" onChange={this.changeInut} />

                <input name="mobile" type="number" onChange={this.changeInut} />
                <input name="email" type="email" onChange={this.changeInut} />

                <p>Name: {this.state.name} </p>
                <p> Mobile: {this.state.mobile} </p>
                <p> Email: {this.state.email} </p>


                <button onClick={this.logoutEvent}> Logout </button>
            </div>
        )
    }
}

export default ClassComponent