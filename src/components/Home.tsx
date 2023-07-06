import {useEffect, useState} from "react";
import { Link } from "react-router-dom";


const Home = () => {
    const [numberOfContacts, setNumberOfContacts] = useState(0);

    const fetchJsonData = async () => {
        const response = await fetch('http://localhost:3000/contacts');
        const data = await response.json();
        setNumberOfContacts(data.length);
    }

    useEffect(() => {
        fetchJsonData();
    }, [])

    return (
        <div>
            <h1>Welcome to UrContacts!</h1>
            <h2>Your list has {numberOfContacts} contacts</h2>
            <Link to="/contact-list">Go to UrContacts List</Link>
        </div>
    )


}


export default Home;