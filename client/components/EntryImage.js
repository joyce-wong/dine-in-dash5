import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {fetchImages} from "../store/image";
import ImageUploader from "./ImageUploader";

function EntryImage(){
    const dispatch = useDispatch();
    const images = useSelector(({image}) => image);

    useEffect(() => {
        dispatch(fetchImages())
    }, [])

    return (
        <div>
            <ImageUploader />
            <ul>
                {images.map(image => {
                    return(
                    <div key={image.id} align="center">
                        <p>{image.name}</p>
                        <img className="entry-images" src={image.data} />
                    </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default EntryImage;