import { Link } from "@reach/router";

const Header = (props) => {
  const { link, linkText, title } = props;
  return (
    <header>
      <div className="headerrow">
        <h1>Favorite authors</h1>
        <Link to={link}>{linkText}</Link>
        <p>{title}:</p>.
      </div>
    </header>
  );
};

export default Header;
