import { Container } from "react-bootstrap";
import MediaCard from "./MediaCard";
import { useState, useEffect } from 'react';
import configData from "./config.json";

function Home(props) {

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
            .then(data => setMediaList(data))
            .catch(error => console.log(error));
        }
        fetchData();
      }, []);

    return (
        <>
            <Container fluid='md' className='mt-5'>
                {mediaList.map((media,index) => <MediaCard key={index} mediaDetail={media}/>)}
            </Container>
        </>
    );
}

export default Home;