import { Link } from "react-router-dom";
import AllMeetups from "../pages/AllMeetups";
import Favourites from "../pages/Favourites";
import NewMeetUp from "../pages/NewMeetup";

function MainNavigation (){
    return (
        <div>
            <ul>
                <li><Link to='/'> All Meetups </Link></li>
                <li><Link to='/favourites'> My Favourite Meetups </Link></li>
                <li><Link to='/newmeetup'> New Meetup </Link></li>
            </ul> 
        </div>
    )

}

export default MainNavigation;