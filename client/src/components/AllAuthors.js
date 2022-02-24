import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import Header from "./Header";

const AllAuthors = (props) => {
  const [authorsList, setAuthorsList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors")
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setAuthorsList(res.data);
        console.log(authorsList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (idFromBelow) => {
    axios
      .delete(`http://localhost:8000/api/authors/${idFromBelow}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setAuthorsList(
          authorsList.filter((author, index) => author._id !== idFromBelow)
        );
      })
      .catch();
  };

  const handlenavigate = (idFromBelow) => {
    navigate(`authors/edit/${idFromBelow}`);
  };

  return (
    <div>
      <Header
        link={"/authors/create"}
        linkText={"Add an author"}
        title={"We have Quotes by"}
      />

      <table>
        <thead>
          <tr>
            <th>Authors</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {authorsList.map((author) => {
            return (
              <tr key={author._id}>
                <td>{author.name}</td>
                <td>
                  <button onClick={() => handlenavigate(author._id)}>
                    Edit
                  </button>
                  <button onClick={() => handleDelete(author._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllAuthors;
