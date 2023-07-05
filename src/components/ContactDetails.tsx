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

    return (
        <>
            <h1>{name}</h1>
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
        </>
    )


}


export default ContactDetails;