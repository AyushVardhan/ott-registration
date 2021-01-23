import { Container, Row } from "react-bootstrap";
import MediaCard from "./MediaCard";
import { useState, useEffect } from 'react';
import configData from "./config.json";
import Loader from "./Loader";
import NavBar from "./NavBar";
import About from "./About";

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

function Home(props) {

    const [showLoader, setShowLoader] = useState(true);
    const [dataRecvd, setDataRecvd] = useState(true);
    const [mediaList, setMediaList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const url = configData.SERVER_URL+`/getMedia?durationInDays=7`;
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
        fetchData();
      }, []);

    return (
        <>
            <NavBar/>
            <Container fluid='md' style={{marginTop: "5%"}} className='mb-5'>
                <About/>
                <Row className="justify-content-center"><h2>Latest Releases (past 7 days)</h2></Row>
                {<GetBody showLoader={showLoader} dataRecvd={dataRecvd} mediaList={mediaList} />}
            </Container>
        </>
    );
}

export default Home;