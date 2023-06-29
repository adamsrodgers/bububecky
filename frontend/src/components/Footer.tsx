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
                        <div className="col-sm">
                            <ul className="list">
                                <li className="listel"><p className="hov"><a href="/Home" className="link ">Home</a></p></li>
                                <li className="listel"><p><a href="/Products" className="link">Products</a></p></li>
                                <li className="listel"><p><a href="/About" className="link">About</a></p></li>
                            </ul>  
                        </div>
                        <div className="col-sm">
                            <p className="center">column 2</p>
                             
                        </div>
                        <div className="col-sm">
                            <div> 
                                <p className="down">Follow us on social media</p>
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
                           <p>copyright &copy;2023 bububeckys sauces</p> 
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>

    );
}

export default Footer;