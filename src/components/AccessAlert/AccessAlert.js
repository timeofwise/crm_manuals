import classes from './AccessAlert.module.css';


const TEXT = {
    ko: {
        header:"열람 안내",
        msg1: "열람 권한이 없습니다. 'Token' 버튼을 눌러 토큰을 입력 후 진행해주세요.",
        msg2: "입력된 토큰으로 계속 진행되지 않는 경우, hg.bak@hanwha.com 으로 문의주세요.",
        
    },
    en: {
        header:"Viewer Guidence",
        msg1: "You do not have permission to view this page. Click the ‘Token’ button to enter the token and proceed.",
        msg2: "If you are unable to proceed with the entered token, please contact hg.bak@hanwha.com.",
        
    },
    zh: {
        header:"通知",
        msg1: "您没有查看权限。单击“Token”按钮输入令牌并继续。",
        msg2: "如果输入的令牌无法继续该过程，请联系 hg.bak@hanwha.com。",
        
    },
}

export default function AccessAlert({accessibleAgents, language}){

    console.log(accessibleAgents);

    const userText = TEXT[language];


    return <div class="theme-admonition theme-admonition-warning admonition_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-Layout-styles-module alert alert--warning">
        <div class="admonitionHeading_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-Layout-styles-module">
            <span>⛔ {userText.header}</span>
            <span className={classes.badgeDiv}>
                {
                    accessibleAgents.map((agent) => (
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
                }
            </span>
        </div>
        <div class="admonitionContent_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-Layout-styles-module">
            <ul>
                <li>{userText.msg1}</li>
                <li>{userText.msg2}</li>
            </ul>
        </div>
    </div>
}