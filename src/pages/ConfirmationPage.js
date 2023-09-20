import { useSelector } from "react-redux";
import classes from './ConfirmationPage.module.css';

function ConfirmationPage(){

    const favouriteList = useSelector((state) => state.favourite.favouriteList);

    function seeMoreClickHandler (event, description) {
        event.preventDefault();
        alert(description);
    }

    return (
        <section>
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
                            <td width="1000px" className={classes.td_customized} >{val.description.substring(0,150)} ... <button className={classes.button_customized} onClick={(event) => seeMoreClickHandler(event,val.description)}>see more</button></td>
                            <td><input type="image" img src = {val.image} alt="photo" width="300px"/></td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
      </section>
        
    )
}

export default ConfirmationPage;