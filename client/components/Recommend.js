/**
 * @jsx React.DOM
 */

var React = require('react');
var RecommendEditable = require('./RecommendEditable.js');
var Router = require('react-router');
var Navigation = Router.Navigation;

var Recommend = React.createClass({

    mixins: [Navigation],

    onChange: function(recommendation) {
        this.transitionTo('recommended', { 'recommendation': recommendation});
    },

    render: function() {
        return (
            <RecommendEditable onChange={this.onChange}/>
        );
    }

});

module.exports = Recommend;