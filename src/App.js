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
         });        
      }   
      grid.push(cols);   
    }


    this.state = {
      grid,
      apple : {
       row : 9 ,
       col : 9        
      }
    }
  }



  render() {
    const { grid,apple } = this.state;
    return (
      <div className = "App">
        {
         <section className = "grid">
            {
              grid.map((row, i) => {
               return row.map(cell => {
                 return <div key ={`${cell.row} ${cell.col}`}
                  className = {`cell
                 ${apple.row ===cell.row 
                 && apple.col === cell.col
                 ? 'apple' : ''}`}>
                </div>
              })
            })
          }
         </section>
        }
      </div>
    );
  }
}

export default App;