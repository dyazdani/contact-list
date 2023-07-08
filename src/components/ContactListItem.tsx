import { Link } from "react-router-dom";

//TODO: link this component to ContactDetails.tsx page with details corresponding to name prop

interface ContactListItemProps {
    name: string
    id: string
}
//TODO: Fix error that says that unique keys are needed
const ContactListItem = ({name, id}: ContactListItemProps) => {

    return (
        <li key={id}>
            <Link to={`/contacts/${id}`}>{name}</Link>
        </li>
    )

}


export default ContactListItem;