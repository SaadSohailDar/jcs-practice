import React from "react";
import "./footer.scss";
import { Container, Row, Col } from "react-bootstrap";
import Home from "./routing/home";
import { Link } from "react-router-dom";

export default function Footer()
{
    return(
    <>
        <div className="Footer-Bg">
        <Container>
            <Row>
                <Col><a href="/" className="footer-Heading">Home Page Rendering</a></Col>
            </Row>
            
            <Row>
                <Col sm={3}>
                    <h2>Contact Details</h2>
                    <p>03229220777</p>
                    <a className="FooterLink" href="mailto:saad8398@gmail.com"></a>
                </Col>
                <Col sm={3}>
                    <h2>Useful Links</h2>
                    <Link className="footer-links" to="/disability">Disability Services</Link>
                    <Link className="footer-links" to="/privacy">Privacy Policy</Link>
                </Col>
                <Col sm={6}>
                <h2>RECONCILIATION STATEMENT</h2>
                <p>In the spirit of Reconciliation, Just Care Services acknowledges Aboriginal and Torres Strait Islander peoples as the Traditional Owners and Custodians of this country, and acknowledges their connection to land, water and community. We pay our respect to them, their cultures and customs, and to Elders past, present and emerging.</p>
                </Col>
            </Row>
        </Container>
        </div>
    </>
    );
}