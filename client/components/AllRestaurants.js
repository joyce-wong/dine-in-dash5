import React from "react";
import { connect} from "react-redux";
import { fetchRestaurants, deleteRestaurant } from "../store/restaurants";
import { Link } from 'react-router-dom';
import CreateRestaurant from "./CreateRestaurant";
import { Button } from "@material-ui/core";
import ImageUploader from "./ImageUploader";
import EntryImage from "./EntryImage";

// Notice that we're exporting the AllCampuses component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllRestaurants extends React.Component {

  componentDidMount(){
    this.props.fetchRestaurants();
  }

  render() {
    return (
      <main>
      <div className="restaurants">
        <h1>Journal Entries</h1>
          <CreateRestaurant 
          //style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',}}
          />
          {/* <EntryImage/> */}
          {this.props.restaurants.map(restaurant => (
            <div className="restaurant" key={restaurant.id} >
              <h2 style={{textAlign: 'center'}}>
                <Link to={`/restaurants/${restaurant.id}`}>{restaurant.name}</Link>
              </h2>
              {/* <p>{restaurant.description}</p> */}
              <p>{restaurant.address}</p>
              <img className="image" src={restaurant.imageUrl} />
              <form onSubmit={(ev) => ev.preventDefault()}>
              <div className="remove">

              {/* <button
              type="submit"
              className="remove"
              onClick={() => this.props.deleteRestaurant(restaurant.id)}
              >
                Delete
              </button> */}
              <Button type="submit" variant="contained" color="primary" onClick={() => this.props.deleteRestaurant(restaurant.id)}>
  Delete
</Button>
              </div>
                
              </form>
            </div>
          ))}
      </div>
      </main>
    )
  }
}

const mapState = ({restaurants}) => {
  return {
    restaurants
  };
};

const mapDispatch = (dispatch, {history}) => {
  return {
    fetchRestaurants: () => dispatch(fetchRestaurants()),
    deleteRestaurant: (restaurant) => dispatch(deleteRestaurant(restaurant, history))
  };
};

export default connect(mapState, mapDispatch)(AllRestaurants);