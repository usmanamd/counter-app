import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.counter.value
      }
    render() { 
        return (
            <div>                
                <span className={this.getbadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleClick} className="btn btn-success m-2">Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter)} className="btn btn-danger m-2">Delete</button>
            </div>
          );
    }

    handleClick = () => {
        this.setState({value: this.state.value +1})
    }
    getbadgeClasses(){
        let badgeClasses = 'badge badge-';
       return badgeClasses +=  this.state.value === 0 ? 'warning' : 'primary';
    }
    formatCount(){
        const {value: count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;