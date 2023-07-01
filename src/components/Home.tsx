import {useEffect} from "react";
//TODO: How to store number of contacts in a way for this component to read it? UseState? 
//TODO: fix CORS policy error in fetch call




const Home = () => {
    const numberOfContacts = 0;

    const fetchCurrentNumberOfContacts = async () => {
        const response = await fetch('https://my-json-server.typicode.com/dyazdani/contact-list', {
            method: "GET",

        });
        const data = response.json();
        console.log(data)
        //TODO: figure out what part of data will yield number of contacts
    }

    useEffect(() => {
        fetchCurrentNumberOfContacts();
    }, [])

    return (
        <div>
            <h1>Welcome to UrContacts!</h1>
            <h2>Your list has {numberOfContacts} contacts</h2>
            <a>Go to UrContacts List</a>
        </div>
    )


}


export default Home;