/**
 * @jsx React.DOM
 */

var React = require('react');
var DocumentTitle = require('react-document-title');

var Dashboard = React.createClass({

    render: function() {
        return (
            
            <DocumentTitle title="Dr. Kobros Dashboard">
                <div>
                    Dashboard
                </div>
            </DocumentTitle>
        );
    }

});

module.exports = Dashboard;