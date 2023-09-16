import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetUp (){

    const navigate = useNavigate();

    function addNewMeetupHandler(newMeetingDetails){
        fetch('https://react-course-app-5b071-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json', {
            method: 'POST',
            body: JSON.stringify(newMeetingDetails),
            headers: {
                'Content-type': 'application/json;',
            },
        })
        .then(() => {navigate('/', {replace: true})})
        .catch((err) => console.log(err));
    }

    return (
        <NewMeetupForm addMeetupClick={addNewMeetupHandler}/>
    )
}

export default NewMeetUp;