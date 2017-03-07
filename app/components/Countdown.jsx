var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
  _handleSetCountdown: function(seconds) {
    this.setState({
      count: seconds
    });
  },
  getInitialState: function() {
    return {
      count: 0
    }
  },
  render: function() {
    var {count} = this.state;
    return (
      <div>
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={this._handleSetCountdown}/>
      </div>
    );
  }
});

module.exports = Countdown;
