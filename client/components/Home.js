/**
 * @jsx React.DOM
 */

var React = require('react');
var DocumentTitle = require('react-document-title');
var Jumbotron = require('react-bootstrap/Jumbotron');

var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({

    render: function() {
        return (
            
            <DocumentTitle title="Dr. Kobros Foundation">
                
                <Jumbotron>

                    <div className="container">
                        <h1>Welcome to the Dr. Kobros Foundation!</h1>

                        <p>
                            Dr. Kobros Foundation is dedicated to snake oil.
                        </p>

                        <Link className="btn btn-primary btn-lg" to="recommendations">Want to know more?</Link>
                    </div>
                </Jumbotron>

            </DocumentTitle>
        );
    }

});

module.exports = Home;