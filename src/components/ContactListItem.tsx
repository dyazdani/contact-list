import { Link } from "react-router-dom";

//TODO: link this component to ContactDetails.tsx page with details corresponding to name prop

const ContactListItem = ({name}) => {

    return (
        <li>
            <Link to="/contacts/:id">{name}</Link>
        </li>
    )

}


export default ContactListItem;