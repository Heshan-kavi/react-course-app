import classes from './LoadingScreen.module.css';

function LoadingScreen(){

    return (
        
        <div className={classes.spinner}>
            <span>Loading...</span>
            <div className={classes.half_spinner}></div>
          </div>
      );
}

export default LoadingScreen;