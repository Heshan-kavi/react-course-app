import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation (){

    return (
    <header className={classes.header}>
        <div className={classes.logo}>React Meetups</div>
        <ul>
            <li><Link to='/'> All Meetups </Link></li>
            <li><Link to='/favourites'> My Favourite Meetups </Link></li>
            <li><Link to='/newmeetup'> New Meetup </Link></li>
        </ul> 
    </header>
    )

}

export default MainNavigation;