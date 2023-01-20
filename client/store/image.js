import axios from "axios"

const initialState = [];

const FETCH_IMAGES = "FETCH_IMAGES";
const CREATE_IMAGE = "CREATE_IMAGE";

export const _fetchImages = images => ({
    type: FETCH_IMAGES,
    images
});

export const _createImage = newImage => ({
    type: FETCH_IMAGES,
    images
})

export const fetchImages = () => {
    return async dispatch => {
        try{
            const {data: images} = await axios.get('/api/images');
            dispatch(_fetchImages(images));
        } catch (error){
            console.log(error);
        }
    }
}

export const uploadImage = newImage => {
    return async dispatch => {
        try {
            const {data: createdImage} = await axios.post("/api/images", newImage);
            dispatch(_createImage(createdImage));
        } catch (error) {
            console.log(error);
        }
    }
}

const imageReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_IMAGES:
            return action.images;
        case CREATE_IMAGE:
            return [...state, action.newImage];
        default:
            return state;
    }
};

export default imageReducer;