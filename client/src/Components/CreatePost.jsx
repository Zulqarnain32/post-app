import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const CreatePost = () => {
  const [title,setTitle] = useState("")
  const [postData,setPostData] = useState("")
  const [image,setImage] = useState("")
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/facebook/facebookPost", {title,postData,image})
     
      .then((result) => {
        console.log(result);
       if (result.data.message == "fill form") {
          setError("Please fill all the fields");
        } else {
          navigate('/');
        }
      })
      .catch((err) => console.log(err));
  };


  return (
    <>
    
      <div className="create-post-container">
        <form className="post-form" onSubmit={handleSubmit}>
            <h2 className="create-title">Create Post</h2>
            <p>Title</p>
        <input
          type="text"
          className="post-field"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
          <p>Add Text</p>
          <textarea  
            className="post-field"
            placeholder="Write here..."
            onChange={(e) => setPostData(e.target.value)}
            rows="10">
          </textarea>
          <p>Image</p>
          <input
          type="text"
          className="post-field"
          placeholder="image"
          onChange={(e) => setImage(e.target.value)}
        />
      
        <p className="error">{error}</p>
        <button type="submit" className="button btn">Create</button>
        </form>
      </div>
    </>
  );
};

export default CreatePost;
