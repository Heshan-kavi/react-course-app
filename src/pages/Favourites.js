import { useSelector } from "react-redux";
import MeetupList from "../components/meetups/MeetupList";
import classes from './Favourites.module.css';

function Favourites (){

  const favouriteList = useSelector(state => state.favourite.favouriteList)

  function confirmFavourites(){
    console.log(favouriteList);
  }

    return (
        <section>
        <h1>My Favourites meetings</h1>
        <MeetupList meetups={favouriteList}/>
        <div className={classes.actions}>
        <button onClick={confirmFavourites}>Save Favourites</button>
        </div>
      </section>
    )
}

export default Favourites;