import React from "react";
import { Row, Col, Container, } from 'react-bootstrap';
import '../css/Footer.css';
import facebook from "../Images/facebook.svg";
import instagram from "../Images/instagram.svg";

function Footer() 
{
    return(

        <>
            <footer>
                <Container className="text-center big">
                    <div className="row">
                        <div className="col-sm text-center">
                            <ul className="list">
                                <li className="listel"><a href="/Home" className="link ">Home</a></li>
                                <li className="listel"><a href="/Products" className="link">Products</a></li>
                                <li className="listel"><a href="/About" className="link">About</a></li>
                            </ul>  
                        </div>
                        <div className="col-sm">
                            <div className="center">column 2</div>
                             
                        </div>
                        <div className="col-sm text-center">
                            <div className="center"> 
                                <div className="black">Follow us on social media</div>
                            <div className="images">
                                <a href="/facebook" className="icon"><img src={facebook}  width="40" height="40"/></a>
                                <a href="/insta" className="icon"><img src={instagram}  width="40" height="40"/></a>
                            </div>
                            </div>
                        </div>
                    </div>
                </Container>
                <Container>
                    <Row>
                        <Col className="text-center py-3">
                           copyright &copy;2023 bububeckys sauces 
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>

    );
}

export default Footer;