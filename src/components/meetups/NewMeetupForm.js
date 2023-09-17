import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css"
import { useRef } from "react";

function NewMeetupForm (props){

    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const descriptionInputRef = useRef();
    const addressInputRef = useRef();

    function submitHandler(event){
        event.preventDefault();
        const newMeetingDetails = {
            title : titleInputRef.current.value,
            image : imageInputRef.current.value,
            address : addressInputRef.current.value,
            description : descriptionInputRef.current.value,
            isFavourite: false
        }
        props.addMeetupClick(newMeetingDetails);
    }
    return (
        <div>
            <h2>Add your new meetup here</h2>
            <Card>
                <form className={classes.form} onSubmit={submitHandler}>
                    <div className={classes.control}>
                        <label htmlFor="title">Title</label>
                        <input id="title" type="text" ref={titleInputRef} required/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="image">Image</label>
                        <input id="image" type="url" ref={imageInputRef} required/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="address">Address</label>
                        <input id="address" type="text" ref={addressInputRef} required/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="description">Description</label>
                        <textarea id="description" required rows="5" ref={descriptionInputRef}/>
                    </div>
                    <div className={classes.actions}>
                        <button>Add meetup</button>
                    </div>
                </form>
            </Card>
        </div>
    )
}

export default NewMeetupForm;