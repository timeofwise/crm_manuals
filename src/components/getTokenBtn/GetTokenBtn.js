import classes from './GetTokenBtn.module.css';


export default function GetTokenBtn({inputToken, token, auth}){

    return <>
        <span style={{marginRight:'0.5em'}}>USER: {auth === '' ? 'UNKNOWN' : auth}</span>
        <button className={classes.btn} onClick={inputToken}>Token</button>
    </>
};