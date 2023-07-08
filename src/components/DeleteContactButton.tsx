import { useEffect } from "react";

interface DeleteButtonProps {
    id: string
}

const DeleteContactButton = ({id}: DeleteButtonProps) => {
    //TODO: get this DELETE request to work
    const handleDeleteButtonClick = async () => {
        
        try {
            const response = await fetch(`http://locoalhost:3000/contacts/${id}`, {method: "DELETE"});
            const result = await response.json();
            console.log("UrContact was successfully deleted", result);
        } catch (error) {
            console.log('Failure:', error);
        }
    
    }

    useEffect(() => {
        handleDeleteButtonClick()
    }, []);

    return (
        <button type="button">Delete Contact</button>
    )

}


export default DeleteContactButton;