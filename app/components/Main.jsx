var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
  return (
    <div>
      <Nav/>
      <div className="row">
        <div className="columns small-centered medium-6 large-4 small-8">
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
