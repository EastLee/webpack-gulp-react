// import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

var Hello = React.createClass({
  render: function render() {
    return <div>Hello {this.props.name}</div>;
  }
});

ReactDOM.render(
  <Hello name="World" />,
  document.getElementById('AppRoot')
);
