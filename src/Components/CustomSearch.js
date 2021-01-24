import Footer from "./Footer";
import NavBar from "./NavBar";
import {Container, Row} from "react-bootstrap";

const CustomSearch = () => {
    return(
        <>
            <NavBar/>
            <Container id="as" fluid='md' style={{height: '100vh'}}>
                <Row className="justify-content-center mt-1 mr-1 ml-1" style={{paddingTop: "70px"}}><h2>Custom Search</h2></Row> 
                <Row className="justify-content-center mt-5">
                    <p>
                    Work in progress..  <i class="fa fa-cog fa-spin fa-1x"></i>
                    </p>
                </Row>
            </Container>
            <Footer/>
        </>
    );
};

export default CustomSearch;