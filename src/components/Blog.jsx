import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {useParams} from 'react-router-dom'


export default class Blog extends Component {
    
    componentDidMount(){
        console.log(this.props.match.params.id)
    }

    render() {
        return (
            <div>
              <h1> Hello, From Blog </h1>  
              <h2> {this.props.match.params.id} </h2>
            </div>
        )
    }
}
