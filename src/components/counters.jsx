import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        counters : [
            {id:1, value:1},
            {id:2, value:0},
            {id:3, value:0},
            {id:4, value:0}
        ]
      }
    render() { 
        return ( 
            <div>
                
              {this.state.counters.map(counter => (
                  <Counter onDelete={this.handleDelete} key={counter.id} counter={counter}  />
              ))}
            </div>
  
         );
    }
    handleDelete = (counter) => {
        const counters = this.state.counters.filter(c => c.id !== counter.id);
        this.setState({counters})
       
    }
}
 
export default Counters;