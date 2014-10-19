/**
 * @jsx React.DOM
 */

var React = require('react');
var DocumentTitle = require('react-document-title');
var Grid = require('react-bootstrap/Grid');
var Row = require('react-bootstrap/Row');
var Col = require('react-bootstrap/Col');

var Recommendations = React.createClass({

    render: function() {
        return (
            
            <DocumentTitle title="Dr. Kobros recommends">
                
                <Grid id="main">
                    <Row>
                        <Col md={12}>
                            <section id="recommendations">

                                <img src="/assets/dr-kobros.png" />

                                <div id="recommendation">
                                    Dr. Kobros recommends&nbsp;<this.props.activeRouteHandler/>
                                </div>

                            </section>
               
                        </Col>
                    </Row>
                </Grid>
            </DocumentTitle>
        );
    }

});

module.exports = Recommendations;