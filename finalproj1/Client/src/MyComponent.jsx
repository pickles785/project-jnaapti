
import React from 'react';
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
          (result) => {
            this.setState({
              isLoaded: true,
              items: result
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <table>
            {items.map(item => (
              <tr key={item.year+item.playerID+item.collegeID}>
                <td> {item.playerID} </td>
                <td> {item.collegeID}</td>
                <td> {item.year}</td>
              </tr>


            ))}
          </table>
        );
      }

    }
  }

 export default MyComponent;