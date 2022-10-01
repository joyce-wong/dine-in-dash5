import React, {Component} from 'react';
import { fetchRestaurant, setRestaurant, updateRestaurant } from '../store/singleRestaurant';
import { connect } from 'react-redux';


class EditRestaurant extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            address: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

componentDidMount(){
    const {id} = this.props.match.params
    this.props.fetchRestaurant(id)
}

componentWillUnmount(){
    this.props.clearRestaurant()
}

componentDidUpdate(prevProps){
    if (prevProps.restaurant.id !== this.props.restaurant.id){
        this.setState({
            name: this.props.restaurant.name || '',
            address: this.props.restaurant.address || ''
        })
    }
}

handleChange(evt){
    this.setState({
        [evt.target.name]: evt.target.value
    })
}

handleSubmit(evt){
    evt.preventDefault()
    this.props.updateRestaurant({...this.props.restaurant, ...this.state})
}

render(){
    const {name, address} = this.state;
    const {handleSubmit, handleChange} = this;
    return (
        <div>
            <h3>Edit Entry</h3>
            <form id="edit-restaurant" onSubmit={handleSubmit}>
                <label htmlFor="name">Title:</label>
                <input name="name" onChange={handleChange} value={name} />

                <label htmlFor="address">Entry:</label>
                <input name="address" onChange={handleChange} value={address} />

                <button type="submit">Submit</button>
            </form>
        </div>
        )
    }
}

const mapStateToProps = ({restaurant}) => ({
    restaurant
})

const mapDispatchToProps = (dispatch, {history}) => ({
    updateRestaurant: (restaurant) => dispatch(updateRestaurant(restaurant, history)),
    fetchRestaurant: (id) => dispatch(fetchRestaurant(id, history)),
    clearRestaurant: () => dispatch(setRestaurant({}))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditRestaurant)