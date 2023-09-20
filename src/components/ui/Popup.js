import classes from './Popup.module.css';

function Popup (props){

    let buttonArea = <></>; 

    if(props.typeOfThePopup === 0){
        buttonArea =  (<button className={classes.btn__alt} onClick={props.onCancleClick}>{props.buttonText1}</button>)
    }else if(props.typeOfThePopup === 1){
        buttonArea = (<>
            <button className={classes.btn__alt} onClick={props.onCancleClick}>{props.buttonText1}</button>
            <button className={classes.btn} onClick={props.onConfirmClick}>{props.buttonText2}</button>
        </>)
    }

    return (
        <>
            <div className={classes.backdrop} />
            <div className={classes.modal}>
                <h2 className={classes.h2}>{props.title}</h2>
                <p>{props.content}</p>
                {buttonArea}
            </div>
        </>
        
    )
}

export default Popup;