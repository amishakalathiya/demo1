import React from 'react'
import { LinkContainer } from "react-router-bootstrap";
import custom from "./Custom.module.css";

export default function Admin() {
    

    return (
        <>
         <div className="wrapper">
                <div className="sidebar">
                    
                    <ul>
                        <LinkContainer to="/Dashboard">
                            <li><a href="#" className={`${custom.sideLink}`}><i className="fas fa-home" />Dashboard</a></li>
                        </LinkContainer>
                        <LinkContainer to="/About">
                            <li><a href="#" className={`${custom.sideLink}`}><i className="fas fa-home" />About Us</a></li>
                        </LinkContainer>
                        <LinkContainer to="/Contact">
                            <li><a href="#" className={`${custom.sideLink}`}><i class="fas fa-search"></i>Contact Us</a></li>
                        </LinkContainer>
                        <LinkContainer to="/Blog">
                            <li><a href="#" className={`${custom.sideLink}`}><i class="fas fa-blog"></i>Blog</a></li>
                        </LinkContainer>

                    </ul>
                    <div className="social_media">
                        <a href="#"><i className="fab fa-facebook-f" /></a>
                        <a href="#"><i className="fab fa-twitter" /></a>
                        <a href="#"><i className="fab fa-instagram" /></a>
                    </div>
                </div>

            </div>

            <nav className={`navbar navbar-expand-lg ${custom.bglight}`}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><b>ℑ𝔫𝔣𝔦𝔫𝔦𝔱𝔶</b></a>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <LinkContainer to="/Dashboard">
                                <li class="nav-item">
                                    <a className={` nav-link active ${custom.navLink}`} aria-current="page" href="#" >Dashboard</a>
                                </li>
                            </LinkContainer>
                            <LinkContainer to="">
                                <li class="nav-item">
                                    <a className={` nav-link active ${custom.navLink}`} aria-current="page" href="#">About</a>
                                </li>
                            </LinkContainer>
                            <LinkContainer to="/product">
                                <li class="nav-item">
                                    <a className={` nav-link active ${custom.navLink}`} aria-current="page" href="#">Card</a>
                                </li>
                            </LinkContainer>


                            <LinkContainer to="/product1">
                                <li class="nav-item">
                                    <a className={` nav-link active ${custom.navLink}`} aria-current="page" href="#">Product</a>
                                </li>
                            </LinkContainer>
                            <LinkContainer to="/Contact">
                                <li class="nav-item">
                                    <a className={` nav-link active ${custom.navLink}`} aria-current="page" href="#">Contact Us</a>
                                </li>
                            </LinkContainer> */}


                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
           
        </>
    )
}
