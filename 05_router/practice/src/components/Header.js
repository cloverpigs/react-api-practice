import { Link } from "react-router-dom";

function Footer() {

    return(
        <header className="header">    
            <h1>Wecome Museum Of Relics</h1>
            <nav className="nav">
            <Link to="/"><span>Home</span></Link>
            <Link to="/relicsList"><span>List</span></Link>     
            </nav>
        </header>
    );
}

export default Footer;