import { useEffect } from "react";

interface DeleteButtonProps {
    id: string
}

const DeleteContactButton = ({id}: DeleteButtonProps) => {
    //TODO: get this DELETE request to work
    const handleDeleteButtonClick = async () => {
        console.log('Contacting server...')
        try {
            const response = await fetch(`http://locoalhost:3000/contacts/${id}`, {method: "DELETE"});
            const result = await response.json();
            console.log("UrContact was successfully deleted", result);
        } catch (error) {
            console.log('Failure:', error);
        }
    
    }

    return (
        <button type="button" onClick={handleDeleteButtonClick}>Delete Contact</button>
    )

}


export default DeleteContactButton;