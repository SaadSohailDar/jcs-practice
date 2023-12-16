
import { NavbarCollapse, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Logo from "../assets/logo.png";
import "./Header.scss";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from "react";
import { headerItems }  from "../routing/headerItems";
import About from "../routing/about";
import Contact from "../routing/contact";
import Services from "../routing/services";
import Home from "../routing/home";
import { Link, NavLink } from 'react-router-dom';

export function Header(){
    return(
        <>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
            <Navbar.Brand href="#">Navbar</Navbar.Brand>
                <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                    <Nav className="ms-auto">
                        {headerItems.map((item,index)=>{
                            return(
                                <Link to={item.url} className={item.cName} key={index}>
                                    {item.title}
                                </Link>
                            );
                        })}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
}