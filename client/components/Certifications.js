/**
 * @jsx React.DOM
 */

var React = require('react');
var DocumentTitle = require('react-document-title');

var Certifications = React.createClass({

    render: function() {
        return (
            
            <DocumentTitle title="Dr. Kobros Dashboard">
                <div>
                    Certifications
                </div>
            </DocumentTitle>
        );
    }

});

module.exports = Certifications;