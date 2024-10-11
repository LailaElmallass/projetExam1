import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
        className="navbar navbar-expand-sm navbar-light bg-light"
    >
        <div className="container">
            <Link className="navbar-brand" to="/">Home</Link>
            <button
                className="navbar-toggler d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId"
                aria-controls="collapsibleNavId"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                            <Link className="nav-link " to="/articles">Ajouter Article</Link>
                            <span className="visually-hidden">(current)</span>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/ibm">IBM Calculator</Link>
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>
    
    
  );
};

export default Navbar;
