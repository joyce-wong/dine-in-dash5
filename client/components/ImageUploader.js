import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {uploadImage} from "../store/image";

function ImageUploader(){
    const dispatch = useDispatch();
    const [image, setImage] = useState({
        name: "",
        data: ""
    });


const handleSubmit = async e => {
    e.preventDefault();
    try {
        dispatch(uploadImage(image));
        setImage({
            name: "",
            data: ""
        });
    } catch (ex){
        console.log(ex);
    }
};

const onChange = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener("load", () => {
        setImage({
            data: reader.result,
            name: file.name
        });
    });
};

return (
    <div className="imageUploader">
        <h2>Upload Image</h2>
        {image.name && <img src={image.data} width="100" height="100" />}
        <hr></hr>
        <form onSubmit={handleSubmit}>
            <p>
                <input type="file" onChange={onChange} />
                <button>Upload Image</button>
            </p>
        </form>
        <img src={image.data} />
    </div>
)
}

export default ImageUploader