var Router = require('react-router');
var React = require('react');
var RouteHandler = Router.RouteHandler;

FeedPreview = React.createClass({displayName: "feedPreview",
  render: function () {
    console.log("hi");
    return (
      React.createElement("div", {className: 'preview'}, 'preview')
    );
  }
});

module.exports = FeedPreview;

