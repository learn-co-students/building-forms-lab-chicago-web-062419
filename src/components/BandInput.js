// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addBand(this.state);
        this.setState({
            name: ''
        })
    }
    render() {
        console.log(this.state)
        return (
            <div>
                Band Input
                <form onSubmit={this.handleSubmit}>
                    <label for='name'>Band Name:</label>
                    <input name='name' onChange={this.handleChange} value={this.state.name}></input>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default BandInput
