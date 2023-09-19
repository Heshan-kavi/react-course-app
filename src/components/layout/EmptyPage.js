import classes from './EmptyPage.module.css';

function EmptyPage (props){
    return (
        <div className={classes.spinner}>
            <span>Nothing to show. You have no content in this <b>{props.pageName}</b> page</span>
        </div>
    )
}

export default EmptyPage;