import React,{Component} from 'react'

class ClassComponent extends Component {

    //  Data Part 
    state = {
        name:'',
        mobile:'',
        email:'',
        logged:false
    }

     users = ['Sanaul','Muslim','Arif','Babor','Rofik','Sofik'];

    students = [

        {
            name:'Sanaul',
            email:'sanaul@gmail.com',
            mobile:'01812341414'
        },
        {
            name:'Muslim',
            email:'muslim@gmail.com',
            mobile:'012478542'
        },
        {
            name:'Arif',
            email:'arif@gmail.com',
            mobile:'0147854451'
        }
        
    ];

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
                <label htmlFor="name">Name:</label>
                <input name="name" id="name" type="text" onChange={this.changeInut} />

                <input name="mobile" type="number" onChange={this.changeInut} />
                <input name="email" type="email" onChange={this.changeInut} />

                <p>Name: {this.state.name} </p>
                <p> Mobile: {this.state.mobile} </p>
                <p> Email: {this.state.email} </p>


                <button onClick={this.logoutEvent}> Logout </button>

                <h2> {this.props.title} </h2>

                <ul>
                {

                    this.users.map(user=>{
                    return <li key={user}> {user} </li>
                    })

                    }
                </ul>
                
                
                
                <h3> Students List </h3>
                 <ul>
                {

                    this.students.map(item=>{
                    return <li key={item.name}> Name: {item.name}, <br /> Email: {item.email}, <br /> Mobile: {item.mobile} <br /> </li>
                    })

                    }
                </ul>
                


            </div>
        )
    }
}

export default ClassComponent