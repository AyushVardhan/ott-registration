import Footer from "./Footer";
import NavBar from "./NavBar";
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import configData from "./config.json";
import { useState, useEffect } from 'react';
import ReactGA from "react-ga"; 
import Loader from "./Loader";
import MediaCard from "./MediaCard";

const GetBody = (props) => {
    if (props.showLoader) {
        return (
            <>
                <Loader/>
            </>
        )
    } else {
        return (
            <>
                {props.dataRecvd ? props.mediaList.map((media,index) => <MediaCard key={index} mediaDetail={media}/>) : <Row className="justify-content-center mt-4"><h6> No data found! </h6></Row>}
            </>
        )
    }
}

const CustomSearch = () => {

    let requiredEndDate = new Date();
    requiredEndDate.setDate(requiredEndDate.getDate() - configData.CUSTOM_SEARCH_DAYS);
    requiredEndDate = requiredEndDate.toJSON().slice(0, 10);
    console.log("Required end date in custom search : " + requiredEndDate);

    let requiredMinDate = new Date();
    requiredMinDate.setDate(requiredMinDate.getDate() - configData.MAX_SEARCH_DAYS);
    requiredMinDate = requiredMinDate.toJSON().slice(0, 10);
    console.log("Required min date in custom search : " + requiredMinDate);

    const [selectedPlatform, setSelectedPlatform] = useState("All");
    const [selectedLanguage, setSelectedLanguage] = useState("All");
    const [selectedGenre, setSelectedGenre] = useState("All");
    const [selectedEndDate, setSelectedEndDate] = useState(requiredEndDate);
    const [hasError, setHasError] = useState([]);

    const [showLoader, setShowLoader] = useState(false);
    const [dataRecvd, setDataRecvd] = useState(true);
    const [mediaList, setMediaList] = useState([]);

    console.log("hasError : "+ hasError.includes("end-date"));

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

        var parsedDate = Date.parse(selectedEndDate);
        if (!(isNaN(selectedEndDate) && !isNaN(parsedDate))) {
            setHasError(["end-date"]);
            return false;
        }

        if (selectedEndDate < requiredMinDate) {
            setHasError(["end-date"]);
            return false;
        }

        if (selectedEndDate >= new Date().toJSON().slice(0, 10)){
            setHasError(["end-date"]);
            return false;
        }

        setHasError([]);
        console.log("Search triggered with data :: { Platform : " + selectedPlatform + ", Language : " + selectedLanguage + ", Genre : " + selectedGenre + 
        ", EndDate : " + selectedEndDate + "}");

        setShowLoader(true);
        setMediaList([]);

        async function getSearchResults() {
            const url = configData.SERVER_URL+`/getResults?requestedPlatform=`+selectedPlatform+`&requestedLanguage=`+selectedLanguage+`&requestedGenre=`+selectedGenre+`&requestedEndDate=`+selectedEndDate;
            console.log("Making call to : " + url);
            await fetch(
                url , {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(res => res.json())
            .then(data => {
                if (Object.keys(data).length === 0) {
                    setDataRecvd(false);
                    console.log("Data received from server is empty.");
                } else {
                    setMediaList(data);
                    setDataRecvd(true);
                }

                setShowLoader(false);
            })
            .catch(error => {
                console.log(error);
                setDataRecvd(false);
                setShowLoader(false);
            });
        }

        getSearchResults();
    };

    useEffect(() => {
        ReactGA.initialize('G-DRJP3ZQG2R');
        ReactGA.pageview(window.location.pathname);
    });

    return(
        <>
            <NavBar/>
            <Container id="as" fluid='md'>
                <Row className="justify-content-center mt-1 mr-1 ml-1" style={{paddingTop: "70px"}}><h2>Custom Search</h2></Row> 
                <Row className="justify-content-center" style={{fontSize: '12px'}}><p>Allowed search period is last two months from today.</p></Row>
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
                                    <input type="date" value={selectedEndDate} min={requiredMinDate} onChange={onChange} placeholder="yyyy-mm-dd"></input>
                                    <div className={hasError.includes("end-date") ? "text-danger" : "invisible"}>Incorrect date. Please try again!</div>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row className="justify-content-center mt-3 mb-1">
                            <Button variant="success" onClick={getResults}>Go</Button>
                        </Row>
                    </Col>        
                </Row>

                <Row className="justify-content-center">
                    <Container fluid='md' className="mb-3" style={{height: '100vh', overflowY: 'scroll'}}>
                            {<GetBody showLoader={showLoader} dataRecvd={dataRecvd} mediaList={mediaList} />}
                    </Container>
                </Row>
            </Container>
            <Footer/>
        </>
    );
};

export default CustomSearch;