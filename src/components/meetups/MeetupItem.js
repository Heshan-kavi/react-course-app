import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeMeetup, addNewMeetup } from '../../store/reducers/FavouriteSlice';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';


function MeetupItem (props){

    const dispatch = useDispatch();
    const isThisItemAFavourite = useSelector((state) => state.favourite.favouriteList.some((meetup) => meetup.id === props.id))
    const [isAFavourite, setisAFavourite] = useState(isThisItemAFavourite);
    const toggleButton = isAFavourite ? <button onClick={() => {removeFromFavourites(props)}}>Remove from the favourite list</button> : <button onClick={() => {addToFavourites(props)}}>Add to favourite list</button>

    function removeFromFavourites(meetup){
        dispatch(removeMeetup(meetup));
        setisAFavourite(false);
    }

    function addToFavourites(meetup){
        dispatch(addNewMeetup({
            id: meetup.id,
            title: meetup.title,
            description: meetup.description,
            address: meetup.address,
            image: meetup.image,
            isAFavourite: true
        }))
        setisAFavourite(true);
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
                    {toggleButton}
                </div>
            </Card>
        </li>
    )
}

export default MeetupItem;