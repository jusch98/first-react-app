
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/World News">World News</Link></li>
        <li><Link to="/Sport">Sport</Link></li>
        <li><Link to="/Finance">Finance</Link></li>
        <li><Link to="/Technology">Technology</Link></li>
        <li><Link to="/Entertainment">Entertainment</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
