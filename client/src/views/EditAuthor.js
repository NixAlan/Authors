import React, { useState, useEffect } from "react";
import { navigate } from "@reach/router";
import axios from "axios";
import Header from "../components/Header";
import Form from "../components/Form";

const EditAuthor = (props) => {
  const [author, setAuthor] = useState({});
  const [errors, setErrors] = useState({});
  const { id } = props;

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/authors/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setAuthor(res.data);
      })
      .catch();
  }, []);

  const updatedAuthor = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:8000/api/authors/${id}`, author)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        console.log("err.response", err.response);
        console.log("err.response.data", err.response.data);
        console.log("err.response.data.error", err.response.data.error);
        console.log(err.response.data.error.errors.name.message);
        setErrors(err.response.data.error.errors);
      });
  };

  return (
    <div>
      <Header
        link={"/"}
        linkText={"Return to Home"}
        title={"Edit the Author"}
      />
      <Form
        author={author}
        setAuthor={setAuthor}
        submitHandler={updatedAuthor}
        errors={errors}
      />
    </div>
  );
};

export default EditAuthor;
