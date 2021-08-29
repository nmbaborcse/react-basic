import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

export default class Home extends Component {

    redirectHanlde = ()=>{
        this.props.history.push('/form');
    }


    render() {
        return (
            <div>
            <h1 className='title'> This is our home page </h1>

            <h2>  This is sub title.  </h2>

            <button onClick={this.redirectHanlde}> Redirect </button>
        </div>
        )
    }
}
