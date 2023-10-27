import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [post, setPost] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/auth/register", { title, image, post })
      .then((result) => {
        if (result.data.message == "user register successfully") {
          console.log(result);
          navigate("/");
        } else if (result.data.message == "please fil all fields") {
          setError("Please fill all the fields");
        } else if (result.data.message == "email already exist") {
          setError("Email already exist");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1>Write something here</h1>
    </>
  );
};

export default CreatePost;
