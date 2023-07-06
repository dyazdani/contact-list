
const fetchContacts = async () => {
    const response = await fetch('https://localhost:3000');
    const contact = await response.json();
    return contact;
}

export default fetchContacts;