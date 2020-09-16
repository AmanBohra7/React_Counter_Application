import React, { Component } from 'react';

class testCounter extends Component {
    state = {
        count: 0,
        // rendering list
        tags: ['item1','item2','item3']
        //imageUrl : 'https://picsum.photos/200'
    };

    // adding styles
    styles={
        fontSize: 25,
        fontWeight: "bold"
    }

    render() { 

        // either we can call this method and save result in var 
        // let classes = this.getBadgeClass();
        // but instead this function can directly be called inline 

        return ( 
            <React.Fragment>
                {/* <img src={this.state.imageUrl} alt=""/> */}
                {/* adding dynamic classes and styles */}
                <span style={this.styles} className={this.getBadgeClass()}>{this.formatCount()}</span> 
                {/* adding inline styles */}
                <button  style={ {fontSize:30} } className="bth btn-secondary btn-sm">Increment</button>
                {/* white using map we need to set a unique key ! only in existing list */}
                <ul>{ this.state.tags.map(tag => <li key={tag}>{tag}</li>) }</ul>
            </React.Fragment> 
        );
    }

    getBadgeClass() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { count } = this.state ;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default testCounter;