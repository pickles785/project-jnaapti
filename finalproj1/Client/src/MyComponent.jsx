import React from "react";
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/collegeplayer")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <p>Following is the table corresponding to data from database--</p>
          <table border="1">
            <thead>
              <tr>
                <td>
                  <b>collegeID</b>
                </td>
                <td>
                  <b> playerID</b>
                </td>
                <td>
                  <b>year</b>
                </td>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.year + item.playerID + item.collegeID}>
                  <td> {item.playerID} </td>
                  <td> {item.collegeID}</td>
                  <td> {item.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default MyComponent;
