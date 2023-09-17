import MeetupList from "../components/meetups/MeetupList";

function Favourites (){

    return (
        <section>
        <h1>My Favourites meetings</h1>
        <MeetupList meetups={[{id:12, title:'testing', description:'testing description', address:'testing address', image:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Saint_Basil%27s_Cathedral_and_the_Red_Square.jpg/800px-Saint_Basil%27s_Cathedral_and_the_Red_Square.jpg'}]}/>
      </section>
    )
}

export default Favourites;