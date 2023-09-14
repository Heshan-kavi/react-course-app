import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

function MeetupList (props){
    return (
        <ul className={classes.list}>
            {props.meetups.map((meetupItem) => {
                return <MeetupItem 
                key={meetupItem.id}
                id={meetupItem.id}
                image={meetupItem.image}
                title={meetupItem.title}
                description={meetupItem.description}
                />
            })}
        </ul>
    )
}

export default MeetupList;