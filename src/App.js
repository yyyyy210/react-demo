import React, { Component } from 'react';
class App extends Component {
  constructor () {
    super()
    this.state = {
      date: 'fsdfojsdpfjsjpo'
    }

    this.timer = ''
  }

  // componentWillMount () {
  //   this.timer = setInterval(() => {
  //     this.setState({ date: new Date() })
  //   }, 1000)
  // }

  render() {
    return (
      <div>
        {this.state.date}
      </div>
    );
  }
}

export default App;


// import wrapWithAjaxData from './wrapWithAjaxData'

// class App extends Component {

//   render () {

//     function aa(){

//     }

//     return <input value={this.props.data} onChange={aa} />
//   }
// }

// App = wrapWithAjaxData(App, 'username')
// export default App