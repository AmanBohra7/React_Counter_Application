import React, { Component } from 'react';
import Counter from './Counter';

class Counters extends Component {
    render() { 
        // this is Destructuring Arguments
        const {onDelete , onIncrement , onDecrement } = this.props;
        return ( 
            <div>
                <button onClick={this.props.onReset} className="btn btn-primary m-2">RESET</button>
                <br/>
                { this.props.counters.map(counter => (
                    <Counter 
                        key={counter.id} 
                        counter = {counter}
                        onDelete = {onDelete}
                        onIncrement = {onIncrement}
                        onDecrement = {onDecrement}  >
                        {/* <h1>Counter #{counter.id}</h1> */}
                    </Counter> ) ) }
            </div>
             
        );
    }
}
 
export default Counters;