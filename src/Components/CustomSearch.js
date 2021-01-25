import Footer from "./Footer";
import NavBar from "./NavBar";
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import configData from "./config.json";
import { useState } from 'react';

const CustomSearch = () => {

    const [selectedPlatform, setSelectedPlatform] = useState("All");
    const [selectedLanguage, setSelectedLanguage] = useState("All");
    const [selectedGenre, setSelectedGenre] = useState("All");
    const [selectedEndDate, setSelectedEndDate] = useState(getRequiredDate());


    const handlePlatformSelect = function(selectedItem) {
        console.log("Selected Platform : " + selectedItem[0].value);
        setSelectedPlatform(selectedItem[0].value);
    }

    const handleLanguageSelect = function(selectedItem) {
        console.log("Selected Language : " + selectedItem[0].value);
        setSelectedLanguage(selectedItem[0].value);
    }

    const handleGenreSelect = function(selectedItem) {
        console.log("Selected Genre : " + selectedItem[0].value);
        setSelectedGenre(selectedItem[0].value);
    }

    const onChange = (e) => {
        e.persist();  
        console.log("Selected End Date : " + e.target.value);
        setSelectedEndDate(e.target.value);  
    }

    const getResults = (e) => {  
        e.preventDefault();
        console.log(" Platform : " + selectedPlatform + ", Language : " + selectedLanguage + ", Genre : " + selectedGenre + 
        ", EndDate : " + selectedEndDate);
    };

    return(
        <>
            <NavBar/>
            <Container id="as" fluid='md' style={{height: '100vh'}}>
                <Row className="justify-content-center mt-1 mr-1 ml-1" style={{paddingTop: "70px"}}><h2>Custom Search</h2></Row> 
                <Row className="justify-content-center mt-5">
                    <Col md={9}>
                        <Row className="justify-content-center">
                            <Col>
                                <Form.Group controlId="customSearchPlatform">
                                    <Form.Label>Select Platform </Form.Label>
                                    <Form.Control as="select" value={selectedPlatform} onChange={(e)=> {handlePlatformSelect(e.target.selectedOptions)}}>
                                        <option key="All">All</option>
                                        {configData.platformsAvailable.map(platform => <option key={platform}>{platform}</option>)}
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="customSearchLanguage">
                                    <Form.Label>Select Language </Form.Label>
                                    <Form.Control as="select" value={selectedLanguage} onChange={(e)=> {handleLanguageSelect(e.target.selectedOptions)}}>
                                        <option key="All">All</option>
                                        {configData.languageAvailable.map(language => <option key={language}>{language}</option>)}
                                    </Form.Control>                                    
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="customSearchGenre">
                                    <Form.Label>Select Genre </Form.Label>
                                    <Form.Control as="select" value={selectedGenre} onChange={(e)=> {handleGenreSelect(e.target.selectedOptions)}}>
                                        <option key="All">All</option>
                                        {configData.genresAvailable.map(genre => <option key={genre}>{genre}</option>)}
                                    </Form.Control>   
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="customSearchEndDate">
                                    <Form.Label>Search upto date </Form.Label>
                                    <input type="date" value={selectedEndDate} onChange={onChange}></input>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row className="justify-content-center mt-3">
                            <Button variant="success" onClick={getResults}>Go</Button>
                        </Row>
                    </Col>        
                </Row>

                <Row className="justify-content-center mt-5">
                    <p>
                    Work in progress..  <i className="fa fa-cog fa-spin fa-1x"></i>
                    </p>
                </Row>
            </Container>
            <Footer/>
        </>
    );
};

function getRequiredDate() {
    let requiredEndDate = new Date();
    requiredEndDate.setDate(requiredEndDate.getDate() - configData.CUSTOM_SEARCH_DAYS);
    requiredEndDate = requiredEndDate.toJSON().slice(0, 10);
    console.log("Required end date in custom search : " + requiredEndDate);
    return requiredEndDate;
}

export default CustomSearch;