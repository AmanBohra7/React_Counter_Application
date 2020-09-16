import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Counters from './components/Counters';

class App extends Component {
    state = { 
        counters:[
            {id:1 , value: 0},
            {id:2 , value: 10},
            {id:3 , value: 9},
            {id:4 , value: 5},
        ]   
    }

    handleDelete = (counterId) =>{
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState( {counters: counters} )
        // console.log("Delete event handler called!",counterID);
    };
     
    handleReset = () => {
        console.log("RESET called!");
        const counters = this.state.counters.map(count => {
            count.value = 0;
            return count;  
        });
        this.setState( {counters : counters } );
    };

    handleIncrement = (counter) =>{
        // one way to do this
        // const counters = this.state.counters.map( c => {
        //     c.value = c.id === counterId ? c.value + 1 : c.value;
        //     return c;
        //  });


        // another way to perform the same task
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;


        this.setState( {counters} );
    };

    handleDecrement = (counter) =>{
        // const counters = this.state.counters.map( c => {
        //    c.value = c.id === counterId ? c.value - 1 : c.value;
        //    return c;
        // });
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value = counters[index].value !== 0 ? counters[index].value - 1 : counters[index].value;
        this.setState( {counters : counters } );
    };

    handleAddElement = () =>{
        const elements = this.state.counters.length;
        let counters = [...this.state.counters];
        const new_counter = {
            id : elements+1,
            value : 0
        }
        counters.push(new_counter);
        this.setState({counters});
        console.log("Add element event called!");
    };
 
    render() { 
        return ( 
            <React.Fragment>
                <NavBar totalCounters = {this.state.counters.filter(c => c.value > 0 ).length} />
                <main className="container">
                    <Counters
                        onReset = {this.handleReset}
                        onIncrement = {this.handleIncrement}
                        onDecrement = {this.handleDecrement}
                        onDelete = {this.handleDelete}
                        onAddElement = {this.handleAddElement}
                        counters = {this.state.counters}
                     />
                </main>
            </React.Fragment>    
        );  
    }

}

export default App;