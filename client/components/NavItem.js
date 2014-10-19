/** @jsx React.DOM */

var React = require('react');
var classSet = require('react-bootstrap/utils/classSet');
var BootstrapMixin = require('react-bootstrap/BootstrapMixin');
var ActiveState = require('react-router/modules/mixins/ActiveState');
var Navigation = require('react-router/modules/mixins/Navigation');

var Router = require('react-router');
var Link = Router.Link;

var NavItem = React.createClass({displayName: 'NavItem',
  mixins: [BootstrapMixin, ActiveState, Navigation],

  propTypes: {
    activeClassName: React.PropTypes.string.isRequired,
    onSelect: React.PropTypes.func,
    disabled: React.PropTypes.bool,
    title: React.PropTypes.string,
    to: React.PropTypes.string.isRequired,
    params: React.PropTypes.object,
    query: React.PropTypes.object,
  },

  getDefaultProps: function () {
      return {
          'activeClassName': 'active'
      };
  },

  /**
   * Returns the value of the "class" attribute to use on the DOM element, which contains
   * the value of the activeClassName property when this <Link> is active.
   */
  getClassName: function () {

    var classes = {
      'disabled': this.props.disabled
    };

    if (this.props.className) {
      classes[this.props.className] = true;
    }

    if (this.isActive(this.props.to, this.props.params, this.props.query)) {
      classes[this.props.activeClassName] = true;
    }

    console.log(classes);

    return classSet(classes);
  },

  render: function () {

    console.log(this.getClassName);
    var classes = this.getClassName();

    return this.transferPropsTo(
      <li className={classes}>
        
        <Link to={this.props.to} params={this.props.params} query={this.props.query} title={this.props.title}>
          {this.props.children}
        </Link>

      </li>
    );
  },

  handleClick: function (e) {
    if (this.props.onSelect) {
      e.preventDefault();

      if (!this.props.disabled) {
        this.props.onSelect(this.props.key,this.props.href);
      }
    }
  }
});

module.exports = NavItem;