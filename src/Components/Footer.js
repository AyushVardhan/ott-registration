import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <>
            <div id="section1" sticky="bottom" className="bg-dark" variant="dark" style={{paddingBottom: "50"}}>
                <Container style={{color: "white"}}>
                    <Row className="justify-content-center mb-1" style={{paddingTop: "5px"}}>
                        <p>Reach me out at : <a href="mailto:talkiesroll@gmail.com">talkiesroll@gmail.com</a></p> 
                    </Row>
                    <Row style={{paddingBottom: "2px"}}>
                        <Col>
                            Talkies-Roll <i class="fas fa-heart"></i>
                        </Col>
                        <Col className="text-right mb-1">
                            Hosted at <a href="https://www.heroku.com"> Heroku </a> <i class="fas fa-at"></i> {new Date().getFullYear()}
                        </Col>            
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Footer;