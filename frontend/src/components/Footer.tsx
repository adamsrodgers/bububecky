import React from "react";
import { Row, Col, Container } from 'react-bootstrap';
import '../css/Footer.css';
import facebook from "../Images/facebook.svg";
import instagram from "../Images/instagram.svg";

function Footer() 
{
    return(

        <>
            <footer>
                <Container className="text-center">
                    <div className="row">
                        <div className="col-sm">
                            <ul className="list">
                                <li className="listel"><a href="/Home" className="link">Home</a></li>
                                <li className="listel"><a href="/Products" className="link">Products</a></li>
                                <li className="listel"><a href="/About" className="link">About</a></li>
                            </ul>  
                        </div>
                        <div className="col-sm">
                            column 2
                        </div>
                        <div className="col-sm">
                            <div> Follow us on social media</div>
                            <div className="images">
                                <img src={facebook} className="icon"/>
                                <img src={instagram} className="icon"/>
                            </div>
                            
                        </div>
                    </div>
                </Container>
                <Container>
                    <Row>
                        <Col className="text-center ">
                            copyright &copy; bububeckys sauces
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>

    );
}

export default Footer;