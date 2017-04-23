import React from 'react';
import { Link } from 'react-router';


const NavbarHead = (props) => {
  
  return (
  
    <div>

        {props.children}
      
      
      </div>
  );
};


var Navigbar = React.createClass({
    handleChange: function(i) {
     
    },

    render: function () {
        return (

    <nav role='navigation'>

<img src='http://www.clker.com/cliparts/z/Q/L/i/M/C/orange-md.png' alt='Orange clip art'/>

        
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Top10">Top10 Movies</Link></li>
        <li><Link to="/ContactUs">Contact</Link></li>
        <li><a href="https://weber.instructure.com/courses/422412/assignments/3206580">About The Final</a></li>
      </ul>
     
    </nav>
        /*    <nav>
                 <Link to="/">Home</Link>
            <Link to="/Top10">Top10</Link>
            <Link to="/ContactUs">ContactUs</Link>
                <div>
                    <a href="https://weber.instructure.com/courses/422412/assignments/3206580">CS 3630 Final Project</a>
                </div>
            </nav>
            */
            
        );
    }
});

module.exports = Navigbar;