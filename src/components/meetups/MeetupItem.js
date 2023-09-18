import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeMeetup, isItemFavouriteItem, addNewMeetup } from '../../store/reducers/FavouriteSlice';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';


function MeetupItem (props){

    const dispatch = useDispatch();
    const [statusOfTheButton, setStatusOfTheButton] = useState(false);

    function toggleTheStatus(meetup){
        console.log(isItemFavouriteItem(meetup.id));
        if(isItemFavouriteItem(meetup.id)){
            console.log("comes to the addnew part")
            setStatusOfTheButton(true);
            dispatch(addNewMeetup({
                id: meetup.id,
                title: meetup.title,
                description: meetup.description,
                image: meetup.image
            }))
        }else{
            console.log("comes to the existing part")
            setStatusOfTheButton(false);
            dispatch(removeMeetup(meetup.id));
        }
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title}></img>
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={() => {
                        toggleTheStatus(props)
                    }}>{statusOfTheButton ? 'Remove from the favourite list' : 'Add to the favourite list'}</button>
                </div>
            </Card>
        </li>
    )
}

export default MeetupItem;