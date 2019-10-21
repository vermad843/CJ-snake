import React, { Component } from 'react';


class App extends Component {
  constructor()  {
    super();
    const grid = [];

    for (let row = 0; row < 20; row++) {
      let cols = [];
      for (let col = 0; col < 20; col++) {
         cols.push({
           row,
           col
         })        
      }   
      grid.push(cols);   
    }

    this.state = {
      grid
    }

  }
  render() {
    return (
      <div className = "App">
         <section className = "grid">
           {

           }
         </section>
      </div>
    );
  }
}

export default App;