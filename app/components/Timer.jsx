var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
  _startTimer: function() {
    this._timer = setInterval(() => {
      var newCount = this.state.count + 1;
      this.setState({
        count: newCount <= 600 ? newCount : 600
      });

      if(newCount === 600) {
        this.setState({countdownStatus: 'stopped'});
      }
    }, 1000);
  },
  _handleStatusChange: function(newStatus) {
    this.setState({timerStatus: newStatus});
  },
  componentDidUpdate: function(prevProps, prevState) {
    if(this.state.timerStatus !== prevState.timerStatus) {
      switch(this.state.timerStatus) {
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
      timerStatus: 'stopped'
    };
  },
  render: function() {
    var {count, timerStatus} = this.state;
    return (
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count}/>
        <Controls countdownStatus={timerStatus} onStatusChange={this._handleStatusChange}/>
      </div>
    );
  }
});

module.exports = Timer;
