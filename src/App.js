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
      apple : this.getRandomApple(),
      snake : {
        head : {
          row : 9,
          col : 9
        },
        velocity : {
          x : 1,                          //when game starts it goes to the right
          y : 0
        },
      }
    }
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.gameLoop()
    }, 1000);
  }

  getRandomApple = () => ({
    row : Math.floor(Math.random() * 20),
    col : Math.floor(Math.random() * 20),   
  })

 gameLoop = () => {
   this.setState(({snake}) => {
     const nextState = {
       snake : {
         ...snake,
         head : {
           row : snake.head.row + snake.velocity.y,
           col : snake.head.col + snake.velocity.x
         },
       },
     };
     return nextState;
   });
   setTimeout(() => {
    this.gameLoop()
  }, 1000)
 }
 
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

  
  setVelocity = (event) => {
    if (event.keyCode === 38) { // up
      this.setState(({snake}) => ({
        snake: {
          ...snake,
          velocity: {
            x: 0,
            y: -1,
          }
        }
      }))
    } else if (event.keyCode === 40) {// down 
      this.setState(({snake}) => ({
        snake: {
          ...snake,
          velocity: {
            x: 0,
            y: 1,
          }
        }
      }))
    } else if (event.keyCode === 39)  {//right
      this.setState(({snake}) => ({
        snake: {
          ...snake,
          velocity: {
            x: 1,
            y: 0,
          }
        }
      }))
    } else if (event.keyCode === 37)  { // left
      this.setState(({snake}) => ({
        snake: {
          ...snake,
          velocity: {
            x: -1,
            y: 0,
          }
        }
      }))
    }
  }


  render() {
    const { grid } = this.state;
    return (
      <div onKeyPress = {this.setVelocity } className = "App">
        {
         <section className = "grid">
            {
              grid.map((row, i) => {
               return row.map(cell => {
                 return <div key ={`${cell.row} ${cell.col}`}
                  className = {`cell
                    ${
                      this.isHead(cell)
                      ? 'head' : this.isApple(cell)
                      ? 'apple' : ''  }`}>
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