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
      direction : 'RIGHT',
      apple : {
       row : Math.floor(Math.random() * 20),
       col : Math.floor(Math.random() * 20)       
      },
      snake : {
        head : {
          row : 9,
          col : 9
        }
      },
  };
  }
  componentDidMount()  {
    document.onkeydown = this.onKeyDown;
  }

  onKeyDown = (e) => {
    e = e || window.event;
    switch(e.keyCode) {
      case 38:
        this.setState({direction : 'UP'});
        break;
      case 40:
       this.setState({direction : 'DOWN'});
       break;
      case 37:
       this.setState({direction : 'LEFT'});
       break;
      case 39:
       this.setState({direction : 'RIGHT'}); 
       break;
    }
  };
  
   
  isApple = (cell) => {
    const{apple} = this.state;
  return   apple.row ===cell.row 
    && apple.col === cell.col
  }

  isHead = (cell) => {
    const{snake} = this.state;
  return  snake.head.row ===cell.row 
    && snake.head.col === cell.col
  }



  render() {
    const { grid } = this.state;
    return (
      <div className = "App">
        {
         <section className = "grid">
            {
              grid.map((row, i) => {
               return row.map(cell => {
                 return <div key ={`${cell.row} ${cell.col}`}
                  className = {`cell
                    ${
                      this.isApple(cell)
                      ? 'apple' : this.isHead(cell)
                      ? 'head' : ''  }`}>
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