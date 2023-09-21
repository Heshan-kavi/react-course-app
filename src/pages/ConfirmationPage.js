import { useState } from "react";
import { useSelector } from "react-redux";
import classes from './ConfirmationPage.module.css';
import Popup from "../components/ui/Popup";

function ConfirmationPage(){

    const favouriteList = useSelector((state) => state.favourite.favouriteList);
    const [isConfirm, setIsConfirm] = useState(false);
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    

    function seeMoreClickHandler (event, meetup) {
        event.preventDefault();
        setDescription(meetup.description);
        setTitle('Description of ' + meetup.title);
        setIsConfirm(true);
    }

    function onCancleClickHandler () {
        setIsConfirm(false);
    }

    function onConfirmClickHandler () {
        setIsConfirm(false);
    }

    return (
        <>
        <section>
            <div>
            <h1>Confirmation for your favourite list</h1>
            <table className={classes.styled_table}>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Address</th>
                    <th>Description</th>
                    <th>image</th>
                </tr>
                </thead>
                <tbody>
                {favouriteList.map((val) => {
                    return (
                        <tr key={val.id}>
                            <td>{val.title}</td>
                            <td>{val.address}</td>
                            <td width="1000px" className={classes.td_customized} >{val.description.substring(0,150)} ... <button className={classes.button_customized} onClick={(event) => seeMoreClickHandler(event,val)}>see more</button></td>
                            <td><input type="image" src={val.image.toString()} alt="photo" width="300px"/></td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            {isConfirm && <Popup onCancleClick={onCancleClickHandler} onConfirmClick={onConfirmClickHandler} title={title}  content={description} typeOfThePopup={0}  buttonText1={'ok'} />}
            </div>
      </section>
      
      </>
    )
}

export default ConfirmationPage;