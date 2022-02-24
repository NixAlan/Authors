import { Link } from "@reach/router";

const Header = (props) => {
  const { link, linkText, title } = props;
  return (
    <header>
      <h1>Favorite authors</h1>
      <Link to={link}>{linkText}</Link>
      <p>{title}:</p>
    </header>
  );
};

export default Header;
