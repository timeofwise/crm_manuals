import BrowserOnly from "@docusaurus/BrowserOnly";
import AccessibleAgents from "../components/AccessibleAgents/AccessibleAgents";
import AccessAlert from "../components/AccessAlert/AccessAlert";

const passwords = {
    'init123!!':'head',
    'test':'branch',
    'seller_agent':'seller',
    'agent':'agent',
    'dealer':'dealer',
    'customer':'customer',
};

const MASTER_KEY = 'init123!!';


function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};





export default function ValidateTextByToken({dispTargetViewer=false, dispCaution=true, validTokenList, children}) {

    //const [token, setToken] = useState(getCookie('crmManualToken'));



    //const [auth, setAuth] = useState(passwords[token].toUpperCase());

    function inputToken(){
        let inputToken = prompt('토큰을 입력하세요');
    
        if (inputToken !== null){
            setCookie('crmManualToken', inputToken, 7);
            setCookie('crmManualUser', inputToken, 7);
            //setToken(inputToken);
            if (passwords[inputToken]){
                setCookie('crmManualUser', passwords[inputToken].toUpperCase(), 7);
                //setAuth(passwords[inputToken].toUpperCase());
            }else{
                //setAuth('UNKNOWN');
                setCookie('crmManualUser', 'UNKNOWN', 7);
            };

            window.location.reload();
        }
    };

    

    return <BrowserOnly>
        {
            () => {
                const token = getCookie('crmManualToken');
                const auth = getCookie('crmManualUser');
                //console.log('token');
                //console.log(token);

                let targetViewer = <></>;

                if (dispTargetViewer === true){

                
                    targetViewer = <AccessibleAgents 
                        handleInputToken={inputToken}
                        token={token}
                        auth={auth}

                        head={validTokenList.indexOf('head') !== -1} // 본사
                        branch={validTokenList.indexOf('branch') !== -1} // 법인
                        seller={validTokenList.indexOf('seller') !== -1} // 대리점이면서 자재거점
                        agent={validTokenList.indexOf('agent') !== -1} // 대리점
                        customer={validTokenList.indexOf('customer') !== -1} // 고객
                    />
                }

                if (token === MASTER_KEY){
                    return (
                        <>
                            {targetViewer}
                            {!dispTargetViewer && (
                                validTokenList.map((agent) => (
                                    <span style={{
                                        marginLeft: '0.5em',
                                        backgroundColor: 'rgb(230, 167, 0)',
                                        padding: '0.2em 0.4em',
                                        borderRadius:'0.3em',
                                        fontFamily:"Pretendard",
                                        color:'white',
                                        fontStyle:'normal!important',
                                        fontSize:'0.8em',
                                    }}>{agent.toUpperCase()}</span>
                                ))
                            )}
                            {children}
                        </>
                    );
                }else{
                    if(token && validTokenList.indexOf(passwords[token]) !== -1){
                        return (
                            <>
                                {targetViewer}
                                {!dispTargetViewer && (
                                    validTokenList.map((agent) => (
                                        <span style={{
                                            marginLeft: '0.5em',
                                            backgroundColor: 'rgb(230, 167, 0)',
                                            padding: '0.2em 0.4em',
                                            borderRadius:'0.3em',
                                            fontFamily:"Pretendard",
                                            color:'white',
                                            fontStyle:'normal!important',
                                            fontSize:'0.8em',
                                        }}>{agent.toUpperCase()}</span>
                                    ))
                                )}
                                {children}
                            </>
                        );
                    }else{
                        return <>
                            {targetViewer}
                            {dispCaution ? (<AccessAlert accessibleAgents={validTokenList} />) : (<></>)}
                            
                        </>
                    }
                }
            }
        }
    </BrowserOnly>
};