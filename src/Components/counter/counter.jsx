import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Counter.css'

class Counter extends Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.reset = this.reset.bind(this)
    }
    render() {
        return (
            <div>
                <CounterButton incrementMethod={this.increment} decrementMethod={this.decrement} />
                <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <span>{this.state.counter}</span>
                <div>
                    <button onClick={this.reset}>reset</button>
                </div>
            </div>
        );
    }
    reset(){
        this.setState(
            (prevState)=>{
                return {counter: 0}
            })
    }
    increment(by) {
        this.setState((prevState) => {
        return {counter: prevState.counter + by}
        });
    }
    decrement(by) {
        this.setState((prevState) => {
        return {counter: prevState.counter - by}
        });
    }
}

class CounterButton extends Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }
    render() {
        return (
            <div className="Counter">
                <div>
                    <button onClick={this.increment}>+{this.props.by}</button>
                    <button onClick={this.decrement}>-{this.props.by}</button>
                </div>

            </div>
        );
    }
    increment() {
        this.props.incrementMethod(this.props.by);
    }
    decrement() {
        this.props.decrementMethod(this.props.by);
    }
}

CounterButton.defaultProps = { by: 1 }
CounterButton.propsTypes = { by: PropTypes.number }
export default Counter;
