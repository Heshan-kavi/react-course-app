
import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
import LoadingScreen from "../components/layout/LoadingScreen";
import EmptyPage from "../components/layout/EmptyPage";

function AllMeetups (){

  const [isLoading, setIsloading] = useState(true);
  const [loadedData, setLoadedData] = useState([]);

  useEffect(() => {
    setIsloading(true);
    fetch('https://react-course-app-5b071-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json')
    .then((res) => res.json())
    .then((data) => {
      const meetups = [];

      for(const key in data){
        const meetupItem = {
          id: key,
          ...data[key]
        }
        meetups.push(meetupItem);
      }

      setIsloading(false);
      setLoadedData(meetups);
    })
    .catch((err) => console.log(err))
  }, [])

  if(isLoading){
    return (
        <LoadingScreen/>
    )
  }

  return (
      <section>
        <h1>All Meetings</h1>
        {loadedData.length === 0 ? <EmptyPage pageName={'All Meetings'}/> : <MeetupList meetups={loadedData}/>}
      </section>
  )
}

export default AllMeetups;