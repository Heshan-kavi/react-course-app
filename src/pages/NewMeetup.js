import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetUp (){

    function addNewMeetupHandler(newMeetingDetails){
        console.log("this is the main part man")
    }

    return (
        <NewMeetupForm addMeetupClick={addNewMeetupHandler}/>
    )
}

export default NewMeetUp;