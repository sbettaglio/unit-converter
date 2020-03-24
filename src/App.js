import React, { Component } from 'react'

class App extends Component {
  state = {
    feet: 0,
    inches: 0,
  }

  inchTracker = (e) => {
    this.setState({
      inches: e.target.value,
      feet: e.target.value / 12,
    })
  }

  render() {
    return (
      <>
        <h1>Unit Converter</h1>
        <form>
          <p>
            {this.state.inches} is {this.state.feet} feet
          </p>
          <label>How many inches?</label>
          <input type="number" onChange={this.inchTracker}></input>
        </form>
      </>
    )
  }
}

export default App
