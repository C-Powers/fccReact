
const Header = React.createClass({
  render () {
    return (
      <div>Hey</div>
     )
  }
})

const App = React.createClass({
  render () {
    return (
      <Header />
    )
  }
})

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
