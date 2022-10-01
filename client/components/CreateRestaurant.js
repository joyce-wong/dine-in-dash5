import React, {Component} from 'react';
import { createRestaurant } from '../store/restaurants';
import { connect } from 'react-redux';

class CreateRestaurant extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            address: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit(evt){
        evt.preventDefault()
        this.props.createRestaurant({...this.state})
    }

    render() {
        const {name, address} = this.state
        const {handleSubmit, handleChange } = this

        return (
        <div>
            <form id="restaurant-form" onSubmit={handleSubmit}>
                <h3>Create Restaurant</h3>
                <div>
                <label htmlFor="name">Name:</label>
                <input name="name" onChange={handleChange} value={name} />

                <label htmlFor="address">Address:</label>
                <input name="address" onChange={handleChange} value={address} />

                <button type="submit">Submit</button>
                </div>
            </form>
        </div>
        )
    }
}

const mapDispatchToProps = (dispatch, {history}) => ({
    createRestaurant: (restaurant) => dispatch(createRestaurant(restaurant, history))
})

export default connect(null, mapDispatchToProps)(CreateRestaurant)
