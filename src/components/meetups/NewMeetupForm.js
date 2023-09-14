import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css"

function NewMeetupForm (){
    return (
        <div>
            <h2>Add your new meetup here</h2>
            <Card>
                <form className={classes.form}>
                    <div className={classes.control}>
                        <label htmlFor="title">Title</label>
                        <input id="title" type="text" required/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="image">Image</label>
                        <input id="image" type="url" required/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="address">Address</label>
                        <input id="address" type="text" required/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="description">Description</label>
                        <textarea id="description" required rows="5"/>
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