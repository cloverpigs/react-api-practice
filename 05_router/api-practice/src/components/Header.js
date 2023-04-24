import { Link } from 'react-router-dom';


function Header() {

    return (
        <header className="header">
            <h1>Welcom to Greedy BoxOffice</h1>
            <nav className="nav">
            <Link to="/"><span>Home</span></Link>
            <Link to="/movie"><span>List</span></Link>     
            </nav>
        </header>
    );
}

export default Header;