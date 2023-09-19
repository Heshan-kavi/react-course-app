import { useSelector } from "react-redux";
import EmptyPage from "../components/layout/EmptyPage";
import MeetupList from "../components/meetups/MeetupList";

function Favourites (){

  const favouriteList = useSelector(state => state.favourite.favouriteList)
  const numOfItemsInTheFavList = useSelector(state => state.favourite.numOfItemsInTheFavList)

    return (
        <section>
        <h1>My Favourites meetings</h1>
        <MeetupList meetups={favouriteList}/>
        {numOfItemsInTheFavList === 0 ? <EmptyPage pageName={'My Favourite meetings'}/> : <MeetupList meetups={favouriteList}/>}
      </section>
    )
}

export default Favourites;