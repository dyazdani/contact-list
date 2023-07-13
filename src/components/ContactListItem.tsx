import { Link } from "react-router-dom";

const ContactListItem = ({name, id}: {name: string, id: string}) => {

    return (
        <Link to={`/contacts/${id}`}>{name}</Link>
    )

}


export default ContactListItem;