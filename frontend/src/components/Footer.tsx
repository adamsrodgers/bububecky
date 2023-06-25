import React from "react";
import { Row, Col, Container } from 'react-bootstrap';
import '../css/Footer.css';


function Footer() 
{
    return(

        <>
            <footer>
                <Container className="text-center">
                    <div className="row">
                        <div className="col-sm">
                            <ul className="list">
                                <li><a href="/Home">Home</a></li>
                                <li><a href="/Products">Products</a></li>
                                <li><a href="/About">About</a></li>
                            </ul>  
                        </div>
                        <div className="col-sm">
                            column 2
                        </div>
                        <div className="col-sm">
                            column 3
                        </div>
                    </div>
                </Container>
                <Container>
                    <Row>
                        <Col className="text-center">
                            copyright &copy; bububeckys sauces
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>

    );
}

export default Footer;