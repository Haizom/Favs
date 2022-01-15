import { Link } from "react-router-dom" //to prevent requests to the server

const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>Favs</h1>
        <div className="links">
          <Link to="/">All Favs</Link>
          <Link to="/create" style={{ 
            color: 'white', 
            backgroundColor: '#f1356d',
            borderRadius: '8px' 
          }}>New Fav</Link>
        </div>
      </nav>
    );
  }
   
  export default Navbar;