import React from 'react';

var Search = React.createClass({
/*

const Search = () => {
     {
        this.props.onChange(name);
    },
    render: function () {
    return (
        <div>
            <div">

                <p><input type="text" placeholder="Search for movies"/></p>
            </div>
        </div>
    );
};

*/

    handleChange: function (UserSearch){},


    render: function (UserSearch) {
        return (
            <div>

                <p><input type="text" placeholder="Search for movies"/></p>

            </div>


        );
    }
});

export default Search;