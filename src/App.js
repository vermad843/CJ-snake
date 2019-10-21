import React, { Component } from 'react';
import './App.css';

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

    console.log(grid);

    this.state = {
      grid,
    }
  }

  render() {
    const { grid } = this.state;
    return (
      <div className = "App">
        {
         <section className = "grid">
            {
              grid.map((row, i) => (
               row.map(cell => (
                 <div key = {`${cell.row} ${cell.col}`} className = {`cell`}>

                </div>
               ))
              ))
            }
         </section>
        }
      </div>
    );
  }
}

export default App;