import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation (){

    const numOfItemsInTheFavList = useSelector(state => state.favourite.numOfItemsInTheFavList);
    const badge = numOfItemsInTheFavList > 0 ? <span className={classes.badge}>{numOfItemsInTheFavList}</span> : <></>;

    return (
    <header className={classes.header}>
        <div className={classes.logo}>React Meetups</div>
        <ul>
            <li><Link to='/'> All Meetups </Link></li>
            <li><Link to='/newmeetup'> New Meetup </Link></li>
            <li><Link to='/favourites'> My Favourite Meetups {badge} </Link></li>
        </ul> 
    </header>
    )

}

export default MainNavigation;