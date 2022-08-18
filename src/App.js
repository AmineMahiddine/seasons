import React from "react";

// const App = () => {

// window.navigator.geolocation.getCurrentPosition(
//   (position) => console.log(`my position ${position.coords.longitude}`),
//   // (err)=> console.log(err)
// );

//   return (
//     <div className="App">
//     </div>
//   );
// };


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = { lat: null, errorMessage: '' };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude })
      },
      (err) => {
        this.setState({ errorMessage: err.message })
      }
    );
  }


  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <h1>ErrorMessage: {this.state.errorMessage}</h1>
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <h1>Lattitude: {this.state.lat}</h1>
    }
    return (
      <div>
        Loading...
      </div>
    )
  }
}

export default App;