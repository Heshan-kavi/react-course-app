import { useSelector } from "react-redux";
import MeetupList from "../components/meetups/MeetupList";

function Favourites (){

  const favouriteList = useSelector(state => state.favourite.favouriteList)

    return (
        <section>
        <h1>My Favourites meetings</h1>
        <MeetupList meetups={favouriteList}/>
      </section>
    )
}

export default Favourites;