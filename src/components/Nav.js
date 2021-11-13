import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom';
import "./Nav.css";
import Users from "../Users.json";
import { me } from "../context"

const PF = process.env.REACT_APP_PUBLIC_FOLDER;
const Nav = ({ username }) => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Fifth navbar example">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Like me!</a>
                <div className="loggedUserInfo">
                    <Router>

                        <p className="float-end text-white pt-3 pe-4"><a href="/about">About</a></p>

                        <a href={`/profile/${me.username}`}>
                            <p className="float-end text-white pt-3 pe-4">{username}</p> </a>
                        <a href={`/profile/${me.username}`}><img className="profileImg" src={PF + Users.find(user => user.userId === "0").avatar} alt="" />
                        </a>
                    </Router>
                </div>



            </div>
        </nav>

    )
}

export default Nav;
