import React from 'react';

var Posters = React.createClass({
    handleChange: function (e) {
        
       
    },

    render: function () {
        return (

            <div>
                <p></p>
                <h2> <span> {this.props.title}</span> </h2>
                <div>

                    <a href={this.props.url}><img src={this.props.poster} alt="movieImage" /></a>
                   
                    
                   <hr></hr>
                      
                    
                </div>
            </div>

        );
    }
});

module.exports = Posters;