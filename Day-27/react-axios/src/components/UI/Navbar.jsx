import { Link } from "react-router-dom"

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
            <img src="https://static.wikia.nocookie.net/terraria_gamepedia/images/9/93/King_Slime.gif" width="30" height="30" className="d-inline-block align-top" alt="" />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link text-dark" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-dark" to="/users">User list</Link>
                </li>
            </ul>
        </div>
    </nav>
)

export default Navbar