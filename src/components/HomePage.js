import React from "react";

class HomePage extends React.Component {
  componentDidMount() {
    console.log("did mount");
  }

  componentWillUnmount() {
    console.log("unmount");
  }

  render() {
    console.log(this.props);
    return (
      <main>
        <p>Dummy text</p>
      </main>
    );
  }
}

export default HomePage;
