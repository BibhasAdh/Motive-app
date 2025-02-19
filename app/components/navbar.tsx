import { Search, Share2, User , Menu} from "lucide-react";
import "../style/Dashboard.css";

const Navbar: React.FC = () => {
  return (
    <div >
    <div className="navbar">
        <div className="logo">
        <img src="/images/logo.png" alt="logo" />
        </div>
        <button className="add-button">+</button>
        <div className="navbar-right">
  <div className="search-box">
    <Menu size={16} className="icon" /> {/* Left menu icon */}
    <input
      type="text"
      placeholder="Hinted search text"
      className="search-input"
    />
    <Search size={16} className="icon" /> {/* Right search icon */}
  </div>

          <Share2 size={20} className="icon share" />
          <User size={20} className="icon user" />
        </div>
      </div>

   </div>
  );
};

export default Navbar;


