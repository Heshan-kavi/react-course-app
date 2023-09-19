import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import EmptyPage from "../components/layout/EmptyPage";
import MeetupList from "../components/meetups/MeetupList";
import classes from './Favourites.module.css';

function Favourites (){

  const favouriteList = useSelector(state => state.favourite.favouriteList)
  const navigate = useNavigate();
  const numOfItemsInTheFavList = useSelector(state => state.favourite.numOfItemsInTheFavList)

    return (
        <section>
        <h1>My Favourites meetings</h1>
        {numOfItemsInTheFavList === 0 ? 
        <EmptyPage pageName={'My Favourite meetings'}/> : 
        <>
          <MeetupList meetups={favouriteList}/>
          <div className={classes.actions}>
              {favouriteList.length > 0 && <button onClick={() => {navigate('/confirmationpage', {replace : true})}}>Save Favourites</button>}
          </div>
        </>}
      </section>
    )
}

export default Favourites;