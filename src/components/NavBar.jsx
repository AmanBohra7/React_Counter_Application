import React, { Component } from 'react';

// instead of this we can use SFC
// class NavBar extends Component {
//     render() { 
//         return ( 
//             <nav className="navbar navbar-dark bg-dark">
//                 <a href="#" className="navbar-brand">Total Unique items:
//                     <span className="badge badge-secondary m-1 "> {this.props.totalCounters}</span>
//                 </a>   
//             </nav>
//          );
//     }
// }
// export default NavBar;


// stateless function component || also with distructing arguments
const NavBar = ({totalCounters}) => {
    return ( 
            <nav className="navbar navbar-dark bg-dark">
                <a href="#" className="navbar-brand">Total Unique items:
                    {/* we can perform destructuring arguments instead of accessing this.props.totalCounters */}
                    {/* we can use {totalCounters} in the function  */}
                   <span className="badge badge-secondary m-1 "> {totalCounters}</span>
                </a>   
            </nav>
        );
}
 
export default NavBar;