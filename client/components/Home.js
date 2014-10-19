/**
 * @jsx React.DOM
 */

var React = require('react');
var DocumentTitle = require('react-document-title');

var Home = React.createClass({

    render: function() {
        return (
            
            <DocumentTitle title="Dr. Kobros Foundation">
                <div>
                    Home
                </div>
            </DocumentTitle>
        );
    }

});

module.exports = Home;