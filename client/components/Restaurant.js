import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { fetchRestaurant, unregisterUser } from '../store/singleRestaurant';
import EditRestaurant from './EditRestaurant';

class Restaurant extends Component{
    componentDidMount(){
        try {
            const id = this.props.match.params.id
            this.props.fetchRestaurant(id)
        } catch (error) {
            console.error(error)
        }
    }

    render(){
        const singleRestaurant = this.props.restaurant
        // const name = this.props.restaurant.name
        // const address = this.props.restaurant.address
        // const description = this.props.restaurant.description
        // const imageUrl = this.props.restaurant.imageUrl
        const users = singleRestaurant.users || []
        // console.log(this.props.restaurant)

        return (
            <div className="restaurant" >
                <EditRestaurant match={this.props.match} />
                <h1>{singleRestaurant.name}</h1>
                <p>{singleRestaurant.address}</p>
                {/* <p>{singleRestaurant.description}</p> */}
                <img className="image" src={singleRestaurant.imageUrl} />
                {/* <h2>Users</h2>
                <div className="user">
                    {users.length ? users.map(user => (
                        <div key={user.id} >
                            <h3>
                            <Link to={`/users/${user.id}`}>{user.username}</Link>
                            </h3>
                            <form id="unregister-user" onSubmit={(ev) => ev.preventDefault()}>
                            <button type="submit" onClick={() => this.props.unregisterUser(user, restaurant)}>Unregister</button>
                            </form>
                        </div>
                    )) : <p>There are no users dining here.</p>}
                </div> */}
            </div>
        )
    }
}

const mapStateToProps = ({restaurant}) => ({
    restaurant
});

const mapDispatchToProps = (dispatch) => ({
// fetchUser: (id) => dispatch(fetchUser(id)),
// unregisterUser: (user, restaurant) => dispatch(unregisterUser(user, restaurant)),
fetchRestaurant: (id) => dispatch(fetchRestaurant(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);