import { link, navigate } from "@reach/router";

const Form = (props) => {
  const { submitHandler, author, setAuthor, errors } = props;

  const onchangeHandler = (e) => {
    const newStateObject = { ...author };

    newStateObject[e.target.name] = e.target.value;

    setAuthor(newStateObject);
  };

  const cancelHandler = () => {
    navigate("/");
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={author.name}
          onChange={onchangeHandler}
        />
        {errors.name ? <p>{errors.name.message}</p> : null}
        <div>
          <button onClick={cancelHandler}>Cancel</button>
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
};

export default Form;
