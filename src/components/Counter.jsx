import React, { Component } from 'react';

class Counter extends Component {

    // instead of calling constructor function we can convert the event handler into
    // a arrow function 
    // constructor(){
    //     super();
    //     this.incrementButton = this.incrementButton.bind(this);
    // }

    render() { 
        return (
            <React.Fragment>
                {/* {this.props.children} */}
                <h1 className="badge m-2 badge-warning">{this.props.counter.value}</h1>
                <button onClick={ () => this.props.onIncrement(this.props.counter)} className="btn btn-secondary m-2">Increment</button>
                <button onClick={ () => this.props.onDecrement(this.props.counter) } className="btn btn-secondary m-2">Decrement</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger m-2">Delete</button>
                <br/>
                {/* conditional statements */}
                {/* { this.state.tags.length === 0 && "ERROR : " } */}
                {/* { this.returnTags() } */}
            </React.Fragment>
         );
    }
}
 
export default Counter;