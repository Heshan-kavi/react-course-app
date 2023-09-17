import { useDispatch, useSelector } from "react-redux";
import { addNewMeetupToTheList, removeMeetupToTheList } from "../store/reducers/FavouriteSlice";
import MeetupList from "../components/meetups/MeetupList";

function Favourites (){

    const count = useSelector((state) => state.favourite.favouriteList)
    const dispatch = useDispatch();

    return (
        <section>
        <h1>My Favourites meetings</h1>
        <h2>this is the counte : {count}</h2>
        <button onClick={() => {dispatch(addNewMeetupToTheList())}}>Add new meeting</button>
        <button onClick={() => {dispatch(removeMeetupToTheList())}}>Remove a meeting</button>
        {/* <MeetupList meetups={[{id:12, title:'testing', description:'testing description', address:'testing address', image:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Saint_Basil%27s_Cathedral_and_the_Red_Square.jpg/800px-Saint_Basil%27s_Cathedral_and_the_Red_Square.jpg'}]}/> */}
      </section>
    )
}

export default Favourites;