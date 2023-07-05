const CreateContactForm = () => {

    return (
        <form>
            <input placeholder="First Name" type="text" />
            <input placeholder="Last Name" type="text" />
            <label htmlFor="gender-select">Gender:</label>
            <select name="gender" id="gender-select">
                <option value="">--Please choose an option--</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="non-binary">Non-Binary</option>
                <option value="other">Other</option>
                <option value="prefer-to-not-say">Prefer to not say</option>
            </select>
            <input name="birthday" type="date" />
            <input type="email" />
            <input type="tel" 
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                placeholder="ex: 444-444-4444" />
            <input type="number" placeholder="country code"/>
            <div id="address">
                <p>Address:</p>
                <input type="text" placeholder="Street"/>
                <input type="text" placeholder="Unit"/>
                <input type="text" placeholder="City"/>
                <input type="text" placeholder="State"/>
                <input type="text" placeholder="ZIP Code"/>
                <input type="text" placeholder="Country"/>
            </div>
            <button>Submit</button>
        </form>
    )


}


export default CreateContactForm;