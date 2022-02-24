import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Form from "../components/Form";
import { navigate } from "@reach/router";

const CreateAuthor = (props) => {
  const [author, setAuthor] = useState({
    name: "",
  });
  const [errors, setErrors] = useState({});

  const NewAuthorName = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/authors", author)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        console.log("err.response", err.response);
        setErrors(err.response.data.error.errors);
      });
  };

  return (
    <div>
      <Header link={"/"} linkText={"Return Home"} title={"Add a New Author:"} />
      <Form
        author={author}
        setAuthor={setAuthor}
        submitHandler={NewAuthorName}
        errors={errors}
      />
    </div>
  );
};

export default CreateAuthor;
