import react from 'react';
import { Link } from 'react-router';



var $ = require('jquery');
window.jQuery = $;
window.$ = $;
var React = require('react');
var Posters = require('./Posters');

// var serverRequest = fetch('https://www.omdbapi.com/?s=' + this.props.search + '&y=&plot=short&r=json');
// var serverRequest;


var Movies = React.createClass({
    getInitialState: function () {
        return {
            movieTitle: '',
            // movieYear:'',
            moviePoster: '',
            movieSearchTerm: 'Green'
        };
    },
    handleChange: function (i) {
        var name = i.target.value;
        this.userSearchMovie = $.get('https://www.omdbapi.com/?s=' + name + '&y=&plot=short&r=json', function (result) {
          
            this.setState({
                movieTitle: result.Search[0].Title,
                moviePoster: result.Search[0].Poster,
                movieObject: result.Search,
                movieSearchTerm: name
            });
        }.bind(this/*.userSearchMovie*/));
    },

    componentWillUnmount: function () {

        this.userSearchMovie.abort();
    },

    render: function () {

        if (this.state.movieObject) {
            var rows = [];
         
            this.state.movieObject.forEach(function (movie) {
         
         
                var url = 'http://www.imdb.com/title/' + movie.imdbID + '/';
                if (!(movie.Poster === "N/A")) {
                    var image = movie.Poster;
                } else {
                   //console.log('No Image Availab;e'); 
                   var image = 'https://us.123rf.com/450wm/studiom1/studiom11007/studiom1100701616/7371555-cinema-word-collage-on-black-background-vector-illustration.jpg?ver=6';
                }
                rows.push(<Posters title={movie.Title} poster={image} url={url} />);
            });

        }

        return (
            <div>
                <nav>
                    
                    <div>
                        
                        <form>

                            <input placeholder="Search for movies" onKeyUp={this.handleChange} type="search" required />



                        </form>
                    </div>
                </nav>

                <div>{rows}</div>
            </div>

        );
    }
});

module.exports = Movies;