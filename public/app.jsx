var GreeterMessage = React.createClass({
  render: function () {
    var name = this.props.name;
    var message = this.props.message;

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
      </div>
    );
  }
});

var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var updates = {};

    var name = this.refs.name.value;
    var message = this.refs.message.value;

    if (name.trim().length > 0) {
      updates.name = name;
      this.refs.name.value = '';
    }

    if (message.trim().length > 0) {
      updates.message = message;
      this.refs.message.value = '';
    }

    this.props.onUpdates(updates);
  },
  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="name" placeholder="Enter name"/>
        </div>
        <div>
          <textarea ref="message" placeholder="Enter message"></textarea>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
});

var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is the default message!'
    };
  },
  getInitialState: function () {
    return {
      name: this.props.name,
      message: this.props.message
    };
  },
  handleUpdates: function (updates) {
    this.setState(updates);
  },
  render: function () {
    var name = this.state.name;
    var message = this.state.message;

    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onUpdates={this.handleUpdates}/>
      </div>
    );
  }
});

var firstName = "Laércio";

ReactDOM.render(
  <Greeter name={firstName}/>,
  document.getElementById('app')
);
