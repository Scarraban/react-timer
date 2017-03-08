var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

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

        if(newCount === 0) {
          this.setState({countdownStatus: 'stopped'});
        }
    }, 1000);
  },
  _handleStatusChange: function(newStatus) {
    this.setState({countdownStatus: newStatus});
  },
  componentDidUpdate: function(prevProps, prevState) {
    if(this.state.countdownStatus !== prevState.countdownStatus) {
      switch(this.state.countdownStatus) {
        case 'started':
          this._startTimer();
          break;
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this._timer);
          this._timer = undefined;
          break;
      }
    }
  },
  componentWillUnmount: function() {
    clearInterval(this._timer);
    this._timer = undefined;
  },
  getInitialState: function() {
    return {
      count: 0,
      countdownStatus: 'stopped'
    };
  },
  render: function() {
    var {count, countdownStatus} = this.state;
    var renderControlArea = () => {
      if(countdownStatus !== 'stopped') {
        return <Controls countdownStatus={countdownStatus} onStatusChange={this._handleStatusChange}/>;
      } else {
        return <CountdownForm onSetCountdown={this._handleSetCountdown}/>;
      }
    }

    return (
      <div>
        <h1 className="page-title">Countdown App</h1>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    );
  }
});

module.exports = Countdown;
