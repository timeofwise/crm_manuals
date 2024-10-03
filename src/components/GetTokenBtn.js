
export default function GetTokenBtn({inputToken, token, auth}){

    return <>
        <span style={{marginRight:'0.5em'}}>USER: {auth === '' ? 'UNKNOWN' : auth}</span>
        <button className="btn btn--secondary" onClick={inputToken}>Token</button>
    </>
};