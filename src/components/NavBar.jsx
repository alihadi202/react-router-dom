import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/"> Home </Link>
          <Link to="/mailboxes"> mail boxes </Link>
          <Link to="/new-mailbox"> new mail boxes </Link>

          
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;