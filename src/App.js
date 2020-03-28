import React from 'react';
import Widget_text from "./components/Widget-text/Widget_text"
import axios from "axios"
import { connect } from "react-redux"
import './App.css';

class App extends React.Component {

  state = {
    data: [],
    isLoaded: false
  }


  getData = () => {
    axios.get("http://localhost:3030/data")
      .then(result => { this.setState({ data: result.data, isLoaded: true }) })
  }

  dataToStore = () => {
    const action = { type: 'DATA_LOADED', value: this.state }
    this.props.dispatch(action)
  }

  componentDidMount() {
    this.getData()
  }


  render() {

    this.dataToStore()

    if (typeof this.state.data[0] != 'undefined') { console.log('STATE yolo', this.state.data[1].widgets[0]) }

    return (
      <>
        {!this.props.state.isLoaded ? (<div>Loading...</div>) :

          <div className="App">

            hello world
            {/* // <Car/> */}

            <Widget_text data={this.props.state}/>
            {console.log('state YEYE', this.props.state.data[1])}
          </div>
        }

      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  }
}

export default connect(mapStateToProps)(App);
