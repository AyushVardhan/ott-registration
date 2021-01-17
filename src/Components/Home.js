import { Container } from "react-bootstrap";
import MediaCard from "./MediaCard";
import { useState, useEffect } from 'react';

function Home(props) {

    const [mediaList, setMediaList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            await fetch(
                `http://localhost:8080/getMedia?durationInDays=7`, {
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