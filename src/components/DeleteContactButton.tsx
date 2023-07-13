interface DeleteButtonProps {
    id: string
}

const DeleteContactButton = ({id}: DeleteButtonProps) => {
    const handleDeleteButtonClick = async () => {
        console.log('Contacting server...')
        try {
            const response = await fetch(`http://localhost:3000/contacts/${id}`, {method: "DELETE"});
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