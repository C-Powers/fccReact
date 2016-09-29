// http://codepen.io/cpowers/pen/GjEkrq

const Header = React.createClass({
  render () {
    return (
      <div className="jumbotron">
        <div className="container">
           <img className="fcclogo" src="https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg" alt="FreeCodeCamp logo" />
          <h1>Top Campers</h1>
          <p>...</p>
          <p><a
              className="btn btn-primary btn-lg"
              href="#"
              role="button">
             Learn more
           </a></p>
        </div>
      </div>
     )
  }
})

const ShowData = React.createClass({
  render () {
    return (
      <div className="show-data">
        <p> {this.props.username} </p>
      </div>
    )
  }
})

const Body = React.createClass({
  getInitialState() {
    return {
      campers: [],
      column: "recent"
    }
  },
  getData() {
    $.ajax({
      url: this.props.apiroot+"top/"+this.state.column,
      dataType: 'json',
      cache: false,
      success: function(data) {
        var users = data;
        this.setState({users: users});
        //console.log(data)
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.apiroot, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount() {
    this.getData();
  },
  render () {
    return (
      <div className="content">
        {JSON.stringify(this.state.users, null, 2)}
        {this.state.users
          .map((users) => (
            <ShowData {...users} key={users.username} />
        ))}
      </div>
    )
  }
})

const Display = React.createClass({
  render () {
    return (
      <div>
        <Header />
        <div className="container">
          <Body apiroot={this.props.apiroot} />
        </div>
      </div>
    )
  }
})

const App = React.createClass({
  render () {
    return (
      <Display apiroot="https://fcctop100.herokuapp.com/api/fccusers/"/>
    )
  }
})

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
