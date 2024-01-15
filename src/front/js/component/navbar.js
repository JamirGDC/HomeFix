import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';
import { useNavigate } from "react-router-dom";

const Navbar = () =>{
	const { actions } = useContext(Context);
	const navigate = useNavigate();

	const logout = () => {
		actions.clearToken();
		navigate('/login');
	}

    return(<>
    
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<button className="btn btn-primary" onClick={logout}>Logout</button>
				</div>
			</div>
		</nav>
    
    </>)
}

export default Navbar