import classes from './AccessAlert.module.css';

export default function AccessAlert({accessibleAgents}){

    console.log(accessibleAgents);


    return <div class="theme-admonition theme-admonition-warning admonition_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-Layout-styles-module alert alert--warning">
        <div class="admonitionHeading_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-Layout-styles-module">
            <span>⛔ 열람 안내</span>
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
                <li>열람 권한이 없습니다. 페이지 새로고침 버튼을 눌러 다시 진행해주세요.</li>
                <li>입력된 토큰으로 계속 진행되지 않는 경우, hg.bak@hanwha.com 으로 문의주세요.</li>
            </ul>
        </div>
    </div>
}