/**
 * @jsx React.DOM
 */

var React = require('react');

var Recommended = React.createClass({

    render: function() {
        return (
            <span>
                <strong>{this.props.params.recommendation}</strong>
            </span>
        );
    }

});

module.exports = Recommended;