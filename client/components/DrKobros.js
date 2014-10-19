/**
 * @jsx React.DOM
 */

var React = require('react');

var Navbar = require('react-bootstrap/Navbar');
var Nav = require('react-bootstrap/Nav');
var NavItem = require('./NavItem.js');

var DropdownButton = require('react-bootstrap/DropdownButton');
var MenuItem = require('react-bootstrap/MenuItem');

var DocumentTitle = require('react-document-title');
var Router = require('react-router');
var Link = Router.Link;

var DrKobros = React.createClass({

    render: function() {
    

        var brand = (
            <Link to="home">Dr. Kobros Foundation</Link>
        );

        return (
            
            <DocumentTitle title="Dr. Kobros Foundation">

                <div>

                    <Navbar fixedTop brand={brand} toggleButton="tussi" toggleNavKey={1}>

                        <Nav key={1} collapsable>
                            <NavItem key={1} to="recommendations">Recommendations</NavItem>
                            <NavItem key={2} to="certifications">Certifications</NavItem>
                            <NavItem key={3} to="dashboard">Dashboard</NavItem>
                        </Nav>
                    </Navbar>

                    <div id="main">
                        <this.props.activeRouteHandler/>
                    </div>

                </div>

            </DocumentTitle>
        );
    }

});

module.exports = DrKobros;