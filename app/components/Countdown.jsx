var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
  _handleSetCountdown: function(seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  },
  _startTimer: function() {
    this._timer = setInterval(() => {
        var newCount = this.state.count - 1;
        this.setState({
          count: newCount >= 0 ? newCount : 0
        });
    }, 1000);
  },
  componentDidUpdate: function(prevProps, prevState) {
    if(this.state.countdownStatus !== prevState.countdownStatus) {
      switch(this.state.countdownStatus) {
        case 'started':
          this._startTimer();
          break;
      }
    }
  },
  getInitialState: function() {
    return {
      count: 0,
      countdownStatus: 'stopped'
    };
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
