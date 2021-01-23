import { Container, Row } from "react-bootstrap";
import MediaCard from "./MediaCard";
import { useState, useEffect } from 'react';
import configData from "./config.json";

function Home(props) {

    const [dataRecvd, setDataRecvd] = useState(true);
    const [mediaList, setMediaList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const url = configData.SERVER_URL+`/getMedia?durationInDays=1`;
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
            })
            .catch(error => console.log(error));
        }
        fetchData();
      }, []);

    return (
        <>
            <Container fluid='md' className='mt-5'>
                <Row className="justify-content-center"><h1>Week's Entertainment List</h1></Row>
                {dataRecvd ? mediaList.map((media,index) => <MediaCard key={index} mediaDetail={media}/>) : <Row className="justify-content-center mt-4"><h6>No data found.</h6></Row>}
            </Container>
        </>
    );
}

export default Home;