/**
 * @jsx React.DOM
 */

var React = require('react');
var Popover = require('react-bootstrap/Popover');
var OverlayTrigger = require('react-bootstrap/OverlayTrigger');

var RecommendEditable = React.createClass({
    render: function(){
        return (
            
            <OverlayTrigger
                placement="top"
                trigger="hover"
                overlay={<Popover title="Experts' recommendation">Let the experts at Dr. Kobros endorse your product!</Popover>}>

                    <span id="rekommendation" className="rekommendation" 
                        onBlur={this.emitChange}
                        contentEditable
                        dangerouslySetInnerHTML={{__html: this.props.html}}>
                    </span>

            </OverlayTrigger>
        );
    },
    shouldComponentUpdate: function(nextProps) {
        return nextProps.html !== this.getDOMNode().innerHTML;
    },
    
    emitChange: function(){
        var html = this.getDOMNode().innerHTML;

        if (!html) {
            return;
        }

        if (this.props.onChange && html !== this.lastHtml) {
            this.props.onChange(html);
        }
        this.lastHtml = html;
    }
});

module.exports = RecommendEditable;