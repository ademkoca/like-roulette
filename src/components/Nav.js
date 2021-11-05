import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom';
import "./Nav.css";
import Users from "../Users.json";


const Nav = ({ username }) => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Fifth navbar example">
            <div className="container-fluid">
                <a className="navbar-brand" href="/reacthooks">Like me!</a>
                <div className="loggedUserInfo">
                    <p className="float-end text-white pt-3 pe-4">{username}</p>
                    <img className="profileImg" src={Users.find(user => user.userId === "0").avatar} alt="" />
                </div>



            </div>
        </nav>

    )
}

export default Nav;
