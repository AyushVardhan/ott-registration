import { Container, Row, Col } from "react-bootstrap";
import MediaCard from "./MediaCard";
import { useState, useEffect } from 'react';
import configData from "./config.json";
import Loader from "./Loader";
import NavBar from "./NavBar";
import About from "./About";
import ReactGA from "react-ga"; 
import Footer from './Footer';

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
                {props.dataRecvd ? props.mediaList.map((media,index) => <MediaCard key={index} mediaDetail={media}/>) : <Row className="justify-content-center mt-4"><h6>No data found. Please try after sometime</h6></Row>}
            </>
        )
    }
}

const GetFutureBody = (props) => {
    if (props.showFutureDataLoader) {
        return (
            <>
                <Loader/>
            </>
        )
    } else {
        return (
            <>
                {props.futureDataRecvd ? props.futureMediaList.map((media,index) => <MediaCard key={index} mediaDetail={media}/>) : <Row className="justify-content-center mt-4"><h6>No data found. Please try after sometime</h6></Row>}
            </>
        )
    }
}

function Home(props) {

    const [showLoader, setShowLoader] = useState(true);
    const [dataRecvd, setDataRecvd] = useState(true);
    const [mediaList, setMediaList] = useState([]);

    const [showFutureDataLoader, setShowFutureDataLoader] = useState(true);
    const [futureDataRecvd, setFutureDataRecvd] = useState(true);
    const [futureMediaList, setFutureMediaList] = useState([]);

    useEffect(() => {

        ReactGA.initialize('G-DRJP3ZQG2R');
        ReactGA.pageview(window.location.pathname);

        async function fetchPastReleaseData() {
            const url = configData.SERVER_URL+`/getMedia?durationInDays=7&futureFlag=false`;
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

        async function fetchFutureReleaseData() {
            const url = configData.SERVER_URL+`/getMedia?durationInDays=7&futureFlag=true`;
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
                    setFutureDataRecvd(false);
                    console.log("Data received from server is empty.");
                } else {
                    setFutureMediaList(data);
                    setFutureDataRecvd(true);
                }

                setShowFutureDataLoader(false);
            })
            .catch(error => {
                console.log(error);
                setFutureDataRecvd(false);
                setShowFutureDataLoader(false);
            });
        }

        fetchPastReleaseData();
        fetchFutureReleaseData()
    }, []);

    return (
        <>
            <NavBar/>
            <Container fluid='md'>
                <About/>
            </Container>

            <Container>
                <Row>
                    <Col md={6}>
                        <Row className="justify-content-center mr-1 ml-1"><h2>Latest Releases (past 7 days)</h2></Row>
                        <Container fluid='md' className="mb-3" style={{height: '100vh', overflowY: 'scroll'}}>
                            {<GetBody showLoader={showLoader} dataRecvd={dataRecvd} mediaList={mediaList} />}
                        </Container>
                    </Col>

                    <Col md={6}>
                        <Row className="justify-content-center mr-1 ml-1"><h2>Upcoming Releases</h2></Row>
                        <Container fluid='md' className="mb-3" style={{height: '100vh', overflowY: 'scroll'}}>
                            {<GetFutureBody showFutureDataLoader={showFutureDataLoader} futureDataRecvd={futureDataRecvd} futureMediaList={futureMediaList} />}
                        </Container>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    );
}

export default Home;