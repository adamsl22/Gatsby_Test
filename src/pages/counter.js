import React from 'react';
import Link from 'gatsby-link';

export default class Counter extends React.Component{
    state = {
        count: 0
    }

    render(){
        return(
            <div>
                <h1>Counter</h1>
                <p>Current Count: {this.state.count}</p>
                <button onClick={() => this.setState({count: this.state.count + 1})}>+</button>
                <button onClick={() => this.setState({count: this.state.count - 1})}>-</button>
                <p><Link to='/'>Home</Link></p>
            </div>
        )
    }
}