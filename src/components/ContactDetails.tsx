import { useParams, Link} from "react-router-dom";
import DeleteContactButton from "./DeleteContactButton";
/*
TYPES:
    name: string
    gender?: string
    birthday?: number
    email?: `${string}@${string}.${string}`
    phoneNumber?: number
    countryCode?: number
    street?: `${number} ${string}`
    unit?: string
    city?: string
    state?: string
    zip?: number
    country?: string

*/

const ContactDetails = () => {
    // const id = useParams();
    const id = "JRE22zo";


    return (
        <>
            {/* <h1>{name}</h1>
            <address>
                gender: {gender} <br />
                birthday: {(new Date(birthday)).toLocaleDateString()}<br />
                email: <a href="mailto:">{email}</a><br />
                phone: <a href={`tel:+${countryCode}${phoneNumber}`}>{formatPhoneNumber()}</a><br />
                address: <br />
                {street} <br />
                {unit} <br />
                {city}, {state} <br />
                {zip} <br />
                {country}
            </address> 
            <Link to="/contacts/:id/update">Update Contact</Link> */}
            <DeleteContactButton id={id}/>
        </>
    )


}


export default ContactDetails;